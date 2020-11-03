// 6. modify basic JS object, with "this" keyword
let person = {

  //streetAddress, city, state, zipCode. Add method, fullAddress(), which prints full address on a single line

  streetAddress: "3671 Whispymound Drive",
  city: "Los Santos",
  state: "California",
  zipCode: "90001",
  fullAddress: function(){return this.streetAddress + " " + this.city + " " + this.state + " " + this.zipCode},
  firstName: "Franklin",
  lastName: "Clinton",
  age: 45,
  fullName: function() {return this.firstName  + " " + person.lastName}

}
document.getElementById("1A").innerHTML = person.fullName();
document.getElementById("1B").innerHTML = person.fullAddress();

// Instructions
// modify person object, above, as follows
// add properties, streetAddress, city, state, zipCode
// add method, fullAddress(), which prints full address on a single line.
// Display output of fullAddress() in <div id="1B">
person.streetAddress = "123 Main Street";

// ==================

// 7. create basic DOM object
let div2a = document.getElementById("2A");
let table2a = createTable("table2a");
div2a.appendChild(table2a);
table2a.setAttribute("style", "border:1px solid black;")
table2a.setAttribute("width", "100%")
appendTableRow3(table2a,"1","2","3");
appendTableRow3(table2a,"4","5","6");
appendTableRow3(table2a,"7","8","9");


let div2b = document.getElementById("2B");
let table2b = createTable("table2b");
div2b.appendChild(table2b);
table2b.setAttribute("style", "border:1px solid black;")
table2b.setAttribute("width", "100%")
appendTableRow5(table2b,"1","2","3","4","5");
appendTableRow5(table2b,"6","7","8","9","10");
appendTableRow5(table2b,"11","12","13","14","15");
appendTableRow5(table2b,"16","17","18","19","20");
appendTableRow5(table2b,"21","22","23","24","25");
table2b.children[0].children[0].children[0].style.border="solid #000000"
table2b.children[0].children[1].children[0].style.border="solid #000000"
table2b.children[0].children[2].children[0].style.border="solid #000000"
table2b.children[0].children[3].children[0].style.border="solid #000000"
table2b.children[0].children[4].children[0].style.border="solid #000000"

table2b.children[0].children[0].children[1].style.border="solid #000000"
table2b.children[0].children[1].children[1].style.border="solid #000000"
table2b.children[0].children[2].children[1].style.border="solid #000000"
table2b.children[0].children[3].children[1].style.border="solid #000000"
table2b.children[0].children[4].children[1].style.border="solid #000000"

table2b.children[0].children[0].children[2].style.border="solid #000000"
table2b.children[0].children[1].children[2].style.border="solid #000000"
table2b.children[0].children[2].children[2].style.border="solid #000000"
table2b.children[0].children[3].children[2].style.border="solid #000000"
table2b.children[0].children[4].children[2].style.border="solid #000000"

table2b.children[0].children[0].children[3].style.border="solid #000000"
table2b.children[0].children[1].children[3].style.border="solid #000000"
table2b.children[0].children[2].children[3].style.border="solid #000000"
table2b.children[0].children[3].children[3].style.border="solid #000000"
table2b.children[0].children[4].children[3].style.border="solid #000000"

table2b.children[0].children[0].children[4].style.border="solid #000000"
table2b.children[0].children[1].children[4].style.border="solid #000000"
table2b.children[0].children[2].children[4].style.border="solid #000000"
table2b.children[0].children[3].children[4].style.border="solid #000000"
table2b.children[0].children[4].children[4].style.border="solid #000000"

function appendTableRow5 (tableobj, col1, col2, col3,col4,col5) {
  document.getElementById("2B").children[0].style.border = "solid #000000";
  // create column (table division) DOM objects
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  // insert content into columns
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  td4.innerHTML = col4;
  td5.innerHTML = col5;

  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);

  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}


// Instructions
// add a new function, appendTableRow5(), which adds 5-column rows instead of 3-column rows
// create a 5-row by 5-column table showing the numbers, 1 through 25
// put borders around the cells, too, not just around the edge of the table
// Display output in <div id="2B">

// ==================

