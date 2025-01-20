<%@ page contentType="text/html; charset=UTF-8" %>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Nombre</title>
</head>
<body>
    <form action="index.jsp" method="get">
        <label for="input1">Escriba aquí su nombre:</label>
        <input type="text" name="name" id="input1">
        <input type="submit" value="Enviar :)">
    </form>

    <%
        String nombre = request.getParameter("name");
        if (nombre != null && !nombre.isBlank()) { %>
            <h1>¡Hola <%= nombre %>!</h1>
            <h2>Bienvenido a nuestra web</h2>
        <%}
    %>
</body>
</html>