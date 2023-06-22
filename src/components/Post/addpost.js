import { React, useState, useEffect } from 'react';
import { axiosConfigLocalPost } from '../../util/axiosApiCall';
import { Link } from 'react-router-dom';
// import ShowPost from './showpost';
function AddPost() {

    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [postTitle, setPostTitle] = useState('');
    const [postAuthor, setPostAuthor] = useState('');
    const [formError, setFormError] = useState('');
    const [successAdd, setSuccessAdd] = useState(false);

    useEffect(() => {
        (async () => {
            await axiosConfigLocalPost.get('/posts').then((response) => {
                setData(response.data);
            });
        })();
    }, [flag]);

    useEffect(() => {
        if (successAdd === true) {
            setTimeout(function successMessage() {
                setSuccessAdd(false);
            }, 2000);
        }
    }, [successAdd]);

    const postTitleSet = (e) => {
        setFormError('');
        setPostTitle(e.target.value);
    }
    const postAuthorSet = (e) => {
        setFormError('');
        setPostAuthor(e.target.value);
    }
    const addPost = async (e) => {
        e.preventDefault();
        if (postTitle === '') {
            setFormError('Post Title Can not be empty');
        } else if (postAuthor === '') {
            setFormError('Post Author Can not be empty');
        } else {
            await axiosConfigLocalPost.post('/posts', {
                title: postTitle,
                author: postAuthor
            }).then((response) => {
                setFlag(!flag);
                setSuccessAdd(true);
                setPostTitle('');
                setPostAuthor('');
                console.log(response);
            }).catch((err) => {
                console.log(err.message);
            })
        }
    }
    const deletePost = async (event) => {
        const postId = event.currentTarget.dataset.id;
        await axiosConfigLocalPost.delete(`/posts/${postId}`).then((response) => {
            setFlag(!flag);
        });
    }
    return (
        <div>
            <h1 className='t-center'>POST</h1>
            <div className='d-flex'>
                <div className='w-50'>
                    {data && data.map((d) => (
                        <p className='single-post' key={d.id}>{d.author}: {d.title}
                            <strong className='c-ponit dlt' data-id={d.id} onClick={deletePost} title='Delete Post'>
                                X
                            </strong>
                            <span>
                                <br />
                                <Link to={`/post/${d.id}`}>
                                    See Details
                                </Link>
                            </span>
                        </p>
                    ))
                    }
                </div>
                <div className='w-50'>
                    <div className="form-wrapper">
                        <div className="form-body">
                            {<p className='err'>{formError}</p>}
                            {successAdd && <p className='t-center'>Post Added Success.</p>}
                            <form onSubmit={addPost}>
                                <input type='text' value={postTitle} placeholder='Write Post Title Here...' onChange={postTitleSet}></input>
                                <input type='text' value={postAuthor} placeholder='Write Post Author Name Here...' onChange={postAuthorSet}></input>
                                <input type='submit' value="ADD POST" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ShowPost data={data}/> */}
        </div >
    )
}
export default AddPost;