import axios from "axios";
import React, { useEffect } from "react";

const Home = () => {

    useEffect(()=>{
        axios.get('http://localhost:3001/users')
        .then(res=> console.log(res.data))
        .catch(err=> console.log(err)
        )
    })
    return (
        <>
            <div className="home">
                <div className="container mx-auto flex justify-center  h-screen">
                    <h1 className="text-[45px] font-semibold">React Crude</h1>
                </div>
            </div>
        </>
    );
}
export default Home;