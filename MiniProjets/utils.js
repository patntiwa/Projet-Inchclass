export function formatUser({ name, email, address }) {
    return `
        <div class="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800">${name}</h3>
            <p class="text-gray-500"><span class="font-medium text-gray-700">📧 Email:</span> ${email}</p>
            <p class="text-gray-600 text-sm"><span class="font-medium text-gray-700">📍 Ville:</span> ${address.city}</p>
        </div>
    `;
}

