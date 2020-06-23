import React, { useEffect, useState } from 'react';

function Clicky() {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch("/api/click").then(res => res.json())
            .then(data => setData(data.message))
    }, []);

    return (
        <div className="Clicky">
            <header className="Clicky-header">
                <h1>{data}</h1>
            </header>
        </div>
    )
}

export default Clicky;