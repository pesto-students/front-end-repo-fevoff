"use client";
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const Dashboard = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    return (
        <>
            <div className='main-wrapper bg-gray-100'>
                <Sidebar sidemenu={`${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`} />
                <div className='rightside'>
                    <Header clickEvent={() => { setSidebarVisible(!isSidebarVisible); }} sidebarVisible={isSidebarVisible} />
                    <section className="mx-auto w-full max-w-7xl py-4 px-3 md:px-0">
                        <div className="gap-4 grid md:grid-cols-3 md:space-y-0">
                            <div className="bg-base-100 shadow-xl w-full rounded-md">
                                <div className="card-body">
                                    <div className='flex justify-between'>
                                        <label className='font-bold'>Total Users</label>
                                        <label className='text-3xl font-bold'>45</label>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-base-100 shadow-xl w-full rounded-md">
                                <div className="card-body">
                                    <div className='flex justify-between'>
                                        <label className='font-bold'>Total Products</label>
                                        <label className='text-3xl font-bold'>45</label>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-base-100 shadow-xl w-full rounded-md">
                                <div className="card-body">
                                    <div className='flex justify-between'>
                                        <label className='font-bold'>Today Orders</label>
                                        <label className='text-3xl font-bold'>45</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Dashboard