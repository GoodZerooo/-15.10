import axios from 'axios';

async function getData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/invalid-url');
        console.log(response.data);
    } catch (error) {
        console.log('Произошла ошибка:', error.message);
    }
}

getData();