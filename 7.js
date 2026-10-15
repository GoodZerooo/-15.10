import axios from 'axios';

async function retryRequest(url, retries = 6) {
    try {
        return await axios.get(url);
    } catch (error) {
        if (retries > 0) {
            console.log(`Не получилось, пробуем еще раз... Осталось попыток: ${retries}`);
            return retryRequest(url, retries - 1);
        }
        throw error;
    }
}

retryRequest('https://jsonplaceholder.typicode.com/users/12');
