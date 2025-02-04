import React, { useState, useEffect } from 'react';
const BASE_URL = process.env.REACT_APP_API_URL;
console.log("API", BASE_URL);
const Show = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = `${BASE_URL}/user/all`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                    },
                });
                const result = await response.json();
                console.log("result is:", result);
                if (response.ok) {
                    setData(result.all || []);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Getting data from backend.</h1>
            <h1>User List</h1>
            {data.map((fdata, ind) => (
                <div key={ind}>
                    <p>Name: {fdata.name}</p>
                    <p>Email: {fdata.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Show;
