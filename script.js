let para=document.getElementById("counter");
//your JS code here. If required.
let count=0;
function mouse(){
	count++;
	para.innerHTML=count; 
	alert(count)
}
let myBtn=document.getElementById("incrementBtn");
myBtn.addEventListener("click",(e)=>{
	console.log("clicked!!",e);
	mouse();
});
	

				   
					   