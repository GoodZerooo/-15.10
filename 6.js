import axios from 'axios';

async function getWithTimeout() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            timeout: 2000 
        });
        console.log(response.data);
    } catch (error) {
        console.log('Запрос занял слишком много времени или отменился:', error.message);
    }
}

getWithTimeout();
