<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
<title>Exam</title>
</head>
<body>
<h2>Exam</h2>

<form action="submitExam" method="post">
<%
String regno = (String) session.getAttribute("regno");

if (regno == null) {
response.sendRedirect("login.jsp");
return;
}

Connection con = null;
Statement stmt = null;
ResultSet rs = null;

try {
Class.forName("com.mysql.cj.jdbc.Driver");
con = DriverManager.getConnection(
"jdbc:mysql://localhost:3306/webtechdb?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC",
"root",
"viswaa_gs"
);

stmt = con.createStatement();
rs = stmt.executeQuery("SELECT * FROM questions");

while (rs.next()) {
%>
<p>
<b><%= rs.getInt("qid") %>. <%= rs.getString("question") %></b><br>
<input type="radio" name="q<%= rs.getInt("qid") %>" value="<%= rs.getString("option1") %>" required> <%= rs.getString("option1") %><br>
<input type="radio" name="q<%= rs.getInt("qid") %>" value="<%= rs.getString("option2") %>"> <%= rs.getString("option2") %><br>
<input type="radio" name="q<%= rs.getInt("qid") %>" value="<%= rs.getString("option3") %>"> <%= rs.getString("option3") %><br>
<input type="radio" name="q<%= rs.getInt("qid") %>" value="<%= rs.getString("option4") %>"> <%= rs.getString("option4") %><br>
</p>
<%
}
} catch (Exception e) {
out.println("Error: " + e.getMessage());
} finally {
if (rs != null) try { rs.close(); } catch (Exception e) {}
if (stmt != null) try { stmt.close(); } catch (Exception e) {}
if (con != null) try { con.close(); } catch (Exception e) {}
}
%>

<input type="submit" value="Submit">
</form>
</body>
</html>