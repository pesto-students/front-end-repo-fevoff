"use client";
import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import moment from 'moment';
import InputTag from '../../components/InputTag/InputTag';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import GetPincodeDetails from "./../../../api_calls/admin/user/GetPincodeDetails";
import PostMethod from '../../../api_calls/post-method/PostMethod';

const Users = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [cityList, setCityList] = useState([]);

    const userData = {
        name: "",
        email: "",
        contact: "",
        dob: "",
        gender: "",
        password: "",
        house_no: "",
        street_area: "",
        landmark: "",
        pincode: "",
        country: "",
        state: "",
        city: "",
    }

    const [userDetails, setUserDetails] = useState(userData);

    const getPincodeDetails = async (pincodeValue) => {
        if (pincodeValue.length == 6) {

            const pincodeDetails = await GetPincodeDetails(pincodeValue);

            const details = pincodeDetails.data[0];

            setUserDetails((prev) => ({ ...prev, state: details.State, country: details.Country }));

            setCityList(pincodeDetails.data);

        } else if (pincodeValue.length > 6) {
            setErrorMessage("Please provide valid Pincode");
        }
    }

    const handleUserData = async () => {

        const url = "users";

        const response = await PostMethod(url, userData);
    }

    return (
        <>
            <section className="mx-auto w-full">
                <Breadcrumbs breadcumr1={"Manage Users"} breadcumr1_link={""} breadcumr2={"Add User"} button_name={""} button_link={""} />
                <div className='card bg-white rounded-sm pb-5 mb-5'>
                    <form method='POST' onSubmit={handleUserData} autoComplete='off' >
                        <div className='card-body'>
                            {
                                (errorMessage !== "") ? <>
                                    <ErrorMessage message={errorMessage} />
                                </> : ""
                            }
                            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>

                                <InputTag spanText="User Name" inputType="text" required={true} inputName="name" changeHandle={(e) => setUserDetails((prev) => ({ ...prev, name: e.target.value, }),)} inputValue={userDetails.name} />

                                <InputTag spanText="Email Address" inputType="email" required={true} inputName="email" changeHandle={(e) => setUserDetails((prev) => ({ ...prev, email: e.target.value, }),)} inputValue={userDetails.email} />

                                <InputTag spanText="Contact Number" inputType="text" required={true} inputName="contact" changeHandle={(e) => setUserDetails((prev) => ({ ...prev, contact: e.target.value, }),)} inputValue={userDetails.contact} />

                                <div className="form-control">
                                    <div className="label">
                                        <span className="label-text">Date Of Birth</span>
                                    </div>
                                    <input type="date" className="input input-bordered w-full  rounded-md bg-gray-100" max={moment().subtract(10, 'years').format("YYYY-MM-DD")} />
                                </div>

                                <div className="form-control">
                                    <div className="label">
                                        <span className="label-text">User Gender</span>
                                    </div>
                                    <select className='input input-bordered w-full  rounded-md bg-gray-100'>
                                        <option value="">Select Gender</option>
                                        <option value={"Male"}>Male</option>
                                        <option value={"Female"}>Female</option>
                                        <option value={"Other"}>Other</option>
                                    </select>
                                </div>

                                <InputTag spanText="User Password" inputType="text" required={true} inputName="password" changeHandle={(e) => setUserDetails((prev) => ({ ...prev, password: e.target.value, }),)} inputValue={userDetails.password} />

                                <InputTag spanText="House No" inputType="text" required={true} inputName="house_no" changeHandle={(e) => setUserDetails((prev) => ({ ...prev, house_no: e.target.value, }),)} inputValue={userDetails.house_no} />

                                <InputTag spanText="Street Area" inputType="text" required={true} inputName="street_area" changeHandle={(e) => setUserDetails((prev) => ({ ...prev, street_area: e.target.value, }),)} inputValue={userDetails.street_area} />

                                <InputTag spanText="Landmark" inputType="text" required={true} inputName="landmark" changeHandle={(e) => setUserDetails((prev) => ({ ...prev, landmark: e.target.value, }),)} inputValue={userDetails.landmark} />

                                <div className="form-control">
                                    <div className="label">
                                        <span className="label-text">Pincode</span>
                                    </div>
                                    <input type="text" className="input input-bordered w-full  rounded-md bg-gray-100" onChange={(e) => getPincodeDetails(e.target.value)} />
                                </div>

                                <InputTag spanText="State" inputType="text" required={true} inputName="state" changeHandle={(e) => setUserDetails((prev) => ({ ...prev, state: e.target.value, }),)} inputValue={userDetails.state} />

                                <div className="form-control">
                                    <div className="label">
                                        <span className="label-text">Select City</span>
                                    </div>
                                    <select className='input input-bordered w-full  rounded-md bg-gray-100'>
                                        <option value="">Select City</option>
                                        {
                                            cityList.map((city, index) => <option value={city.Name} key={index} >{city.Name}</option>)
                                        }
                                    </select>
                                </div>

                            </div>
                        </div>
                        <div className='card-footer px-8'>
                            <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2'>
                                <button className="btn text-white btn-success rounded-md w-auto mr-3">Add User</button>
                                <button type='reset' className="btn text-white btn-error rounded-md ml-3 w-auto">Reset Details</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Users;