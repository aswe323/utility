/*
 step 1 

access list of students with DOM

step 2
creat function for showing and hiding pages.
 
step 3 

append page links function

step 4 

search based on email
*/
//access to needed elements of the page
//access to  div elemetn with .page-header class so to appened it the random page link	
const divHeader = document.querySelector('.pages-header');
const studentListDOM = document.querySelector(".student-list").children; // acces to list of li containing students
//accessing the email and name of students
const studentEmail = (student) => student.querySelector("div span").innerText;//access a studentListDOM email text
const studentName = (student) => student.querySelector("div h3").innerText;//acces to studentListDOM name text

function hideAndAppened(studentListDOM) {
	studentListDOM.style.display = "none";//adding a style to hide all the students from the html

	//add an html addition every loop from a changing arrey,each arrey instence will be a set of diffrent students according the the order of original arrey	
	for (let i; i<=Math.floor(studentListDOM/10);i++){

	//changing arrey every loop		
	let page = studentListDOM.splice(0, 10);

	//creat a button elemente
	let button = document.createElement("button");
	//attach the hidden students arrey instence to the button(say that 5 times xD)
	}

	
alert("im working");
