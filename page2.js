let array=[];
//console.log(inputEL)
let searchEl = document.getElementById('searchResults');
//console.log(searchEl);
let NamesEl=document.getElementById("names");


function addP(){
    let inputEL = document.getElementById('searchInput');
    
    
    let inputVal=inputEL.value;
    console.log(inputVal)
    if(inputVal==="") {
        alert("please invite friends");

    }
    else if ((array.length )<=3){
        array.push(inputVal);
        NamesEl.textContent=inputVal+" is invited";
        inputVal="";
    }
 
    else{
        alert("This game require only 4 players");
        NamesEl.textContent="Waiting for the players"
    }
    inputEL.value="";
   
    
}
console.log(array);

console.log(NamesEl)
