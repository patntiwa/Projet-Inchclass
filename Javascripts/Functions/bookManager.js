class BookManager {
    constructor() {
        this.books = [];
        this.initEventListeners();
        this.renderBooks();
    }

    initEventListeners() {
        document.getElementById('bookForm').addEventListener('submit', this.handleAddBook.bind(this));
        document.getElementById('searchForm').addEventListener('submit', this.handleSearch.bind(this));
    }

    handleAddBook(e) {
        e.preventDefault();
        const title = document.getElementById('title').value.trim();
        const author = document.getElementById('author').value.trim();
        
        if (title && author) {
            this.books.push({ title, author, id: Date.now() });
            this.renderBooks();
            e.target.reset();
        }
    }

    handleSearch(e) {
        e.preventDefault();
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const filteredBooks = this.books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) || 
            book.author.toLowerCase().includes(searchTerm)
        );
        this.renderBooks(filteredBooks);
    }

    renderBooks(booksToRender = null) {
        const bookList = document.getElementById('bookList');
        bookList.innerHTML = '';

        const books = booksToRender || this.books;
        
        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow';
            bookElement.innerHTML = `
                <div class="flex justify-between items-center">
                    <div>
                        <h3 class="text-xl font-semibold">${book.title}</h3>
                        <p class="text-gray-600">${book.author}</p>
                    </div>
                    <button data-id="${book.id}" 
                            class="delete-btn text-red-500 hover:text-red-700 transition-colors">
                        Supprimer
                    </button>
                </div>
            `;
            bookList.appendChild(bookElement);
        });

        // Ajout des écouteurs pour la suppression
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => this.deleteBook(parseInt(btn.dataset.id)));
        });
    }

    deleteBook(id) {
        this.books = this.books.filter(book => book.id !== id);
        this.renderBooks();
    }
}

// Initialisation lorsque le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    new BookManager();
});