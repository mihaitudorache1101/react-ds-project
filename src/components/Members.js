import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getMembers } from "../api/api";

function Members() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const members = await getMembers();
      setItems(members);
    };
    fetchItems();
  }, []);

  return (
    <div className='container'>
      <div className='mt-3'>
        <h3>Members</h3>
        <table className='table table-striped mt-3'>
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Member Bio</th>
              <th>Member Age</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((member) => (
              <tr key={member._id}>
                <td>{member.name}</td>
                <td>{member.bio}</td>
                <td>{member.age}</td>
                <td>
                  <Link to={`/edit/${member._id}`}>
                    <button type='button' className='btn btn-primary'>
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={async () => {
                      if (
                        window.confirm("Do you want to delete this member?")
                      ) {
                        await axios.delete(
                          `http://localhost:4000/${member._id}`
                        );
                        const members = await getMembers();
                        setItems(members);
                        getMembers();
                      }
                    }}
                    type='button'
                    className='btn btn-danger'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Members;
