import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

public class LoginServlet extends HttpServlet {

protected void doPost(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {

String regno = request.getParameter("regno");
String password = request.getParameter("password");

try {
Connection con = DBConnection.getConnection();

PreparedStatement ps = con.prepareStatement(
"SELECT * FROM exam_students WHERE regno=? AND password=?"
);
ps.setString(1, regno);
ps.setString(2, password);

ResultSet rs = ps.executeQuery();

if (rs.next()) {
HttpSession session = request.getSession();
session.setAttribute("regno", regno);
response.sendRedirect("exam.jsp");
} else {
response.getWriter().println("Invalid login");
}

rs.close();
ps.close();
con.close();

} catch (Exception e) {
response.getWriter().println("Error: " + e.getMessage());
}
}
}