import React from "react";
import { useForm } from "react-hook-form";

function MemberForm({ member, onSubmit, buttonText }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: member ? member.name : "",
      bio: member ? member.bio : "",
      age: member ? member.age : "",
    },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <form onSubmit={submitHandler}>
      <div className='form-group'>
        <label htmlFor='name'>Member Name</label>
        <input
          className='form-control'
          ref={register}
          type='name'
          name='name'
          id='name'
        />
        <label htmlFor='bio'>Member Bio</label>
        <input
          className='form-control'
          ref={register}
          type='bio'
          name='bio'
          id='bio'
        />
        <label htmlFor='age'>Member Age</label>
        <input
          className='form-control'
          ref={register}
          type='age'
          name='age'
          id='age'
        />
      </div>
      <div className='form-group'>
        <button type='submit' className='btn btn-primary'>
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default MemberForm;
