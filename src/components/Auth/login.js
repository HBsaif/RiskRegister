import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosConfigLocal } from '../../util/axiosApiCall';
function Login() {
    const navigate = useNavigate();
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [formError, setFormError] = useState('');

    const emailValSet = (e) => {
        var errId = document.getElementById('err');
        errId.classList.remove('show');
        setFormError('');
        setEmailVal(e.target.value);
    }
    const passwordValSet = (e) => {
        var errId = document.getElementById('err');
        errId.classList.remove('show');
        setFormError('');
        setPasswordVal(e.target.value);
    }

    const login = async(e) => {
        e.preventDefault();
		console.log("Login Call");
        if (emailVal === '' || passwordVal === '') {
            var errId = document.getElementById('err');
            errId.classList.add('show');
            setFormError('All Field Should Be Fill.');
        } else {
			console.log("Api Call");
			await axiosConfigLocal.post('login', {
                email: emailVal,
				password: passwordVal
            }).then((response) => {
                console.log(response.data);
				if(response.data.status==true){
					localStorage.setItem('risk-register-user-login', true);
					navigate("/");
				}
            }).catch((err) => {
                console.log(err);
            })
        }
    }
    return (
        <div>
            <h1 className="t-center">Login</h1>
            <div className="form-wrapper">
                <div className="form-body">
                    <p id="err" className="err">{formError}</p>
                    <form onSubmit={login}>
                        <label htmlFor="email">Email</label>
                        <input type="text" value={emailVal} onChange={emailValSet} placeholder="Enter Email Here ...." name="email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" value={passwordVal} onChange={passwordValSet} placeholder="Enter Password Here ...." name="password" />
                        <input value="Sign In" type="submit" />
                    </form>
                    <Link to="/forgotpassword" className="t-center"><strong>Forgot Password?</strong></Link>
                    <p className="t-center">Do not Have Account?<span><Link to="/registration"> <strong>Sign Up</strong></Link></span></p>
                </div>
            </div>
        </div>
    )
}
export default Login;