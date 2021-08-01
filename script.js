const billAmount = document.querySelector(".bill-amount");
const cashGiven = document.querySelector(".cash-given");
const checkButton = document.querySelector(".check-button");
const errorMessage = document.querySelector(".error-message");
const noOfNotes = document.querySelector(".no-of-notes");

const notes=[2000,500,100,20,10,5,1];

checkButton.addEventListener("click", function errorHandler() {
    if (billAmount.value >0){
        if(billAmount.value<cashGiven.value){
            const returnAmount = cashGiven.value-billAmount.value;
            calculateChange(returnAmount);
        }
        else{
            showMessage("atleast pay the bill")
        }
    }
    else{
        showMessage("enter valid bill amount")
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













