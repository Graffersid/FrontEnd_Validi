import axios from 'axios';


export const signUp = (state) => {
    console.log(state,"apiii")
    axios({
        url: "http://192.168.1.79:9090/api/v1/signup",

        method: "POST",
        headers: { "content-Type": "application/json" },
        parameters: state

    }).then((res) => {
        alert(res.data.message)
        console.log(res)
    }).catch(() => console.log(alert("already exist")))
}