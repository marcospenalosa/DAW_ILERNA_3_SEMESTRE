<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo 2: Variables y tipos de datos</title>
</head>
<body>  
    <?php
        echo "<h1><a href='VT02_ejemplo1.php'>VT02_ejemplo1.php</a></h1>";
        echo "<h1><a href='VT02_ejemplo3.php'>VT02_ejemplo3.php</a></h1>";
        # Todas las variables empiezan por $
        $texto = "caracteres";
        $entero = 2021;
        $decimal = 99.9;

        # Para definir una constante --> define(nombreConstante, valor)
        define("constante", 100);

        # Para concatenar texto(unirlo) se usa el punto "."
        echo "Esto es una cadena de " . $texto . "</br></br>";

        echo "El " . $entero . " es un número entero y podemos operar con él, como por ejemplo: "
        . (int) ($entero + constante) . "</br></br>";

        echo "Y este " . $decimal . " es un número de coma flotante (decimal) y también permite operaciones como "
        . round($decimal) . "</br></br>"
    ?>
</body>
</html>