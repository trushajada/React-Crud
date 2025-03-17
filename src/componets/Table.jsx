import React, { useEffect, useState } from "react";
import Employdata from "../Employdata";

const Table = () => {

    const [employdata, setEmploydata] =useState([]);

    useEffect(()=>{
        setEmploydata(employdata)
    },[]);

    return(
        <>
            <table>
                <thead>
                    <tr className="table text-black">
                        <th>
                            id
                        </th>
                        <th>
                            firstname
                        </th>
                        <th>
                            lastname
                        </th>
                        <th>
                            age
                        </th>   
                        <th>
                            salary
                        </th>
                        <th>
                            department
                        </th>
                    </tr>
                </thead>
            </table>
        </>
    )
}
export default Table;