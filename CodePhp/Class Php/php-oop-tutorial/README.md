# PHP OOP Tutorial

This project is designed to explain the concept of magic methods in PHP and the fundamentals of Object-Oriented Programming (OOP). It includes a visual interface built with HTML and styled using Tailwind CSS.

## Project Structure

```
php-oop-tutorial
├── src
│   ├── classes
│   │   ├── MagicMethods.php
│   │   └── OOPConcepts.php
│   ├── examples
│   │   └── index.php
│   └── public
│       ├── index.html
│       └── styles
│           └── main.css
├── composer.json
├── package.json
├── tailwind.config.js
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd php-oop-tutorial
   ```

2. **Install PHP dependencies:**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

4. **Build Tailwind CSS:**
   ```bash
   npm run build
   ```

5. **Run the PHP server:**
   ```bash
   php -S localhost:8000 -t src/public
   ```

6. **Access the application:**
   Open your browser and navigate to `http://localhost:8000/index.html`.

## Concepts Covered

- **Magic Methods in PHP:** 
  - Demonstrates the use of `__get`, `__set`, and `__call` magic methods in the `MagicMethods` class.

- **Fundamentals of OOP:**
  - Explains encapsulation, inheritance, and polymorphism in the `OOPConcepts` class.

- **Examples:**
  - The `index.php` file provides practical examples of how to use the defined classes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.