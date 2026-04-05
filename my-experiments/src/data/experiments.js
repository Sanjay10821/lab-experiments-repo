export const experimentsData = [
  {
    id: 'exp1',
    title: 'Exp 1',
    image: '/south_india_map.png',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>South India Image Map</title>
    <style>
        .state { display: none; }
        .state:target { display: block; }
        ul { list-style-position: inside; }
    </style>
</head>
<body>
<center>
    <h1>SOUTH INDIA MAP</h1>
    <p>Click on any state to view details</p>
    <img src="south_india_map.png" usemap="#image-map">
</center>
<map name="image-map">
    <area shape="poly" coords="341,97,350,101,334,108,316,124,307,139,283,133,281,153,256,153,230,168,229,195,225,233,229,251,236,267,241,283,249,315,267,327,281,340,301,355,320,360,325,351,339,355,355,341,356,310,376,318,387,297,373,280,343,279,330,276,325,264,345,260,321,245,319,226,335,225,327,213,334,199,336,190,350,194,348,108" href="#karnataka">
    <area shape="poly" coords="249,320,257,339,270,361,284,380,286,392,300,419,301,437,303,460,317,486,330,491,330,469,337,444,334,411,319,412,319,398,311,389,310,374,297,361,304,355" href="#kerala">
    <area shape="poly" coords="442,293,451,294,451,315,441,343,430,365,433,381,440,409,434,416,422,415,410,422,410,438,396,451,400,455,365,472,365,496,347,498,329,492,334,467,341,442,339,420,333,411,319,401,317,390,312,379,302,363,339,352,357,347,352,328,357,310,378,317,391,306,418,294" href="#tamilnadu">
    <area shape="poly" coords="351,100,352,121,352,128,347,140,348,152,349,170,351,180,350,192,359,195,374,196,384,190,394,193,414,186,416,169,444,165,448,155,463,162,465,146,490,142,506,124,477,108,454,87,433,73,441,54,417,53,394,46,384,42,367,64" href="#telangana">
    <area shape="poly" coords="530,94,556,98,558,83,577,70,597,81,616,67,589,99,567,123,548,144,526,155,511,174,489,181,476,201,464,194,444,222,448,259,448,282,438,293,421,298,400,306,383,311,379,286,368,272,343,274,343,259,320,240,331,217,334,197,369,199,411,187,418,167,467,159,465,146,489,144,508,124" href="#andhra">
</map>
<hr>
<center><h2>STATE DETAILS</h2></center>
<div id="karnataka" class="state">
<center>
    <h3>Karnataka</h3>
    <p>Karnataka is a major state known for IT and heritage.</p>
    <ul>
        <li>Capital: Bengaluru</li>
        <li>Language: Kannada</li>
        <li>Famous for: Mysore Palace</li>
    </ul>
</center>
</div>
<div id="kerala" class="state">
<center>
    <h3>Kerala</h3>
    <p>Kerala is known as God’s Own Country.</p>
    <ul>
        <li>Capital: Thiruvananthapuram</li>
        <li>Language: Malayalam</li>
        <li>Famous for: Backwaters</li>
    </ul>
</center>
</div>
<div id="tamilnadu" class="state">
<center>
    <h3>Tamil Nadu</h3>
    <p>Tamil Nadu is rich in culture and temples.</p>
    <ul>
        <li>Capital: Chennai</li>
        <li>Language: Tamil</li>
        <li>Famous for: Bharatanatyam</li>
    </ul>
</center>
</div>
<div id="telangana" class="state">
<center>
    <h3>Telangana</h3>
    <p>Telangana was formed in 2014.</p>
    <ul>
        <li>Capital: Hyderabad</li>
        <li>Language: Telugu</li>
        <li>Famous for: Charminar</li>
    </ul>
</center>
</div>
<div id="andhra" class="state">
<center>
    <h3>Andhra Pradesh</h3>
    <p>Andhra Pradesh is a coastal state.</p>
    <ul>
        <li>Capital: Amaravati</li>
        <li>Language: Telugu</li>
        <li>Famous for: Kuchipudi</li>
    </ul>
</center>
</div>
</body>
</html>`
  },
  {
    id: 'exp2',
    title: 'Exp 2:',
    code: `style.css

body {
    font-family: "Segoe UI", Arial, sans-serif;
    background-color: #f4f6f8;
    margin: 0;
    padding: 40px;
    color: #333;
}
.container {
    max-width: 850px;
    margin: auto;
    background: #ffffff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.08);
}
header {
    text-align: center;
}
h1 {
    margin-bottom: 5px;
    letter-spacing: 1px;
}
.summary {
    margin-top: 15px;
    font-style: italic;
    color: #555;
}
h2 {
    color: #2c3e50;
    border-bottom: 2px solid #2c3e50;
    padding-bottom: 6px;
}
ul {
    margin-top: 8px;
}
li {
    margin-bottom: 6px;
}
.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.skills li {
    background-color: #e3f2fd;
    padding: 6px 12px;
    border-radius: 20px;
    list-style: none;
    font-size: 14px;
}
.date {
    font-size: 14px;
    color: #666;
}
.cont-grade {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

sanjay_resume.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sanjay R - Resume</title>
    <!-- External CSS -->
    <link rel="stylesheet" href="style.css">
    <!-- Internal CSS -->
    <style>
        section {
            margin-top: 30px;
        }
        .sub {
            font-weight: bold;
            color: #34495e;
        }
        .role {
            margin-top: 10px;
        }
    </style>
</head>
<body>
<div class="container">
<header>
    <h1>SANJAY R</h1>
    <p class="center">
        BE Computer Science and Engineering (III Year)<br>
        <span style="color:#1a73e8; font-weight:bold;">sanjay10821@gmail.com</span> |
        9894710821<br>
        Coimbatore, India
    </p>
    <p class="summary">
        Dedicated pre-final year Computer Science Engineering student with strong
        problem-solving skills and a solid foundation in software development,
        eager to contribute to impactful projects.
    </p>
</header>
<section>
    <h2>Education</h2>
    <div class="role">
        <div class="cont-grade">
            <p class="sub">BE Computer Science and Engineering</p>
        <p><strong>CGPA:</strong> 8.53 (up to 4th semester)</p>
        </div>
        <p style="margin-top: 0;">PSG Institute of Technology and Applied Research</p>
    </div>
    <div class="role">
        <div class="cont-grade">
            <p class="sub">Grade 12</p>
            <p><strong>Score:</strong> 95.2%</p>
        </div>
        <p style="margin-top: 0;">Adharsh Vidhyalaya Matric Hr Sec School</p>
    </div>
</section>
<section>
    <h2>Internships</h2>
    <div class="role">
        <p class="sub">Research Intern — IIITDM Kancheepuram</p>
        <p class="date">Aug 2025 – Present</p>
        <ul>
            <li>Conducting research on advanced cryptographic algorithms to enhance data security and integrity.</li>
        </ul>
    </div>
    <div class="role">
        <p class="sub">AI/ML and IoT Intern — Gustovalley Technovations</p>
        <p class="date">Aug 2024 – Sep 2024</p>
        <ul>
            <li>Developed intelligent data-driven solutions integrating machine learning with real-time IoT systems.</li>
        </ul>
    </div>
</section>
<section>
    <h2>Projects</h2>
    <div class="role">
        <p class="sub">Cryptographic Data Security Framework</p>
        <ul>
            <li>Designed secure communication using matrix encryption, Morse code encoding, and RSA.</li>
            <li><i>Technologies:</i> Arduino, Morse Code, Matrix Encryption, RSA</li>
        </ul>
    </div>
    <div class="role">
        <p class="sub">AI-Driven EV Infrastructure Optimizer</p>
        <ul>
            <li>Developed an AI-driven solution to improve EV charging accessibility and trip efficiency.</li>
            <li><i>Technologies:</i> ESP32, Raspberry Pi, RFID, OLED Display</li>
        </ul>
    </div>
</section>
<section>
    <h2>Skills</h2>
    <ul class="skills">
        <li>C</li>
        <li>Python</li>
        <li>Flutter</li>
        <li>MySQL</li>
        <li>Computer Networks</li>
        <li>DBMS</li>
        <li>OOP</li>
    </ul>
</section>
<section>
    <h2>Publications</h2>
    <ul>
        <li>
            <strong>Enhancing Fetal Distress Prediction Using TabNet–XGBoost Ensemble</strong><br>
            International Conference on Next Generation Computing Systems (ICNGCS–2025)
        </li>
    </ul>
</section>
<section>
    <h2>Hackathons</h2>
    <ul>
        <li>Finalist – Infosys Global Hackathon (Top 12 out of 6,000+ teams worldwide)</li>
        <li>Semifinalist – SAP Hackfest 2025 (Top 200 out of 4,000+ teams across India)</li>
        <li>Finalist – KPR CICADA Hackathon (Top 4 out of 350+ teams nationwide)</li>
    </ul>
</section>
<section>
    <h2>Roles & Responsibilities</h2>
    <ul>
        <li>Flutter Lead – Google Developers Group (On Campus), Sep 2025 – Present</li>
        <li>NSS Volunteer, Oct 2023 – Oct 2025</li>
    </ul>
</section>
<section>
    <h2>Areas of Interest</h2>
    <ul>
        <li>Computer Networks</li>
        <li>Database Management Systems</li>
        <li>Object-Oriented Programming</li>
    </ul>
</section>
</div>
</body>
</html>`
  },
  {
    id: 'exp3',
    title: 'Exp 3',
    code: `Index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registration Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <h2>Registration Form</h2>
    <form id="registrationForm">
        <div class="form-group">
            <label>Full Name</label>
            <input type="text" id="fullName">
            <div class="error" id="nameError"></div>
        </div>
        <div class="form-group">
            <label>User Name</label>
            <input type="text" id="userName">
            <div class="error" id="userError"></div>
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="text" id="email">
            <div class="error" id="emailError"></div>
        </div>
        <div class="form-group">
            <label>State</label>
            <select id="state">
                <option value="">-- Select State --</option>
                <option>California</option>
                <option>Texas</option>
                <option>New York</option>
                <option>Florida</option>
            </select>
            <div class="error" id="stateError"></div>
        </div>
        <div class="form-group">
            <label>Address</label>
            <textarea id="address"></textarea>
            <div class="error" id="addressError"></div>
        </div>
        <div class="form-group">
            <label>Zip Code</label>
            <input type="text" id="zip">
            <div class="error" id="zipError"></div>
        </div>
        <button type="submit">Register</button>
    </form>
</div>
<script src="script.js"></script>
</body>
</html>

script.js

document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let isValid = true;
    let fullName = document.getElementById("fullName").value.trim();
    let userName = document.getElementById("userName").value.trim();
    let email = document.getElementById("email").value.trim();
    let state = document.getElementById("state").value;
    let address = document.getElementById("address").value.trim();
    let zip = document.getElementById("zip").value.trim();


    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    if (!/^[A-Za-z\s]+$/.test(fullName)) {
        document.getElementById("nameError").textContent =
            "Full Name must contain only letters.";
        isValid = false;
    }
    if (!/^[A-Za-z]+$/.test(userName)) {
        document.getElementById("userError").textContent =
            "User Name must contain only letters.";
        isValid = false;
    } else if (userName.length < 4 || userName.length > 12) {
        document.getElementById("userError").textContent =
            "User Name must be 4-12 characters long.";
        isValid = false;
    }
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address.";
        isValid = false;
    }
    if (state === "") {
        document.getElementById("stateError").textContent =
            "Please select a state.";
        isValid = false;
    }    if (address === "") {
        document.getElementById("addressError").textContent =
            "Address is required.";
        isValid = false;
    }
    if (!/^[A-Za-z0-9]+$/.test(zip)) {
        document.getElementById("zipError").textContent =
            "Zip Code must be alphanumeric.";
        isValid = false;
    }
    if (isValid) {
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }
});

