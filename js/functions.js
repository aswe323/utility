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
const divPage = document.querySelector('.page');//access to div tag with .class elements
const studentListDOM = document.querySelector(".student-list").children; // acces to list of li containing students
//accessing the email and name of students
const studentEmail = (student) => student.querySelector("div span").innerText;//access a studentListDOM email text
const studentName = (student) => student.querySelector("div h3").innerText;//acces to studentListDOM name text



function hideAll (){

	//adding a style to hide all the students from the html
	for (let i=0; i<studentListDOM.length;i++){
	studentListDOM[i].style.display = "none";//adding a style to hide all the students from the html
	}
}


function hideAndAppened() {

	hideAll();
	buttons();
	


};
function buttons(){

	for (let i=0;i<=studentListDOM.length/10;i++){
		let button = document.createElement("button");
		console.log(button);
		button.setAttribute("indexStart", i);
		button.innerHTML = i+1;
		divPage.appendChild(button);
	}
}
divPage.addEventListener('click', event) =>{
	

	if (event.target.hasAttribute('indexStart')){
	const button = event.target;
		for (let i=button.indexStart;i<button.indexStart;i++){
			studentListDOM[i].display='true';
		}
	}
}
hideAndAppened();
	
