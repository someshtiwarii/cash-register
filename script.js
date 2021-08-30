const billAmount = document.querySelector(".bill-amount");
const cashGiven = document.querySelector(".cash-given");
const nextButton = document.querySelector(".next-button");
const checkButton = document.querySelector(".check-button");
const errorMessage = document.querySelector(".error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const secondDisplay = document.querySelector(".second");
const changeReturn = document.querySelector(".change-Return");

const notes=[2000,500,100,20,10,5,1];

nextButton.addEventListener("click", function errorHandler() {

    if (billAmount.value > 0){
        nextButton.style.display = "none"; 
        secondDisplay.style.display = "block";
    }
    else{
        showMessage("enter valid bill amount");
      }
    
}
);


checkButton.addEventListener("click", function(){
    if(Number(cashGiven.value) > Number(billAmount.value)){
        changeReturn.style.display="block";
        const returnAmount = Number(cashGiven.value-billAmount.value);
        calculateChange(returnAmount);
       
        
    }
    else{
        showMessage("atleast pay the bill")
    }
 
});



function calculateChange(returnAmount){ 
        
        for(let i=0; i<notes.length  ;i++)
        {
            const numberOfNotes=Math.trunc(returnAmount/notes[i]);
            returnAmount %= notes[i];
            noOfNotes[i].innerText = numberOfNotes;

        }
}

function showMessage(msg){
    errorMessage.style.display="block";
    errorMessage.innerText = msg;
}













