"use client";
import React, { useEffect } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import GetMethod from '../../../../api_calls/get-method/GetMethod';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../../../../redux-slices/users/usersSlice';
import { Link } from 'react-router-dom';

const List = () => {
    const dispatch = useDispatch();
    const useListSelector = useSelector(store => store.user.usersList);

    useEffect(() => {
        handleUserData();
    }, []);

    const handleUserData = async () => {

        if (useListSelector.length === 0) {

            const url = "users";

            const response = await GetMethod(url, "");

            dispatch(listUsers(response.data));
        }
    }

    return (
        <>
            <section className="mx-auto w-full">
                <Breadcrumbs breadcumr1={"Manage Users"} breadcumr1_link={""} breadcumr2={"User Listing"} button_name={""} button_link={""} />
                <div className='card bg-white rounded-sm pb-5 mb-5'>
                    <div className="overflow-x-auto">
                        <table className="table table-md">
                            <thead>
                                <tr>
                                    <th>Sr.</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Gender</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    useListSelector?.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{data.name}</td>
                                                <td>{data.email} <br />{"+" + data.countryCode + "-" + data.contact}</td>
                                                <td>{data.gender}</td>
                                                <td>
                                                    {
                                                        (data.userVerify === true) ? <>
                                                            <span className="badge-success px-2 py-1 rounded-sm text-white">
                                                                Verified
                                                            </span>
                                                        </> : <>
                                                            <span className="badge-error px-2 py-1 rounded-sm text-white">
                                                                Unverified
                                                            </span>

                                                        </>
                                                    }
                                                </td>
                                                <td>
                                                    <Link to={`/users/` + data._id} className="btn btn-warning px-2 btn-sm rounded-sm">
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export { List };
