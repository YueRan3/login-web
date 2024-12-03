function validateAccount(account) {  
    const hasNumber = /\d/.test(account);  
    const hasLetter = /[a-zA-Z]/.test(account);  
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(account);  
    return hasNumber && hasLetter && hasSymbol;  
}  
  
function register() {  
    const account = document.getElementById('register-account').value;  
    const errorElement = document.getElementById('account-error');  
  
    if (!validateAccount(account)) {  
        errorElement.style.display = 'block';  
    } else {  
        errorElement.style.display = 'none';  
        
        alert('注册成功！');  
    }  
}  

function login() {  
    const account = document.getElementById('register-account').value;  
    const errorElement = document.getElementById('account-error');  
  
    if (!validateAccount(account)) {  
        errorElement.style.display = 'block';  
    } else {  
        errorElement.style.display = 'none';  
        
        alert('登录成功！');  
    }   
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        