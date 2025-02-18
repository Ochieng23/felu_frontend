"use client"; // Required if using Next.js App Router with client-side interactions

import React, { useState } from "react";
import Sidebar from "@/Components/Sidebar";

export default function SettingsPage() {
  // Profile fields
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [phone, setPhone] = useState("+254712345678");

  // Password fields
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handlers (replace with real logic)
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert(`Profile updated:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    alert("Password changed successfully!");
  };

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action is irreversible.")) {
      alert("Account deleted!");
      // Perform real delete account logic here
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      {/* Main content offset by the sidebar width */}
      <div className="ml-20 md:ml-40 p-6 md:p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
          <p className="text-sm text-gray-500">
            Update your profile details, change your password, or delete your account.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Profile Info Card */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Profile Info</h2>
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Update Profile
              </button>
            </form>
          </div>

          {/* Change Password Card */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Change Password</h2>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Old Password
                </label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Update Password
              </button>
            </form>
          </div>

          {/* Delete Account Card (full width on md+) */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6 md:col-span-2">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Delete Account</h2>
            <p className="text-sm text-gray-600 mb-4">
              Deleting your account will remove all your data from our platform. This action is
              irreversible. Proceed with caution.
            </p>
            <button
              onClick={handleDeleteAccount}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
