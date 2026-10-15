import axios from 'axios';

async function crudDemo() {
    const url = 'https://jsonplaceholder.typicode.com/todos';

    // 1. Читать (GET)
    const getRes = await axios.get(`${url}/1`);
    console.log('Получили:', getRes.data);

    // 2. Создать (POST)
    const postRes = await axios.post(url, { title: 'Новая задача', completed: false });
    console.log('Создали:', postRes.data);

    // 3. Обновить (PATCH)
    const patchRes = await axios.patch(`${url}/1`, { completed: true });
    console.log('Обновили:', patchRes.data);

    // 4. Удалить (DELETE)
    const deleteRes = await axios.delete(`${url}/1`);
    console.log('Удалили, статус:', deleteRes.status);
}

crudDemo();