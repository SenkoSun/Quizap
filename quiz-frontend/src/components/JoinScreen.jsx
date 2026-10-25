import { useState } from 'react';

function JoinScreen() {
    const [name, setName] = useState(""); 
    return (
        <div>
            <h1>What should we call you?</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => (1)}>
                Let's play!
            </button>
            <p>Привет, {name}!</p>
        </div>
    );
}

export default JoinScreen;