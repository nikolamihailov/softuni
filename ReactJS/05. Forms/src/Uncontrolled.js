import { useState, useEffect } from 'react';

import './App.css';

function App() {
    const [username, setUsername] = useState('Pesho');

    useEffect(() => {
        setTimeout(() => {
            setUsername('Gosho');
        }, 3000);
    }, []);

    const onUsernameChange = (e) => {
        console.log(e.target.value);
    };

    // const onSubmitClick = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.parentElement.previousSibling.children[1].value);
    // };

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        // const data = Object.fromEntries(formData);
        const username = formData.get('username');

        console.log(username);
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            defaultValue={username}
                            onChange={onUsernameChange}
                        />
                    </div>

                    <div>
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;
