import { useEffect, useState } from 'react'
import axios from 'axios'

export const Dummy = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [pageLoadCount, setPageLoadCount] = useState(0)
    const [testData,setTestData] = useState({
        firstName: "",
        lastName: "",
        email:"",
    })

    useEffect(() => {
        if(!isLoaded)
        {
            axios.get("/api/test")
            .then((res:any) => {setTestData(res.data)})
            .catch((err:any) => console.log(err))
            setPageLoadCount(pageLoadCount+1)
            setIsLoaded(true)
        }
    }, [])



    return (
        <>
            <h1>Hello Reacc with data from .NET!</h1>
            <p>{testData.firstName}</p>
            <p>{testData.lastName}</p>
            <p>{testData.email}</p>
        </>
    )
}
