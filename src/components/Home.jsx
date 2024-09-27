import React from 'react';
import Herosection from './Herosection.jsx';
import Dishes from './Dishes.jsx';
import Aboutsection from './Aboutsection.jsx';
import Mission from './Mission.jsx';
import Expertisesection from './Expertisesection.jsx';
import Review from './Review.jsx';
import Contact from './Contact.jsx';

const Home = () => {
  return (
    <>
      <Herosection />
      <Dishes />
      <Aboutsection />
      <Mission />
      <Expertisesection />
      <Review />
      <Contact />
    </>
  );
};

export default Home;
