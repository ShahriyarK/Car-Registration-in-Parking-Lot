const alphabets = 'abcdefghijklmnopqrstuvwxyz ';
const digits = '0123456789-';
const carMake = document.querySelector('#make');
const carModel = document.getElementById('model');
const carRegNum = document.getElementById('registration-no');
const carColor = document.getElementById('color');
const inputCollection = document.querySelectorAll('.fields');
const tableRow = document.querySelector('tbody');
const tableForm = document.querySelector('form');
const submitButton = document.getElementById('btn');
const updateSubmissionBtn = document.getElementById('up-btn');
const updateButton = document.getElementById('btn-up');


// For reseting input field values after each submission
submitButton.addEventListener('mouseup', resetFields);

function resetFields () {
    inputCollection.forEach((input) => {
        input.value = '';
    })
}

// For validating each input field
 function validateMake () {
    let errorMsg = document.getElementById('make-error');
    if (!containsAlphabet(carMake.value)) {
        errorMsg.innerText = 'Car make can only contain letters from the alphabet';

    }
    else if (carMake.value.length > 12) {
        errorMsg.innerText = 'Car make cannot have more than 12 characters';
    }
    else{

        errorMsg.innerText = '';
    }

    resetButton(errorMsg.innerText);
 }

 function validateModel () {
    let errorMsg = document.getElementById('model-error');

    if (carModel.value.length > 25) {
        errorMsg.innerText = 'Car model cannot have more than 25 characters';
    }
    else if (containsSpecialChar(carModel.value)) {
        errorMsg.innerText = 'Invalid car model';
    }
    else{
        errorMsg.innerText = '';
    }

    resetButton(errorMsg.innerText);
 }

 function validateRegNo () {
    let errorMsg = document.getElementById('reg-error');

    if (carRegNum.value.length > 18) {
        errorMsg.innerText = 'Car registration number cannot have more than 18 characters';
    }
    else if (containsRegNum(carRegNum.value)) {
        errorMsg.innerText = 'car registration no. can only include uppercase characters and no special character other than "-"';
    }
    else if (!'0123456789'.includes(carRegNum.value[carRegNum.value.length - 1])) {
        errorMsg.innerText = 'Last character of registration number must be a digit (0-9)';
    }
    else if (!alphabets.toUpperCase().includes(carRegNum.value[0])) {
        errorMsg.innerText = 'Registration no. must begin with a letter';
    }
    else{
        errorMsg.innerText = '';
    }

    resetButton(errorMsg.innerText);
 }
// Some helper functions for form validation
 function resetButton (string) {
    if (string !== '') {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = '#7bd4ea';
        }
        else{
        submitButton.disabled = false;
        submitButton.style.backgroundColor = '#219ebc';
    }
 }

 function containsRegNum (string) {
    for (let i = 0; i < string.length; i++) {
        if (!digits.includes(string[i]) && !alphabets.toUpperCase().includes(string[i])) {
            return true;
        }
    }
    return false;
 }

 function containsSpecialChar(string) {
    for (let i = 0; i < string.length; i++) {
        if (!digits.includes(string[i]) && !alphabets.includes(string[i].toLowerCase())) {
            return true;
        }
    }
    return false;
}

 function containsAlphabet(string) {
    for (let i = 0; i < string.length; i++) {
        if (!alphabets.includes(string[i].toLowerCase())) {
            return false;
        }
    }
    return true;
}

// Events triggered when submit button is clicked.
let array = [1];
function addRows() {
    for (let i = 0; i < inputCollection.length; i++) {
        if(inputCollection[i].value === '') {
            return document.getElementById('submit-error').innerText = 'Please fill all fields.';

        }
    }
    document.getElementById('submit-error').innerText = '';
    const newRow = document.createElement('tr');
    tableRow.append(newRow);
    inputCollection.forEach((element) => {
        let data = document.createElement('td');
        data.innerHTML = element.value;
        newRow.append(data);
    })
    let data = document.createElement('td');
    let button = document.createElement('button')
    button.setAttribute('class', 'update');
    button.setAttribute('type', 'button');
    button.innerText = 'Update';
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.innerText = 'delete';
    data.append(button);
    data.append(deleteBtn);
    newRow.append(data);
    button.addEventListener('click', getUpdate);
    deleteBtn.addEventListener('click', deleteRow);
    return array;
}

function getUpdate (event) {
    let button = event.target;
    array.push(button);
    array.splice(0, 1);
    console.log(button);
    let parent = button.parentElement;
    let grandParent = parent.parentElement;
    console.log(grandParent);
    let child = grandParent.children
    let i = 0;
    inputCollection.forEach((input) => {
        input.value = child[i].innerText;
        i++;
    })
    submitButton.style.display = 'none';
    updateSubmissionBtn.style.display = 'inline-block';
}

function deleteRow (event) {
    let parent = event.target.parentElement;
    let grandParent = parent.parentElement;
    grandParent.remove();
}

updateSubmissionBtn.addEventListener('click', () => {
    let elmArray = addRows();
    let parent = elmArray[0].parentElement;
    let parentRow = parent.parentElement;
    let child =parentRow.children;
    let i = 0;
    console.log(inputCollection);
    inputCollection.forEach((input) =>{
        child[i].innerText = input.value;
        i++;
        input.value ='';
    })
    let tbody = parentRow.parentElement;
    let tbodyRows = tbody.children;
    let lastElmIndex = tbodyRows.length - 1;
    tbodyRows[lastElmIndex].remove();
    console.log(tbodyRows);
    submitButton.style.display = 'inline-block';
    updateSubmissionBtn.style.display = 'none';
})
