"use client"; // Required for client-side interactions

import Sidebar from "@/Components/Sidebar";
import Image from "next/image";
import { FaChartLine, FaLightbulb, FaClock, FaUpload } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 ml-0 md:ml-40 p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 space-y-4 md:space-y-0">
          {/* Left: Title & Search */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            <input
              type="text"
              placeholder="Search for ads, campaigns or vendors"
              className="border-2 border-gray-300 p-2 rounded-md w-full md:w-96"
            />
          </div>
          {/* Right: Company Name & Quick Action */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
            <span className="text-gray-800">Cazini AI Ltd</span>
            <button className="bg-blue-500 text-white flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              <FaUpload className="inline-block mr-2" />
              <span>Upload an ad</span>
            </button>
          </div>
        </div>

        {/* KPI Cards & AI Suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* KPI: Total Ads */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-center items-start">
            <div className="text-gray-600 text-sm mb-2">Total Ads Scheduled</div>
            <div className="text-2xl font-bold text-gray-800">12</div>
            <div className="text-xs text-gray-500">as of this week</div>
          </div>

          {/* KPI: Impressions */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-center items-start">
            <div className="text-gray-600 text-sm mb-2">Estimated Impressions</div>
            <div className="text-2xl font-bold text-gray-800">45,000</div>
            <div className="text-xs text-gray-500">across all campaigns</div>
          </div>

          {/* KPI: Upcoming Ads */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-center items-start">
            <div className="text-gray-600 text-sm mb-2">Upcoming Ads</div>
            <div className="text-2xl font-bold text-gray-800">3</div>
            <div className="text-xs text-gray-500">in the next 7 days</div>
          </div>
        </div>

        {/* AI Suggestions & Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* AI Insights Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <FaLightbulb className="text-yellow-500 mr-2" size={20} />
              <h2 className="text-lg font-semibold text-gray-800">
                AI-Powered Suggestions
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <strong>Best Time to Post:</strong> Our AI suggests scheduling
                between <span className="font-medium">6am - 9am</span> for maximum
                morning traffic.
              </li>
              <li>
                <strong>Recommended Location:</strong> Westlands, near Sarit Center,
                shows high engagement for food-based ads.
              </li>
              <li>
                <strong>Trending Format:</strong> Digital rotational ads are
                outperforming static in your niche by 15%.
              </li>
            </ul>
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Apply Suggestions
              </button>
            </div>
          </div>

          {/* Quick Scheduler */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <FaClock className="text-blue-500 mr-2" size={20} />
              <h2 className="text-lg font-semibold text-gray-800">
                Quick Scheduler
              </h2>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Schedule a new ad slot based on our recommended times.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Schedule Now
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <FaChartLine className="text-green-500 mr-2" size={20} />
            <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
          </div>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <strong>Yesterday:</strong> Updated “Christmas Special” campaign with new
              visuals.
            </li>
            <li>
              <strong>2 days ago:</strong> Scheduled “Lunch Hour Promo” in Nairobi CBD
              region.
            </li>
            <li>
              <strong>Last week:</strong> Booked Magnate Ventures for next month’s
              billboard run.
            </li>
          </ul>
          <div className="mt-4 text-right">
            <button className="text-blue-500 hover:underline text-sm">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
