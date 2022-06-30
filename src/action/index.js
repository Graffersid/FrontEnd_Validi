export const Sign_up  = (data) => {
    console.log(data,"action...")
    return {
        type: "SIGNUP",
        payload:{
            data:data
        }
    }
}