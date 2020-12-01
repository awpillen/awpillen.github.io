var loans = [{
       loan_year: 2020,
       loan_amount: 10000.00,
       loan_int_rate: 0.0453
   },
   {
       loan_year: 2021,
       loan_amount: 10000.00,
       loan_int_rate: 0.0453
   },
   {
       loan_year: 2022,
       loan_amount: 10000.00,
       loan_int_rate: 0.0453
   },
   {
       loan_year: 2023,
       loan_amount: 10000.00,
       loan_int_rate: 0.0453
   },
   {
       loan_year: 2024,
       loan_amount: 10000.00,
       loan_int_rate: 0.0453
   }
];




$(document).ready(function() {

   // populate default values for first loan year
   var defaultYear = loans[0].loan_year;
   $("#loan_year0" + 1).val(defaultYear++);
   var defaultLoanAmount = loans[0].loan_amount;
   $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));
   var defaultInterestRate = loans[0].loan_int_rate;
   $("#loan_int0" + 1).val(defaultInterestRate);
   var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
   $("#loan_bal0" + 1).text(toMoney(loanWithInterest));

   // populate default values for other loan years
   for (let i = 2; i < 6; i++) {
       $(`#loan_year0${i}`).val(defaultYear++);
       $(`#loan_year0${i}`).attr("disabled", "true"); //set all year values except the first one to disabled
       $(`#loan_year0${i}`).css({ //setting colors
           "backgroundColor": "grey",
           "color": "white"
       });
       $(`#loan_amt0${i}`).val(defaultLoanAmount.toFixed(2)); //apply 10,000 dollar value
       $(`#loan_int0${i}`).val(defaultInterestRate); //apply the default interest rate
       $(`#loan_int0${i}`).attr("disabled", "true");
       $(`#loan_int0${i}`).css({ //setting colors
           "backgroundColor": "grey",
           "color": "white"
       });
       loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
       $("#loan_bal0" + i).text(toMoney(loanWithInterest));
   }

   $("input[type=text]").focus(function() {
       $(this).select();
       $(this).css("background-color", "yellow");
   });
   $("input[type=text]").blur(function() {
       $(this).css("background-color", "white");
       updateLoansArray();
   });

   // set focus to the first year

});

// -------------------------------------------------------

//toComma function
function toComma(value) {
   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let toMoney = (value) => {
   return `\$${toComma(value.toFixed(2))}`;
}
let savedata = () => {
   localStorage.setItem(`as06`, JSON.stringify(loans)); //save all data to be in the local storage
}

let loaddata = () => { //begin loadata
   if (localStorage.getItem(`as06`) != null) {
       loans = JSON.parse(localStorage.getItem(`as06`));
       updateForm();
   } else {
       alert("Error: no saved values");
   }
}

function updateLoansArray() {

   //the following values will determine the ability for a value to be entered.
   let yearcontroller = /^(19|20)\d{2}$/; //checks if the value is a real number and in the range of 1899-2099
   let amountcontroller = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/; //checks if the value is a real number and above 1
   let integercontroller = /^(0|)+(.[0-9]{1,5})?$/; //checks to ensure the value is a real number is below 1.0
   let tracker = true; //used to see if there are any errors with the constraints above

   if (!yearcontroller.test($(`#loan_year01`).val())) { //if yearcontroller does not pass
       tracker = false; //set tracker to false
       alert("error in year field");
   }

   for (i = 1; i < 6; i++) { //loop all of amount field
       if (!amountcontroller.test($(`#loan_amt0${i}`).val())) { //if amountcontroller is not passed
           tracker = false; //set tracker to false
           alert("error in amount field in box: " + i);
       }
   }

   if (!integercontroller.test($(`#loan_int01`).val())) { //if integercontroller is not passed
       tracker = false; //set tracker to false
       alert("error in interest rate field");
   }

   if (tracker) {
       loans[0].loan_year = parseInt($("#loan_year01").val());
       for (var i = 1; i < 5; i++) {
           loans[i].loan_year = loans[0].loan_year + i;

       for (i = 1; i < 6; i++) {
           let amount = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2);
           loans[i - 1].loan_amount = amount; .
       }

       let interestrate = parseFloat($("#loan_int01").val());
       for (i = 0; i < 5; i++) {
           loans[i].loan_int_rate = interestrate;
       }



       updateForm();

   }

}

let updateForm = () => {
   loanWithInterest = 0;
   let totalloan = 0;
   for (i = 1; i < 6; i++) {
       $(`#loan_year0${i}`).val(loans[i - 1].loan_year);
       let loaned = loans[i - 1].loan_amount;
       $(`#loan_amt0${i}`).val(loaned);
       totalloan += parseFloat(loaned);
       $(`#loan_int0${i}`).val(loans[i - 1].loan_int_rate);
       loanWithInterest = (loanWithInterest + parseFloat(loaned)) * (1 + loans[0].loan_int_rate);
       $("#loan_bal0" + i).text(toMoney(loanWithInterest));
   }
   let totalamountowed = loanWithInterest - totalloan;
   $(`#loan_int_accrued`).text(toMoney(totalamountowed));
}


var app = angular.module('appdata', []);

app.controller('alldata', function($scope) {
   $scope.payments = [];
   $scope.populate = function() {

       updateForm();

       let endprice = loanWithInterest;
       let interestrate = loans[0].loan_int_rate;
       let r = interestrate / 12;
       let n = 11;

       let pay = 12 * (endprice / ((((1 + r) ** (n * 12)) - 1) / (r * (1 + r) ** (n * 12))));
       for (let i = 0; i < 10; i++) {
           endprice -= pay
           let interested = endprice * (interestrate);
           $scope.payments[i] = {
               "year": loans[4].loan_year + i + 1,
               "payed": toMoney(pay),
               "interestamount": toMoney(interested),
               "endbalance": toMoney(endprice += interested)
           }
       }
       $scope.payments[10] = {
           "year": loans[4].loan_year + 11,
           "payed": toMoney(endprice),
           "interestamount": toMoney(0),
           "endbalance": toMoney(0)
       }
   }
});
