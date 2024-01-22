/* 
FORMS
form element that takes the submit event
*/
const profileForm = document.querySelector("#profile-form");

profileForm.addEventListener("submit", onUpdateProfile);

function onUpdateProfile(e) {
	// stopping the submit event from refereshing the browser
	
	e.preventDefault();

	//RefVAr to the input elements
	
	const firstName = document.querySelector("#first-name").value.trim();
	const lastName = document.querySelector("#last-name").value.trim();
		
	//ref to the DOM that is used to display the text
	const fullNameDisplay = document.querySelector("#full-name");
	fullNameDisplay.textContent =`${firstName} ${lastName}`; 
	const name =firstName + " " + lastName; 
	console.log(name)

	// document.querySelector("#full-name").textContent = `${firstName} ${lastName}`;
}
/* 
	functiona fn()
	a reusable action same code to perform specific task.
	repeating yourself in code... (fn)

	$600.00 

	terminology
	function body
	function formatNumber(){
		//write the js code..action
	}

	invoke / call means run the function
	formatNumber()
	
	SLKUSDFG2324 <====>formatNumber = ()=>{
		console.log("object");
	}
*/

//objs methods things that it can do
//OOP + functional programming
//parameter is something you want to act on; receiving
//fn () return a value return
// function formatPrice(price) {
// 	//write the function action/method..basically what it will do
	
// 	return `$${price.toFixed(2)}`;
// }
	

// //call/invoke/run
// //(argument) are what you pass  in; sent in

// const price =formatPrice(537);
// console.log (`Outside of the function: ${price}`);

