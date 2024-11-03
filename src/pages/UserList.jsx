import React from "react";
import Users from "../components/Users";
import { cardHeader as Header } from "../components/Card";

export default function UserList() {
  return (
    <main className="flex-grow-1 p-4" id="main-content">
      <div className="pt-5 mt-5">
        <h1>
          <Header textH="All Users" />
        </h1>
        <p className="lead">
        Access a comprehensive list of users with options to update roles, manage permissions, or deactivate accounts. Quickly search, filter, and sort users to streamline user management.
        </p>
        <hr />
        <main className="container mt-2 p-0">
          <div className="row justify-content-evenly m-0 mt-4 w-100">
            <Users />
          </div>
        </main>
      </div>
    </main>
  );
}
