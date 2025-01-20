<%@ page contentType="text/html; charset=UTF-8" %>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Random</title>
</head>
<body>
    <% int rng = (int)(Math.random() * 100 + 1); %>
    <form action="random.jsp" method="post">
        <p>Número aleatorio: <%= rng %></p>
        <input type="submit" value="Cambiar :)">
    </form>
</body>
</html>