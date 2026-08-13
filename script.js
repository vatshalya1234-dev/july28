console.log("Page loaded successfully"); 
 
function runJS() { 
 document.getElementById("output").innerHTML = 
     "<h3>Hello from External JS!</h3>"; 
 
 console.log( 
     "Button was clicked at: " + 
     new Date().toLocaleTimeString() 
 
 ); 
 
 document.getElementById("output").innerHTML += "<p>This line came from JavaScript of Home page.</p>";}

