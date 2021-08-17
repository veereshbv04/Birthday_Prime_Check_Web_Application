const date = document.querySelector("#datepicker");


const outputDiv = document.querySelector(".output");

const checkButton = document.querySelector("#check");




const outputprime = "<div><h2>Your date of birth is prime<h2></div>"
const outputnotprime = "<div><h1>Your date of birth is not prime number</h1></div>"




function isPrime(date){

    var numDate = Number(date);
    if(numDate === 1){
      
      outputDiv.innerHTML = outputnotprime
      return 
    }
  
    if(numDate === 2){
      outputDiv.innerHTML = outputnotprime
      return 
    }else{
      for(let i = 2; i<=date.length; i++){
          if(numDate%i === 0){
            outputDiv.innerHTML = outputnotprime
            return 
          }
      }
  
    }
    outputDiv.innerHTML = outputprime
    return 
}

checkButton.addEventListener("click",(e)=>{
  
    e.preventDefault();
    console.log("cliked");
   
    const dateArray = (date.value).split('-');
    var dd = Number(dateArray[0]);
    var mm = Number(dateArray[1]);
    var yyyy = Number(dateArray[2])

    var dds= dd.toString();
    var mms= mm.toString();
    var yyyys= yyyy.toString();

    isPrime(dds+mms+yyyys);
   
})