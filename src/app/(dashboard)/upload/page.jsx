"use client"; // Required for client-side functionality

import React, { useState } from "react";
import Sidebar from "@/Components/Sidebar";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Page() {
  // Step indicator
  const [step, setStep] = useState(1);

  // Step 1: Form fields
  const [campaignName, setCampaignName] = useState("");
  const [contentDescription, setContentDescription] = useState("");
  const [adFormat, setAdFormat] = useState("Static");
  const [targetAudience, setTargetAudience] = useState("");

  // Step 2: Form fields
  const [region, setRegion] = useState("Nairobi");
  const [specificLocation, setSpecificLocation] = useState("");
  const [budget, setBudget] = useState("75,000 - 100,000");
  const [installments, setInstallments] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);

  // Step 3: Data (vendors)
  const [searchVendor, setSearchVendor] = useState("");
  const [selectedVendors, setSelectedVendors] = useState([]);

  const vendors = [
    {
      id: "vendor1",
      name: "Magnate Ventures",
      price: "Ksh 75,000",
      location: "Westlands, Nairobi",
      phone: "+254723456789",
      features: ["LED Display", "Prime Time"],
      image: "https://magnate-ventures.com/images/about/featured.jpg",
    },
    {
      id: "vendor2",
      name: "BrightAds Kenya",
      price: "Ksh 60,000",
      location: "Nairobi CBD",
      phone: "+254725678987",
      features: ["Digital, rotational ads", "Morning"],
      image: "https://magnate-ventures.com/images/about/featured.jpg",
    },
    {
      id: "vendor3",
      name: "Prime Digital Displays",
      price: "Ksh 90,000",
      location: "Nairobi CBD",
      phone: "+254723459999",
      features: ["Full HD Display", "Morning"],
      image: "https://magnate-ventures.com/images/about/featured.jpg",
    },
    {
      id: "vendor4",
      name: "Elite Media Solutions",
      price: "Ksh 120,000",
      location: "Westlands, Nairobi",
      phone: "+254712345678",
      features: ["Digital, rotational ads", "All day"],
      image: "https://magnate-ventures.com/images/about/featured.jpg",
    },
    {
      id: "vendor5",
      name: "Urban Display Solutions",
      price: "Ksh 45,000",
      location: "Nairobi, Nairobi",
      phone: "+254733221100",
      features: ["LED, Full HD", "All day"],
      image: "https://magnate-ventures.com/images/about/featured.jpg",
    },
  ];

  // Navigation for steps
  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlePrevStep = () => setStep((prev) => prev - 1);

  // Handle time slots (Step 2)
  const handleTimeSlotChange = (slot) => {
    if (timeSlots.includes(slot)) {
      setTimeSlots(timeSlots.filter((s) => s !== slot));
    } else {
      setTimeSlots([...timeSlots, slot]);
    }
  };

  // Handle vendor selection (Step 3)
  const handleVendorSelect = (id) => {
    if (selectedVendors.includes(id)) {
      setSelectedVendors(selectedVendors.filter((v) => v !== id));
    } else {
      setSelectedVendors([...selectedVendors, id]);
    }
  };

  // Filter vendors by search term
  const filteredVendors = vendors.filter((v) =>
    v.name.toLowerCase().includes(searchVendor.toLowerCase())
  );

  // ---- Step 1 component ----
  const StepOne = () => (
    <div className="bg-blue-50 rounded-lg shadow-md p-6 md:p-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">1 of 3: Add details</h2>
        <p className="text-sm text-gray-500">Step 1: Add details</p>
      </div>

      {/* Upload Section */}
      <div className="border-2 border-dashed border-gray-300 p-4 mb-4 rounded-lg text-center">
        <p className="font-semibold">Upload Your Billboard Content</p>
        <p className="text-sm text-gray-500">
          JPG, PNG, PDF (Recommended 1920 x 1080 px)
          <br />
          Max file size: 50MB
        </p>
      </div>

      {/* Campaign Name */}
      <label className="block mb-2 text-sm font-medium text-gray-700">Name of your campaign*</label>
      <input
        type="text"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
        className="border border-gray-300 rounded w-full p-2 mb-4"
        placeholder="Campaign Name"
      />

      {/* Content Description */}
      <label className="block mb-2 text-sm font-medium text-gray-700">Content description (optional)</label>
      <input
        type="text"
        value={contentDescription}
        onChange={(e) => setContentDescription(e.target.value)}
        className="border border-gray-300 rounded w-full p-2 mb-4"
        placeholder="Description"
      />

      {/* Ad Format */}
      <p className="block mb-2 text-sm font-medium text-gray-700">Ad format*</p>
      <div className="flex items-center gap-4 mb-4">
        {["Static", "Digital", "3D"].map((fmt) => (
          <label key={fmt} className="flex items-center text-sm">
            <input
              type="radio"
              name="adFormat"
              value={fmt}
              checked={adFormat === fmt}
              onChange={(e) => setAdFormat(e.target.value)}
              className="mr-2"
            />
            {fmt}
          </label>
        ))}
      </div>

      {/* Target Audience */}
      <label className="block mb-2 text-sm font-medium text-gray-700">Describe your target audience (optional)</label>
      <textarea
        value={targetAudience}
        onChange={(e) => setTargetAudience(e.target.value)}
        className="border border-gray-300 rounded w-full p-2 mb-4"
        placeholder="Describe your audience..."
      />

      <div className="flex justify-end gap-4">
        <button
          onClick={handleNextStep}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );

  // ---- Step 2 component ----
  const StepTwo = () => (
    <div className="bg-blue-50 rounded-lg shadow-md p-6 md:p-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">2 of 3: Set preferences</h2>
        <p className="text-sm text-gray-500">Step 2: Set preferences</p>
      </div>

      {/* Region & Specific Location */}
      <label className="block mb-2 text-sm font-medium text-gray-700">Region*</label>
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="border border-gray-300 rounded w-full p-2 mb-4"
      >
        <option value="Nairobi">Nairobi</option>
        <option value="Mombasa">Mombasa</option>
        <option value="Kisumu">Kisumu</option>
      </select>
      <label className="block mb-2 text-sm font-medium text-gray-700">or enter a specific location</label>
      <input
        type="text"
        value={specificLocation}
        onChange={(e) => setSpecificLocation(e.target.value)}
        className="border border-gray-300 rounded w-full p-2 mb-4"
        placeholder="e.g. Westlands, Nairobi"
      />

      {/* Budget & Installments */}
      <label className="block mb-2 text-sm font-medium text-gray-700">What's your overall budget?*</label>
      <input
        type="text"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        className="border border-gray-300 rounded w-full p-2 mb-4"
      />
      <label className="block mb-2 text-sm font-medium text-gray-700">
        How many payment installments would you like to set up? (optional)
      </label>
      <input
        type="number"
        value={installments}
        onChange={(e) => setInstallments(e.target.value)}
        className="border border-gray-300 rounded w-full p-2 mb-4"
      />

      {/* Scheduling */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="block mb-2 text-sm font-medium text-gray-700">Start date*</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-2 text-sm font-medium text-gray-700">End date*</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
      </div>

      {/* Time slots */}
      <p className="block mb-2 text-sm font-medium text-gray-700">Time slots*</p>
      <div className="flex items-center gap-4 mb-4">
        {["Morning", "Afternoon", "Prime time"].map((slot) => (
          <label key={slot} className="flex items-center text-sm">
            <input
              type="checkbox"
              checked={timeSlots.includes(slot)}
              onChange={() => handleTimeSlotChange(slot)}
              className="mr-2"
            />
            {slot}
          </label>
        ))}
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={handlePrevStep}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Back
        </button>
        <button
          onClick={handleNextStep}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );

  // ---- Step 3 component ----
  const StepThree = () => (
    <div className="bg-blue-50 rounded-lg shadow-md p-6 md:p-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">3 of 3: Choose Vendors</h2>
        <p className="text-sm text-gray-500">Step 3: Choose vendors based on your criteria</p>
      </div>

      {/* Search Vendors */}
      <div className="relative mb-4">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          value={searchVendor}
          onChange={(e) => setSearchVendor(e.target.value)}
          placeholder="Search for a vendor"
          className="border border-gray-300 rounded w-full p-2 pl-10"
        />
      </div>

      {/* Vendor List */}
      <ul className="space-y-4 max-h-96 overflow-auto mb-4">
        {filteredVendors.map((vendor) => {
          const isSelected = selectedVendors.includes(vendor.id);
          return (
            <li
              key={vendor.id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between border rounded p-3"
            >
              <div className="flex items-start md:items-center gap-3">
                <Image
                  src={vendor.image}
                  alt={vendor.name}
                  width={80}
                  height={80}
                  className="rounded object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{vendor.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {vendor.location}
                    <br />
                    {vendor.phone}
                  </p>
                </div>
              </div>
              <div className="mt-2 md:mt-0 flex flex-col md:flex-row items-start md:items-center gap-2">
                <span className="font-semibold text-blue-600">{vendor.price}</span>
                <div className="flex flex-wrap gap-2">
                  {vendor.features.map((feat) => (
                    <span
                      key={feat}
                      className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
                <label className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleVendorSelect(vendor.id)}
                    className="mr-2"
                  />
                  Select
                </label>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-between gap-4">
        <button
          onClick={handlePrevStep}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Back
        </button>
        <button
          onClick={() => alert(`Booked ${selectedVendors.length} vendor(s)!`)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {selectedVendors.length === 1
            ? "Book 1 vendor"
            : `Book ${selectedVendors.length || ""} vendor(s)`}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar is fixed; main content gets a left margin equal to the sidebar width */}
      <Sidebar />
      <div className="ml-20 md:ml-40 p-6 md:p-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
            <h1 className="text-2xl font-semibold text-gray-800">Schedule an ad</h1>
            <input
              type="text"
              placeholder="Search for ads, campaigns or vendors"
              className="border-2 border-gray-300 p-2 rounded-md w-full md:w-96"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
            <span className="text-gray-800">Mueni Catering Ltd</span>
          </div>
        </div>

        {/* Render dynamic steps */}
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
      </div>
    </div>
  );
}
