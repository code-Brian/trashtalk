import { useEffect, useState } from 'react'
import axios from 'axios'

export const Dummy = () => {
    const [testData,setTestData] = useState({
        FirstName: "",
        LastName: "",
        Email:"",
    })

    useEffect(() => {
        axios.get("/api/dummyData")
        .then((res:any) => {setTestData(res.data)})
        .catch((err:any) => console.log(err))
    }, [])

    return (
        <>
            <h1>Hello Reacc with data from .NET!</h1>
            <p>{testData.FirstName}</p>
            <p>{testData.LastName}</p>
            <p>{testData.Email}</p>
        </>
    )
}
