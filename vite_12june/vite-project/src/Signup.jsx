import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState('')
    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name, email, password, phone, age,
        }
        localStorage.setItem("userData", JSON.stringify(data))
        alert('data saved')
        setEmail('')
        setPassword('')
        setName('')
        setPhone('')
        setAge('')
        Navigate('/Loginform')
    }

    const handleClear = () => {
        localStorage.clear();
        alert('All local storage data cleared!');
    };

    return (
        <div>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type='email'
                    placeholder='enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type='tel'
                    placeholder='enter phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type='number'
                    placeholder='enter age'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </form>
            <button type="submit"> submit </button>
            <button onClick={handleClear}>
                Clear Data
            </button>
        </div>
    )
}

export default Signup