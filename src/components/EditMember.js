import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import MemberForm from "./MemberForm";
import { getMember, updateMember } from "../api/api";
import { useHistory } from "react-router-dom";

function EditMember() {
  const match = useRouteMatch();
  const [member, setMember] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchMember = async () => {
      const member = await getMember(match.params.id);
      setMember(member);
    };
    fetchMember();
  }, []);

  const onSubmit = async (data) => {
    await updateMember(data, match.params.id);
    history.push("/");
  };

  return member ? (
    <div className='container'>
      <div className='mt-3'>
        <h3>Edit Member</h3>
        <MemberForm
          member={member}
          onSubmit={onSubmit}
          buttonText={"Update Member"}
        />
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
}

export default EditMember;
