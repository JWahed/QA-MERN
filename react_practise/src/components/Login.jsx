import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState("username");
    const [pass, setPass] = useState("password");

    return(
        <>
            <form>
                <label>Username:</label>
                <input name="username" type="text" value={user} onChange={(event) => setUser(event.target.value)}></input>
                <label>Password:</label>
                <input name="password" type="text" value={pass} onChange={(event) => setPass(event.target.value)}></input>
                <br/>
                <button>Submit</button>
            </form>
        </>
    );
};

export default Login;
