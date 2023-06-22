import PropTypes from 'prop-types';
import { React, useState, useEffect } from 'react';
import { axiosConfigLocal } from '../../util/axiosApiCall';
function ShowPost(){
    // ShowPost.propTypes = {
    //     fetchPost: PropTypes.func.isRequired,
    //     data: PropTypes.shape(PropTypes.any).isRequired
    // }
    // const {fetchPost, data} = props;
    // const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);

    // const fetchData = async (e) =>{
    //     await axiosConfigLocal.get('/posts').then((response) => {
    //         setData(response.data);
    //     });
    // }
    // useEffect(() => {
    //     fetchData();
    // }, [flag]);


    return(
        <>
            {data && data.map((d)=>(
            <p key={d.id}>{d.title}</p>
        ))}
        </>
    )
}
export default ShowPost;