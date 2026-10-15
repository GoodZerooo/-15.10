import axios from 'axios';

async function getBoth() {
    const [users, posts] = await Promise.all([
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/posts')
    ]);

    console.log('Пользователей:', users.data.length);
    console.log('Постов:', posts.data.length);
}

getBoth();