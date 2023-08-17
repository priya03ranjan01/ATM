import React, { useState } from 'react'
import axios from 'axios';
import Navbar from "./../pages/Navbar"
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,

} from "@material-tailwind/react";
import { useLocation } from 'react-router-dom';

export default function CustomerProfile() {

    const location = useLocation();
    const customerData = location.state.data1;
    const custId = customerData.custId;


    const [disabled, setDisabled] = useState(true)
    const [name, setName] = useState("Edit")
    const [updatedData, setUpdatedData] = useState(customerData)

    const jwtToken = sessionStorage.getItem('jwtToken');

    const handleChange = (e) => {
        setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });

    }
    const handleClick = () => {

    }
    return (<

        >
        <div className="bg-gray-100">
            <Navbar />
            <div className="w-full text-white bg-main-color">
                <div
                    floated={false}
                    shadow={false}
                    className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="p-4 flex flex-row items-center justify-between mt-4">
                        <a href="#"
                            class="text-2xl
                     text-black font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">Customer Profile</a>


                    </div>
                    <nav
                        className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                        <div className="relative" x-data="{ open: false }">
                            <button
                                className="flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent hover:bg-blue-800 md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:bg-blue-800 focus:outline-none focus:shadow-outline bg-gray-400"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            </button>

                        </div>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto my-5 p-5">
                <div className="md:flex no-wrap md:-mx-2 ">
                    {/* <!-- Left Side --> */}
                    <div className="w-full md:w-3/12 md:mx-2">
                        {/* <!-- Profile Card --> */}
                        <div className="bg-white p-3 border-t-4 border-gray-800">
                            <div className="image overflow-hidden">

                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-fit h-fit ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>



                            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6"></p>
                            <ul
                                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">


                                <li className="flex items-center py-3">
                                    <span>Bank Balance</span>
                                    <span className="ml-auto"><span
                                        className="bg-gray-100 py-1 px-2 rounded text-white text-sm">{updatedData.name}</span></span>

                                </li>
                                <li className="flex items-center py-3">
                                    <span>Member since</span>
                                    <span className="ml-auto">Jul XX, 20XX</span>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- End of profile card --> */}
                    </div>
                    {/* <!-- Right Side --> */}
                    <div className="w-full md:w-9/12 mx-2 h-64">
                        {/* <!-- Profile tab --> */}
                        {/* <!-- About Section --> */}

                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span clas="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">About</span>
                            </div>

                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold" disabled={disabled} onChange={handleChange}
                                            name="name">Name</div>
                                        <div className="px-4 py-2">{updatedData.name}</div>
                                    </div>


                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold" disabled={disabled} type="email" label="" onChange={handleChange}
                                            name="email">Email Adrress</div>
                                        <div className="px-4 py-2">{updatedData.email}</div>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold"
                                            disabled={disabled}
                                            onChange={handleChange}
                                            name="address">Address</div>
                                        <div className="px-4 py-2">{updatedData.address}</div>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold" disabled={disabled}
                                            onChange={handleChange}
                                            name="contact">Contact No.</div>
                                        <div className="px-4 py-2">{updatedData.contact}</div>
                                    </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold" disabled={disabled}

                                                onChange={handleChange}
                                                name="city">City</div>
                                            <div className="px-4 py-2">{updatedData.city}</div>
                                        
                                            <div className="grid grid-cols-2">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold" disabled={disabled}
                                                label="Pincode"
                                                onChange={handleChange}
                                                name="pincode">Pincode</div></div>
                                        <div className="px-4 py-2">{updatedData.pincode}</div>
                                        </div>
                                        </div>

                                        <div className='justify-items-center'>
                                            <Button onClick={() => {
                                                // console.log(location.state.data1);
                                                setDisabled(false)
                                                setName("Done")
                                                if (name === "Done") {
                                                    axios.put(`http://localhost:5165/api/Customer/${custId}`, updatedData, {
                                                        headers: {
                                                            'Authorization': 'bearer ' + jwtToken
                                                        }
                                                    }).then(res => {
                                                        console.log(res.data);
                                                        setUpdatedData(res.data)
                                                        // delete customerData['custId'];
                                                        // customerData = res.data;
                                                        // setcustomerData(res.data);

                                                    })
                                                    // console.log(updatedData)
                                                }
                                            }}
                                                // type="submit"
                                                className="mt-4 mx-10"
                                            >
                                                {name}
                                            </Button>
                                            <Button
                                                type="submit"
                                                className="mt-4 mx-10"
                                            >
                                                Delete
                                            </Button>
                                       

                                    </div>
                                </div>

                                {/* <!-- End of about section --> */}

                                <div className="my-4"></div>


                                <div className="bg-white p-3 shadow-sm rounded-sm " floated={false}
                                    shadow={false}>

                                    <div className="grid grid-cols-2">
                                        <div>
                                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                                <span clas="text-green-500">
                                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </span>
                                                <span className="tracking-wide">Account Details</span>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <!-- End of Experience and education grid --> */}
                                </div>
                                {/* <!-- End of profile tab --> */}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
