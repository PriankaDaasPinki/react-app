// src/useUsers.js
import { useState, useEffect } from "react";
import axios from "axios";

const useUsers = () => {
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
    setIsEditing(true);
    setEditId(user.id);
    setUserForm({ name: user.name, email: user.email, phone: user.phone });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const response = await axios.put(`${apiUrl}/${editId}`, userForm);
    setUsers(users.map((user) => (user.id === editId ? response.data : user)));
    setUserForm({ name: "", email: "", phone: "" });
    setIsEditing(false);
    setEditId(null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    setUsers(users.filter((user) => user.id !== id));
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