style.css

body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
}
.container {
    width: 400px;
    margin: 40px auto;
    background: #fff;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
h2 {
    text-align: center;
    margin-bottom: 20px;
}
.form-group {
    margin-bottom: 15px;
}
label {
    display: block;
    margin-bottom: 5px;
}
input, select, textarea {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
}
textarea {
    resize: none;
    height: 80px;
}
button {
    width: 100%;
    padding: 10px;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background: #218838;
}
.error {
    color: red;
    font-size: 14px;
    margin-top: 3px;
}`
  },
  {
    id: 'exp5(a)',
    title: 'Exp 5(a):',
    image:`/exp5(a).png`,
    code: `Command:

javac -cp "C:\Program Files\Apache Software Foundation\Tomcat 10.1\lib\servlet-api.jar" -d WEB-INF\classes MyServlet.java

http://localhost:8080/WT5A/index.html

web.xml

<web-app>
<servlet>
<servlet-name>MyServlet</servlet-name>
<servlet-class>MyServlet</servlet-class>
</servlet>
<servlet-mapping>
<servlet-name>MyServlet</servlet-name>
<url-pattern>/MyServlet</url-pattern>
</servlet-mapping>
</web-app>

index.html



<!DOCTYPE html>
<html>
<head>
<title>User Registration Form</title>
<style> body{
font-family: Arial; background:#f2f2f2; text-align:center;
} form{ background:white; padding:20px; width:350px; margin:auto; margin-top:100px; border-radius:10px; box-shadow:0 0 10px gray;
} input{ padding:8px; margin:8px; width:80%;
}
 
button{ background:#4CAF50;
color:white; border:none; padding:10px; width:85%; border-radius:5px; cursor:pointer; } button:hover{ background:#45a049;
}
</style>
</head>
<body>
<h2>User Registration Form</h2>
<form action="MyServlet" method="post">
Name <br>
<input type="text" name="name"><br>
Email <br>
<input type="email" name="email"><br>
Age <br>
<input type="number" name="age"><br>
Department <br>
<input type="text" name="dept"><br>
<button type="submit">Submit</button>
</form> </body>
</html>

MyServlet.java

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;


public class MyServlet extends HttpServlet {


    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {


        response.setContentType("text/html");
        PrintWriter out = response.getWriter();


        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String age = request.getParameter("age");
        String dept = request.getParameter("dept");


        out.println("<html>");
        out.println("<body style='font-family:Arial;text-align:center;'>");


        out.println("<h2>Form Submitted Successfully</h2>");


        out.println("<table border='1' style='margin:auto;padding:10px;'>");
        out.println("<tr><td>Name</td><td>" + name + "</td></tr>");
        out.println("<tr><td>Email</td><td>" + email + "</td></tr>");
        out.println("<tr><td>Age</td><td>" + age + "</td></tr>");
        out.println("<tr><td>Department</td><td>" + dept + "</td></tr>");
        out.println("</table>");


        out.println("</body>");
        out.println("</html>");
    }
}`
  },
  {
    id: 'exp5(b)',
    title: 'Exp 5(b):',
    image:`/exp5(b).png`,
    code: `Command:

javac -cp "C:\Program Files\Apache Software Foundation\Tomcat 10.1\lib\servlet-api.jar" -d WEB-INF\classes MyServlet.java


http://localhost:8080/WT5b/index.html

CookieServlet.java

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
public class CookieServlet extends HttpServlet {
 public void doPost(HttpServletRequest request,HttpServletResponse response)
 throws ServletException,IOException{
  response.setContentType("text/html");
  PrintWriter out=response.getWriter();
  String name=request.getParameter("name");
  String email=request.getParameter("email");
  Cookie c1=new Cookie("name",name);
  Cookie c2=new Cookie("email",email);
  response.addCookie(c1);
  response.addCookie(c2);
  out.println("<html><body>");
  out.println("<h3>Cookies Stored</h3>");
  out.println("Name: "+name+"<br>");
  out.println("Email: "+email+"<br><br>");
  out.println("<a href='URLServlet?name="+name+"&email="+email+"'>Next</a>");
  out.println("</body></html>");
 }
}

HiddenServlet.java

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
public class HiddenServlet extends HttpServlet {
 public void doPost(HttpServletRequest request,HttpServletResponse response)
 throws ServletException,IOException{
  response.setContentType("text/html");
  PrintWriter out=response.getWriter();
  String name=request.getParameter("name");
  String email=request.getParameter("email");
  out.println("<html><body>");
  out.println("<h3>Hidden Form Field</h3>");
  out.println("Name: "+name+"<br>");
  out.println("Email: "+email+"<br><br>");
  out.println("<a href='SessionServlet?name="+name+"&email="+email+"'>Next</a>");
  out.println("</body></html>");
 }
}

SessionServlet.java

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
public class SessionServlet extends HttpServlet
{
 public void doGet(HttpServletRequest request,HttpServletResponse response)
 throws ServletException,IOException
 {
  response.setContentType("text/html");
  PrintWriter out=response.getWriter();
  String name=request.getParameter("name");
  String email=request.getParameter("email");
  HttpSession session=request.getSession();
  session.setAttribute("name",name);
  session.setAttribute("email",email);
  out.println("<html><body>");
  out.println("<h3>HTTP Session</h3>");
  out.println("Name: "+session.getAttribute("name")+"<br>");
  out.println("Email: "+session.getAttribute("email"));
  out.println("</body></html>");
 }
}

URLServlet.java
import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
public class URLServlet extends HttpServlet {
 public void doGet(HttpServletRequest request,HttpServletResponse response)
 throws ServletException,IOException{
  response.setContentType("text/html");
  PrintWriter out=response.getWriter();
  String name=request.getParameter("name");
  String email=request.getParameter("email");
  out.println("<html><body>");
  out.println("<h3>URL Rewriting</h3>");
  out.println("Name: "+name+"<br>");
  out.println("Email: "+email+"<br><br>");
  out.println("<form action='HiddenServlet' method='post'>");
  out.println("<input type='hidden' name='name' value='"+name+"'>");
  out.println("<input type='hidden' name='email' value='"+email+"'>");
  out.println("<input type='submit' value='Next'>");
  out.println("</form>");
  out.println("</body></html>");
 }
}


index.html

<html>
<body>
<h2>Student Form</h2>
<form action="CookieServlet" method="post">
Name: <input type="text" name="name"><br><br>
Email: <input type="text" name="email"><br><br>
<input type="submit" value="Submit">
</form>
</body>
</html>

web.xml

<web-app>
<servlet>
<servlet-name>CookieServlet</servlet-name>
<servlet-class>CookieServlet</servlet-class>
</servlet>
<servlet-mapping>
<servlet-name>CookieServlet</servlet-name>
<url-pattern>/CookieServlet</url-pattern>
</servlet-mapping>
<servlet>
<servlet-name>URLServlet</servlet-name>
<servlet-class>URLServlet</servlet-class>
</servlet>
<servlet-mapping>
<servlet-name>URLServlet</servlet-name>
<url-pattern>/URLServlet</url-pattern>
</servlet-mapping>
<servlet>
<servlet-name>HiddenServlet</servlet-name>
<servlet-class>HiddenServlet</servlet-class>
</servlet>
<servlet-mapping>
<servlet-name>HiddenServlet</servlet-name>
<url-pattern>/HiddenServlet</url-pattern>
</servlet-mapping>
<servlet>
<servlet-name>SessionServlet</servlet-name>
<servlet-class>SessionServlet</servlet-class>
</servlet>
<servlet-mapping>
<servlet-name>SessionServlet</servlet-name>
<url-pattern>/SessionServlet</url-pattern>
</servlet-mapping>
</web-app>`
  },
  {
    id: 'exp6(a)',
    title: 'Exp 6(a):',
    image:`/exp6(a).png`,
    code: `Command:

javac -cp "C:\Program Files\Apache Software Foundation\Tomcat 10.1\lib\servlet-api.jar" -d WEB-INF\classes MyServlet.java

DBConnection.java

package com.exam;


import java.sql.*;


public class DBConnection {
    public static Connection getExamConnection() {
        Connection con = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/online_exam",
                "root",
                "Sspr10821"
            );
        } catch(Exception e) {
            e.printStackTrace();
        }
        return con;
    }
}

