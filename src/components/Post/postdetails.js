import { useParams } from 'react-router';
import { React, useState, useEffect } from 'react';
import { axiosConfigLocal } from '../../util/axiosApiCall';
function PostDetails() {
    const { postId } = useParams();
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [postTitle, setPostTitle] = useState('');
    const [postAuthor, setPostAuthor] = useState('');
    const [formError, setFormError] = useState('');

    const postTitleSet = (e) => {
        setFormError('');
        setPostTitle(e.target.value);
    }
    const postAuthorSet = (e) => {
        setFormError('');
        setPostAuthor(e.target.value);
    }
    const updatePost = async (e) => {
        e.preventDefault();
        if (postTitle === '') {
            setFormError('Post Title Can not be empty');
        } else if (postAuthor === '') {
            setFormError('Post Author Can not be empty');
        } else {
            await axiosConfigLocal.put(`/posts/${postId}`, {
                title: postTitle,
                author: postAuthor
            }).then((response) => {
                setData(response.data);
                setFlag(!flag);
            }).catch((err) => {
                console.log(err);
            });
        }
    }
    useEffect(() => {
        (async () => {
            await axiosConfigLocal.get(`/posts/${postId}`).then((response) => {
                setData(response.data);
                setPostTitle(response.data.title);
                setPostAuthor(response.data.author);
            });
        })();
    }, [flag, postId]);

    return (
        <div>
            <h1 className='t-center'>POST DETAILS</h1>
            <div className='d-flex'>
                <div className='w-50'>
                    {
                        data &&
                        <p className='single-post'>{data.author}: {data.title}</p>
                    }
                </div>
                <div className='w-50'>
                    <div className="form-wrapper">
                        <div className="form-body">
                            {formError}
                            <form onSubmit={updatePost}>
                                <input type='text' value={postTitle} placeholder='Update Post Title Here...' onChange={postTitleSet}></input>
                                <input type='text' value={postAuthor} placeholder='Update Post Author Name Here...' onChange={postAuthorSet}></input>
                                <input type='submit' value='Update' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostDetails;