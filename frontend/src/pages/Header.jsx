import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const [adminId, setAdminId] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/users/get-admin', { withCredentials: true })
      .then((response) => {
        setAdminId(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleReport = (e) => {
    e.preventDefault();
    window.location.href = '/reports';
  };

  const handleLogOut = async (e) => {
    try {
      await axios.post('http://localhost:8000/api/v1/users/logout', {}, { withCredentials: true });
    } catch (error) {
      console.error('Error completing the task:', error);
    }
    sessionStorage.clear();
    localStorage.clear();

    history.back();
    history.forward();
    window.onpopstate = function () {
      history.go(1);
    };

    navigate("/login");
  };

  return (
    <header className="bg-blue-700 text-white p-4 max-md:p-1">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <h1 className="text-2xl max-sm:text-base lg:text-3xl text-white font-bold">UIAMS</h1>
        </div>

        {/* Menu Button on small screens, aligned to the right */}
        <button
          className="md:hidden ml-auto bg-white text-indigo-600 font-bold py-1 px-2 rounded transition duration-300 hover:bg-gray-100 max-sm:px-1 max-sm:py-0"
          onClick={() => setMenuOpen(!menuOpen)} // Toggle menu open/close
        >
          Menu
        </button>

        {/* Menu for larger screens */}
        <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
          <a href='/home' className="bg-white text-black font-bold py-2 px-4 rounded-2xl transition duration-300 hover:bg-gray-100">
            Home
          </a>
          <a href='/issue-history' className="bg-white text-black font-bold py-2 px-4 rounded-2xl transition duration-300 hover:bg-gray-100">
            Problems History
          </a>
          <a href='/issue-form' className="bg-white text-black font-bold py-2 px-4 rounded-2xl transition duration-300 hover:bg-gray-100">
            Report a Problem
          </a>
          {adminId === "Admin" && (
            <button onClick={handleReport} className="bg-white text-indigo-600 font-bold py-2 px-4 rounded-2xl transition duration-300 hover:bg-gray-100">
              Reports
            </button>
          )}
          <button onClick={handleLogOut} className="bg-white text-indigo-600 font-bold py-2 px-4 rounded-2xl transition duration-300 hover:bg-gray-100">
            Log out
          </button>
        </div>

        {/* Dropdown menu for smaller screens */}
        {menuOpen && (
          <div className="absolute top-8 right-0 bg-white divide-y divide-blue-500 shadow w-44 dark:bg-blue-500 md:hidden">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <a href='/home' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-600 dark:hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/issue-history" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-600 dark:hover:text-white">
                  Problem History
                </a>
              </li>
              <li>
                <a href="/issue-form" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-600 dark:hover:text-white">
                  Report a Problem
                </a>
              </li>
              <li>
                {adminId === "Admin" && (
                  <button
                    onClick={handleReport}
                    className="block px-4 py-2  dark:hover:bg-blue-900 dark:hover:text-white"
                  >
                    Reports
                  </button>
                )}
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        )}

      </div>
    </header>


  );
}

export default Header;
