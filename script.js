//alert box
function showAlert(){
  alert ("Welcome to my web page");      
  document.getElementById("alertBox").innerHTML = "Welcome to buddhi.com";
  console.log("This is alert box");
}

//confirm box
function showConfirm(){
  let txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } 
  else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("confirmBox").innerHTML = txt;
  console.log(txt);
  console.log(typeof txt);
}

//prompt box
function showPrompt(){
  let text;
  let person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("promptBox").innerHTML = text;
  console.log(text);
  console.log(typeof text);
}


