<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo 3: Insertar código PHP en cualquier parte</title>
    <style type="text/css">
        img{
            width: 200px;
            height: 200px;
        }
    </style>
</head>
<body>
    <h1>Ejemplo 3: Se puede insertar código PHP en cualquier parte</h1>

    <?php
        # En este caso, es obligatorio usar las dobles comillas ""
        # para poder poner en el href las simples, puesto que el HTML las necesita
        # Se podría hacer al revés también.
        echo "<h1><a href='VT02_ejemplo2.php'>VT02_ejemplo2.php</a></h1>";
        
        # Se puede definir código PHP en cualquier parte del fichero
        $direcion = "VT02_ejemplo2";
        $extension = ".php";
        $imagen = "psyduck.webp"
    ?>
    <!-- Se puede seguir programando en HTML y seguir insertado código PHP-->
    <a href="<?php echo $direcion . $extension ?>">Enlace formado con variables a VT02.ejemplo2.php</a>
    </br></br>
    <p>Dirección de la imagen dentro de una variable</p>
    <img src="<?php echo $imagen ?>">
</body>
</html>