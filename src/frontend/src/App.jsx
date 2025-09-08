import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(response => setMessage(response.data.message))
            .catch(error => console.error('Erro ao conectar à API:', error));
    }, []);

    return (
        <div>
            <h1>Front-End com React</h1>
            <p>Mensagem do Back-End: {message}</p>
        </div>
    );
}

export default App;
