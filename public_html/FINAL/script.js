/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//JSON variables to keep track if two links are clicked

var trackLink =  {
    
    "link1" : false,
    "link2" : false,
    "scroll" : false
    
};

    var doc1Link = document.getElementById("agreeLink1");
    var doc2Link = document.getElementById("agreeLink2");
    
    doc1Link.addEventListener("click",checkLink1);
    doc2Link.addEventListener("click",checkLink2);
    
//Functions that 
function checkLink1(){
        trackLink.link1 = true;
        console.log("Clicked1");
        checkAgree();
    };
    
function checkLink2(){
        trackLink.link2 = true;
        console.log("Clicked2");
        checkAgree();
    };
    
    
 
//
var btnAgree = document.getElementById("agree");
var btnNotagree = document.getElementById("notagree");
var objDiv = document.getElementById("agreeScroll");

objDiv.addEventListener("scroll",checkScroll,false);

//Function that enable the radio button if both links were clicked
function checkAgree(){
    
if ( trackLink.scroll == true && trackLink.link1 == true && trackLink.link2 == true ){
    
    btnAgree.disabled = false;
    btnNotagree.disabled = false;
    console.log('false');
}


};

//Fucntion that check if user scrolled all the way down
function checkScroll(){
    if (objDiv.scrollTop == (objDiv.scrollHeight-objDiv.offsetHeight)){
        trackLink.scroll = true;
    }
    checkAgree();
}




//Display a message to the user if scroll was succesfull, both links has been clicked
// and any of the radio buttons is selected

var radio = false;          //Check if radio button has been selected
var accepted = false;           //Check if the agree radio button was selected
var declined = false;           //Check if the notagree radio button was selected    


//Function that display a message if user can continue and append the message to the form
function btnValid(){            
    
        if (btnAgree.checked === true && trackLink.link1 === true && trackLink.link2 === true){
            
            declined = false;
            accepted = true;
        }
        else if (btnNotagree.checked === true && trackLink.link1 === true && trackLink.link2 === true){             

            accepted = false;
            declined = true;
        }
        if (radio !== true && trackLink.link1 === true && trackLink.link2 === true){
            $("<b>YOU MAY NOW CONTINUE</b>").appendTo('form');
            radio = true;
}
}

//Function to remove the form from the page
function ToggleDiv() {             
                 $("#section1,#section2,#mainform").toggle("slow");
            };


function validation(){          //Function to remove everything from the page and run the function
                                //to create a new div based on which radio button is selected        
        
            if (declined === false && accepted === true){                
                                
                ToggleDiv();
                
                $("#submitAgreement").toggle("slow");

                createNewDiv(
                        "white",
                        "green",
                        "400px",
                        "3px solid black",
                        "15px",
                        "100%",
                        "1em auto",            
                        "<h3>THANK YOU FOR AGREE THE TERMS</h3>");                    
            }                   
            else if (accepted === false && declined === true){                        
                              
                ToggleDiv();
                $("#submitAgreement").toggle("slow");                          
                
                createNewDiv(
                        "white",
                        "red",
                        "400px",
                        "3px solid black",
                        "15px",
                        "100%",
                        "1em auto",            
                        "<h3>YOU DID NOT ACCEPT THE TERMS</h3>");                                    
            }       
}
//Click event listener for the agree radio button
$('#agree').click(function() {              
    btnValid();
});

//Click event listener for the notagree radio button
$('#notagree').click(function() {           
    btnValid();
});

//Click event listener for the continue button
$('#submitAgreement').click(function() {    
    validation();
});


//Function that creates a new Div for the agree or not agree messages
function createNewDiv(color,bgcolor,width,border,borderradius,height,margin,html){          //Function to create the new div
var newDiv = document.createElement("div");
      newDiv.style.color = color;
      newDiv.style.backgroundColor = bgcolor;
      newDiv.style.width = width;
      newDiv.style.border = border;
      newDiv.style.borderRadius = borderradius;
      newDiv.style.minHeight = height;
      newDiv.style.margin= margin;
      var label = document.createElement('label');
      label.innerHTML = html;
      label.style.textAlign="center";
      newDiv.appendChild(label);
      myDiv = document.getElementById("changeDiv");
      document.body.insertBefore(newDiv, myDiv);
}
