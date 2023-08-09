import { useState } from 'react'
import {useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

export const RegisterForm: React.FC = () => {
    const navigate = useNavigate()
    
    const apiClient = axios.create({
        baseURL: "/api",
        headers: {
        "Content-Type": "application/json",
        },
    })

    const [newUser, setNewUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirm:""
    })

    const [errors, setErrors] = useState({
        firstName: [],
        lastName: [],
        email: [], 
        password: [],
        confirm: []
    })

    const userSignUpRequest = async (newUser: any) => {
        apiClient
        .post(`register`, newUser)
        .then((res) => res.data)
        .catch((err) => { throw err.response})
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            await userSignUpRequest(newUser)
        } catch(err:any) {
            console.log(err)
            setErrors({
                firstName: err.data.errors.FirstName,
                lastName: err.data.errors.LastName,
                email: err.data.errors.Email,
                password: err.data.errors.Password,
                confirm: err.data.errors.Password
            })
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First name</label>
                <input
                type="text" 
                name="firstName"
                value={newUser.firstName}
                onChange={handleChange}/>
            </div>
            <div>
                <label>Last name</label>
                <input 
                type="text"
                name="lastName"
                value={newUser.lastName}
                onChange={handleChange}/>
            </div>
            <div>
                <label>Email</label>
                <input 
                type="email" 
                name="email"
                value={newUser.email}
                onChange={handleChange}/>
            </div>
            <div>
                <label>Password</label>
                <input 
                type="password" 
                name="password"
                value={newUser.password} 
                onChange={handleChange}/>
            </div>
            <div>
                <label>Confirm</label>
                <input 
                type="password" 
                name="confirm"
                value={newUser.confirm}
                onChange={handleChange}/>
            </div>
            <button>Register</button>
        </form>
    )
}
