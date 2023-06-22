// import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { axiosConfig, axiosConfigLocal } from "../../util/axiosApiCall";
function Test(props){
    Test.propTypes = {
        name: PropTypes.string
    }
    Test.defaultProps = {
        name: 'ABC',
    };
    const { name } = props;
    if(name==='A'){
        throw new Error("Name Error");
    }
    
    return(
        <>
            <h1>Hello {name}</h1>
        </>
    )
}
export default Test;