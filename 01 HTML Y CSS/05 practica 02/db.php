<?php
 class db{
      private $host ="localhost:8080";
      private $dbname ="db_colegio"
      private $user = "root"
      private $pass = ""
      
      public function conexion():PDO{
          try {
               $PDO = new PDO("mysql:host = ".$this ->host.";dbname=".
               $this->dbname,username: $this->user,password: $this->pass);
               $PDO-> setAttribute(PDO::ATTR_ERRMORE, value:
               PDO::ERRMODE_EXCEPTION);
          } catch (PDOException $e) {
               throw new Exception ("Error al conectar la base de datos" .$e->getMessage());
               
          }
      }
 }
?>
