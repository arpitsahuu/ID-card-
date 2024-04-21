// "use client"
// import React from 'react'
// import { RiContactsBook2Line } from "react-icons/ri";
// import { FaRegAddressCard } from "react-icons/fa";
// import Nav from '../components/Nav';

// const addSchool = () => {
//   return (
//     <>
//     <Nav></Nav>
//     <section className="bg-white dark:bg-gray-900 py-10">
//     <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
//       <form className="w-full max-w-md">
//         <div className="flex justify-center mx-auto">
//           <img
//             className="w-auto h-7 sm:h-8"
//             src="https://merakiui.com/images/logo.svg"
//             alt=""
//           />
//         </div>
//         <div className="flex items-center justify-center mt-6">
          
//           <a
//             href="#"
//             className="w-1/3 pb-4 font-medium text-center text-2xl text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
//           >
//             Add School
//           </a>
//         </div>
//         <div className="relative flex items-center mt-8">
//           <span className="absolute">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//               />
//             </svg>
//           </span>
//           <input
//             type="text"
//             className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             placeholder="Name"
//           />
//         </div>
//         <div className="relative flex items-center mt-6">
//           <span className="absolute">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//               />
//             </svg>
//           </span>
//           <input
//             type="email"
//             className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             placeholder="Email address"
//           />
//         </div>
//         <div className="relative flex items-center mt-8">
//           <span className="absolute">
//           <RiContactsBook2Line className='  text-gray-300 ms-3 text-xl' />
//           </span>
//           <input
//             type="text"
//             className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             placeholder="Contact"
//           />
//         </div>
//         <div className="relative flex items-center mt-8">
//           <span className="absolute">
//           <FaRegAddressCard className='  text-gray-300 ms-3 text-xl' />
//           </span>
//           <input
//             type="text"
//             className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             placeholder="Address"
//           />
//         </div>
//         <div className="relative flex items-center mt-8">
//           <span className="absolute">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//               />
//             </svg>
//           </span>
//           <input
//             type="text"
//             className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             placeholder="Code"
//           />
//         </div> 
//         <div className="relative flex items-center mt-4">
//           <span className="absolute">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//               />
//             </svg>
//           </span>
//           <input
//             type="password"
//             className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             placeholder="Password"
//           />
//         </div>
//         <div className="relative flex items-center mt-4">
//           <span className="absolute">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//               />
//             </svg>
//           </span>
//           <input
//             type="password"
//             className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             placeholder="Confirm Password"
//           />
//         </div>
//         <label
//           htmlFor="dropzone-file"
//           className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-6 h-6 text-gray-300 dark:text-gray-500"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
//             />
//           </svg>
//           <h2 className="mx-3 text-gray-400">Profile Photo</h2>
//           <input id="dropzone-file" type="file" className="hidden" />
//         </label>
//         <div className="mt-6">
//           <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
//             Sign Up
//           </button>
//           <div className="mt-6 text-center ">
//             <a
//               href="#"
//               className="text-sm text-blue-500 hover:underline dark:text-blue-400"
//             >
//               Already have an account?
//             </a>
//           </div>
//         </div>
//       </form>
//     </div>
//   </section>
//     </>
//   )
// }

// export default addSchool

"use client"

import React, { useState } from 'react';
import { RiContactsBook2Line } from 'react-icons/ri';
import { FaRegAddressCard } from 'react-icons/fa';
import Nav from '../components/Nav';
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
import { addSchool } from '@/redux/actions/userAction';


const AddSchool = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can use the state variables (name, email, etc.) to submit the form data
    const data = {
      name,
      email,
      contact,
      address,
      code,
      password,
      confirmPassword,
    };
    console.log(data)
    // Add your form submission logic here
    const response = await dispatch(addSchool(data))
    console.log(response)
  };

  return (
    <>
      <Nav />
      <section className="bg-white dark:bg-gray-900 py-10">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center mt-6">
              <a
                href="#"
                className="w-1/3 pb-4 font-medium text-center text-2xl text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
              >
                Add School
              </a>
            </div>
            <div className="relative flex items-center mt-8">
              <span className="absolute">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
              </span>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="School Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative flex items-center mt-6">
              <span className="absolute">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
              </span>
              <input
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <RiContactsBook2Line className="text-gray-300 ms-3 text-xl" />
              </span>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <FaRegAddressCard className="text-gray-300 ms-3 text-xl" />
              </span>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="relative flex items-center mt-8">
              <span className="absolute">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
              </span>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="relative flex items-center mt-4">
              <span className="absolute">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
              </span>
              <input
                type="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="relative flex items-center mt-4">
              <span className="absolute">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
              </span>
              <input
                type="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Add School
            </button>
            
          </form>
        </div>
      </section>
    </>
  );
};

export default AddSchool;
