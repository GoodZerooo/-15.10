import axios from 'axios';
async function checkAll() {
    const urls = [
        'https://jsonplaceholder.typicode.com/users/1',
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/bad-url-1', // упадет с ошибкой
        'https://jsonplaceholder.typicode.com/comments/1',
        'https://jsonplaceholder.typicode.com/bad-url-2'  // упадет с ошибкой
    ];

    const results = await Promise.allSettled(urls.map(url => axios.get(url)));

    results.forEach((res, i) => {
        if (res.status === 'fulfilled') {
            console.log(`Запрос ${i + 1}: Успех!`);
        } else {
            console.log(`Запрос ${i + 1}: Ошибка!`);
        }
    });
}

checkAll();