exam.jsp

<%@ page import="java.sql.*" %>
<%@ page import="com.exam.DBConnection" %>


<h2>Online Exam</h2>


<form action="SubmitServlet" method="post">


<%
Connection con = DBConnection.getExamConnection();
Statement st = con.createStatement();
ResultSet rs = st.executeQuery("SELECT * FROM questions");


while(rs.next()) {
%>


<p><b><%= rs.getString("question") %></b></p>


<input type="radio" name="q<%=rs.getInt("qid")%>"
value="<%=rs.getString("option1")%>"> <%=rs.getString("option1")%><br>


<input type="radio" name="q<%=rs.getInt("qid")%>"
value="<%=rs.getString("option2")%>"> <%=rs.getString("option2")%><br>


<input type="radio" name="q<%=rs.getInt("qid")%>"
value="<%=rs.getString("option3")%>"> <%=rs.getString("option3")%><br>


<input type="radio" name="q<%=rs.getInt("qid")%>"
value="<%=rs.getString("option4")%>"> <%=rs.getString("option4")%><br><br>


<%
}
%>


<input type="submit" value="Submit Exam">
</form>

marklist.jsp

<h2>Exam Result</h2>


<%
Integer score = (Integer) request.getAttribute("score");


if(score != null) {
%>
<h3>Your Score: <%= score %></h3>
<%
} else {
%>
<h3>No result available</h3>
<%
}
%>

