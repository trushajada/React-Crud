import axios from "axios";
import React, { useEffect, useState  } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const [data , setdata] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/users')
        .then(res=> setdata(res.data))
        .catch(err=> console.log(err)
        )
    },[])

    return (
        <>
            <div className="home fixed w-full h-full">
                <div className="container mx-auto items-center justify-center  h-screen">
                    <h1 className="text-[45px] font-semibold text-center py-4 px-5">React Crude</h1>
                    <div className="add flex justify-end px-5 py-5 "> 
                    <Link to="/create" className="bg-slate-500 p-2 text-white font-semibold w-28 text-center text-lg">ADD +</Link>  

                    </div>
                        
                    
                        <table className="table-auto w-full 
                        border-collapse border border-gray-400">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th className="border-s-4">name</th>
                                    <th className="border-s-4">username</th>
                                    <th className="border-s-4">email</th>
                                    <th className="border-s-4">phone</th>
                                    <th className="border-s-4">website</th>
                                    <th className="border-s-4">Button</th>
                                 </tr>
                            </thead>
                            <tbody className="border border-gray-400 text-center  ">
                                {
                                   data.map((d , i)=>(
                                    <tr key={i} >
                                        <td className="border-s-4">{d.id}</td>
                                        <td className="border-s-4">{d.name}</td>
                                        <td className="border-s-4">{d.username}</td>
                                        <td className="border-s-4">{d.email}</td>
                                        <td className="border-s-4">{d.phone}</td>
                                        <td className="border-s-4">{d.website}</td>
                                        <td className="border-s-4">
                                        <button className="px-5 bg-blue-400 text-white me-5 font-semibold p-1">Read</button>
                                            <button className="px-5 bg-blue-600 text-white me-5 font-semibold p-1">Edit</button>
                                            <button className="bg-red-600 text-white px-5 font-semibold p-1">Delete</button>
                                        </td>
                                    </tr>
                                   ))
                                }
                            </tbody>
                        </table>
                     </div>
            </div>
        </>
    );
}
export default Home;    