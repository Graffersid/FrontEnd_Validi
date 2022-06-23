import axios from 'axios';


// export const signUp = (state) => {
//     console.log(state,"apiii")
//     axios({
//         url: "http://192.168.1.79:9090/api/v1/signup",

//         method: "POST",
//         headers: { "content-Type": "application/json" },
//         parameters: state

//     }).then((res) => {
//         // alert(res.data.message)
//         console.log(res,"response")
//     }).catch(() => console.log(alert("already exist")))
// }

export const signUp = async (state) => {
    console.log(state,"data")
    try {
        let response = await axios.post("http://192.168.1.79:9090/api/v1/signup", state);
        console.log(response,"response")
        return response.data;
    } catch (error) {
        console.log('Error while calling getPosts API ', error)
    }
}