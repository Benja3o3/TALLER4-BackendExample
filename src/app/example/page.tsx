"use client";
import React, { useEffect } from "react";

function page() {
    const [data, setData] = React.useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "http://localhost:3000/api/index?name=example"
            );
            const data = await response.json();
            setData(data);
            console.log("DATA DESDE EL FRONTE: ", data);
        };
        fetchData();
    }, []);
    return (
        <div>
            {data.length > 0 ? (
                <div>{JSON.stringify(data)}</div>
            ) : (
                <span>Loading</span>
            )}
        </div>
    );
}

export default page;
