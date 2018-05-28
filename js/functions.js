/*
 KNOWN BUGS:

 TO-ADD:

 TO-REFACTOR:
 
*/

/*----------------------------------------------------------
 *		  MINIMUM VIABLE PRODUCT                   *
-----------------------------------------------------------*/

//access to needed elements of the page
const divPage = document.querySelector('.page');//acces to first tag with page class in it. 
const studentListDOM = document.querySelector(".student-list").children; // acces to list of li containing students
//accessing the email and name of students
const studentEmail = (student) => student.querySelector("div span").innerText;//access a studentListDOM email text
const studentName = (student) => student.querySelector("div h3").innerText;//acces to studentListDOM name text


//hide every element in the student-list selector studentListDOM;
function hideAll (){

	//adding a style to hide all the students from the html
	for (let i=0; i<studentListDOM.length;i++){
	studentListDOM[i].style.display = 'none';//adding a style to hide all the students from the html

	}
}

//creating buttons in the range of studentListDOM/10 then adding another for any leftovers, for every button an appropriate indexstart attribute is set
function buttons(){

	for (let index=0;index<=studentListDOM.length/10;index++){
		
		if (studentListDOM.item(index+1) === null){break};
		let button = document.createElement("button");
		console.log(button);
		button.setAttribute("data-indexstart", index*10);
		button.setAttribute("display", "inline");
		button.innerHTML = index+1;
		divPage.appendChild(button);
	}
};
buttons();
let buttonElements = document.querySelectorAll("[data-indexstart]");
console.log(buttonElements);
for (let buttonInstence=0;buttonInstence<buttonElements.length;buttonInstence++){
	
/*event listener will respong to clicks on elements with indexStart only, then will loop from
  indexStart forword 10 steps (inclusive) and set display to true.*/
//document.getElementsByTagName('body')[0].addEventListener('click', (event) =>{

	buttonElements[buttonInstence].addEventListener('click', (event) =>{

		let button = event.target;//set the button variable to target
		const buttonIndex = button.getAttribute('data-indexstart');//set button index to the index value

		hideAll();//hides all the student elements

		//if event index is not smaller then the starting index value plus 10. continue enabling student LI
		for (let eventIndex=buttonIndex; eventIndex<(parseInt(buttonIndex)+10);eventIndex++){
			if (studentListDOM.item(eventIndex) === null){break};
			studentListDOM.item(eventIndex).style.display='list-item';
			}
	
	})
}
//calling all function
function hideAndAppened() {

	hideAll();

	//default page is the first. so we display the first 10 students
	for (let i=0;i<10;i++){
		studentListDOM.item(i).style.display ="list-item";
	
	}
};
hideAndAppened();
	
