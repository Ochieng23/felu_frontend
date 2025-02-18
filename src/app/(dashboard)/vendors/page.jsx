"use client"; // If you're using Next.js App Router with client-side interactions

import React from "react";
import Sidebar from "@/Components/Sidebar";
import Image from "next/image";

export default function Page() {
  // Mock data for scheduled ads
  const schedules = [
    {
      id: 1,
      campaignName: "Christmas special offer",
      dateRange: "21-12-2024 - 21-01-2025",
      billboardProvider: "Magnate Ventures",
      location: "Nairobi, Westlands near Sarit Center",
      cost: "75,000",
      status: "Successful",
      details: ["LED Display", "Prime Time"],
      image: "https://magnate-ventures.com/images/about/featured.jpg", // Placeholder image
    },
    // Add more objects here if needed
  ];

  // Handlers for edit/delete (replace with real logic)
  const handleEdit = (id) => {
    alert(`Edit ad with ID: ${id}`);
  };
  const handleDelete = (id) => {
    alert(`Delete ad with ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      {/* Main content offset by sidebar width */}
      <div className="ml-20 md:ml-40 p-6 md:p-8">
        {/* Page Heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Schedule</h1>
          <p className="text-sm text-gray-500">
            Easily create, schedule, manage, and track your billboard ads to
            maximize the success of your marketing efforts.
          </p>
        </div>

        {/* Ad Schedule Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            My ad schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-2 text-sm font-medium text-gray-600">
                    Campaign
                  </th>
                  <th className="py-2 px-2 text-sm font-medium text-gray-600">
                    Billboard Provider
                  </th>
                  <th className="py-2 px-2 text-sm font-medium text-gray-600">
                    Locations
                  </th>
                  <th className="py-2 px-2 text-sm font-medium text-gray-600">
                    Cost
                  </th>
                  <th className="py-2 px-2 text-sm font-medium text-gray-600">
                    Action
                  </th>
                  <th className="py-2 px-2 text-sm font-medium text-gray-600">
                    Details
                  </th>
                  <th className="py-2 px-2 text-sm font-medium text-gray-600">
                    Manage
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((item) => (
                  <tr key={item.id} className="border-b">
                    {/* Campaign Name & Date */}
                    <td className="py-3 px-2">
                      <div className="font-semibold text-gray-800">
                        {item.campaignName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.dateRange}
                      </div>
                    </td>

                    {/* Billboard Provider (with image) */}
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-2">
                        <Image
                          src={item.image}
                          alt={item.billboardProvider}
                          width={50}
                          height={50}
                          className="object-cover rounded"
                        />
                        <span>{item.billboardProvider}</span>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="py-3 px-2 text-sm text-gray-600">
                      {item.location}
                    </td>

                    {/* Cost */}
                    <td className="py-3 px-2 text-sm text-gray-600">
                      {item.cost}
                    </td>

                    {/* Status (Action) */}
                    <td className="py-3 px-2 text-sm text-gray-600">
                      {item.status}
                    </td>

                    {/* Details (feature chips) */}
                    <td className="py-3 px-2 text-sm text-gray-600">
                      <div className="flex flex-wrap gap-2">
                        {item.details.map((detail) => (
                          <span
                            key={detail}
                            className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Manage (Edit/Delete) */}
                    <td className="py-3 px-2 text-sm text-gray-600">
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="text-blue-600 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {/* If no schedules exist */}
                {schedules.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="py-4 text-center text-gray-500 italic"
                    >
                      No scheduled ads found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
