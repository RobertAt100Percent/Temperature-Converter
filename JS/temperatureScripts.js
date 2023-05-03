//make functions to assign the value of the variables needed
//functions

//functions for celsius
function convertCelsius(){
    //get the user input and assign it to a variable
    let c = document.getElementById("txtCelsius").value;
        //display to console 
    console.log(c);

    //calculate 
    c = (c * 9/5) + 32;
    
    //display to console for consticency
    console.log(c);
    
    //display to the user
    document.getElementById("demo").innerHTML = c.toFixed(2);
}

function convertFahrenheit(){
    //get the user input and assign it to a variable
    let f = document.getElementById("txtFahrenheit").value;
    //display to console 
    console.log(f);

    //calculate f
    f = (f-32) * (5/9);
    
    //display to console 
    console.log(f);
    
    //display to the user
    document.getElementById("demo").innerHTML = f.toFixed(2);
}

