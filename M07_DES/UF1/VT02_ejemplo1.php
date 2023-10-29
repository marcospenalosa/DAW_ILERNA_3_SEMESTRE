<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo 1: HTML y PHP</title>
</head>
<body>
    <ul>
        <?php echo "<h1><a href='VT02_ejemplo2.php'>VT02_ejemplo2.php</a></h1>"?>
        <!-- Comentario HTML -->
        <!-- Se puede inscrutar el PHP directamente desde el HTML -->
        <li><?php echo "Lo <a href='holaMundo.php'>primero</a>" ?></li>
        <li><?php echo "Lo segundo" ?></li>
    </ul>
    
<?php
    # Comentario PHP - Cuando hay más de una línea de código se necesita cerrar con el ";"
    echo    "<ol>
                <li>Lo tercero</li>
                <li>Lo cuarto</li>
            </ol>";
    echo "<p>Segunda línea de código</p>"
?>

</body>
</html>