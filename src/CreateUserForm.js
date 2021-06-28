import { useState } from "react";

function CreateUserForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault()
        console.log(username, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="username"
                value={username}
                onChange={event => setUsername(event.target.value)}
            />
            <input 
                type="password"
                name="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
        </form>
    )
}

export default CreateUserForm;