<?php
session_start();
require_once '../config/Database.php';
require_once '../controllers/AuthController.php';
require_once '../controllers/HomeController.php';

// Router simple
$request = $_SERVER['REQUEST_URI'];
$path = parse_url($request, PHP_URL_PATH);

// Routes
switch ($path) {
    case '/':
        $controller = new HomeController();
        $controller->index();
        break;

    case '/login':
        $controller = new AuthController();
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $controller->login();
        } else {
            $controller->showLoginForm();
        }
        break;

    case '/register':
        $controller = new AuthController();
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $controller->register();
        } else {
            $controller->showRegisterForm();
        }
        break;

    case '/logout':
        $controller = new AuthController();
        $controller->logout();
        break;

    default:
        http_response_code(404);
        echo "Page not found";
        break;
}
