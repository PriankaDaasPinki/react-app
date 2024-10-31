import React from "react";
import useUsers from "./hook/useUsers";

export default function Users() {
  const {
    users,
    userForm,
    isEditing,
    handleChange,
    handleCreate,
    handleEdit,
    handleUpdate,
    handleDelete,
  } = useUsers();
  return (
    <div className="pt-5">
      <h1>User List</h1>
      <form onSubmit={isEditing ? handleUpdate : handleCreate}>
        <div className="d-flex justify-content-between p-5">
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={userForm.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userForm.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={userForm.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="btn btn-success" type="submit">
              {isEditing ? "Update" : "Create"}
            </button>
          </div>
        </div>
      </form>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">SL</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td className="d-flex justify-content-evenly">
                <button className="btn btn-warning" onClick={() => handleEdit(user)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// {users.map((user) => (
//     <>
//       <li key={user.id}>
//         <span>
//           {user.name} - {user.email} - {user.phone}
//         </span>
//         <button onClick={() => handleEdit(user)}>Edit</button>
//         <button onClick={() => handleDelete(user.id)}>Delete</button>
//       </li>
//     </>
//   ))}
