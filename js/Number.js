let check = document.querySelector(".check");
let number = document.querySelector(".number");
let text = document.querySelector(".text");

let regex = /^[\d,\s,\+,\-]{10}/;

check.addEventListener("click",()=>{
	if(number.value ==""){
		text.innerText = "Please Enter Your Phone Number";
		text.style.color = "#fff";
	}
	else if(number.value.match(regex)){
		text.style.color = "rgba(4,125,9,1)";
		text.innerText="valid"
	}
	else
		{
		text.innerText = "Oops! Your Phone Number Is Invalid";
		text.style.color = "#da3400";
		return false;
		}
});