// 8. create "totals" row and column in a table
let div3b = document.getElementById("3B");
let table3b = createTable("table3b");
div3b.appendChild(table3b);
const p00 = parseInt(table3A.children[0].children[0].children[1].children[1].innerHTML); //call value from original table
const p01 = parseInt(table3A.children[0].children[0].children[2].children[1].innerHTML);
const p02 = parseInt(table3A.children[0].children[0].children[3].children[1].innerHTML);
const p10 = parseInt(table3A.children[0].children[0].children[1].children[2].innerHTML);
const p11 = parseInt(table3A.children[0].children[0].children[2].children[2].innerHTML);
const p12 = parseInt(table3A.children[0].children[0].children[3].children[2].innerHTML);
table3b.setAttribute("border", "1");
table3b.setAttribute("width", "100%");
addrows(table3B, "item", "price", "qty", "Price * Qty"); //apply toprow values
addrows(table3B, "Thingamabob", "1.00", "1", p00 * p10); //apply secondrow values
addrows(table3B, "Whachamacallit", "2.00", "2", p01 * p11); //apply thridrow values
addrows(table3B, "Doohickey", "3.00", "3", p02 * p12); //apply fourthrow values
addrows(table3B, "Totals:", p00 + p01 + p02 + ".00", p10 + p11 + p12, p02 * p12 + p01 * p11 + p00 * p10); //apply fithrow values
// append to tableobj a 3-column table row
function addrows(tableobj, coltop, col1, col2, col3, col4) { //begin function for application of table values
    let td0 = document.createElement("td"); //create column
    let td1 = document.createElement("td"); //create column
    let td2 = document.createElement("td"); //create column
    let td3 = document.createElement("td"); //create column
    let td4 = document.createElement("td"); //create new column
    // insert content into columns
    td0.innerHTML = coltop; //apply external values
    td1.innerHTML = col1; //apply external values
    td2.innerHTML = col2; //apply external values
    td3.innerHTML = col3; //apply external values
    td4.innerHTML = col4; //apply external values
    td0.setAttribute("Style", "border:1px solid black;"); //set box for each point
    td1.setAttribute("Style", "border:1px solid black;"); //set box for each point
    td2.setAttribute("Style", "border:1px solid black;"); //set box for each point
    td3.setAttribute("Style", "border:1px solid black;"); //set box for each point
    td4.setAttribute("Style", "border:1px solid black;"); //set box for each point
    // create table row DOM object
    let tr = document.createElement("tr"); //call tr
    // append table divisions (columns) to table row
    tr.appendChild(td0); //append row
    tr.appendChild(td1); //append row
    tr.appendChild(td2); //append row
    tr.appendChild(td3); //append row
    // append the row to the tbody element in the table
    tableobj.children[0].appendChild(tr); //append tableobject to tr
}
// Instructions
// don't change table3A. it's just a template.
// Use table03A to create table3B. Create new functions as in item 2, above.
// in table3B, add a column, "Price * Qty", and use JS to compute the correct values to put in the column
// add to table03B a "totals" row which gives the "grand total" of all numbers in the "Price * Qty" column


// 9. Refactor a non-object-oriented form
<!-- code below is from: https://www.guru99.com/practical-code-examples-using-javascript.html -->

    // initialize error div id array
    let divs = new Array();
    divs[0] = "errFirst";
    divs[1] = "errLast";
    divs[2] = "errEmail";
    divs[3] = "errUid";
    divs[4] = "errPassword";
    divs[5] = "errConfirm";

