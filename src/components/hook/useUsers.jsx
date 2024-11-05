// src/useUsers.js
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { showLoadingAlert } from "../common_components/Loader";
import Swal from "sweetalert2";

const useUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  
  const [userForm, setUserForm] = useState({ name: "", email: "", phone: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(apiUrl);
    setUsers(response.data);
  };

  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const response = await axios.post(apiUrl, userForm);
    setUsers([...users, response.data]);
    setUserForm({ name: "", email: "", phone: "" });
    alert("Added  " + response.data.name);
  };

  const handleEdit = (user) => {
    console.log(user);
    setIsEditing(true);
    setEditId(user.id);
    setUserForm({ name: user.name, email: user.email, phone: user.phone });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    showLoadingAlert();
    const response = await axios.put(`${apiUrl}/${editId}`, userForm);
    setUsers(users.map((user) => (user.id === editId ? response.data : user)));
    setUserForm({ name: "", email: "", phone: "" });
    setIsEditing(false);
    setEditId(null);
    alert("User  " + response.data.name + " updated.");
    navigate("/users");
  };

  const handleDelete = async (id, name) => {
    const result = await Swal.fire({
      title: "Are you sure to delete " + name + " ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete !",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${apiUrl}/${id}`);
        setUsers(users.filter((user) => user.id !== id));
        Swal.fire({
          title: "Deleted !",
          text: name + " has been deleted.!",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
        // Swal.fire('Deleted!', 'The user has been deleted.', 'success');
      } catch (error) {
        console.error("Error deleting user:", error);
        Swal.fire("Error", "Failed to delete the user.", "error");
      }
    }
  };

  

  return {
    users,
    userForm,
    isEditing,
    handleChange,
    handleCreate,
    handleEdit,
    handleUpdate,
    handleDelete,
  };
};

export default useUsers;
