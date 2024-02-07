let calculateBtn = document.querySelector(".calculate-btn");
let datePicker = document.querySelector(".date-picker");
let yearsNumber = document.querySelector(".years .number");
let monthsNumber = document.querySelector(".months .number");

calculateBtn.addEventListener("click",function(){
    console.log(datePicker.value);
    if(datePicker.value == null || datePicker.value == ""){
        alert("Invalid Date");
    }else if((Date.now() - new Date(datePicker.value).getTime()) < 0){
        alert("Born in Future?");
    }else{
        let chosenDate = new Date(datePicker.value);
        let currentDate = new Date();
        let diffDate = new Date(currentDate.getTime() - chosenDate.getTime());
        yearsNumber.textContent = diffDate.getUTCFullYear() - 1970;
        monthsNumber.textContent = diffDate.getUTCMonth();
    }
});