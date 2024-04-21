"use client";
import React, { useState } from "react";
import { RiContactsBook2Line } from "react-icons/ri";
import { FaRegAddressCard } from "react-icons/fa";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";

const Addexcel = () => {
  const { schools, error } = useSelector((state) => state.user);
  const [currSchool, setCurrSchool] = useState();
  let currRole = null ;

  const handleRoleSelect = (e) => {
    currRole = e.target.value;
    console.log(currRole);
  };


  const handleSchoolSelect = (e) => {
    e.preventDefault();
    setCurrSchool(e.target.value);
  };
  const handleExcelFileSelect = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file && file.type === "application/vnd.ms-excel") {
      setExcelFile(file);
    } else {
      // Notify user if selected file is not an Excel file
      toast.error("Please select a valid Excel file.");
    }
  };

  return (
    <>
    <Nav/>
    <section className="bg-white dark:bg-gray-900 py-10 h-[100vh">
      
      <div className="container flex flex-col items-center justify-center min-h-screen px-6 mx-auto">
        <div className="flex items-center justify-center mt-6">
          <a
            href="#"
            className=" pb-4 font-medium text-center text-2xl text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
          >
            Add Students With Excel
          </a>
        </div>
        {schools.length != 0 && (
          <form>
            <div>
              <label htmlFor="school" className="text-slate-800 mt-2">
                Select School
              </label>
              <select
                id="school"
                onChange={handleSchoolSelect}
                value={currSchool}
              >
                <option value="">Select School</option>
                {schools.map((school) => (
                  <option key={school._id} value={school._id}>
                    {school.name}
                  </option>
                ))}
              </select>
            </div>
          </form>
        )}
        {schools.length == 0 && (
          <h4 className="text-center text-2xl py-2 px-5 text-red-500">
            Pleas add School{" "}
          </h4>
        )}
        <form>
            <div>
              <select
                id="Role"
                onChange={handleRoleSelect}
                value={currRole}
                className=" w-[320px] border  px-5 py-3 rounded-md"
              >
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="staff" >Staff</option>
              </select>
            </div>
        </form>
        <form className="w-full max-w-md">
          <label
            htmlFor="dropzone-file"
            className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            <h2 className="mx-3 text-gray-400">Student Profile Photos</h2>
            <input id="dropzone-file" type="file" className="hidden" multiple />
          </label>
          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Add Photos
            </button>
          </div>
        </form>
        <form className="w-full max-w-md">
          <div className="container flex items-center justify-center pt-10 px-6 mx-auto">
            <div className="flex justify-center mx-auto">
              <label
                htmlFor="excelFile"
                className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <h2 className="mx-3 text-gray-400">Excel File</h2>
                <input
                  id="excelFile"
                  type="file"
                  className="hidden w-96"
                  accept=".xls, .xlsx"
                  onChange={handleExcelFileSelect}
                />
              </label>
              
            </div>
           
          </div>
          <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Add Photos
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default Addexcel;
