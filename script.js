//your JS code here. If required.
let count=0;
function mouse(){
	count++;
}
let myBtn=document.getElementById("Btn");
myBtn.addEventListener("click",(e)=>{
	console.log("clicked!!",e);
	mouse();
});
alert("localhost:3000 says");	
				   
					   