style.css

body {
 font-family: Arial, sans-serif;
 background: linear-gradient(to right, #e3f2fd, #ffffff);
 padding: 20px;
}
h2 {
 text-align: center;
 color: #333;
}
form {
 background: #fff;
 padding: 20px;
 border-radius: 10px;
 width:60%;
 margin: auto;
 box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}
p {
 font-size: 18px;
}
input[type="radio"] {
 margin: 8px;
}
input[type="submit"] {
 display: block;
 margin: 20px auto;
 padding: 10px 20px;
 background-color: #4CAF50;
 color: white;
 border: none;
 border-radius: 5px;
 font-size: 16px;
 cursor: pointer;
}
input[type="submit"]:hover {
 background-color: #45a049;
}
table {
 border-collapse: collapse;
 width: 70%;
 margin: auto;
 background: white;
}
th, td {
 padding: 10px;
 text-align: center
 }
th {
 background-color: #4CAF50;
 color: white;
}
tr:nth-child(even) {
 background-color: #f2f2f2;
}

SubmitSerlet.java

package com.exam;


import java.io.*;
import java.sql.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
public class SubmitServlet extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        int score = 0;
        try {
            Connection con = DBConnection.getExamConnection();
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("SELECT * FROM questions");
            while (rs.next()) {
                int id = rs.getInt("qid");
                String correct = rs.getString("answer");
                String userAns = req.getParameter("q" + id);
                if (correct != null && correct.equals(userAns)) {
                    score++;
                }
            }
            req.setAttribute("score", score);
            req.getRequestDispatcher("marklist.jsp").forward(req, res);
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}

web.xml

<web-app>
<servlet>
<servlet-name>SubmitServlet</servlet-name>
<servlet-class>com.exam.SubmitServlet</servlet-class>
</servlet>
<servlet-mapping>
<servlet-name>SubmitServlet</servlet-name>
<url-pattern>/SubmitServlet</url-pattern>
</servlet-mapping>
</web-app>

SQL QUERY:

mysql -u root -p

http://localhost:8080/WT6A/exam.jsp

CREATE DATABASE online_exam;
USE online_exam;

CREATE TABLE questions (
 qid INT PRIMARY KEY AUTO_INCREMENT,
 question VARCHAR(255),
 option1 VARCHAR(100),
 option2 VARCHAR(100),
 option3 VARCHAR(100),
 option4 VARCHAR(100),
 answer VARCHAR(100)
);

INSERT INTO questions (question, option1, option2, option3, option4, answer)
VALUES
('Capital of India?', 'Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Delhi'),
('2 + 2 = ?', '3', '4', '5', '6', '4'),
('Java is a?', 'Programming Language', 'Database', 'Browser', 'OS', 'Programming Language');

SELECT * FROM questions;`
  },
  {
    id: 'exp6(b)',
    title: 'Exp 6(b):',
    image:`/exp6(b).png`,
    code: `Command:

javac -cp "C:\Program Files\Apache Software Foundation\Tomcat 10.1\lib\servlet-api.jar" -d WEB-INF\classes MyServlet.java

DBConnection.java

package com.exam;
import java.sql.*;
public class DBConnection {
    public static Connection getConnection() {
        Connection con = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
           con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/student_db",
                "root",
                "Sspr10821"   // your password
            );
        } catch(Exception e) {
            e.printStackTrace();
        }
        return con;
    }
}

