<?php 

class Vehicle {
    protected $brand;
    
    public function getInfo() {
        return "Véhicule de marque {$this->brand}";
    }
}

class Car extends Vehicle {
    private $doors;
    
    public function getInfo() {
        return parent::getInfo() . " avec {$this->doors} portes";
    }
}

interface Loggable {
    public function log($message);
    public function getLogHistory();
}

class User implements Loggable {
    private $logs = [];
    
    public function log($message) {
        $this->logs[] = date('Y-m-d H:i:s') . ": $message";
    }
    
    public function getLogHistory() {
        return $this->logs;
    }
}

abstract class Database {
    protected $connection;
    
    // Méthode concrète
    public function closeConnection() {
        $this->connection = null;
    }
    
    // Méthodes abstraites
    abstract public function connect();
    abstract public function query($sql);
}

class MySQLDatabase extends Database {
    public function connect() { /* implémentation */ }
    public function query($sql) { /* implémentation */ }
}
