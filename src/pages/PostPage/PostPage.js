import { React, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Layout from "../../components/Layout/layout";
import AddPost from "../../components/Post/addpost";
import UserInfo from '../../components/Auth/userinfo';
function PostPage() {
    const navigate = useNavigate();
    const ck = UserInfo();
    useEffect(() => {
        if(!ck){
            navigate('/login');
        }
    }, []);
    return (
        <Layout>
            <AddPost />
        </Layout>
    )
}
export default PostPage;