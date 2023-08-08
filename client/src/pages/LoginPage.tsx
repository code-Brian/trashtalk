import { LoginForm } from '../components/LoginForm'

export const LoginPage = () => {
    return (
        <div className="bg-emerald-200 w-screen h-screen grid grid-cols-5 grid-rows-5">
            <div className="bg-emerald-300 col-start-3 col-end-3 row-start-2 row-end-2 flex flex-col justify-center items-center rounded shadow py-1">
                <h1 className="font-bold mt-10">Login to talk trash!</h1>
                <LoginForm/>
            </div>
        </div>
    )
}
