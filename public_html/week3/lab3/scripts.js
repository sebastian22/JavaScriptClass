/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * Creating a function to generate the random ad
 */
function random(){

/*
 * JSON variable with index 5; title : description 
 */
var ads = []; 

ads.push({ "beverage" : 'coke', "message" : 'open happiness' });
ads.push({ "beverage" : 'pepsi' , "message" : 'live for now' });
ads.push({ "beverage" : 'sprite' , "message" : 'open mind' });
ads.push({ "beverage" : 'crush' , "message" : 'evolution of flavor' });
ads.push({ "beverage" : 'tea' , "message" : 'the world of the herbs' });

/*
 * creating new variable that is going to catch a random number from the index
 * value, in this case one number out if five possibilities, using anothe function
 * randomNum()
 */

var adIndex = randomNum (ads.length);
        
   /*
    * command to see the new variable in the console
    */ 
console.log(adIndex);
console.log(ads[adIndex]["beverage"] + " " + ads[adIndex]["message"]);

/*
 * variable to change the title for the message of the ad picked.
 */
var changeTitle = ads[adIndex]["message"];
document.title = changeTitle.substr(0,10) + "...";


return ads[adIndex]["beverage"] + " " + ads[adIndex]["message"];
                
            
}

/*
 * this fucntion will take a random number and will drop it to the low decimal
 * from the
 */
function randomNum(max){
   
    return Math.floor((Math.random()*max));
    
}
/*
 * control the div element ad and replacing the values with innerHTML
 */
var div = document.getElementById("ad");

div.innerHTML = random();         




