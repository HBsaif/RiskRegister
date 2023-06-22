import { React, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function NavBar() {

    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState(false);

    useEffect(() => {
        const localLoginVal = localStorage.getItem('risk-register-user-login');
        if(localLoginVal === null || localLoginVal === 'undefined' || localLoginVal === false){
            setUserLogin(false);
        }else{
            setUserLogin(localLoginVal);
        }
        
    }, []);

    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('risk-register-user-login');
        navigate('/login');
    }
    return (
        <nav className='nav-wrapper'>
            <Link to='/'>
                HOME
            </Link>
            <Link to='/about' className='has-menu'>
                ABOUT
                {/* <ul className='menu'>
                    <li>ABOUT A</li>
                    <li>ABOUT B</li>
                    <li>ABOUT C</li>
                    <li>ABOUT D</li>
                </ul> */}
            </Link>
            <Link to='/post' className='has-menu'>
                POST
                {/* <ul className='menu'>
                    <li>ADD POST</li>
                    <li>UPDATE POST</li>
                    <li>DELETE POST</li>
                    <li>SHOW POST</li>
                </ul> */}
            </Link>
            <div className='nav-auth-btn'>
                {
                    userLogin ?

                        <Link to='#' onClick={logOut}>
                            Logout
                        </Link> :
                        <Link to='/login'>
                            Login
                        </Link>
                }
            </div>
        </nav>
    )
}
export default NavBar;