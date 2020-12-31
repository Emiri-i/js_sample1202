// const formTest1 = document.getElementById('form_test1');
// console.log(formTest1);

const formTest1 = document.forms.form_test1;
console.log(formTest1);

const formTest1yourName = document.forms.form_test1.your_name;
console.log(formTest1yourName);

const formTest1yourNameValue = document.forms.form_test1.your_name.value;
console.log(formTest1yourNameValue);

formTest1yourName.addEventListener('input', () => {
    let yourNameValue = document.getElementById('your_name_value');
    yourNameValue.textContent = formTest1yourName.value.length;
})