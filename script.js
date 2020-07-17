
document.getElementById("name").addEventListener("blur", myFunction);
function myFunction() {
//   document.getElementById("result").textContent += 
  const ats = document.getElementById("name").value 
  if(document.getElementById("result").value !== 0 ){
    document.getElementById("result").textContent += ","
  }
  document.getElementById("result").textContent += ats
}

//3

// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
// 	event.preventDefault();
// 	let forma = [];
//     const n1 = document.getElementById("n1").value;
//     const n2 = document.getElementById("n2").value;
//     return (Math.abs(n1 - 100) < Math.abs(n2 - 100) ? n1 : n2);
	
// });

//4

// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
// 	event.preventDefault();
// 	let forma = [];
//     const n1 = document.getElementById("n1").value;
//     const n2 = document.getElementById("n2").value;
//     console.log(n1.charAt(0) + "+" + n2.charAt(0))
// });