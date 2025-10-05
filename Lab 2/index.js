
var UserFirstName = prompt("First Name: ");
var UserLastName = prompt("Last Name: ");
document.getElementById("greeting").innerHTML =
    "Welcome, " + UserFirstName + " " + UserLastName + "!";


var Student = {
    FirstName: "Erica",
    LastName: "Saturnino",
    Group: "IT-223",
    Month: 9,
    IsGraduate: false,
    Department: "IT",
    TimeStudying: 1
};

var studentCard = document.getElementById("StudentCard");
studentCard.innerHTML = `
    <h2>Student Information</h2>
    <p><b>First Name:</b> ${Student.FirstName}</p>
    <p><b>Last Name:</b> ${Student.LastName}</p>
    <p><b>Group:</b> ${Student.Group}</p>
    <p><b>Time Studying:</b> ${Student.Month}</p>
    <p><b>Is a Gratduate:</b> ${Student.IsGraduate ? "Yes" : "No"}</p>
    <p><b>Department:</b> ${Student.Department}</p>
    <p><b>Time Studying (year):</b> ${Student.TimeStudying}</p>
`;


var CreditCard = {
    AccountNumber: "123456789",
    Currency: "USD",
    Balance: 5000,
    OwnerName: "Saturnino Erica",
    IsBlocked: false
};

var creditCardDiv = document.getElementById("Credit_Card");
creditCardDiv.innerHTML = `
    <h2>Credit Card Information</h2>
    <p><b>Account Number:</b> ${CreditCard.AccountNumber}</p>
    <p><b>Currency:</b> ${CreditCard.Currency}</p>
    <p><b>Balance:</b> ${CreditCard.Balance}</p>
    <p><b>Owner:</b> ${CreditCard.OwnerName}</p>
    <p><b>Block Status:</b> ${CreditCard.IsBlocked ? "Yes" : "No"}</p>
`;
