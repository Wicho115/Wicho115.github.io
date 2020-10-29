<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cifrado Cesar</title>
</head>
<body>
    Ingrese su cadena de texto a cifrar o descifrar
    <textarea id="cadena"></textarea>

    Ingrese el numero de pocisiones a mover
    <input type="number" id="desplazamiento" onpaste="return false;" ondrop="return false;" min="1">

    <p><input type="button" value="Cifrar" onclick="codificar()">
        <input type="button" value="Descifrar" onclick="decodificar()">
    </p>

    <div id="resultado"></div>

    <script src="js/logica.js"></script>
</body>
</html>
