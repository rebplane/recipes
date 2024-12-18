import axios from 'axios';


export function login(user) {
    axios.post("auth/login/", user, {withCredentials: true} )
    .then((res) => {
        if (res.status == 200) {
            window.location = "/";
        }
    })
    .catch(error => console.error(`Error: ${error}`))
}

// Verify if user has admin access
export function userVerify(setUser) {
    axios.post("auth/admin/", {}, {withCredentials: true})
    .then((res) => {
        if (res.data.status === true) {
            setUser(res.data);
            console.log(res.data);
        } else {
            window.location = "/login";
        }
        return res.data;
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
        window.location = "/";
    })
}

export function signup(user) {
    axios.post("auth/signup/", user, {withCredentials: true})
    .then((res) => {
        if (res.status == 201) {
            window.location = "/"
        }
    })
    .catch(error => console.error(`Error: ${error}`))
}


// Check that user is signed in
export function userCheck(setUser) {
    axios.post("auth/", {}, {withCredentials: true})
    .then((res) => {
        if (res.data.status === true) {
            setUser(res.data);
            console.log(res.data);
        } 
        return res.data;
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
    })
}


// Navigate from auth pages if user is already signed in
export function navigateFromAuth(setUser) {
    axios.post("auth/", {}, {withCredentials: true})
    .then((res) => {
        if (res.data.status === true) {
            setUser(res.data);
            window.location = "/";
        } 
        return res.data;
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
    })
}