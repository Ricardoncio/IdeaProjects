<%@ page contentType="text/html; charset=UTF-8" %>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="refresh" content="1">
    <title>Reloj</title>
</head>
<body>

    <h1 id="mensaje"></h1>

<script>
    async function obtenerMensaje() {
        const response = await fetch('./hora');
        const mensaje = await response.text();
        document.getElementById('mensaje').innerText = "Hora actual: " + mensaje;
    }
    obtenerMensaje();
</script>
</body>
</html>