indexx.jsp

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
<title>Student Mark Entry</title>
</head>
<body>
<h2 style="text-align:center;">Student Mark Entry</h2>
<form action="MarkServlet" method="post" style="text-align:center;">
Name: <input type="text" name="name"><br><br>
English: <input type="number" name="s1"><br><br>
Tamil: <input type="number" name="s2"><br><br>
Maths: <input type="number" name="s3"><br><br>
<input type="submit" value="Submit">
</form>
</body>
</html>

marklist.jsp

<%@ page import="java.sql.*" %>
<%@ page import="com.exam.DBConnection" %>


<html>
<head>
<title>Student Mark List</title>
</head>


<body>


<h2 style="text-align:center;">Student Mark List</h2>


<table border="1" align="center">


<tr>
 <th>Name</th>
 <th>English</th>
 <th>Tamil</th>
 <th>Maths</th>
 <th>Total</th>
 <th>Average</th>
</tr>


<%
Connection con = DBConnection.getConnection();
Statement st = con.createStatement();
ResultSet rs = st.executeQuery("SELECT * FROM marks");


int grandTotal = 0;


while(rs.next()) {


 int total = rs.getInt("total");
 grandTotal += total;
%>


<tr>
 <td><%= rs.getString("name") %></td>
 <td><%= rs.getInt("subject1") %></td>
 <td><%= rs.getInt("subject2") %></td>
 <td><%= rs.getInt("subject3") %></td>
 <td><%= total %></td>
 <td><%= rs.getDouble("average") %></td>
</tr>


<% } %>


