import { React, useEffect } from 'react';
import About from "../../components/About/about";
import Layout from "../../components/Layout/layout";
import {useNavigate} from 'react-router-dom';
import UserInfo from '../../components/Auth/userinfo';
function AboutPage(){
    const navigate = useNavigate();
    const ck = UserInfo();
    useEffect(() => {
        if(!ck){
            navigate('/login');
        }
    }, []);
    
    return(
        <Layout>
            <About />
        </Layout>
    )
}
export default AboutPage;