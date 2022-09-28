import React from "react";
import PropTypes from "prop-types";

const App = ({name, age}) => {
    return <h1>Hello {name} age {age}</h1>;
}

App.defaultProps = {
    name: "x",
    age: 0
}

App.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default App;
