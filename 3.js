import axios from 'axios';

async function sendData() {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Привет',
        body: 'Это мой пост',
        userId: 1
    });
    console.log('Сервер ответил:', response.data);
}

sendData();