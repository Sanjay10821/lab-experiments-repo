export const experimentsData = [
    {
        id: 'exp-harish',
        title: ' Experiments- H',
        image: '/south_india_map.png',
        code: `Exp1
<!DOCTYPE html>
<html>
<head>
    <title>South India Map</title>

    <script>
        function showInfo(state) {
            if (state == "karnataka") {
                alert(
                    "KARNATAKA

" +
                    "Capital: Bengaluru
" +
                    "Language: Kannada

" +
                    "Karnataka is located in the southwestern part of India. " +
                    "It is known for its rich culture, forests, historical monuments, " +
                    "and the IT hub Bengaluru."
                );
            }

            if (state == "kerala") {
                alert(
                    "KERALA

" +
                    "Capital: Thiruvananthapuram
" +
                    "Language: Malayalam

" +
                    "Kerala lies along the southwestern coast of India. " +
                    "It is famous for its backwaters, beaches, greenery, " +
                    "and high literacy rate."
                );
            }

            if (state == "tamilnadu") {
                alert(
                    "TAMIL NADU

" +
                    "Capital: Chennai
" +
                    "Language: Tamil

" +
                    "Tamil Nadu is located in southern India. " +
                    "It is well known for its ancient temples, classical dance, " +
                    "music, and rich cultural heritage."
                );
            }

            if (state == "andhra") {
                alert(
                    "ANDHRA PRADESH

" +
                    "Capital: Amaravati
" +
                    "Language: Telugu

" +
                    "Andhra Pradesh is situated on the southeastern coast of India. " +
                    "It has a long coastline and is known for agriculture and culture."
                );
            }

            if (state == "telangana") {
                alert(
                    "TELANGANA

" +
                    "Capital: Hyderabad
" +
                    "Language: Telugu

" +
                    "Telangana is a state in south-central India. " +
                    "It is known for historical forts, temples, " +
                    "and the city of Hyderabad."
                );
            }
        }
    </script>
</head>

<body bgcolor="lightgray">

<center>
    <h1>SOUTH INDIA MAP</h1>
    <p>Click on a state to view information</p>

    <img src="world1.jpg"
         usemap="#southindia"
         width="720"
         height="540"
         border="2">

    <map name="southindia">

        <area shape="poly"
              coords="241,164,247,306,286,342,323,349,350,346,347,322,358,313,376,314,383,294,368,275,345,276,324,270,327,261,343,265,335,254,325,244,321,226,332,214,339,190,349,189,349,136,349,95,327,116,316,124,297,137,281,153,264,154"
              href="#"
              onclick="showInfo('karnataka')"
              alt="Karnataka">

        <area shape="poly"
              coords="253,319,329,488,337,454,336,419,322,410,316,398,312,377,303,378,297,368,303,359"
              href="#"
              onclick="showInfo('kerala')"
              alt="Kerala">

        <area shape="poly"
              coords="455,299,433,364,433,414,386,457,366,467,347,500,331,493,343,448,334,411,316,385,310,358,358,340,377,324,390,307,426,294"
              href="#"
              onclick="showInfo('tamilnadu')"
              alt="Tamil Nadu">

        <area shape="poly"
              coords="392,302,450,287,448,263,454,197,489,179,517,168,537,140,597,94,586,78,556,87,556,102,527,111,511,114,500,139,473,151,456,162,440,167,416,167,404,185,386,189,378,201,347,195,333,208,332,251,361,275,379,283"
              href="#"
              onclick="showInfo('andhra')"
              alt="Andhra Pradesh">

        <area shape="poly"
              coords="353,190,353,138,360,132,358,111,368,66,383,63,402,54,436,62,438,85,451,91,470,107,478,120,495,134,472,143,450,152,433,169,401,184,372,197"
              href="#"
              onclick="showInfo('telangana')"
              alt="Telangana">

    </map>
</center>

</body>
</html>

Exp2 Resume
<!DOCTYPE html>
<html>
<head>
<title>Resume</title>
<!-- External -->
<link rel="stylesheet" href="style.css">
<!-- Internal -->
<style>
h1{
text-align:center;
margin:0;
color:#2c3e50;
}
h2{
margin-top:15px;
font-size:16px;
color:#0b5394;
border-bottom:2px solid #0b5394;
}
</style>
</head>
<body>
<div class="page">
<!-- Inline -->
<h1 style="letter-spacing:1px;">HARISH M</h1>
<p style="text-align:center;color:#444;">
+91 9080499263 | harishm9946@gmail.com | Linkedin
</p>
<h2>PROFILE</h2>
<p>
A young, passionate and enthusiastic student interested about emerging technologies
and eager to contribute to impactful projects in a dynamic team environment.
</p>
<h2>EDUCATION</h2>
<table>
<tr style="background:#d9e2f3;font-weight:bold;">
<th>Institution</th>
<th>Course</th>
<th>Score</th>
<th>Year</th>
</tr>
<tr>
<td>PSG Institute of Technology and Applied Research</td>
<td>BE CSE</td>
<td>8.82</td>
<td>2023-27</td>
</tr>
<tr>
<td>Vidhya Niketan Public School</td>
<td>Higher Secondary</td>
<td>97.6%</td>
<td>2023</td>
</tr>
</table>
<h2>SKILLS</h2>
<ul>
<li>Python</li>
<li>C</li>
<li>Java</li>
<li>HTML</li>
<li>Arduino</li>
<li>MySQL</li>
<li>Problem Solving</li>
<li>Strong Communication</li>
</ul>
<h2>PROJECTS AND EXPERIENCES</h2>
<p style="color:#1a7f37;"><b>EXPERIENCE</b></p>
<ul>
<li>CSE Association Executive Member 2024-25</li>
<li>CSE Association Eloquence Wing Coordinator 2025-26</li>
<li>Placement Representative for 2027 batch</li>
<li>Master of Ceremony for college culturals</li>
<li>Attended workshop on Redhat Linux</li>
<li>Member of Rotaract Club 2021-Present</li>
<li>Attended NCC Camp in School</li>
</ul>
<p style="color:#1a7f37;"><b>Gesture Controlled LED :</b></p>
<ul>
<li>Developed a touchless gesture-controlled LED system for medical applications
using fingertip tracking.</li>
<li>Integrated Mediapipe, Pyfirmata, and OpenCV for real-time gesture recognition
with Arduino.</li>
</ul>
<h2>INTERNSHIPS</h2>
<ul>
<li>Intern at Gustovalley Technovations on AI,ML & Iot based Web application</li>
<li>Intern at IIITDM Kancheepuram - Research Project on Cryptography focusing on
Ascon Algorithm</li>
</ul>
<h2>RESEARCH PROJECT</h2>
<p><b>Enhancing Fetal Distress Prediction Using TabNet XGBoost Ensemble with
SMOTE Technique</b></p>
<p>ICNGCS 2025 – IEEE Conference, PSG iTech (Available on IEEE Xplore)
[Link]</p>
<ul>
<li>Developed a hybrid ensemble model using TabNet, XGBoost, and SMOTE to
predict fetal distress for clinical decision support.</li>
</ul>
<h2>OTHER INTERESTS</h2>
<ul>
<li>Photography, videography and editing</li>
<li>Footballer (State Level)</li>
<li>Event Organisation</li>
</ul>
<h2>ACHIEVEMENTS</h2>
<ul>
<li>Won 3rd place in a Python project expo for medical tech innovation.</li>
<li>Won second prize in Code2duo - an event conducted by Kumaraguru College ofTechnology</li>
<li>Infosys Global Hackathon finalist</li>
</ul>
</div>
</body>
</html>
Style.css:
body{
font-family: Arial, sans-serif;
background:#e6e6e6;
}
.page{
width:210mm;
margin:20px auto;
background:#ffffff;
padding:20mm;
border:2px solid #2c3e50;
}
table{
width:100%;
border-collapse: collapse;
}
td,th{
padding:6px;
border:1px solid #555;
}


Exp3 form validation
<!DOCTYPE html>
<html>
<head>
<title>Registration Form</title>
</head>
<body>
<h2>Registration Form</h2>
<form>
Full Name:
<input type="text" id="name"><br><br>
User Name:
<input type="text" id="username"><br><br>
Email:
<input type="text" id="email"><br><br>
State:
<select id="state">
<option value="">Select</option>
<option>Tamil Nadu</option>
<option>Kerala</option>
<option>Karnataka</option>
</select><br><br>
Address:
<input type="text" id="address"><br><br>
Zip Code:
<input type="text" id="zip"><br><br>
<button type="button" onclick="check()">Submit</button>
</form>
<script src="exp3.js"></script>
</body>
</html>

Javascript code
function check()
{
var name = document.getElementById("name").value;
var username = document.getElementById("username").value;
var email = document.getElementById("email").value;
var state = document.getElementById("state").value;
var address = document.getElementById("address").value;
var zip = document.getElementById("zip").value;
if(name=="" || username=="" || email=="" || state=="" || address=="" || zip=="")
{
alert("Fill all fields");
return;
}
if(/d/.test(name))
{
alert("Name should not contain numbers");
return;
}
if(/[^a-zA-Z]/.test(username))
{
alert("Username only letters");
return;
}
if(username.length<5 || username.length>15)
{
alert("Username must be 5-15 characters");
return;
}
if(/[^a-zA-Z0-9]/.test(zip))
{
alert("Zip must be alphanumeric");
return;
}
if(!email.includes("@") || !email.includes("."))
{
alert("Invalid email");
return;
}
alert("Form submitted");
}

Exp5a invoking servlet
Index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Form</title>
</head>
<body>
    <form action="MyServlet" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>

Web.xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app_5_0.xsd"
  version="5.0">

    <servlet>
        <servlet-name>MyServlet</servlet-name>
        <servlet-class>MyServlet</servlet-class>
    </servlet>
    
    <servlet-mapping>
        <servlet-name>MyServlet</servlet-name>
        <url-pattern>/MyServlet</url-pattern>
    </servlet-mapping>
</web-app>

MyServlet.java
import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        String name = request.getParameter("name");
        String email = request.getParameter("email");

        response.setContentType("text/html");
        response.getWriter().println("<html><body>");
        response.getWriter().println("<h1>Form Submitted Successfully!</h1>");
        response.getWriter().println("<p>Welcome, " + name + "!</p>");
        response.getWriter().println("<p>Your email is: " + email + "</p>");
        response.getWriter().println("</body></html>");
    }
}

Exp5b cookies
FirstServlet.java
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class FirstServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();

            // 1. Get the parameter from index.html
            String n = request.getParameter("userName");
            out.print("<html><body>");
            out.print("<h2>Welcome " + n + "</h2>");

            // 2. Create and add the cookie
            Cookie ck = new Cookie("uname", n);
            response.addCookie(ck);

            // 3. Create the form/button to go to the second servlet
            out.print("<br><br>");
            out.print("<form action='servlet2' method='post'>");
            out.print("<input type='submit' value='Go to Second Servlet'>");
            out.print("</form>");
            out.print("</body></html>");

            out.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

SecondServlet.java
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class SecondServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();

            // 1. Get all cookies from the request
            Cookie[] ck = request.getCookies();
            
            out.print("<html><body>");
            if (ck != null) {
                // 2. Iterate to find our specific cookie
                for (int i = 0; i < ck.length; i++) {
                    if (ck[i].getName().equals("uname")) {
                        out.print("<h2>Hello " + ck[i].getValue() + ", Welcome back!</h2>");
                    }
                }
            } else {
                out.print("<h2>No cookies found!</h2>");
            }
            out.print("</body></html>");

            out.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

Web.xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee
                      https://jakarta.ee/xml/ns/jakartaee/web-app_5_0.xsd"
  version="5.0">

    <servlet>
        <servlet-name>s1</servlet-name>
        <servlet-class>FirstServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>s1</servlet-name>
        <url-pattern>/servlet1</url-pattern>
    </servlet-mapping>

    <servlet>
        <servlet-name>s2</servlet-name>
        <servlet-class>SecondServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>s2</servlet-name>
        <url-pattern>/servlet2</url-pattern>
    </servlet-mapping>

</web-app>

Index.html
<!!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="servlet1" method="post">  
Name:<input type="text" name="userName"/><br/>  
<input type="submit" value="go"/>  
</form>  
</body>
</html>

Exp5c url rewriting
FirstServlet.java
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
public class FirstServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public FirstServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		 try{  			  
		        response.setContentType("text/html");  
		        PrintWriter out = response.getWriter();           
		        String n=request.getParameter("userName");  
		        out.print("Welcome "+n);  		  
		        //appending the username in the query string  
		        out.print("<a href='servlet2?uname="+n+"'>visit</a>");  		                  
		        out.close();  
		     }catch(Exception e){System.out.println(e);}  
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
}

SecondServlet.java
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
public class SecondServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public SecondServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try{  		  
	        response.setContentType("text/html");  
	        PrintWriter out = response.getWriter();	          
	        //getting value from the query string  
	        String n=request.getParameter("uname");  
	        out.print("Hello "+n); 	  
	        out.close();  	  
	                }catch(Exception e){System.out.println(e);}  
	    }  
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
}

Web.xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="https://jakarta.ee/xml/ns/jakartaee" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd" id="WebApp_ID" version="6.0">
  <display-name>url-rewriting</display-name>
  <welcome-file-list>
    <welcome-file>index.html</welcome-file>
    <welcome-file>index.jsp</welcome-file>
    <welcome-file>index.htm</welcome-file>
    <welcome-file>default.html</welcome-file>
    <welcome-file>default.jsp</welcome-file>
    <welcome-file>default.htm</welcome-file>
  </welcome-file-list>
  <servlet>  
<servlet-name>s1</servlet-name>  
<servlet-class>FirstServlet</servlet-class>  
</servlet>  
  
<servlet-mapping>  
<servlet-name>s1</servlet-name>  
<url-pattern>/servlet1</url-pattern>  
</servlet-mapping>  
  
<servlet>  
<servlet-name>s2</servlet-name>  
<servlet-class>SecondServlet</servlet-class>  
</servlet>  
  
<servlet-mapping>  
<servlet-name>s2</servlet-name>  
<url-pattern>/servlet2</url-pattern>  
</servlet-mapping>  
</web-app>

Index.html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="servlet1">  
Name:<input type="text" name="userName"/><br/>  
<input type="submit" value="go"/>  
</form>  
</body>
</html>

Exp5d hidden form field
FirstServlet.java
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
public class FirstServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public FirstServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		  try{  		  
		        response.setContentType("text/html");  
		        PrintWriter out = response.getWriter();  		          
		        String n=request.getParameter("userName");  
		        out.print("Welcome "+n);  		          
		        //creating form that have invisible textfield  
		        out.print("<form action='servlet2'>");  
		        out.print("<input type='hidden' name='uname' value='"+n+"'>");  
		        out.print("<input type='submit' value='go'>");  
		        out.print("</form>");  
		        out.close();  		  
		                }catch(Exception e){System.out.println(e);}  
		    }  

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
}

SecondServlet.java
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
public class SecondServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public SecondServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try{  
	        response.setContentType("text/html");  
	        PrintWriter out = response.getWriter();  	          
	        //Getting the value from the hidden field  
	        String n=request.getParameter("uname");  
	        out.print("Hello "+n);  	  
	        out.close();  
	                }catch(Exception e){System.out.println(e);}  
	    }  
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

Web.xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="https://jakarta.ee/xml/ns/jakartaee" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd" id="WebApp_ID" version="6.0">
  <display-name>hidden-fields</display-name>
  <welcome-file-list>
    <welcome-file>index.html</welcome-file>
    <welcome-file>index.jsp</welcome-file>
    <welcome-file>index.htm</welcome-file>
    <welcome-file>default.html</welcome-file>
    <welcome-file>default.jsp</welcome-file>
    <welcome-file>default.htm</welcome-file>
  </welcome-file-list>
 <servlet>  
<servlet-name>s1</servlet-name>  
<servlet-class>FirstServlet</servlet-class>  
</servlet>  
  
<servlet-mapping>  
<servlet-name>s1</servlet-name>  
<url-pattern>/servlet1</url-pattern>  
</servlet-mapping>  
  
<servlet>  
<servlet-name>s2</servlet-name>  
<servlet-class>SecondServlet</servlet-class>  
</servlet>  
  
<servlet-mapping>  
<servlet-name>s2</servlet-name>  
<url-pattern>/servlet2</url-pattern>  
</servlet-mapping>  
</web-app>

Index.html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="servlet1" method="post">  
Name:<input type="hidden" name="userName" value="saranya"/><br/>  
<input type="submit" value="go"/>  
</form>  
</body>
</html>

Exp5e http session
FirstServlet.java
import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;   
public class FirstServlet extends HttpServlet {    
public void doGet(HttpServletRequest request, HttpServletResponse response){  
        try{    
        response.setContentType("text/html");  
        PrintWriter out = response.getWriter();            
        String n=request.getParameter("userName");  
        out.print("Welcome "+n);            
        HttpSession session=request.getSession();  
        session.setAttribute("uname",n);    
        out.print("<a href='servlet2'>visit</a>");                    
        out.close();    
                }catch(Exception e){System.out.println(e);}  
    }    
}  

SecondServlet.java
import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class SecondServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            HttpSession session = request.getSession(false);
            String n = (String) session.getAttribute("uname");
            out.print("Hello " + n);
            out.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

Web.xml
<web-app>  
  
<servlet>  
<servlet-name>s1</servlet-name>  
<servlet-class>FirstServlet</servlet-class>  
</servlet>  
  
<servlet-mapping>  
<servlet-name>s1</servlet-name>  
<url-pattern>/servlet1</url-pattern>  
</servlet-mapping>  
  
<servlet>  
<servlet-name>s2</servlet-name>  
<servlet-class>SecondServlet</servlet-class>  
</servlet>  
  
<servlet-mapping>  
<servlet-name>s2</servlet-name>  
<url-pattern>/servlet2</url-pattern>  
</servlet-mapping>  
  
</web-app>

Index.html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="servlet1">  
Name:<input type="text" name="userName"/><br/>  
<input type="submit" value="go"/>  
</form>  
</body>
</html>

Exp6a simple jsp factorial
Index.html
<!DOCTYPE html>
<html>
<head>
    <title>Factorial Calculator</title>
</head>
<body>
    <h1>Factorial Calculator</h1>
    <form action="Factorial.jsp" method="get">
        Enter a value for n: <input type="text" name="val">
        <input type="submit" value="Submit">
    </form>
</body>
</html>

Factorial.jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Factorial Result</title>
</head>
<body>
<%!
   long n, result;

   long fact(long n) {
      if (n == 0)        
         return 1;   
      else
         return n * fact(n - 1);
   }
%>

<%
    String str = request.getParameter("val");
    if (str != null && !str.isEmpty()) {
        try {
            n = Long.parseLong(str);
            result = fact(n);
            out.println("<b>Factorial value of " + n + ": </b> " + result);
        } catch (NumberFormatException e) {
            out.println("<b>Please enter a valid number.</b>");
        }
    } else {
        out.println("<b>Please enter a value.</b>");
    }
%>
</body>
</html>

Web.xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xmlns="https://jakarta.ee/xml/ns/jakartaee" 
         xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd" 
         id="WebApp_ID" version="6.0">

    <display-name>Factorial</display-name>
    <welcome-file-list>
        <welcome-file>index.html</welcome-file>
        <welcome-file>Factorial.jsp</welcome-file>
    </welcome-file-list>  
</web-app>

Exp6b 
index.jsp:
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head><title>Student Mark List</title></head>
<body>
    <h2>View Student Mark List</h2>
    <form action="DisplayMarks.jsp" method="get">
        Enter Student ID: <input type="text" name="sid">
        <input type="submit" value="Get Marks">
    </form>
</body>
</html>

DisplayMarks.jsp:
<%@ page import="java.sql.*" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head><title>Marks Result</title></head>
<body>
    <h3>Student Performance Details</h3>
    <table border="1">
        <tr>
            <th>ID</th><th>Name</th><th>Mark 1</th><th>Mark 2</th><th>Mark 3</th><th>Total</th>
        </tr>
        <%
            String sid = request.getParameter("sid");
            try {
                // 1. Load Driver
                Class.forName("com.mysql.cj.jdbc.Driver");
                // 2. Establish Connection (Update 'password' to your MySQL password)
                Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/school", "root", "root");
                
                // 3. Create Statement
                PreparedStatement ps = con.prepareStatement("SELECT * FROM students WHERE id = ?");
                ps.setString(1, sid);
                
                // 4. Execute Query
                ResultSet rs = ps.executeQuery();
                
                if (rs.next()) {
                    %>
                    <tr>
                        <td><%= rs.getInt("id") %></td>
                        <td><%= rs.getString("name") %></td>
                        <td><%= rs.getInt("m1") %></td>
                        <td><%= rs.getInt("m2") %></td>
                        <td><%= rs.getInt("m3") %></td>
                        <td><%= rs.getInt("total") %></td>
                    </tr>
                    <%
                } else {
                    out.println("<tr><td colspan='6'>No records found for ID: " + sid + "</td></tr>");
                }
                con.close();
            } catch (Exception e) {
                out.println("Error: " + e.getMessage());
            }
        %>
    </table>
    <br>
    <a href="index.jsp">Back</a>
</body>
</html>

web.xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee" version="6.0">
    <display-name>ThreeTierApp</display-name>
    <welcome-file-list>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>
</web-app>

exp7a) XML with Schema (XSD Validation)
Student.xml:
<?xml version="1.0"?> <!-- XML declaration -->
<student xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="student.xsd"> <!-- Link to XSD -->
    <name>John</name> <!-- Student name -->
    <age>20</age> <!-- Student age -->
</student>

Student.xsd:
<xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified" xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="student">
    <xs:complexType>
      <xs:sequence>
        <xs:element type="xs:string" name="name"/>
        <xs:element type="xs:byte" name="age"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>

exp7b) XML with XSLT (Display in Browser)
Student.xml:
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="student.xsl"?>
<student>
    <name>John</name>
    <age>20</age>
</student>

Student.xsl:
<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
<html>
<body>
<h2>Student Details</h2>
<p>
Name: <xsl:value-of select="/student/name"/><br/>
Age: <xsl:value-of select="/student/age"/>
</p>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

Exp8 crud
index.html : 

<!DOCTYPE html>
<html>
<head>
    <title>Employee Management System</title>
</head>
<body>
    <h2>Employee Management System</h2>exp

    <form action="EmployeeCRUDServlet" method="post">
        ID: <input type="text" name="id"><br><br>
        Name: <input type="text" name="name"><br><br>
        Salary: <input type="text" name="salary"><br><br>

        <button type="submit" name="action" value="insert">Insert</button>
        <button type="submit" name="action" value="update">Update</button>
        <button type="submit" name="action" value="delete">Delete</button>
        <button type="submit" name="action" value="view">View</button>
    </form>
</body>
</html>

EmployeeCRUDServlet.java : 

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;

public class EmployeeCRUDServlet extends HttpServlet {

    Connection con;

    public void init() throws ServletException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/company",
                "root",
                "viswaa_gs"   // change password if needed
            );
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String action = request.getParameter("action");

        try {
            if (action.equals("insert")) {
                int id = Integer.parseInt(request.getParameter("id"));
                String name = request.getParameter("name");
                float salary = Float.parseFloat(request.getParameter("salary"));

                PreparedStatement ps = con.prepareStatement(
                    "INSERT INTO employee VALUES (?, ?, ?)"
                );
                ps.setInt(1, id);
                ps.setString(2, name);
                ps.setFloat(3, salary);
                ps.executeUpdate();

                out.println("<h3>Inserted Successfully</h3>");
            }
            else if (action.equals("update")) {
                int id = Integer.parseInt(request.getParameter("id"));
                String name = request.getParameter("name");
                float salary = Float.parseFloat(request.getParameter("salary"));

                PreparedStatement ps = con.prepareStatement(
                    "UPDATE employee SET name=?, salary=? WHERE id=?"
                );
                ps.setString(1, name);
                ps.setFloat(2, salary);
                ps.setInt(3, id);
                ps.executeUpdate();

                out.println("<h3>Updated Successfully</h3>");
            }
            else if (action.equals("delete")) {
                int id = Integer.parseInt(request.getParameter("id"));

                PreparedStatement ps = con.prepareStatement(
                    "DELETE FROM employee WHERE id=?"
                );
                ps.setInt(1, id);
                ps.executeUpdate();

                out.println("<h3>Deleted Successfully</h3>");
            }
            else if (action.equals("view")) {
                Statement st = con.createStatement();
                ResultSet rs = st.executeQuery("SELECT * FROM employee");

                out.println("<h2>Employee Records</h2>");
                out.println("<table border='1'>");
                out.println("<tr><th>ID</th><th>Name</th><th>Salary</th></tr>");

                while (rs.next()) {
                    out.println("<tr>");
                    out.println("<td>" + rs.getInt(1) + "</td>");
                    out.println("<td>" + rs.getString(2) + "</td>");
                    out.println("<td>" + rs.getFloat(3) + "</td>");
                    out.println("</tr>");
                }

                out.println("</table>");
            }

            out.println("<br><a href='index.html'>Back</a>");

        } catch (Exception e) {
            out.println("Error: " + e);
        }
    }

    public void destroy() {
        try {
            if (con != null) {
                con.close();
            }
        } catch (Exception e) {}
    }
}


web.xml : 

<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee
         https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd"
         version="6.0">

    <servlet>
        <servlet-name>EmployeeCRUDServlet</servlet-name>
        <servlet-class>EmployeeCRUDServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>EmployeeCRUDServlet</servlet-name>
        <url-pattern>/EmployeeCRUDServlet</url-pattern>
    </servlet-mapping>

    <welcome-file-list>
        <welcome-file>index.html</welcome-file>
    </welcome-file-list>

</web-app>


Database Setup : 

CREATE DATABASE company;

USE company;

CREATE TABLE employee (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    salary FLOAT
);`
    },
    {
        id: 'exp-anush',
        title: ' Experiments - A',
        image: '/south_india_map.png',
        code: `1 .  Image Map

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Psg ITECh</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: linear-gradient(to bottom, #e0f7fa, #ffffff);
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #004080;
            color: white;
            padding: 20px 0;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            font-size: 24px;
        }

        main {
            margin-top: 30px;
            display: inline-block;
            padding: 20px;
            background-color: rgba(255,255,255,0.9);
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        img {
            border: 4px solid #004080;
            border-radius: 10px;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        img:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }

        area {
            cursor: pointer;
        }
    </style>
</head>
<body>

<header>
    PSG Institute of Technology and Applied Research
</header>

<main>
    <img src="psgitech.jpg" alt="South India States" usemap="#state">

    <map name="state">
        <area shape="rect" coords="73,26,111,73" alt="Admin" href="https://psgitech.ac.in/" title="Admin Block">
        <area shape="rect" coords="70,99,110,146" alt="CSE" href="https://cse.psgitech.ac.in/" title="CSE Department">
        <area shape="rect" coords="127,113,181,156" alt="EEE" href="https://eee.psgitech.ac.in/" title="EEE Department">
        <area shape="rect" coords="189,104,249,144" alt="ECE" href="https://ece.psgitech.ac.in/" title="ECE Department">
        <area shape="rect" coords="190,27,252,76" alt="Civil" href="https://civil.psgitech.ac.in/" title="Civil Department">
        <area shape="rect" coords="122,22,181,59" alt="Mech" href="https://mechanical.psgitech.ac.in/" title="Mechanical Department">
    </map>
</main>

</body>
</html>





2 . Resume Creation

Index.html

<!DOCTYPE html>
<html>
<head>
    <title>Resume using CSS</title>

    <link rel="stylesheet" href="style.css">

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
        }
        h2 {
            color: darkblue;
        }
    </style>
</head>

<body>

    <h1 style="color: darkred; text-align: center;">
        Ananya S
    </h1>

    <p style="text-align: center; font-weight: bold;">
        Computer Science Student
    </p>

    <hr>

    <h2>Education</h2>
    <ul>
        <li>B.E Computer Science – PSG iTech</li>
        <li>Higher Secondary – IPS, Erode</li>
    </ul>

    <h2>Skills</h2>
    <ul>
        <li>Python, Java</li>
        <li>HTML, CSS</li>
        <li>MySQL</li>
    </ul>

    <h2>Achievements</h2>
    <p class="highlight">
        Winner – College Hackathon 2024
    </p>

</body>
</html>

Style.css

ul {
    background-color: white;
    padding: 10px;
}

li {
    margin: 5px;
}

.highlight {
    color: green;
    font-weight: bold;
}




3 . Form Validation

<!DOCTYPE html>
<html>
<head>
<title>Simple Registration Form</title>

<style>
body{
font-family:Arial;
background:#f4f6f9;
}
.container{
width:400px;
margin:40px auto;
background:white;
padding:20px;
border-radius:8px;
box-shadow:0 0 10px rgba(0,0,0,0.1);
}
h2{
text-align:center;
}
label{
font-weight:bold;
}
input{
width:100%;
padding:8px;
margin-top:5px;
margin-bottom:10px;
border:1px solid #ccc;
border-radius:4px;
}
input[type="radio"]{
width:auto;
}
.error{
color:red;
font-size:12px;
}

.success{
color:green;
text-align:center;
}
button{
width:100%;
padding:10px;
background:#007bff;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
}
button:hover{
background:#0056b3;
}
</style>

</head>
<body>
<div class="container">
<h2>Registration Form</h2>

<form id="form">
<label>Full Name</label>
<input type="text" id="name">
<div class="error" id="nameError"></div>

<label>Email</label>
<input type="text" id="email">
<div class="error" id="emailError"></div>

<label>Password</label>
<input type="password" id="password">
<div class="error" id="passwordError"></div>

<label>Confirm Password</label>
<input type="password" id="confirm">
<div class="error" id="confirmError"></div>

<label>Phone</label>
<input type="text" id="phone">
<div class="error" id="phoneError"></div>

<label>Gender</label><br>
<input type="radio" name="gender" value="Male"> Male
<input type="radio" name="gender" value="Female"> Female
<div class="error" id="genderError"></div>

<br><br>

<button type="button" onclick="validate()">Submit</button>
<div class="success" id="success"></div>
</form>

</div>

<script>

function validate(){

document.querySelectorAll(".error").forEach(e=>e.innerHTML="")
document.getElementById("success").innerHTML=""

let name=document.getElementById("name").value.trim()
let email=document.getElementById("email").value.trim()
let password=document.getElementById("password").value
let confirm=document.getElementById("confirm").value
let phone=document.getElementById("phone").value.trim()
let gender=document.querySelector('input[name="gender"]:checked')

let valid=true

if(!/^[A-Za-z ]+\$/.test(name)){
document.getElementById("nameError").innerHTML="Enter valid name"
valid=false
}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}\$/

if(!emailPattern.test(email)){
document.getElementById("emailError").innerHTML="Enter valid email"
valid=false
}

if(password.length<6){
document.getElementById("passwordError").innerHTML="Password must be at least 6 characters"
valid=false
}

if(password!==confirm){
document.getElementById("confirmError").innerHTML="Passwords do not match"
valid=false
}

if(!/^[0-9]{10}\$/.test(phone)){
document.getElementById("phoneError").innerHTML="Enter 10 digit phone number"
valid=false
}
if(!gender){
document.getElementById("genderError").innerHTML="Select gender"
valid=false
}
if(valid){
document.getElementById("success").innerHTML="Form submitted successfully!"
document.getElementById("form").reset()
}

}

</script>

</body>
</html>




5a . INVOKING SERVLETS FROM HTML FORM

index.html
<!DOCTYPE html>
<html>
<head>
<title>Simple Registration Form</title>

<style>
body{
font-family:Arial;
background:linear-gradient(135deg,#6dd5ed,#2193b0);
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}

.container{
background:white;
padding:30px;
border-radius:10px;
width:320px;
box-shadow:0 0 10px rgba(0,0,0,0.3);
}

h2{
text-align:center;
}

input{
width:100%;
padding:10px;
margin-top:5px;
margin-bottom:15px;
border:1px solid #ccc;
border-radius:5px;
}

input[type=radio]{
width:auto;
}

input[type=submit]{
background:#2193b0;
color:white;
border:none;
cursor:pointer;
}

input[type=submit]:hover{
background:#176d82;
}
</style>
</head>

<body>

<div class="container">

<h2>Registration Form</h2>

<form action="MyServlet" method="POST">

<label>Full Name</label>
<input type="text" name="name" required>

<label>Email</label>
<input type="email" name="email" required>

<label>Phone</label>
<input type="text" name="phone" required>

<label>Gender</label><br>
<input type="radio" name="gender" value="Male" required> Male
<input type="radio" name="gender" value="Female"> Female
<br><br>

<input type="submit" value="Register">

</form>

</div>

</body>
</html>


MyServlet.java	
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {

protected void doPost(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {

String name = request.getParameter("name");
String email = request.getParameter("email");
String phone = request.getParameter("phone");
String gender = request.getParameter("gender");

response.setContentType("text/html");
PrintWriter out = response.getWriter();

out.println("<html>");
out.println("<head><title>Result</title></head>");
out.println("<body style='font-family:Arial;text-align:center;margin-top:100px;'>");

out.println("<h2 style='color:green;'>Registration Successful</h2>");
out.println("<p><b>Name:</b> " + name + "</p>");
out.println("<p><b>Email:</b> " + email + "</p>");
out.println("<p><b>Phone:</b> " + phone + "</p>");
out.println("<p><b>Gender:</b> " + gender + "</p>");

out.println("</body>");
out.println("</html>");
}
}



Web.xml:
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
version="5.0">

<servlet>
<servlet-name>MyServlet</servlet-name>
<servlet-class>MyServlet</servlet-class>
</servlet>

<servlet-mapping>
<servlet-name>MyServlet</servlet-name>
<url-pattern>/MyServlet</url-pattern>
</servlet-mapping>

</web-app>

5 b. SESSION TRACKING - COOKIES
movie.html
<!DOCTYPE html>
<html>
<head>
<title>Movie Ticket Booking</title>

<style>
body{
font-family:Arial;
background:linear-gradient(135deg,#89f7fe,#66a6ff);
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}

.container{
background:white;
padding:30px;
border-radius:10px;
width:350px;
box-shadow:0 0 10px rgba(0,0,0,0.3);
}

h2{
text-align:center;
}

input{
width:100%;
padding:10px;
margin-top:5px;
margin-bottom:15px;
border:1px solid #ccc;
border-radius:5px;
}

input[type=submit]{
background:#4a90e2;
color:white;
border:none;
cursor:pointer;
}

input[type=submit]:hover{
background:#2d6fb7;
}
</style>

</head>

<body>

<div class="container">

<h2>Movie Ticket Booking</h2>

<form action="movie" method="post">

<label>Customer Name</label>
<input type="text" name="name" required>

<label>Movie Name</label>
<input type="text" name="movie" required>

<label>Number of Tickets</label>
<input type="number" name="tickets" required>

<label>Show Time</label>
<input type="time" name="time" required>

<input type="submit" value="Book Ticket">

</form>

</div>

</body>
</html>


MovieServlet.java

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet("/movie")
public class MovieServlet extends HttpServlet {

protected void doPost(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {

response.setContentType("text/html");
PrintWriter out = response.getWriter();

String name = request.getParameter("name");
String movie = request.getParameter("movie");
String tickets = request.getParameter("tickets");
String time = request.getParameter("time");

Cookie c1 = new Cookie("name",name);
Cookie c2 = new Cookie("movie",movie);
Cookie c3 = new Cookie("tickets",tickets);
Cookie c4 = new Cookie("time",time);

response.addCookie(c1);
response.addCookie(c2);
response.addCookie(c3);
response.addCookie(c4);

out.println("<html>");
out.println("<body style='font-family:Arial;text-align:center;margin-top:100px;'>");

out.println("<h2>Welcome " + name + "</h2>");
out.println("<p>Your movie booking is stored using cookies.</p>");
out.println("<a href='ticket'>View Ticket</a>");

out.println("</body>");
out.println("</html>");
}
}



 TicketServlet.java

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet("/ticket")
public class TicketServlet extends HttpServlet {

protected void doGet(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {

response.setContentType("text/html");
PrintWriter out = response.getWriter();

Cookie cookies[] = request.getCookies();

String name="",movie="",tickets="",time="";

if(cookies!=null){
for(Cookie c : cookies){

if(c.getName().equals("name"))
name = c.getValue();

if(c.getName().equals("movie"))
movie = c.getValue();

if(c.getName().equals("tickets"))
tickets = c.getValue();

if(c.getName().equals("time"))
time = c.getValue();
}
}

out.println("<html>");
out.println("<body style='font-family:Arial;text-align:center;margin-top:100px;'>");

out.println("<h2>Movie Ticket</h2>");
out.println("<p>Name: " + name + "</p>");
out.println("<p>Movie: " + movie + "</p>");
out.println("<p>Tickets: " + tickets + "</p>");
out.println("<p>Show Time: " + time + "</p>");

out.println("</body>");
out.println("</html>");
}
}


web.xml:

<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
version="3.1">

<servlet>
<servlet-name>MovieServlet</servlet-name>
<servlet-class>MovieServlet</servlet-class>
</servlet>

<servlet-mapping>
<servlet-name>MovieServlet</servlet-name>
<url-pattern>/movie</url-pattern>
</servlet-mapping>

<servlet>
<servlet-name>TicketServlet</servlet-name>
<servlet-class>TicketServlet</servlet-class>
</servlet>

<servlet-mapping>
<servlet-name>TicketServlet</servlet-name>
<url-pattern>/ticket</url-pattern>
</servlet-mapping>

</web-app>


5b Session Tracking - Hidden Form Field
index.html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hidden Form Field</title>
</head>

<body>
    <form action="servlet1" method="post">
        Name:
        <input type="hidden" name="userName" value="Viswaa"/><br/><br/>
        <input type="submit" value="Go"/>
    </form>
</body>
</html>

FirstServlet.java
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

public class FirstServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    public FirstServlet() {
        super();
    }

    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        try {

            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            String n = request.getParameter("userName");

            out.print("Welcome " + n);

            out.print("<form action='servlet2'>");
            out.print("<input type='hidden' name='uname' value='" + n + "'>");
            out.print("<input type='submit' value='Go'>");
            out.print("</form>");
            out.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }
}

SecondServlet.java

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

public class SecondServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    public SecondServlet() {
        super();
    }

    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        try {

            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            String n = request.getParameter("uname");
            out.print("Hello " + n);
            out.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }
}

web.xml

<?xml version="1.0" encoding="UTF-8"?>

<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns="https://jakarta.ee/xml/ns/jakartaee"
         xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee
         https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd"
         id="WebApp_ID"
         version="6.0">

    <display-name>hidden-fields</display-name>

    <welcome-file-list>
        <welcome-file>index.html</welcome-file>
        <welcome-file>index.jsp</welcome-file>
        <welcome-file>index.htm</welcome-file>
        <welcome-file>default.html</welcome-file>
        <welcome-file>default.jsp</welcome-file>
        <welcome-file>default.htm</welcome-file>
    </welcome-file-list>

    <servlet>
        <servlet-name>s1</servlet-name>
        <servlet-class>FirstServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>s1</servlet-name>
        <url-pattern>/servlet1</url-pattern>
    </servlet-mapping>

    <servlet>
        <servlet-name>s2</servlet-name>
        <servlet-class>SecondServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>s2</servlet-name>
        <url-pattern>/servlet2</url-pattern>
    </servlet-mapping>

</web-app>


5b Session Tracking - HTTP Session

index.html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Event Registration</title>
</head>

<body>

<h2>Event Registration</h2>

<form action="servlet1" method="get">

Participant Name:
<input type="text" name="name"/><br/><br/>

Email:
<input type="email" name="email"/><br/><br/>

Event Name:
<input type="text" name="event"/><br/><br/>

College Name:
<input type="text" name="college"/><br/><br/>

<input type="submit" value="Register"/>

</form>

</body>
</html>

FirstServlet.java
import java.io.PrintWriter;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

public class FirstServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response) {

        try {

            response.setContentType("text/html");
            PrintWriter out = response.getWriter();

            String name = request.getParameter("name");
            String email = request.getParameter("email");
            String event = request.getParameter("event");
            String college = request.getParameter("college");

            out.print("<h2>Welcome " + name + "</h2>");

            HttpSession session = request.getSession();

            session.setAttribute("name", name);
            session.setAttribute("email", email);
            session.setAttribute("event", event);
            session.setAttribute("college", college);

            out.print("<br>");
            out.print("<a href='servlet2'>View Registration Details</a>");

            out.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

SecondServlet.java
import java.io.PrintWriter;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

public class SecondServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response) {

        try {

            response.setContentType("text/html");
            PrintWriter out = response.getWriter();

            HttpSession session = request.getSession(false);

            String name = (String) session.getAttribute("name");
            String email = (String) session.getAttribute("email");
            String event = (String) session.getAttribute("event");
            String college = (String) session.getAttribute("college");

            out.println("<h2>Event Registration Details</h2>");
            out.println("<p>Name: " + name + "</p>");
            out.println("<p>Email: " + email + "</p>");
            out.println("<p>Event: " + event + "</p>");
            out.println("<p>College: " + college + "</p>");

            out.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
web.xml
<web-app>

    <servlet>
        <servlet-name>s1</servlet-name>
        <servlet-class>FirstServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>s1</servlet-name>
        <url-pattern>/servlet1</url-pattern>
    </servlet-mapping>

    <servlet>
        <servlet-name>s2</servlet-name>
        <servlet-class>SecondServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>s2</servlet-name>
        <url-pattern>/servlet2</url-pattern>
    </servlet-mapping>

</web-app>

5b Session Tracking - URL Rewriting

index.html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Event Registration</title>
</head>

<body>

<h2>Event Registration</h2>

<form action="servlet1">

Participant Name:
<input type="text" name="name"><br><br>

Email:
<input type="email" name="email"><br><br>

Event Name:
<input type="text" name="event"><br><br>

College Name:
<input type="text" name="college"><br><br>

<input type="submit" value="Register">

</form>

</body>
</html>

FirstServlet.java
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/FirstServlet")
public class FirstServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public FirstServlet() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        try {

            response.setContentType("text/html");
            PrintWriter out = response.getWriter();

            String name = request.getParameter("name");
            String email = request.getParameter("email");
            String event = request.getParameter("event");
            String college = request.getParameter("college");

            out.print("<h2>Welcome " + name + "</h2>");
            out.print("<br>");

            out.print("<a href='servlet2?name=" + name +
                    "&email=" + email +
                    "&event=" + event +
                    "&college=" + college +
                    "'>View Registration Details</a>");

            out.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        doGet(request, response);
    }
}

SecondServlet.java
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/SecondServlet")
public class SecondServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public SecondServlet() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        try {

            response.setContentType("text/html");
            PrintWriter out = response.getWriter();

            String name = request.getParameter("name");
            String email = request.getParameter("email");
            String event = request.getParameter("event");
            String college = request.getParameter("college");

            out.println("<h2>Event Registration Details</h2>");
            out.println("<p>Name: " + name + "</p>");
            out.println("<p>Email: " + email + "</p>");
            out.println("<p>Event: " + event + "</p>");
            out.println("<p>College: " + college + "</p>");

            out.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        doGet(request, response);
    }
}

web.xml : 
<?xml version="1.0" encoding="UTF-8"?>

<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns="https://jakarta.ee/xml/ns/jakartaee"
xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee
https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd"
version="6.0">

<display-name>url-rewriting</display-name>

<welcome-file-list>
<welcome-file>index.html</welcome-file>
</welcome-file-list>

<servlet>
<servlet-name>s1</servlet-name>
<servlet-class>FirstServlet</servlet-class>
</servlet>

<servlet-mapping>
<servlet-name>s1</servlet-name>
<url-pattern>/servlet1</url-pattern>
</servlet-mapping>

<servlet>
<servlet-name>s2</servlet-name>
<servlet-class>SecondServlet</servlet-class>
</servlet>

<servlet-mapping>
<servlet-name>s2</servlet-name>
<url-pattern>/servlet2</url-pattern>
</servlet-mapping>

</web-app>




6 a. THREE-TIER APPLICATION USING JSP AND DATABASE

For conducting on-line examinations.

index.jsp

<!DOCTYPE html>
<html>
<head>
    <title>Online Exam Home</title>
</head>
<body>
    <h2>Online Examination System</h2>
    <a href="login.jsp">Student Login</a>
</body>
</html>

login.jsp

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h2>Student Login</h2>
    <form action="login" method="post">
        Register Number: <input type="text" name="regno" required><br><br>
        Password: <input type="password" name="password" required><br><br>
        <input type="submit" value="Login">
    </form>
</body>
</html>

exam.jsp

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
                    "tiger"
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

result.jsp

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




logout.jsp

<%
    session.invalidate();
    response.sendRedirect("login.jsp");
%>

DBConnection.java

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {
    public static Connection getConnection() throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        return DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/webtechdb?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC",
            "root",
            "tiger"
        );
    }
}

LoginServlet.java

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



SubmitExamServlet.java

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

web.xml : 

<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee
         https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd"
         version="6.0">

    <servlet>
        <servlet-name>LoginServlet</servlet-name>
        <servlet-class>LoginServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>LoginServlet</servlet-name>
        <url-pattern>/login</url-pattern>
    </servlet-mapping>

    <servlet>
        <servlet-name>SubmitExamServlet</servlet-name>
        <servlet-class>SubmitExamServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>SubmitExamServlet</servlet-name>
        <url-pattern>/submitExam</url-pattern>
    </servlet-mapping>

    <welcome-file-list>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>

</web-app>

Mysql 

CREATE DATABASE webtechdb;
USE webtechdb;

CREATE TABLE exam_students (
    regno VARCHAR(20) PRIMARY KEY,
    name VARCHAR(50),
    password VARCHAR(50)
);

CREATE TABLE questions (
    qid INT PRIMARY KEY AUTO_INCREMENT,
    question VARCHAR(255),
    option1 VARCHAR(100),
    option2 VARCHAR(100),
    option3 VARCHAR(100),
    option4 VARCHAR(100),
    answer VARCHAR(100)
);

CREATE TABLE exam_results (
    id INT PRIMARY KEY AUTO_INCREMENT,
    regno VARCHAR(20),
    score INT
);

INSERT INTO exam_students VALUES
('101', 'Viswaa', '1234'),
('102', 'Praveen', '1234'),
('103', 'Muthu', '1234'),
('104', 'Sandeep', '1234'),
('105', 'Sriram', '1234');

INSERT INTO questions (question, option1, option2, option3, option4, answer) VALUES
('Java is a ?', 'Programming Language', 'Database', 'Browser', 'OS', 'Programming Language'),
('JSP stands for ?', 'Java Server Pages', 'Java Simple Program', 'Joint Server Page', 'None', 'Java Server Pages'),
('HTML is used for ?', 'Styling', 'Structuring Web Pages', 'Database', 'Server', 'Structuring Web Pages'),
('Servlet runs on ?', 'Browser', 'Server', 'Database', 'Editor', 'Server'),
('MySQL is a ?', 'Programming Language', 'Database', 'Operating System', 'Compiler', 'Database');



6 b .For displaying student mark lists.

index.jsp : 

<!DOCTYPE html>
<html>
<head>
    <title>Student Mark List Home</title>
</head>
<body>
    <h2>Student Mark List System</h2>
    <a href="search.jsp">Search Student Mark List</a>
</body>
</html>

marksheet.jsp : 

<%@ page session="false" %>
<!DOCTYPE html>
<html>
<head>
    <title>Student Mark Sheet</title>
</head>
<body>
    <h2>Student Mark Sheet</h2>

    <%
        String regno = (String) request.getAttribute("regno");
        String name = (String) request.getAttribute("name");
        String dept = (String) request.getAttribute("dept");
        Integer s1 = (Integer) request.getAttribute("subject1");
        Integer s2 = (Integer) request.getAttribute("subject2");
        Integer s3 = (Integer) request.getAttribute("subject3");
        Integer s4 = (Integer) request.getAttribute("subject4");
        Integer s5 = (Integer) request.getAttribute("subject5");
        Integer total = (Integer) request.getAttribute("total");
        Double average = (Double) request.getAttribute("average");
        String resultStatus = (String) request.getAttribute("result_status");
    %>

    <%
        if (regno != null) {
    %>
        <p>Register Number: <%= regno %></p>
        <p>Name: <%= name %></p>
        <p>Department: <%= dept %></p>

        <table border="1" cellpadding="10">
            <tr><th>Subject</th><th>Marks</th></tr>
            <tr><td>Subject 1</td><td><%= s1 %></td></tr>
            <tr><td>Subject 2</td><td><%= s2 %></td></tr>
            <tr><td>Subject 3</td><td><%= s3 %></td></tr>
            <tr><td>Subject 4</td><td><%= s4 %></td></tr>
            <tr><td>Subject 5</td><td><%= s5 %></td></tr>
            <tr><td>Total</td><td><%= total %></td></tr>
            <tr><td>Average</td><td><%= average %></td></tr>
            <tr><td>Result</td><td><%= resultStatus %></td></tr>
        </table>
    <%
        } else {
    %>
        <p>No student record found.</p>
    <%
        }
    %>
</body>
</html>

search.jsp : 

<!DOCTYPE html>
<html>
<head>
    <title>Search Student</title>
</head>
<body>
    <h2>Enter Register Number</h2>
    <form action="searchStudent" method="post">
        Register Number: <input type="text" name="regno" required><br><br>
        <input type="submit" value="Get Mark List">
    </form>
</body>
</html>

DBConnection.java : 

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {
    public static Connection getConnection() throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        return DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/webtechdb?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC",
            "root",
            "viswaa_gs"
        );
    }
}

 SearchStudentServlet.java : 

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class SearchStudentServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String regno = request.getParameter("regno");

        try {
            Connection con = DBConnection.getConnection();

            String query = "SELECT si.regno, si.name, si.dept, sm.subject1, sm.subject2, sm.subject3, sm.subject4, sm.subject5, sm.total, sm.average, sm.result_status "
                         + "FROM student_info si JOIN student_marks sm ON si.regno = sm.regno WHERE si.regno = ?";

            PreparedStatement ps = con.prepareStatement(query);
            ps.setString(1, regno);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                request.setAttribute("regno", rs.getString("regno"));
                request.setAttribute("name", rs.getString("name"));
                request.setAttribute("dept", rs.getString("dept"));
                request.setAttribute("subject1", rs.getInt("subject1"));
                request.setAttribute("subject2", rs.getInt("subject2"));
                request.setAttribute("subject3", rs.getInt("subject3"));
                request.setAttribute("subject4", rs.getInt("subject4"));
                request.setAttribute("subject5", rs.getInt("subject5"));
                request.setAttribute("total", rs.getInt("total"));
                request.setAttribute("average", rs.getDouble("average"));
                request.setAttribute("result_status", rs.getString("result_status"));
            }

            rs.close();
            ps.close();
            con.close();

            request.getRequestDispatcher("marksheet.jsp").forward(request, response);

        } catch (Exception e) {
            response.getWriter().println("Error: " + e.getMessage());
        }
    }
}

web.xml : 

<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee
         https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd"
         version="6.0">

    <servlet>
        <servlet-name>SearchStudentServlet</servlet-name>
        <servlet-class>SearchStudentServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>SearchStudentServlet</servlet-name>
        <url-pattern>/searchStudent</url-pattern>
    </servlet-mapping>

    <welcome-file-list>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>

</web-app>

MySql : 

/* Marksheet */

CREATE TABLE student_info (
    regno VARCHAR(20) PRIMARY KEY,
    name VARCHAR(50),
    dept VARCHAR(20)
);

CREATE TABLE student_marks (
    regno VARCHAR(20),
    subject1 INT,
    subject2 INT,
    subject3 INT,
    subject4 INT,
    subject5 INT,
    total INT,
    average DECIMAL(5,2),
    result_status VARCHAR(10),
    FOREIGN KEY (regno) REFERENCES student_info(regno)
);

INSERT INTO student_info VALUES
('201', 'Viswaa', 'CSE'),
('202', 'Anush', 'IT');

INSERT INTO student_marks VALUES
('201', 80, 75, 78, 82, 85, 400, 80.00, 'PASS'),
('202', 90, 88, 84, 91, 87, 440, 88.00, 'PASS');


7a . XML with Schema (XSD Validation)


book.xml : 

<?xml version="1.0"?>
<book xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="book.xsd">
    <title>Python Basics</title>
    <author>Ravi Kumar</author>
    <price>450</price>
</book>

book.xsd : 

<?xml version="1.0"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="book">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="title" type="xs:string"/>
                <xs:element name="author" type="xs:string"/>
                <xs:element name="price" type="xs:int"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>


7 b .  XML with XSLT
book.xml : 

<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="book.xsl"?>
<book>
    <title>Python Basics</title>
    <author>Ravi Kumar</author>
    <price>450</price>
</book>

book.xsl : 

<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Book Details</h2>
                <p>Title: <xsl:value-of select="book/title"/></p>
                <p>Author: <xsl:value-of select="book/author"/></p>
                <p>Price: <xsl:value-of select="book/price"/></p>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>



8 . Servlet-Based CRUD Operations Using JDBC

index.html : 

<html>
<body>
<h2>Employee CRUD</h2>

<form action="emp" method="post">
    ID: <input type="text" name="id"><br><br>
    Name: <input type="text" name="name"><br><br>
    Salary: <input type="text" name="salary"><br><br>

    <button type="submit" name="action" value="insert">Insert</button>
    <button type="submit" name="action" value="update">Update</button>
    <button type="submit" name="action" value="delete">Delete</button>
    <button type="submit" name="action" value="view">View</button>
</form>

</body>
</html>


EmployeeCRUDServlet.java : 

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;

public class EmployeeCRUDServlet extends HttpServlet {

    Connection con;

    public void init() throws ServletException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/company",
                "root",
                "viswaa_gs"
            );

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String action = request.getParameter("action");

        try {

            if ("insert".equals(action)) {

                int id = Integer.parseInt(request.getParameter("id"));
                String name = request.getParameter("name");
                float salary = Float.parseFloat(request.getParameter("salary"));

                PreparedStatement ps = con.prepareStatement(
                        "INSERT INTO employee VALUES (?, ?, ?)"
                );

                ps.setInt(1, id);
                ps.setString(2, name);
                ps.setFloat(3, salary);
                ps.executeUpdate();

                out.println("<h3>Inserted Successfully</h3>");
            }

            else if ("update".equals(action)) {

                int id = Integer.parseInt(request.getParameter("id"));
                String name = request.getParameter("name");
                float salary = Float.parseFloat(request.getParameter("salary"));

                PreparedStatement ps = con.prepareStatement(
                        "UPDATE employee SET name=?, salary=? WHERE id=?"
                );

                ps.setString(1, name);
                ps.setFloat(2, salary);
                ps.setInt(3, id);
                ps.executeUpdate();

                out.println("<h3>Updated Successfully</h3>");
            }

            else if ("delete".equals(action)) {

                int id = Integer.parseInt(request.getParameter("id"));

                PreparedStatement ps = con.prepareStatement(
                        "DELETE FROM employee WHERE id=?"
                );

                ps.setInt(1, id);
                ps.executeUpdate();

                out.println("<h3>Deleted Successfully</h3>");
            }

            else if ("view".equals(action)) {

                Statement st = con.createStatement();
                ResultSet rs = st.executeQuery("SELECT * FROM employee");

                out.println("<h2>Employee Records</h2>");
                out.println("<table border='1'>");
                out.println("<tr><th>ID</th><th>Name</th><th>Salary</th></tr>");

                while (rs.next()) {
                    out.println("<tr>");
                    out.println("<td>" + rs.getInt(1) + "</td>");
                    out.println("<td>" + rs.getString(2) + "</td>");
                    out.println("<td>" + rs.getFloat(3) + "</td>");
                    out.println("</tr>");
                }

                out.println("</table>");
            }

            out.println("<br><a href='index.html'>Back</a>");

        } catch (Exception e) {
            out.println("Error: " + e);
        }
    }

    public void destroy() {
        try {
            if (con != null) con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}



web.xml : 

<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
         version="5.0">

    <servlet>
        <servlet-name>emp</servlet-name>
        <servlet-class>EmployeeCRUDServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>emp</servlet-name>
        <url-pattern>/emp</url-pattern>
    </servlet-mapping>

</web-app>



Database Setup : 

CREATE DATABASE company;

USE company;

CREATE TABLE employee (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    salary FLOAT
);

https://repo1.maven.org/maven2/jakarta/servlet/jakarta.servlet-api/6.0.0/

Jakarta.servlet-api-6.0.0.jar - this file

Paste this into the tomcate/lib folder


Go to classes of your project then 

javac -cp ".;lib path\jakarta.servlet-api-6.0.0.jar" “*.java”`
    }
];
