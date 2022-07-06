import React, {useEffect} from 'react';
import { connect } from 'react-redux';

const LandingPage = ({
    counter,
    incrementCounter
}) => {
    return (
      <div>
        <h1>
            {counter}
        </h1>

        <button onClick={() => incrementCounter(1)}>
            Increment counter
        </button>
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
