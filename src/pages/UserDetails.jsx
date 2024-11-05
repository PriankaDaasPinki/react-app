import React, { useEffect, useState } from "react";
import { cardHeader as Header } from "../components/Card";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaRegListAlt } from "react-icons/fa";
import { showLoadingAlert } from "../components/common_components/Loader";

export default function UserDetails() {
  const { id } = useParams(); // Get the `id` parameter from the URL
  const [getUser, setGetUser] = useState(null);
  // Fetch user details using the `name` parameter
  useEffect(() => {
    const fetchUserDetails = async () => {
      showLoadingAlert();
      try {
        // Assuming you have an endpoint to fetch user details by name
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users?id=${id}`
        );
        setGetUser(response.data[0]); // Set the user data (assuming response is an array)
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [id]);

  // Display a loading state while fetching data
  if (!getUser) return <p>Loading user details...</p>;
  return (
    <main className="flex-grow-1 p-4" id="main-content">
      <div className="pt-5 mt-5">
        <h1>
          <Header textH="User Profile Overview" />
        </h1>
        <p className="lead">
          Here you can find detailed information about the user, including
          contact details, address, and other relevant data. This section is
          designed to give you a comprehensive view of the user's profile to aid
          in understanding and managing user-specific information effectively.
        </p>
        <hr />
        <main className="container mt-2 p-0">
          <div className="d-flex align-self-end">
            <Link className="btn btn-primary" to="/users">
            <FaRegListAlt />
              {/* Users */}
            </Link>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className="d-flex flex-column align-items-center justify-content-center mb-3 mt-4">
              <p className="m-0 pe-3 p-0">Profile of</p>
              <h2 className="m-0"> {getUser.name}</h2>
            </div>
          </div>
          <div className="row justify-content-evenly m-0 mt-4 w-50 border p-5 rounded bg-light">
            <div className="row d-flex align-items-center justify-content-center pb-3">
              <div className="col-md-5 d-flex align-items-center justify-content-between">
                <strong>ID</strong>
                <strong>:</strong>
              </div>
              <div className="col-md-7 d-flex align-items-center">
                {getUser.id}
              </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center pb-3">
              <div className="col-md-5 d-flex align-items-center justify-content-between">
                <strong>User Name</strong>
                <strong>:</strong>
              </div>
              <div className="col-md-7 d-flex align-items-center">
                {getUser.username}
              </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center pb-3">
              <div className="col-md-5 d-flex align-items-center justify-content-between">
                <strong>Name</strong>
                <strong>:</strong>
              </div>
              <div className="col-md-7 d-flex align-items-center">
                {getUser.name}
              </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center pb-3">
              <div className="col-md-5 d-flex align-items-center justify-content-between">
                <strong>Email</strong>
                <strong>:</strong>
              </div>
              <div className="col-md-7 d-flex align-items-center">
                {getUser.email}
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-md-5 d-flex justify-content-between">
                <strong>Address</strong>
                <strong>:</strong>
              </div>
              <div className="col-md-7 pe-0 m-0">
                <p className="m-0 text-start">
                  {getUser.address.street}, {getUser.address.suite},<br />
                  {getUser.address.city}, {getUser.address.zipcode}
                </p>
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-md-5 d-flex justify-content-between">
                <strong>GEO Location</strong>
                <strong>:</strong>
              </div>
              <div className="col-md-7">
                <p className="m-0 text-start">
                  LAT : &nbsp; {getUser.address.geo.lat}
                </p>
                <p className="m-0 text-start">LNG : &nbsp; {getUser.address.geo.lng}</p>
              </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center pb-3">
              <div className="col-md-5 d-flex align-items-center justify-content-between">
                <strong>Phone</strong>
                <strong>:</strong>
              </div>
              <div className="col-md-7 d-flex align-items-left">
                {getUser.phone}
              </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center pb-3">
              <div className="col-md-5 d-flex align-items-center justify-content-between">
                <strong>Website</strong>
                <strong>:</strong>
              </div>
              <div className="col-md-7 d-flex align-items-left">
                {getUser.website}
              </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center pb-3">
              <div className="col-md-5 d-flex align-items-center justify-content-between">
                <strong>Company Name</strong>
                <strong>:</strong>
              </div>
              <div className="col-md-7 d-flex align-items-left">
                {getUser.company.name}
              </div>
            </div>
            <div className="row d-flex justify-content-center pb-3">
              <div className="col-md-5 d-flex justify-content-between">
                <strong>Company Phrase</strong>
                <strong>:</strong>
              </div>
              <div className="col-md-7">
                <p className="text-start m-0">{getUser.company.catchPhrase}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 d-flex justify-content-between">
                <strong>Based On</strong>
                <strong>:</strong>
              </div>
              <div className="col-md-7">
                <p className="text-start m-0">{getUser.company.bs}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