<tr>
 <td colspan="4"><b>Total of All Students</b></td>
 <td colspan="2"><%= grandTotal %></td>
</tr>


</table>


<br>
<a href="index.jsp">Add Another Student</a>


</body>
</html>

MarkServlet.java

package com.exam;


import java.io.*;
import java.sql.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;


public class MarkServlet extends HttpServlet {


    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {


        try {
            String name = request.getParameter("name");
            int s1 = Integer.parseInt(request.getParameter("s1"));
            int s2 = Integer.parseInt(request.getParameter("s2"));
            int s3 = Integer.parseInt(request.getParameter("s3"));


            int total = s1 + s2 + s3;
            double avg = total / 3.0;


            Connection con = DBConnection.getConnection();


            PreparedStatement ps = con.prepareStatement(
                "INSERT INTO marks(name, subject1, subject2, subject3, total, average) VALUES (?, ?, ?, ?, ?, ?)"
            );


            ps.setString(1, name);
            ps.setInt(2, s1);
            ps.setInt(3, s2);
            ps.setInt(4, s3);
            ps.setInt(5, total);
            ps.setDouble(6, avg);


            ps.executeUpdate();


            response.sendRedirect("marklist.jsp");


        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}

style.css

body {
 font-family: Arial, sans-serif;
 background: linear-gradient(to right, #e3f2fd, #ffffff);
 padding: 20px;
}


h2 {
 text-align: center;
 color: #333;
}


form {
 background: #fff;
 padding: 20px;
 border-radius: 10px;
 width: 60%;
 margin: auto;
 box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}


p {
 font-size: 18px;
}


input[type="radio"] {
 margin: 8px;
}


input[type="submit"] {
 display: block;
 margin: 20px auto;
 padding: 10px 20px;
 background-color: #4CAF50;
 color: white;
 border: none;
 border-radius: 5px;
 font-size: 16px;
 cursor: pointer;
}


input[type="submit"]:hover {
 background-color: #45a049;
}


web.xml

<web-app>
<servlet>
<servlet-name>MarkServlet</servlet-name>
<servlet-class>com.exam.MarkServlet</servlet-class>
</servlet>
<servlet-mapping>
<servlet-name>MarkServlet</servlet-name>
<url-pattern>/MarkServlet</url-pattern>
</servlet-mapping>
</web-app>


SQL QUERY:

CREATE DATABASE student_db;
USE student_db;

CREATE TABLE marks (
 id INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(100),
 subject1 INT,
 subject2 INT,
 subject3 INT,
 total INT,
 average DOUBLE
);`
  },
   {
    id: 'exp7(a)',
    title: 'Exp 7(a):',
    code: `Student.xml

<?xml version="1.0"?>
<student xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="student.xsd">
<name>Sanjay</name>
<age>21</age>
</student>

Student.xsd

<?xml version="1.0"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
<xs:element name="student">
<xs:complexType>
<xs:sequence>
<xs:element name="name" type="xs:string"/>
<xs:element name="age" type="xs:int"/>
</xs:sequence>
</xs:complexType>
</xs:element>
</xs:schema>`
  },
   {
    id: 'exp7(b)',
    title: 'Exp 7(b):',
    image:``,
    code: `Student.xml
    <?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="student.xsl"?>
<student>
    <name>Sanjay</name>
    <age>21</age>
</student>

Student.xsl:

<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
        <body>
            <h2>Student Details</h2>
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td><xsl:value-of select="student/name"/></td>
                    <td><xsl:value-of select="student/age"/></td>
                </tr>
            </table>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>`
  }, 
  {
    id: 'exp8',
    title: 'Exp 8:',
    image:`exp8.png`,
    code: `StudentCRUDServlet.java

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;

public class StudentCRUDServlet extends HttpServlet {

    Connection con;

    // Initialize database connection
    public void init() throws ServletException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/college?useSSL=false&serverTimezone=UTC",
                "root",
                "Keerthana"
            );

            System.out.println("DB Connected");

        } catch (Exception e) {
            System.out.println("DB ERROR:");
            e.printStackTrace();
        }
    }

