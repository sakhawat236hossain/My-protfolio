import React from 'react';
import HeroSection from './HeroSection';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Contact from '../Contact';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;