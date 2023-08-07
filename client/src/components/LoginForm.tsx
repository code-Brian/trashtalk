import { useState } from 'react'
import axios from 'axios'

interface FormData {
    email: string
    password: string
}

// "Content-type": "multipart/form-data"

const apiClient = axios.create({
    baseURL: "/api",
    headers: {
        "Content-type" : "application/json",
    },
})

const loginRequest = async (FormData: FormData) => {
    return apiClient
    .post("/login", FormData)
    .then((res) => res.data)
    .catch((err) => {
        throw err.response
    })

}

export const LoginForm: React.FC = () => {
    const [ formData, setFormData ] = useState<FormData>({
        email: '',
        password: ''
    })


    const handleLoginSubmit = async (e: any) => {
        e.preventDefault()
        console.log(formData)
        console.log("Login attempt!")
        const res: any = await loginRequest(formData);
        console.log(res)
    }

    const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(formData)
    }

    return (
        <form onSubmit={handleLoginSubmit}>
            <div>
                <label className="mr-4">Email</label>
                <input type="email" name="email" onChange={handleFormDataChange} value={formData.email}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={handleFormDataChange} value={formData.password}/>
            </div>
            <button>Login</button>
        </form>
    )
}