// function: validate() ---------------------------------------------
    function validate(i){
        // initialize input array
        let inputs = new Array();
        inputs[0] = document.getElementById('first').value;
        inputs[1] = document.getElementById('last').value;
        inputs[2] = document.getElementById('email').value;
        inputs[3] = document.getElementById('uid').value;
        inputs[4] = document.getElementById('password').value;
        inputs[5] = document.getElementById('confirm').value;
        // initialize error array
        let errors = new Array();
        errors[0] = "<span style='color:red'>Please enter your first name!</span>";
        errors[1] = "<span style='color:red'>Please enter your last name!</span>";
        errors[2] = "<span style='color:red'>Please enter your email!</span>";
        errors[3] = "<span style='color:red'>Please enter your user id!</span>";
        errors[4] = "<span style='color:red'>Please enter your password!</span>";
        errors[5] = "<span style='color:red'>Please confirm your password!</span>";
        // update error array with error message
        let errMessage = errors[i];
        let div = divs[i];
        if (inputs[i] == "")
                document.getElementById(div).innerHTML = errMessage;
            else if (i == 2) {
                let atpos = inputs[i].indexOf("@");
                let dotpos = inputs[i].lastIndexOf(".");
                if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inputs[i].length)
                    document.getElementById('errEmail').innerHTML
                      = "<span style='color: red'>Enter a valid email address!</span>";
                else
                    document.getElementById(div).innerHTML = "OK!";
            } else if (i == 5) {
                let first = document.getElementById('password').value;
                let second = document.getElementById('confirm').value;
                if (second != first)
                    document.getElementById('errConfirm').innerHTML
                      = "<span style='color: red'>Your passwords don't match!</span>";
                else
                    document.getElementById(div).innerHTML = "OK!";
            } else
                document.getElementById(div).innerHTML = "OK!";
    }

    // function: validateAll() ---------------------------------------------
    function validateAll() {
        // initialize input array
        let inputs = new Array();
        inputs[0] = document.getElementById('first').value;
        inputs[1] = document.getElementById('last').value;
        inputs[2] = document.getElementById('email').value;
        inputs[3] = document.getElementById('uid').value;
        inputs[4] = document.getElementById('password').value;
        inputs[5] = document.getElementById('confirm').value;
        // initialize error array
        let errors = new Array();
        errors[0] = "<span style='color:red'>Please enter your first name!</span>";
        errors[1] = "<span style='color:red'>Please enter your last name!</span>";
        errors[2] = "<span style='color:red'>Please enter your email!</span>";
        errors[3] = "<span style='color:red'>Please enter your user id!</span>";
        errors[4] = "<span style='color:red'>Please enter your password!</span>";
        errors[5] = "<span style='color:red'>Please confirm your password!</span>";
        // update error array with error message
        for (i in inputs) {
            let errMessage = errors[i];
            let div = divs[i];
            if (inputs[i] == "")
                document.getElementById(div).innerHTML = errMessage;
            else if (i == 2) {
                let atpos = inputs[i].indexOf("@");
                let dotpos = inputs[i].lastIndexOf(".");
                if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inputs[i].length)
                    document.getElementById('errEmail').innerHTML
                      = "<span style='color: red'>Enter a valid email address!</span>";
                else
                    document.getElementById(div).innerHTML = "OK!";
            } else if (i == 5) {
                let first = document.getElementById('password').value;
                let second = document.getElementById('confirm').value;
                if (second != first)
                    document.getElementById('errConfirm').innerHTML
                      = "<span style='color: red'>Your passwords don't match!</span>";
                else
                    document.getElementById(div).innerHTML = "OK!";
            } else
                document.getElementById(div).innerHTML = "OK!";
        }
    }

    // function: finalValidate() ------------------------------------
    function finalValidate() {
        let count = 0;
        for (i = 0; i < 6; i++) {
            let div = divs[i];
            if (document.getElementById(div).innerHTML == "OK!")
                count = count + 1;
        }
        if (count == 6)
            document.getElementById("errFinal").innerHTML
              = "All the data you entered is correct!!!";
    }

    // 10. Create a more object-oriented form
    // Step 1. Create/append the DOM object
    let form00 = document.getElementById("form00"); //premade code
    let table00 = createTable("table00"); //premade code


    // Step 2. Create an JS object array containing form info
    let formArray = [ //form array specifying the information values for the table
        {
            label: "First name:",
            inputType: "text",
            id: "first",
            onkeyup: "validate();",
            errorId: "errFirst"
        },
        {
            label: "Last name:",
            inputType: "text",
            id: "last",
            onkeyup: "validate();",
            errorId: "errLast"
        },
        {
            label: "Email:",
            inputType: "text",
            id: "email",
            onkeyup: "validate();",
            errorId: "errEmail"
        },
        {
            label: "User id:",
            inputType: "text",
            id: "uid",
            onkeyup: "validate();",
            errorId: "errUid"
        },
        {
            label: "Password:",
            inputType: "password",
            id: "password",
            onkeyup: "validate();",
            errorId: "errPassword"
        },
        {
            label: "Confirm Password:",
            inputType: "password",
            id: "confirm",
            onkeyup: "validate();",
            errorId: "errConfirm"
        }
    ];
    // Step 3. loop through the JS object array to populate the form
    // your code here
    // append to tableobj a 3-column table row
    function appendTableRow3(tableobj, col1, col2, col3) { //use for appending tables for tablerow3 premade code
        // create column (table division) DOM objects
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        // insert content into columns
        td1.innerHTML = col1;
        td2.innerHTML = col2;
        td3.innerHTML = col3;
        // create table row DOM object
        let tr = document.createElement("tr");
        // append table divisions (columns) to table row
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        // append the row to the tbody element in the table
        tableobj.children[0].appendChild(tr);
    }
    // return a DOM object containing an empty table (with tbody element)
    function createTable(id) { //create table function for applying values
        let table = document.createElement("table"); //find table div and apply values
        table.setAttribute("id", id); //apply attributes
        let tbody = document.createElement("tbody"); //create table
        table.appendChild(tbody); //append table
        return table; //return table value
    }


    let fiveb = document.getElementById("5B"); //call 5b div and create fiveb value
    let table5b = createTable("table5b") //create table5b
    form00.appendChild(table00); //append table00
    fiveb.appendChild(table5b); //have fiveb append table5b

    for (i in formArray) { //loop for length of formArray
        table5b.setAttribute("style", "border:1px solid black;") //apply style
        table5b.setAttribute("width", "100%") //set width of table
        appendTableRow5(table5b, formArray[i].label, formArray[i].inputType, formArray[i].id, formArray[i].onkeyup, formArray[i].errorId); //apply table values pulling from tablearray using the appendTableRow5 made earlier in the code.
    }
