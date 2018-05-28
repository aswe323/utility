/*
 complete:make an exception in the creation of buttons for when the number of items in studentListDOM is not returning any leftovers when divided by 10
 TODO:look for a way to make the errors disapear. not even kidding.
 complete:eliminate any uneccesery single letter variables and make more clear once insted of them
 TODO:make the button event listener closer to the butotn (idealy in the buttons themself)
*/ //access to needed elements of the page
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
		
		if (studentListDOM.item(ndex+1) === null){break};
		let button = document.createElement("button");
		console.log(button);
		button.setAttribute("indexStart", index*10);
		button.setAttribute("display", "inline");
		button.innerHTML = index+1;
		divPage.appendChild(button);
	}
};

/*event listener will respong to clicks on elements with indexStart only, then will loop from
  indexStart forword 10 steps (inclusive) and set display to true.*/
document.getElementsByTagName('body')[0].addEventListener('click', (event) =>{

	//if the target has idexstart attrbute then...
	if (event.target.hasAttribute('indexStart')){

	let button = event.target;//set the button variable to target
	const buttonIndex = button.getAttribute('indexstart');//set button index to the index value

	hideAll();//hides all the student elements

	//if event index is not smaller then the starting index value plus 10. continue enabling student LI
	for (let eventIndex=buttonIndex; eventIndex<(parseInt(buttonIndex)+10);eventIndex++){
		studentListDOM.item(eventIndex).style.display='list-item';
		}
	}
})
//calling all function
function hideAndAppened() {

	hideAll();
	buttons();
	//default page is the first. so we display the first 10 students
	for (let i=0;i<10;i++){
		studentListDOM.item(i).style.display ="list-item";
	
	}
};
hideAndAppened();
	
