import React, { useState } from 'react';

function TestFile() {
    const [load, setLoad] = useState(true);

    return (
        <div>
            {load ? <p>loading.....</p> : <p>done....</p>}
        </div>
    );
}

export default TestFile;
