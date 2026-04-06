<!DOCTYPE html>
<html>
<head>
<title>Result</title>
</head>
<body>
<h2>Exam Result</h2>

<%
String regno = (String) request.getAttribute("regno");
String name = (String) request.getAttribute("name");
Integer score = (Integer) request.getAttribute("score");
%>

<%
if (score != null) {
%>
<p><b>Register Number:</b> <%= regno %></p>
<p><b>Name:</b> <%= name %></p>
<p><b>Score:</b> <%= score %></p>
<%
} else {
%>
<p>No result available</p>
<%
}
%>

<br>
<a href="logout.jsp">Logout</a>
</body>
</html>