import React, { useState } from "react";
import useUsers from "./hook/useUsers";
import "../CSS/userStyle.css";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { GrView } from "react-icons/gr";
import Pagination from "./Pagination";

export default function Users() {
  const { users, handleDelete } = useUsers();

  const navigate = useNavigate();
  const handleView = (user) => {
    navigate(`/user-details/${user.id}`);
  };

  const handleEditSend = (user) => {
    navigate(`/edit-user/${user.id}`);
  };

  // Filter data based on search term
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  // Calculate the current page users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredData.slice(indexOfFirstUser, indexOfLastUser);
  // const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-100">
      {/* <h2>User List</h2> */}
      <div className="mb-5">
        <Link className="btn btn-success" to="/add-user">
          Create New User
        </Link>
      </div>

      <div className="d-flex">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="userSearch"
        />
        <input
          type="text"
          placeholder="Search by email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="userSearch"
        />
        <input
          type="text"
          placeholder="Search by phone"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="userSearch"
        />
      </div>

      {/* <form onSubmit={isEditing ? handleUpdate : handleCreate}>
        <div className="d-flex justify-content-between p-5 pt-0">
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
      </form> */}

      <table className="table bg-none">
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
          {currentUsers.map((user, index) => (
            <tr key={user.id}>
              <td className="align-middle">{index + 1}</td>
              <td className="align-middle">{user.name}</td>
              <td className="align-middle">{user.email}</td>
              <td className="align-middle">{user.phone}</td>
              <td className="align-middle">
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleView(user)}
                >
                  <GrView />
                </button>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => handleEditSend(user)}
                >
                  <MdModeEditOutline />
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id, user.name)}
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredData.length > 5 ? (
        <div>
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      ) : null}
    </div>
  );
}
