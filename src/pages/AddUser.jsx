import React from "react";
import useUsers from "../components/hook/useUsers";
import { cardHeader as Header } from "../components/Card";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const AddUser = () => {
  const { userForm, handleChange, isEditing, handleCreate, handleUpdate } =
    useUsers();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    await handleCreate(e);
    navigate("/users"); // Redirect to the users list page
  };

  return (
    <main className="flex-grow-1 p-4 pb-0" id="main-content">
      <div className="pt-5 mt-5">
        <h1>
          <Header textH="Add A New User" />
        </h1>
        <p className="lead">
          Access a comprehensive list of users with options to update roles,
          manage permissions, or deactivate accounts. Quickly search, filter,
          and sort users to streamline user management.
        </p>
        <hr />
        <main className="container mt-2 p-0">
          <div className="row justify-content-evenly m-0 mt-4 w-50">
            <Form onSubmit={isEditing ? handleUpdate : onSubmit}>
              <Form.Group className="mb-4 text-start" controlId="userName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="User Name"
                  value={userForm.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-4 text-start" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={userForm.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-5 text-start" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={userForm.phone}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button type="submit" className="btn btn-primary m-0">
                {isEditing ? "Update" : "Create"}
              </Button>
            </Form>

            {/* <div className="p-5 pt-0">
              <div className="input-group d-flex flex-column align-items-center pb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={userForm.name}
                  onChange={handleChange}
                  className="w-50"
                />
              </div>
              <div className="input-group d-flex flex-column align-items-center pb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userForm.email}
                  onChange={handleChange}
                  className="w-50"
                />
              </div>
              <div className="input-group d-flex flex-column align-items-center pb-3">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={userForm.phone}
                  onChange={handleChange}
                  className="w-50"
                />
              </div>
              <div>
                <button className="btn btn-success" type="submit">
                  {isEditing ? "Update" : "Create"}
                </button>
              </div>
            </div> */}
          </div>
        </main>
      </div>
    </main>
  );
};

export default AddUser;
