import { Button } from "antd";
import { useEffect, useState } from "react";

let pagination = {
    skip:0,
    limit:5
}
const apiUrl = 'https://dummyjson.com/users';
export default function UserList()
{
    let [users,setUsers ] = useState([]);

    useEffect(()=>{
        console.log("Effect invoke on users change!!!");
    }, [users]);

    useEffect(()=>{
        return()=>{
            console.log("Effect invoke on end. Delete!!!");
        }   
    },[]);
    useEffect(()=>{
        console.log("Effect invoke on start!!!");
        LoadUsers();
    },[]);



    const LoadUsers=()=>{
        //const url = 'https://jsonplaceholder.typicode.com/users';
        const url = apiUrl + `?skip=${pagination.skip}&limit=${pagination.limit}`;
        fetch(url).then(res=> res.json()).then(data=>
            {
                console.log(data.users);
                //save users to array
                //setUsers(data.users);//users = data;
                setUsers([...users, ...data.users]);//users = data;
                console.log("Users ", users);
                pagination.skip += pagination.limit;
            });
    }


    return(
        <>
        <Button onClick={LoadUsers}>Load Users</Button>
        <h2>User List</h2>
        <ol>
            {users.map(u => <li key={u.id}> {u.firstName}  {u.lastName}. Phone : {u.phone}</li>)}
        </ol>
        <Button onClick={LoadUsers}>Show more Users .....</Button>
        
        </>
    );
}