
function first(){
	var button = document.getElementById("button");
	button.addEventListener("click", save, false);
}
function save(){
	var one = document.getElementById("user").value;
	var two = document.getElementById("textarea").value;
	sessionStorage.setItem(one,two);

		display(one);
	}

function display(one){
	var rightbox = document.getElementById("userpass2");
		var two = sessionStorage.getItem(one);
		rightbox.innerHTML = "Name is:" + one + "<br /> Comment is:" + two;
}
window.addEventListener("load", first, false);
