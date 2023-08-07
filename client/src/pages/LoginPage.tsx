import { LoginForm } from '../components/LoginForm'

export const LoginPage = () => {
    return (
        <div className="bg-blue-950 text-blue-100 relative fixed top-0 right-0 z-40 text-xl gap-10 px-10 py-5 items-center font-oswald flex relative w-full z-10">
            <h1>Login to talk trash!</h1>
            <LoginForm/>
        </div>
    )
}
