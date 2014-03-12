/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fadeDiv = document.getElementById('fading');
fadeDiv.style.opacity = 0;


//Function that change the div element to a float in order to be able to increase the opacity 
function fade(){
    
    var opacityValue = parseFloat(fadeDiv.style.opacity); 
    // Using 0.01 opacity rate to see clearly the effect
    opacityValue += .01;
    fadeDiv.style.opacity = opacityValue;
}


//Function that activate the fading effect in div element until reaches opacity value = 1
function fading(){
   
    var valueOpacity = parseFloat(fadeDiv.style.opacity); 
  
    if (valueOpacity < 1){
        fade();
        setTimeout(fading, 100);
    }
}

fading();



//Makes the alert message dissapear after 10 seconds in the page



function hideAlertMsg(){
    
    fadeDiv.style.display = "none";
    
}

window.setTimeout("hideAlertMsg();", 10000);



var canvas = document.getElementById("images");
var context = canvas.getContext("2d");

//Creates a Circle shape
context.beginPath();
context.arc(650,300,100,0,2*Math.PI);
context.lineWidth="20";
context.strokeStyle="black";
context.stroke();

//Creates a Rectangule shape
context.beginPath();
context.rect(600,100,100,75);
context.lineWidth="5";
context.strokeStyle="black";
context.stroke();





//Add Image function
var image = new Image();

image.onload = function(){
    context.drawImage(image, 200, 100,300,300);
    //context.stroke();
    };
    
image.src = "http://www.myteenagewerewolf.com/home/lauren/public_html/wp-content/uploads/2011/04/Boxing-Gloves.jpg";

