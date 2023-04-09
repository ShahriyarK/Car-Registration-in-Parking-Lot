// const carMake = document.getElementById('make');
const alphabets = 'abcdefghijklmnopqrstuvwxyz ';
const digits = '0123456789-';
const carMake = document.querySelector('#make');
const carModel = document.getElementById('model');
const carRegNum = document.getElementById('registration-no');
const carColor = document.getElementById('color');
let inputCollection = document.querySelectorAll('.fields');
const tableRow = document.querySelector('tbody');
const tableForm = document.querySelector('form');
const submitButton = document.getElementById('btn');
const updateSubmissionBtn = document.getElementById('up-btn');
const updateButton = document.getElementById('btn-up');
submitButton.addEventListener('mouseup', resetFields);






function resetFields () {
    inputCollection.forEach((input) => {
        input.value = '';
    })
}



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

    if (errorMsg.innerText !== '') {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = '#7bd4ea';
    }
    else{
    submitButton.disabled = false;
    submitButton.style.backgroundColor = '#219ebc';
    }
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

    if (errorMsg.innerText !== '') {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = '#7bd4ea';
    }
    else{
    submitButton.disabled = false;
    submitButton.style.backgroundColor = '#219ebc';
    }
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
    else{
        errorMsg.innerText = '';
    }

    if (errorMsg.innerText !== '') {
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




let array =[1];
function addRows() {
    // console.log(clicked);
    for (let i = 0; i < inputCollection.length; i++) {
        if(inputCollection[i].value === '') {
            document.getElementById('submit-error').innerText = 'Please fill all fields.';
            return false;
        }
    }
    document.getElementById('submit-error').innerText = '';
    const newRow = document.createElement('tr');
    tableRow.append(newRow);
    // console.log(inputCollection[3].value);
    inputCollection.forEach((element) => {
        let data = document.createElement('td');
        data.innerHTML = element.value;
        newRow.append(data);
        // element.value = '';
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
    let value = addRows();
    let parent = value[0].parentElement;
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





































































// The function below is for mapping the data from array into the table
// function addRows() {
// // console.log(clicked);
//     for (let i = 0; i < inputCollection.length; i++) {
//         if(inputCollection[i].value === '') {
//             document.getElementById('submit-error').innerText = 'Please fill all fields.';
//             return false;
//         }
//     }

//     const newRow = document.createElement('tr');
//     tableRow.append(newRow);
//     // console.log(inputCollection[3].value);
//     inputCollection.forEach((element) => {
//         let data = document.createElement('td');
//         data.innerHTML = element.value;
//         newRow.append(data);

//     })
//     let data = document.createElement('td');
//     let button = document.createElement('button')
//     button.setAttribute('class', 'update');
//     button.setAttribute('type', 'button');
//     button.innerText = 'Update';
//     data.append(button);
//     newRow.append(data);

// let clicked = false;
//     button.addEventListener('click', () => {
//         clicked = true;
//         let parents = button.parentElement;
//         // console.log(parents);
//         let grandParent = parents.parentElement;
//         let child = grandParent.children
//         let i = 0;
//         inputCollection.forEach((input) => {
//             input.value = child[i].innerText;
//             i++;
//         })
//         console.log('1');
//         submitButton.addEventListener('click', () => {
//             console.log(clicked);
//             console.log(child[0].innerText);
//             let i = 0;
//             if (clicked === true) {

//                 grandParent.remove();
//                 // tableRow[tableRow.length-1].remove();
//                 inputCollection.forEach(element => {
//                     child[i].innerText = element.value;
//                     i++;
//                 })
//                 clicked = false;
//             }
//         })
//     })
// }









// function addRows() {
//     // console.log(clicked);
//     for (let i = 0; i < inputCollection.length; i++) {
//         if(inputCollection[i].value === '') {
//             document.getElementById('submit-error').innerText = 'Please fill all fields.';
//             return false;
//         }
//     }
//     document.getElementById('submit-error').innerText = '';
//     const newRow = document.createElement('tr');
//     tableRow.append(newRow);
//     // console.log(inputCollection[3].value);
//     inputCollection.forEach((element) => {
//         let data = document.createElement('td');
//         data.innerHTML = element.value;
//         newRow.append(data);
//         element.value = '';
//     })
//     let data = document.createElement('td');
//     let button = document.createElement('button')
//     button.setAttribute('class', 'update');
//     button.setAttribute('type', 'button');
//     button.innerText = 'Update';
//     data.append(button);
//     newRow.append(data);

//     button.addEventListener('click', getUpdate);

// }

// function getUpdate (event) {

//     let button = event.target;
//     console.log(button);
//     let parents = button.parentElement;
//     let grandParent = parents.parentElement;
//     console.log(grandParent);
//     let child = grandParent.children
//     let i = 0;
//     inputCollection.forEach((input) => {
//         input.value = child[i].innerText;
//         i++;
//     })
//     submitButton.style.display = 'none';
//     updateSubmissionBtn.style.display = 'inline-block';
//     updateSubmissionBtn.addEventListener('click', () => {
//         let i = 0;
//         console.log(inputCollection[1].value);
//         inputCollection.forEach(element => {
//             child[i].innerText = element.value;
//             element.value = '';
//             i++;
//         })
//         console.log(inputCollection[1].value);
//         submitButton.style.display = 'inline-block';
//         updateSubmissionBtn.style.display = 'none';
//     })
// }
// function addUpdate () {
//     console.log(getUpdate);
//     // let i = 0;
//     // console.log(inputCollection[1].value);
//     // inputCollection.forEach(element => {
//     //     child[i].innerText = element.value;
//     //     element.value = '';
//     //     i++;
//     // })
//     // console.log(inputCollection[1].value);
//     // submitButton.style.display = 'inline-block';
//     // updateSubmissionBtn.style.display = 'none';
// }
// submitButton.addEventListener('click', () => {
//     console.log(clicked);
//     console.log(child[0].innerText);
//     let i = 0;
//     if (clicked === true) {

//         grandParent.remove();
//         // tableRow[tableRow.length-1].remove();
//         inputCollection.forEach(element => {
//             child[i].innerText = element.value;
//             i++;
//         })
//         clicked = false;
//     }
// })




// function addRows() {
// // console.log(clicked);
//     for (let i = 0; i < inputCollection.length; i++) {
//         if(inputCollection[i].value === '') {
//             document.getElementById('submit-error').innerText = 'Please fill all fields.';
//             return false;
//         }
//     }

//     const newRow = document.createElement('tr');
//     tableRow.append(newRow);
//     // console.log(inputCollection[3].value);
//     inputCollection.forEach((element) => {
//         let data = document.createElement('td');
//         data.innerHTML = element.value;
//         newRow.append(data);
//         element.value = '';
//     })
//     let data = document.createElement('td');
//     let button = document.createElement('button')
//     button.setAttribute('class', 'update');
//     button.setAttribute('type', 'button');
//     button.innerText = 'Update';
//     data.append(button);
//     newRow.append(data);

// let clicked = false;
//     button.addEventListener('click', () => {
//         clicked = true;
//         let parents = button.parentElement;
//         // console.log(parents);
//         let grandParent = parents.parentElement;
//         let child = grandParent.children
//         let i = 0;
//         inputCollection.forEach((input) => {
//             input.value = child[i].innerText;
//             i++;
//         })
//         console.log('1');
//         submitButton.style.display = 'none';
//         updateSubmissionBtn.style.display = 'inline-block';
//         updateSubmissionBtn.addEventListener('click', () => {
//             console.log(clicked);
//             console.log(child[0].innerText);
//             let i = 0;
//                 // tableRow[tableRow.length-1].remove();
//                 inputCollection.forEach(element => {
//                     child[i].innerText = element.value;
//                     i++;
//                     element.value = ''
//                 })
//                 submitButton.style.display = 'inline-block';
//             updateSubmissionBtn.style.display = 'none';

//         })
//     })
// }






//----------------Instructions-----------
// Try onblur event for input field
// Also try if onsubmit event can work
