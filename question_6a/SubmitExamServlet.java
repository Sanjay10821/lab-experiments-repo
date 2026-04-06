import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

public class SubmitExamServlet extends HttpServlet {

protected void doPost(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {

HttpSession session = request.getSession(false);

if (session == null || session.getAttribute("regno") == null) {
response.sendRedirect("login.jsp");
return;
}

String regno = (String) session.getAttribute("regno");
int score = 0;

Connection con = null;
Statement stmt = null;
ResultSet rs = null;
PreparedStatement psInsert = null;
PreparedStatement psName = null;
ResultSet rsName = null;

try {
con = DBConnection.getConnection();

stmt = con.createStatement();
rs = stmt.executeQuery("SELECT qid, answer FROM questions");

while (rs.next()) {
int qid = rs.getInt("qid");
String correct = rs.getString("answer");
String user = request.getParameter("q" + qid);

if (correct != null && correct.equals(user)) {
score++;
}
}

psInsert = con.prepareStatement(
"INSERT INTO exam_results(regno, score) VALUES(?, ?)"
);
psInsert.setString(1, regno);
psInsert.setInt(2, score);
psInsert.executeUpdate();

String name = "";

psName = con.prepareStatement(
"SELECT name FROM exam_students WHERE regno=?"
);
psName.setString(1, regno);
rsName = psName.executeQuery();

if (rsName.next()) {
name = rsName.getString("name");
}

request.setAttribute("regno", regno);
request.setAttribute("name", name);
request.setAttribute("score", score);

request.getRequestDispatcher("result.jsp").forward(request, response);

} catch (Exception e) {
response.getWriter().println("Error: " + e.getMessage());
} finally {
try { if (rsName != null) rsName.close(); } catch (Exception e) {}
try { if (psName != null) psName.close(); } catch (Exception e) {}
try { if (rs != null) rs.close(); } catch (Exception e) {}
try { if (stmt != null) stmt.close(); } catch (Exception e) {}
try { if (psInsert != null) psInsert.close(); } catch (Exception e) {}
try { if (con != null) con.close(); } catch (Exception e) {}
}
}
}