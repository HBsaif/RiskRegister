import { React, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Layout from "../../components/Layout/layout";
import PostDetails from "../../components/Post/postdetails";
import UserInfo from '../../components/Auth/userinfo';
function PostDetailsPage() {
    const navigate = useNavigate();
    const ck = UserInfo();
    useEffect(() => {
        if(!ck){
            navigate('/login');
        }
    }, []);
    return (
        <Layout>
            <PostDetails />
        </Layout>
    )
}
export default PostDetailsPage;