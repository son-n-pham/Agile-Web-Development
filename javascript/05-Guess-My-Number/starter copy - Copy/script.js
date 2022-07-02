'use strict';

const random_number = Math.trunc(Math.random()*20) + 1;

document.querySelector("header .number").textContent = random_number;


const message = document.querySelector("main .right .message");

const checkbtn = document.querySelector("main .left .check");

let input_number;

const feedback = () => {
	if (input_number > random_number) {
		message.textContent = 'Too High';
	}
	if (input_number < random_number) {
		message.textContent = 'Too Low';
	}
	if (input_number === random_number) {
		message.textContent = 'You are correct!';
	}
}

checkbtn.addEventListener("click", () =>{
	input_number = Number(document.querySelector("main .left .guess").value);
	feedback();
});