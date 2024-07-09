import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
        useEffect(()=>{
            axios('https://jsonplaceholder.typicode.com/posts')
            .then(({data}) =>{
                setUsers(data);
            })
        }, [])
    return (
        <div>
            <h1 className='h1'>Page 2</h1>
            <button onClick={() =>{
                navigate(-1)
            }}>go back</button>
            {
                users.map(item=>{
                    return <h1 key={item.title}>{item.title}</h1>
                })
            }
        </div>
    )
}

export default Page2;