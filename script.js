// Output Elements
const outputYear = document.querySelector(".output-year")
const outputMonth = document.querySelector(".output-month")
const outputDay = document.querySelector(".output-day")
const submitBtn = document.querySelector(".submit-btn")

// Input Elements
const inputYear = document.querySelector("#year")
const inputMonth = document.querySelector("#month")
const inputDay = document.querySelector("#day")


// Error Elements
const errorYear = document.querySelector(".error-year")
const errorMonth = document.querySelector(".error-month")
const errorDay = document.querySelector(".error-day")

let isValid = false;

inputDay.addEventListener("input", (e) => {
    if (+inputDay.value > 31) {
        errorDay.textContent = "Must be a valid day";
        isValid = false;
        return;
    } else {
        isValid = true;
        errorDay.textContent = "";
    }
    if (+inputDay.value === 0) {
        isValid = false;
        errorDay.textContent = "This field is required";
        isValid = false;
        return;
    } else {
        errorDay.textContent = "";
    }
})

inputMonth.addEventListener("input", (e) => {
    if (+inputMonth.value > 12) {
        errorMonth.textContent = "Must be a valid month";
        isValid = false;
        return;
    } else {
        isValid = true;
        errorMonth.textContent = "";
    }
    if (+inputMonth.value === 0) {
        isValid = false;
        errorMonth.textContent = "This field is required";
        isValid = false;
        return;
    } else {
        errorMonth.textContent = "";
    }
})
inputYear.addEventListener("input", (e) => {
    if (+inputYear.value > 2024) {
        errorYear.textContent = "Must be in the past";
        isValid = false;
        return;
    } else {
        isValid = true;
        errorYear.textContent = "";
    }
    if (+inputYear.value === 0) {
        isValid = false;
        errorYear.textContent = "This field is required";
        isValid = false;
        return;
    } else {
        errorYear.textContent = "";
    }
})

submitBtn.addEventListener('click', CalculateDate)

function CalculateDate() {
    if (isValid) {
        let birthDay = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        let birthdayObj = new Date(birthDay);
        let ageDiff = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiff);
        
        let ageYear = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDate() - 1; // getUTCDate() returns day of the month
        
        outputDay.textContent = ageDay;
        outputMonth.textContent = ageMonth; // Adjust month to be from 1 to 12
        outputYear.textContent = ageYear;
    } else {
        alert("Please fill out all required fields correctly.");
    }
}