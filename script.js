function Login(){
  var inputEle = document.createElement("input");
  var submitEle = document.createElement("button");
  var messageBox = document.createElement("div");
  submitEle.innerHTML= "Submit"
  messageBox.innerHTML=" ";
  submitEle.addEventListener("click",function(){
  if(inputEle.value=="coolStudent123"){
   messageBox.innerHTML="Successful Login";
    nav();
  }
  else{ 
    messageBox.innerHTML="Invalid Login";
  }});
  document.body.appendChild(inputEle);
  document.body.appendChild(submitEle);
  document.body.appendChild(messageBox);
  inputEle.setAttribute("placeholder", "Login...");
}
var note = [];
function makeView(){
  var contentEle = document.createElement("button");
  contentEle.innerHTML="";
  contentEle.innerHTML="View Page"
}
  for(var i=0; i<note.length; i++){
    var itmEle= document.createElement("h6");
    itmEle.innerHTML=Number(note.value)[i];
    document.body.querySelector(".note").appendChild(itmEle);
  }
  
    function makeAbout(){
      var contentEle= document.createElement("button");
  contentEle.innerHTML="";
  var headEle = document.createElement("h1");
  headEle.innerHTML="About Page"
  contentEle.appendChild(headEle);
  var nameEle = document.createElement("h3");
  nameEle.innerHTML="Josie"
  contentEle.appendChild(nameEle);
}
   function makeHome(){
   var contentEle = document.createElement("button");
  contentEle.innerHTML="";
  contentEle.innerHTML="Home Page"
} 
    
Login();
function nav(){
   var homeEle = document.createElement("button");
  homeEle.innerHTML="Home";
   var viewEle = document.createElement("button");
  viewEle.innerHTML="View";
   var aboutEle = document.createElement("button");
   aboutEle.innerHTML= "About";
  
viewEle.addEventListener("click", function(){
  makeView();
})
 aboutEle.addEventListener("click", function(){
  makeAbout();
})
    homeEle.addEventListener("click", function(){
  makeHome();
})
  document.body.appendChild(viewEle);
  document.body.appendChild(aboutEle);
  document.body.appendChild(homeEle);
}