import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch(' https://api.github.com/users/mdkaifraza42661')
    //         .then(res => res.json())
    //         .then(data =>
    //             setdata(data)
    //         )
    // }, [])
    return (
        <>
            <div className=' text-center bg-gray-600 min-w-full py-5 capitalize text-lg font-medium'>github : {data.name}</div>
            <div className=' w-full flex align-middle justify-center py-5 '>

                <img className=' rounded-lg border-spacing-1 border-cyan-400' src={data.avatar_url} alt="" />
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch(' https://api.github.com/users/mdkaifraza42661')
    return response.json()
}