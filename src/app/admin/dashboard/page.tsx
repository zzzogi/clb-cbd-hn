"use client";
import React, { useState, useEffect } from "react";
import { Camera, Pencil, Trash } from "lucide-react";
import axios from "axios";
import { uploadToS3 } from "@/app/utils/s3";

interface User {
  id: string;
  name: string;
  dob: string;
  bio: string;
  yearsOfExperience: number;
  profileImage: string;
}

const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    bio: "",
    yearsOfExperience: 0,
    profileImage: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/members");
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const key = `profile-images/${Date.now()}_${file.name}`;
        const imageUrl = await uploadToS3(file, key);
        setFormData({ ...formData, profileImage: imageUrl });
      } catch (error) {
        console.error("Failed to upload file to S3", error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing && selectedUser) {
        // Update existing user
        const response = await axios.put(`/api/members`, {
          id: selectedUser.id,
          ...formData,
        });
        setUsers(
          users.map((user) =>
            user.id === selectedUser.id ? response.data : user
          )
        );
      } else {
        // Create new user
        const response = await axios.post(`/api/members`, formData);
        setUsers([...users, response.data]);
      }
      resetForm();
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setFormData(user);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/members`, { data: { id } });
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };

  const resetForm = () => {
    setSelectedUser(null);
    setIsEditing(false);
    setFormData({
      name: "",
      dob: "",
      bio: "",
      yearsOfExperience: 0,
      profileImage: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            {isEditing ? "Edit User Profile" : "Create New User Profile"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  required
                  value={formData.dob}
                  onChange={(e) =>
                    setFormData({ ...formData, dob: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Bio
                </label>
                <textarea
                  required
                  value={formData.bio}
                  onChange={(e) =>
                    setFormData({ ...formData, bio: e.target.value })
                  }
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Years of Experience
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.yearsOfExperience}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      yearsOfExperience: parseInt(e.target.value),
                    })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Profile Image
                </label>
                <div className="mt-1 flex items-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="profile-image"
                  />
                  <label
                    htmlFor="profile-image"
                    className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <Camera className="h-5 w-5 mr-2" />
                    Upload Image
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                {isEditing ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">User Profiles</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {users.map((user) => (
              <div
                key={user.id}
                className="p-6 flex items-center justify-between"
              >
                <div className="flex items-center">
                  {user.profileImage && (
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                  )}
                  <div>
                    <h4 className="text-lg font-medium">{user.name}</h4>
                    <p className="text-sm text-gray-500">
                      {user.yearsOfExperience} years of experience
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleEdit(user)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
