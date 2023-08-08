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
        <form onSubmit={handleLoginSubmit} className="grid grid-cols-5 grid-rows-5">
        <div className="col-start-2 col-end-5 row-start-2 row-end-2 grid grid-cols-2 mb-3">
            <label className="text-left font-bold">Email</label>
            <input className="rounded px-3" type="email" name="email" onChange={handleFormDataChange} value={formData.email}/>
        </div>
        <div className="col-start-2 col-end-5 row-start-3 row-end-3 grid grid-cols-2 mb-3">
            <label className="text-left font-bold">Password</label>
            <input className="rounded px-3" type="password" name="password" onChange={handleFormDataChange} value={formData.password}/>
        </div>
        <button className="col-start-3 col-end-3 row-start-4 row-end-4 border border-slate-600 rounded shadow hover:bg-blue-300">Login</button>
    </form>
    )
}
