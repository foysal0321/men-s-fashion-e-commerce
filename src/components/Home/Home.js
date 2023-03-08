import React from 'react';
import HomeCetagori from '../cetegori/HomeCetagori';
import Location from '../extraSections/location/Location';
import Section2 from '../extraSections/section2/Section2';
import Section3 from '../extraSections/section3/Section3';
import SliderTes from '../extraSections/swiperSlider/SliderTes';
import Footer from '../Footer/Footer';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <HomeCetagori />
            <Section2 />
            <SliderTes />
            <Section3 />
            <Location />
            <Footer />
        </div>
    );
};

export default Home;