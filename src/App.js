import logo from './logo.svg';
import * as React from 'react';
import './App.css';

function App() {
  return (
    <>
    <header>
		<img src="banner.jpg" alt="Image" usemap="#home" id="banner" />
		<map name="home">
			<area shape="rect" coords="10, 10, 400, 200" href="Home_Page.html" alt="Home Page" />
		</map>
		<nav class="horizontal">
			<ul>
				<li><a href="Home_Page.html">Home</a></li>
				<li><a href="Tracy.html">Tracy</a></li>
				<li><a href="Brittany.html">Brittany</a></li>
				<li><a href="Charlie.html">Charlie</a></li>
				<li><a href="Matthew.html">Matthew</a></li>
			</ul>
		</nav>
	</header>
	<div class="wrapper">
		<div>
			<figure class="image" >
				<img src="CPhoto.jpg" alt="Image" />
				<figcaption> Charlie Smith </figcaption>
			</figure>
		</div>
		<div class="text" >
			<br/>
			<h1>About Me</h1>
			<Projects/>
			<br/>
			<p>
			</p>
			<br/>
      <br/>
			<h2>Heading</h2>
			<br/>
			<p>Text.</p>
			<br/>
		</div>
	</div>
	<script>
		$("#banner").hide()
		$("#banner").fadeIn(2000) 
	</script>
	<footer>
		<a href="Contact_us.html">Contact Us</a>
	</footer>
    </> 
    )  

	function Projects(){
		let [data, setData] = React.useState(undefined)
	
		React.useEffect(() => {
		  fetch('https://button-bejewled-mambo.glitch.me/')
			.then((response) => response.json())
			.then((data) => {
			  setData(data)
			});
		})
	
	  return <> 
		  
		<br/><br/>
	
		Projects <br/><br/> 
	
		{data && <Project project={data.projects[0]}/>}
		{data && <Project project={data.projects[1]}/>}
		{data && <Project project={data.projects[2]}/>}
	  </>
	}
	
	function Project(props){
	  return <div style={{border: "2px solid black", marginRight:"100px"}}>
		Name: {props.project.name}
		<ul>
		  <li>Language: {props.project.languages[0]}</li>
		  <li>Description: {props.project.description}</li>
		</ul> 
	  </div>
	}
	
}

export default App;
