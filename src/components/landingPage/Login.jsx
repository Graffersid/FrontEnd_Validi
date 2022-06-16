import React,{useState} from 'react'

const Login = () => {
    const [state, setState] = useState({
        email:'',
        password:'',
    })

    const handleChange = (e) => {
        setState({...state,[e.target.name]:e.target.value})
    }
    return (
        <div className="container">
            <div className="card" style={{ width: "18rem", display: 'inline-block', marginTop: '80px' }}>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={state.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={state.password} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login