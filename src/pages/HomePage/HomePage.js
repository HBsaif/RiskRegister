import { React, useEffect } from 'react';
import Layout from "../../components/Layout/layout";
import Home from "../../components/Home/home";
import {useNavigate} from 'react-router-dom';
import UserInfo from '../../components/Auth/userinfo';
function HomePage() {
    const navigate = useNavigate();
    const ck = UserInfo();
    useEffect(() => {
        if(!ck){
            navigate('/login');
        }
    }, []);
    return (
        <Layout>
            <Home />
        </Layout>
    )
}
export default HomePage;