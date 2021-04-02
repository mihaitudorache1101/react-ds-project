export const getMembers = () =>
  fetch("http://localhost:4000/").then((res) => res.json());

export const createMember = (member) =>
  fetch("http://localhost:4000/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  });

export const updateMember = (member, id) =>
  fetch(`http://localhost:4000/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  });

export const getMember = (id) =>
  fetch(`http://localhost:4000/${id}`).then((res) => res.json());

// export const deleteMember = (member, id) => {
//   fetch(`http://localhost:4000/${id}`, {
//     method: "DELETE",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(member),
//   });
// };
