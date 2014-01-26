/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function submitForm() {
    
    /*
     * Creating variables, one for correct input and another for wrong input
     */
    var fullname = document.getElementById ("name");
    var fullnameErr = document.getElementById ("err_name");
    var fullemail = document.getElementById ("email");
    var fullemailErr = document.getElementById ("err_email");
    var fullcomment = document.getElementById ("comments");
    var fullcommentErr = document.getElementById ("err_comments");
    
     /*
     * if statement to evalute both entries at name field
     */
    if ( fullname.value.length > 0 ){
        fullname.className = "good"; /* classname from CSS*/
        fullnameErr.innerHTML = "OK";
        fullnameErr.className = "valid";
    } else {
        fullname.className = "bad";
        fullnameErr.innerHTML = "Must enter a valid name";
        fullnameErr.className = "error";
           }              
   
     /*
     * if statement to evalute both entries at email field
     */
    if ( fullemail.value.length > 0 && fullemail.value.indexOf("@") > 0 && fullemail.value.indexOf(".") > 0 ){ /* triple statement conditional*/
        fullemail.className = "good";
        fullemailErr.innerHTML = "OK";
        fullemailErr.className = "valid";
    } else {
        fullemail.className = "bad";
        fullemailErr.innerHTML = "Must enter valid email";
        fullemailErr.className = "error";
           }
    /*
     * if statement to evalute both entries at comment field
     */
    
    if ( fullcomment.value.length > 0 && fullcomment.value.length < 150 ){ 
        /*
        * condition for comments between 0 and 150
        */
        fullcomment.className = "good";
        fullcommentErr.innerHTML = "OK";
        fullcommentErr.className = "valid";
    } else {
        fullcomment.className = "bad";
        fullcommentErr.innerHTML = "Must enter comments";
        fullcommentErr.className = "error";
           }
   

   }


