function UserInfo() {
    const localLoginVal = localStorage.getItem('risk-register-user-login');
    if (localLoginVal === null || localLoginVal === 'undefined' || localLoginVal === false) {
        return false;
    } else {
        return true;
    }
}

export default UserInfo;