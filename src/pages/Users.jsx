import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Users = ({setUser}) => {
    const {profile, token} = useSelector((state)=>state.auth)

    const [users, setUsers] = useState([])
	const [filterUser, setFilterUsers] = useState([])
 	const [input, setInput] = useState("")

    const fetchUsers = async()=>{
        try {
            let headers = {
                'Authorization': `Bearer ${token}`,
				'content-type': 'application/json'
            }
			let res = await axios.get("http://localhost:4000/user/all", {
                headers: headers
            });
			if (res.status === 200) {
				setUsers(res.data.data)
				setFilterUsers(res.data.data)
			}
		} catch (e) {
			console.log(e);
			toast.error(e.response?.data?.message || "Server Down")
		}
    }

    useEffect(()=>{
        fetchUsers()
    },[])

	const searchData =()=>{
		let us = (users.filter((user)=>{
			return user.name.toLowerCase().includes(input.toLowerCase())
		}))
		setFilterUsers(us)
	}

	useEffect(()=>{
		searchData()
	}, [input])

 	return (
		<div>
			<div className="text-muted m-2">
				<input className="form-control" placeholder="Search or start a new chat" onChange={(e)=>setInput(e.target.value)}/>
			</div>
			<ul className="list-group list-group-flush pe-auto">
				{filterUser.map((user, index)=>(
					user.user_id!=profile.user_id ? <li className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>{setUser(user)}} key={index}>
						{user.name}
					<span className="badge bg-primary rounded-pill">14</span>
					</li>: null 
					
				))}

			</ul>
		</div>
	);
};

export default Users;
