import axios from 'axios';

async function checkOnline() {
    if (!navigator.onLine) {
        console.log('Вы офлайн! Проверьте интернет.');
        return;
    }

    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Интернет есть, данные получены:', res.data);
    } catch (e) {
        console.log('Ошибка при запросе:', e.message);
    }
}

checkOnline();