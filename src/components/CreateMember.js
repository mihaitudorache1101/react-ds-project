import React from "react";
import MemberForm from "./MemberForm";
import { createMember } from "../api/api";
import { useHistory } from "react-router-dom";

function CreateMember() {
  const history = useHistory();
  const onSubmit = async (data) => {
    await createMember(data);
    history.push("/");
  };

  return (
    <div className='container'>
      <div className='mt-3'>
        <h3>Create Member</h3>
        <MemberForm onSubmit={onSubmit} buttonText={"Create Member"} />
      </div>
    </div>
  );
}

export default CreateMember;
