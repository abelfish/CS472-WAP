const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const address = document.getElementById("address");
const accountNumber = document.getElementById("accountNumber");
const accountType = document.getElementById("accountType");
const allInputs = document.getElementsByTagName("input");
const radioSelected = [...allInputs].filter(ele => ele.type === 'radio' && ele.checked)[0];


form.onsubmit = function (event) {
    event.preventDefault();
    alert(`
    Account Ownership Type
    ${radioSelected.id}
    Customer Information
    Full Name: ${fullName.value}
    Address: ${address.value}
    Account Information
    Account Number: ${accountNumber.value}
    Account Type: ${accountType.value}
    `);

    [...allInputs].forEach(ele => ele.value = "");
    address.value="";
}


