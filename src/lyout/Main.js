import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Navbar from '../components/Home/navbar/Navbar';
import Navbar2 from '../components/Home/navbar/Navbar2';

const Main = () => {
    return (
        <div>
            <Navbar2 />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;