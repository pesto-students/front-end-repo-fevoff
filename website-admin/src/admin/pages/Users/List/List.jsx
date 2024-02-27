"use client";
import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import moment from 'moment';

const List = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    return (
        <>
            <div className='main-wrapper bg-gray-100'>
                <Sidebar sidemenu={`${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`} />
                <div className='rightside'>
                    <Header clickEvent={() => { setSidebarVisible(!isSidebarVisible); }} sidebarVisible={isSidebarVisible} />
                    <section className="mx-auto w-full max-w-7xl">
                        <Breadcrumbs breadcumr1={"Manage Users"} breadcumr1_link={""} breadcumr2={"User Listing"} button_name={""} button_link={""} />
                        <div className='card bg-white rounded-sm pb-5 mb-5'>

                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export { List };
