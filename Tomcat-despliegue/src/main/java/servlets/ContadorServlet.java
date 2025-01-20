package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import utils.Util;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/contador")
public class ContadorServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        int visitas = Util.nuevaVisita();
        out.println("<h1>Esta página ha sido visitada " + visitas + " veces</h1>");
    }

}