    // Handle GET (to avoid 405 error)
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request, response);
    }

    // Handle POST request
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<html><body>");
        out.println("<h2>Student Management Result</h2>");

        String action = request.getParameter("action");

        try {

            if (con == null) {
                out.println("<h3>Database not connected!</h3>");
                return;
            }

            // INSERT
            if ("insert".equals(action)) {
                int id = Integer.parseInt(request.getParameter("id"));
                String name = request.getParameter("name");
                String dept = request.getParameter("dept");

                PreparedStatement ps = con.prepareStatement(
                        "INSERT INTO student (id, name, dept) VALUES (?, ?, ?)"
                );

                ps.setInt(1, id);
                ps.setString(2, name);
                ps.setString(3, dept);

                int rows = ps.executeUpdate();

                if (rows > 0)
                    out.println("<h3>Student Record Inserted Successfully</h3>");

                ps.close();
            }

            // UPDATE
            else if ("update".equals(action)) {
                int id = Integer.parseInt(request.getParameter("id"));
                String name = request.getParameter("name");
                String dept = request.getParameter("dept");

                PreparedStatement ps = con.prepareStatement(
                        "UPDATE student SET name=?, dept=? WHERE id=?"
                );

                ps.setString(1, name);
                ps.setString(2, dept);
                ps.setInt(3, id);

                int rows = ps.executeUpdate();

                if (rows > 0)
                    out.println("<h3>Student Record Updated Successfully</h3>");
                else
                    out.println("<h3>No Record Found</h3>");

                ps.close();
            }

            // DELETE
            else if ("delete".equals(action)) {
                int id = Integer.parseInt(request.getParameter("id"));

                PreparedStatement ps = con.prepareStatement(
                        "DELETE FROM student WHERE id=?"
                );

                ps.setInt(1, id);

                int rows = ps.executeUpdate();

                if (rows > 0)
                    out.println("<h3>Student Record Deleted Successfully</h3>");
                else
                    out.println("<h3>No Record Found</h3>");

                ps.close();
            }

            // VIEW
            else if ("view".equals(action)) {

                Statement st = con.createStatement();
                ResultSet rs = st.executeQuery("SELECT * FROM student");

                out.println("<h3>Student Records</h3>");
                out.println("<table border='1'>");
                out.println("<tr><th>ID</th><th>Name</th><th>Dept</th></tr>");

                boolean hasData = false;

                while (rs.next()) {
                    hasData = true;
                    out.println("<tr>");
                    out.println("<td>" + rs.getInt("id") + "</td>");
                    out.println("<td>" + rs.getString("name") + "</td>");
                    out.println("<td>" + rs.getString("dept") + "</td>");
                    out.println("</tr>");
                }

                out.println("</table>");

                if (!hasData) {
                    out.println("<h3>No Records Found</h3>");
                }

                rs.close();
                st.close();
            }

        } catch (Exception e) {
            out.println("<h3>Error: " + e.getMessage() + "</h3>");
            e.printStackTrace();
        }

        out.println("<br><a href='index.html'>Go Back</a>");
        out.println("</body></html>");
    }

    // Close connection
    public void destroy() {
        try {
            if (con != null)
                con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

index.html

<html lang="en">
<head>
<title>Student CRUD</title>
</head>
<body>
<h2>Student Management System</h2>

<form action="StudentCRUDServlet" method="post">
    ID: <input type="text" name="id"><br>
    Name: <input type="text" name="name"><br>
    Dept: <input type="text" name="dept"><br>

    <button name="action" value="insert">Insert</button>
    <button name="action" value="update">Update</button>
    <button name="action" value="delete">Delete</button>
    <button name="action" value="view">View</button>
</form>

</body>
</html>

web.xml:
<web-app>
<servlet>
<servlet-name>StudentCRUDServlet</servlet-name>
<servlet-class>StudentCRUDServlet</servlet-class>
</servlet>
<servlet-mapping>
<servlet-name>StudentCRUDServlet</servlet-name>
<url-pattern>/StudentCRUDServlet</url-pattern>
</servlet-mapping>
</web-app>`
  },
];