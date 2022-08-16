// stap-1:add click event handlar with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
//stap-2:get the email address inside the email input field.
//always remember to use .value to get text from an input field.
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    //stap-3:get password
    //3-a: set id on the html elemant
    //3-b:get the element
    //3-c:get the value from the element
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    console.log(password);
    //stap-4:varify email and password
    if (email === 'sontan@baap.com' && password ==='baap') {
        window.location.href = 'js/bank.html';
    }
    else {
        alert('Please set your correct email and password');
    }
})