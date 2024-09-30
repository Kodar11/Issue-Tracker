import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

function IssueForm() {

  const [formData, setFormData] = useState({
    issue: '',
    description: '',
    address: '',
    requireDepartment: '',
  });

  const navigateToAboutPage = () => {
    window.location.href = '/issue-history';
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/api/v1/users/raise-issue', formData, { withCredentials: true })
    navigateToAboutPage();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex justify-center mt-12 px-2 sm:px-0">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xs sm:max-w-sm bg-white p-4 sm:p-6 shadow-lg border border-indigo-700 rounded-lg"
        >
          <input
            type="text"
            name="issue"
            placeholder="Issue"
            value={formData.issue}
            onChange={handleChange}
            required
            className="w-full mb-3 sm:mb-4 p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full mb-3 sm:mb-4 p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full mb-3 sm:mb-4 p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={formData.requireDepartment}
            onChange={handleChange}
            name="requireDepartment"
            className="w-full mb-3 sm:mb-4 p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>Select a Department</option>
            <option>Software</option>
            <option>Electrician</option>
          </select>
          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-indigo-600 text-white text-sm sm:text-base rounded-lg hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

  );
};

export default IssueForm;