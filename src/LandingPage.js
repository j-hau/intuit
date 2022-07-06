import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import Header from "./components/Header"
import NavigationDrawer from "./components/NavigationDrawer"

const LandingPage = ({
    counter,
    incrementCounter
}) => {

    const [navigationDrawerOpen, setNavigationDrawerOpen] = useState(false);

    const toggleNav = () => {
        setNavigationDrawerOpen(!navigationDrawerOpen);
    }

    const closeDrawer = () => {
        console.log("test")
        setNavigationDrawerOpen(false);
    }

    return (
      <div>
        <Header
            toggleNav={toggleNav}
        />
        <h1>
            {counter}
        </h1>

        <button onClick={() => incrementCounter(1)}>
            Increment counter
        </button>

        { navigationDrawerOpen && 
            <NavigationDrawer 
                open={navigationDrawerOpen}
                closeDrawer={closeDrawer}
            /> 
        }
      </div>
    );
}

const mapState = ({ core }) => ({
    counter: core.counter
  });
  
  const mapDispatch = ({ core: { incrementCounter } }) => ({
    incrementCounter: (value) => incrementCounter(value),
  });
  
  export default connect(mapState, mapDispatch)(LandingPage);
