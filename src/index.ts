import './style.css';

// Определение интерфейса для данных из JSON.
interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const URL = 'http://localhost:3000/contacts';

// Функция для получения данных из JSON.
async function getAllContacts(): Promise<Contact[]> {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        const data: Contact[] = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при получении данных: ', error);
        throw error;
    }
}

// Вызов функции для получения данных из JSON и вывод данных в консоль.
(async () => {
    try {
        const contacts = await getAllContacts();
        console.log('Список контактов: ', contacts);
    } catch (error) {
        console.error('Ошибка: ', error);
    }
})();