import { useEffect, useState } from "react"
import './Friends.css'
import Friend from "./Friend";

export default function Friends(){

    const [Friends, setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))

    },[])
    return(
        <div className="box">
            <h3>Friends: {Friends.length}</h3>
            {
                Friends.map(Friend => <Friend
                Friend={Friend}></Friend>)
            }
        </div>
    )
}