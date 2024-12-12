import axios from 'axios';


export function login(user) {
    axios.post("auth/login/", user, {withCredentials: true} )
    .then((res) => {
        if (res.status == 200) {
            window.location = "/admin/create";
        }
    })
    .catch(error => console.error(`Error: ${error}`))
}

export function userVerify(setUser) {
    axios.post("auth/", {}, {withCredentials: true})
    .then((res) => {
        if (res.data.status === true) {
            setUser(res.data);
        } else {
            window.location = "/login";
        }
        return res.data;
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
        window.location = "/admin/login";
    })
}