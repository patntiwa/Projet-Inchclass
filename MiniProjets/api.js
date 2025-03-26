export async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Erreur lors du chargement des utilisateurs');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}
