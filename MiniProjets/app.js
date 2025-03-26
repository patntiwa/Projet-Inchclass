import { fetchUsers } from '/api.js';
import { formatUser } from '/utils.js';

async function displayUsers() {
    const users = await fetchUsers();
    const container = document.getElementById('users-container');

    container.innerHTML = users.map(user => formatUser(user)).join('');
}

displayUsers();
