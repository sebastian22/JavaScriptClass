/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var userdata = {
    
    "email" : '',
    "name" : '',
 
    "windowsHeight" : '',
    "windowsWidth" : '',
    "navigator" : '',
    "title" : '',  
    
    "mousex" : [],
    "mousey" : []
    
    };


/*
 * Functions to collect info Email and Name Input
 * We need no create a variable to attach the object from the HTML file
 */
var email2 = document.getElementById('email');
var fname = document.getElementById('fullname');

function collectEmail(){
    userdata.email = document.getElementById('email').value;
}
email2.addEventListener('blur',collectEmail);



function collectName(){
    userdata.name = document.getElementById('fullname').value;
}
fname.addEventListener('blur',collectName);

/*
 * Functions to collect info Windows Size, Browser and Doc Title
 * We could do this a multiple function
 */
function collectLoads(){
    userdata.windowsHeight = (innerHeight);
    userdata.windowsWidth = (innerWidth);
    userdata.navigator = (navigator.userAgent);
    userdata.title = (document.title);
    
}

window.addEventListener('load',collectLoads);


/*
 * Functions to collect info Mouse 100 first coords.
 */
function collectMouse(e){
    userdata.mousex.push(e.clientX);
        if ( userdata.mousex.length > 100 ){
            document.removeEventListener('mousemove', collectMouse);
        }
        
    userdata.mousey.push(e.clientY);
        if ( userdata.mousey.length > 100 ){
            document.removeEventListener('mousemove', collectMouse);
    }
}
    document.addEventListener('mousemove', collectMouse);




function showResults() {
    console.clear();
    console.log(userdata);
}

var results = document.getElementById('showResults');

results.addEventListener("click", showResults);


