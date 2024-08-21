document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    let regButton= document.getElementById("reg");
    regButton.addEventListener("click",function(){
        localStorage.setItem('loggedIn','false')
    })
    let but= document.getElementById("button")
if(localStorage.getItem("instractor")){

    but.style.backgroundColor="#073767"
    but.style.color="white"

}else{
    but.style.backgroundColor="rgb(69, 198, 91)"

}

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const userEmail = document.getElementById('userEmail').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember').checked;

        if (userEmail.trim() === '' || password.trim() === '') {
            alert('Please enter both email and password.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const validUser = users.find(function(user) {

            return user.email === userEmail;
        });

        if (!validUser || validUser.password !== password) {
            alert("Invalid email or password. Please try again.");
            document.getElementById('password').value = "";
            return;
        }

        if (rememberMe) {
            localStorage.setItem('rememberedUser', JSON.stringify({ us:userEmail,pas:password }));  

     
        } else {
            localStorage.removeItem('rememberedUser');
        };
        let firstName= validUser.password
        console.log (firstName)
        localStorage.setItem("userName", `${validUser.firstName}`)



        
        // if(localStorage.getItem('loggedIn')) {
        //     userEmail=JSON.parse(localStorage.getItem('rememberMe'))[us] 
        //     password=JSON.parse(localStorage.getItem('rememberMe'))[pas]  
        localStorage.setItem('loggedIn','true')
        window.location.href = 'exam-page.html';
        console.log(validUser)


        loginForm.reset();
    });
});