export const experimentsData = [
  {
    id: 'exp1-H',
    title: 'Exp 1',
    image: '/south_india_map.png',
    code: 
    `dashboard.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hospital Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>


<header>
    <h1>Hospital Dashboard</h1>
    <nav>
        <a href="dashboard.html">Dashboard</a>
        <a href="wards.html">Wards</a>
    </nav>
</header>


<!-- MAIN STATS -->
<div class="page-bg">
    <section class="stats">




    <div class="stat-card">
        <h3>Total Wards</h3>
        <p>3</p>
    </div>


    <div class="stat-card">
        <h3>Total Beds</h3>
        <p>110</p>
    </div>


    <div class="stat-card">
        <h3>Occupied Beds</h3>
        <p>82</p>
    </div>


    <div class="stat-card safe">
        <h3>Available Beds</h3>
        <p>28</p>
    </div>


</section>


<!-- QUICK STATUS STRIP -->
<section class="quick-status">
    <h2>Quick Ward Status</h2>


    <div class="status-row critical">
        <span>ICU</span>
        <span>High Load</span>
    </div>


    <div class="status-row normal">
        <span>General Ward</span>
        <span>Stable</span>
    </div>


    <div class="status-row special">
        <span>Pediatric Ward</span>
        <span>Busy</span>


    </section>
</div>


</body>
</html>



wards.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ward Details</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>


<header>
    <h1>Ward Details</h1>
    <nav>
        <a href="dashboard.html">Dashboard</a>
        <a href="wards.html">Wards</a>
    </nav>
</header>


<div class="page-bg">
    <section class="wards">




    <!-- ICU -->
    <div class="ward-card icu">
        <div class="image-box">
            <img src="images/icu.jpg" alt="ICU Ward">
            <span class="badge critical">CRITICAL</span>
        </div>
        <div class="ward-info">
            <h2>ICU</h2>
            <p>Doctor: Dr. Kumar</p>
            <p>20 Beds</p>


            <div class="bar">
                <div class="fill red" style="width:75%"></div>
            </div>
            <small>15 Occupied | 5 Available</small>
        </div>
    </div>


    <!-- General -->
    <div class="ward-card general">
        <div class="image-box">
            <img src="images/general.png" alt="General Ward">
            <span class="badge normal">NORMAL</span>
        </div>
        <div class="ward-info">
            <h2>General Ward</h2>
            <p>Doctor: Dr. Meena</p>
            <p>60 Beds</p>


            <div class="bar">
                <div class="fill green" style="width:60%"></div>
            </div>
            <small>36 Occupied | 24 Available</small>
        </div>
    </div>


    <!-- Pediatric -->
    <div class="ward-card pediatric">
        <div class="image-box">
            <img src="images/pedia.png" alt="Pediatric Ward">
            <span class="badge special">SPECIAL</span>
        </div>
        <div class="ward-info">
            <h2>Pediatric Ward</h2>
            <p>Doctor: Dr. Arjun</p>
            <p>30 Beds</p>


            <div class="bar">
                <div class="fill blue" style="width:85%"></div>
            </div>
            <small>26 Occupied | 4 Available</small>
        </div>
    </div>


</section>
</div>


</body>
</html>



style.css


body{
  font-family: Arial, sans-serif;
  background:#f4f4f4;
  margin:0;
}


header{
  background:#1e3a8a;
  color:white;
  padding:15px;
  text-align:center;
}


nav a{
  color:white;
  text-decoration:none;
  margin:0 10px;
  font-weight:bold;
}


/* simple grids */
.stats,.wards{
  display:grid;
  gap:20px;
  padding:20px;
}
.stats{grid-template-columns:repeat(auto-fit,minmax(180px,1fr))}
.wards{grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}


/* simple cards */
.stat-card,.quick-status,.ward-card{
  background:white;
  border-radius:10px;
  padding:15px;
}


.ward-card{padding:0; overflow:hidden}


/* image */
.image-box img{
  width:100%;
  height:170px;
  object-fit:cover;
}


/* badges */
.badge{
  position:absolute;
  top:10px;
  left:10px;
  padding:4px 10px;
  border-radius:20px;
  font-size:12px;
  color:white;
}
.critical{background:#dc2626}
.normal{background:#16a34a}
.special{background:#2563eb}


/* bed bar */
.bar{
  height:8px;
  background:#ddd;
  border-radius:10px;
  margin:8px 0;
}
.fill{height:100%; border-radius:10px}
.red{background:#ef4444}
.green{background:#22c55e}
.blue{background:#3b82f6}

`
  },
  {
    id: 'exp1-',
    title: 'Exp 1',
    image: '/south_india_map.png',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Clean City App</title>

<style>

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body */
body {
  font-family: Arial, sans-serif;
  background: #eef7f0;
}

/* NAVBAR */
nav {
  background: #14532d;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
}

nav h2 {
  font-size: 20px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 25px;
}

nav ul li {
  cursor: pointer;
}

nav ul li:hover {
  text-decoration: underline;
}

/* HEADER */
header {
  background: #16a34a;
  color: white;
  text-align: center;
  padding: 30px 20px;
}

/* CONTAINER (IMPORTANT FIX) */
.container {
  max-width: 1100px;
  margin: 40px auto;
  padding: 0 20px;
}

/* GRID */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 25px;
}

/* CARD */
.card {
  background: white;
  border-radius: 12px;
  padding: 25px 20px;
  text-align: center;
  border-left: 6px solid #16a34a;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-6px);
}

/* BUTTON */
button {
  margin-top: 12px;
  padding: 8px 14px;
  border: none;
  background: #16a34a;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

/* FOOTER */
footer {
  margin-top: 50px;
  background: #14532d;
  color: white;
  text-align: center;
  padding: 15px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 10px;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
  }

  .container {
    margin: 20px auto;
  }

  .cards {
    grid-template-columns: 1fr;
  }
}

</style>
</head>

<body>

<!-- NAVBAR -->
<nav>
<h2>Clean City</h2>
<ul>
<li>Home</li>
<li>Awareness</li>
<li>Contact</li>
</ul>
</nav>

<!-- HEADER -->
<header>
<h1>Clean City Awareness</h1>
<p>Keep Your Surroundings Clean</p>
</header>

<!-- MAIN CONTENT -->
<div class="container">

<div class="cards">

<div class="card">
<h3>Waste Management</h3>
<p>Segregate waste into dry and wet.</p>
<button onclick="alert('Use separate bins')">Learn More</button>
</div>

<div class="card">
<h3>Plastic Reduction</h3>
<p>Avoid single-use plastics.</p>
<button onclick="alert('Use reusable items')">Learn More</button>
</div>

<div class="card">
<h3>Tree Plantation</h3>
<p>Plant trees for future.</p>
<button onclick="alert('Plant one tree yearly')">Learn More</button>
</div>

<div class="card">
<h3>Water Saving</h3>
<p>Use water wisely.</p>
<button onclick="alert('Save every drop')">Learn More</button>
</div>

</div>

</div>

<!-- FOOTER -->
<footer>
Clean City App | Social Awareness Project
</footer>

</body>
</html>`}   

  
];