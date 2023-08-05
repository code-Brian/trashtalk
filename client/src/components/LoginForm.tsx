import { useEffect, useState } from 'react'
import axios from 'axios'

export const LoginForm = () => {
    const handleLoginSubmit = (e:any) => {
        e.preventDefault()
        console.log("Login attempt!")
    }

    const handleFormDataChange = (e:any) => {
        console.log(e);
        console.log("form data updated!!")
    }

    return (
        <form onSubmit={handleLoginSubmit}>
            <label>Email</label>
            <input type="email" onChange={handleFormDataChange}/>
            <label>Password</label>
            <input type="password" onChange={handleFormDataChange}/>
            <button>Login</button>
        </form>
    )
}
