let admins = [
    { email: 'mokonan99@gmail.com', password: 'moko', username: 'Moise', super: true },
    { email: 'moiseko99@outlook.fr', password: 'moise', username: 'moko', super: false }
]

localStorage.setItem('admin', JSON.stringify(admins))

let btnCon = document.querySelector(".btn-login");
const form = document.querySelector('form')
form.addEventListener('submit', (e) =>{
    e.preventDefault()

    tabUser = JSON.parse(localStorage.getItem('admin'))
    let result;
    tabUser.forEach(element => {
        if (
            document.querySelector("#email").value === element.email &&
            document.querySelector("#password").value === element.password   
        ){
          result = element;
          console.log(element)
        }
        
    });

    console.log(typeof result)
    if (typeof result !== "undefined"){
        alert("Vos informations sont correct !")
        window.location.href = "dashboard.html"
        // localStorage.setItem('session', JSON.stringify())
        console.log(typeof result)
    }
    else{
        alert("Vos informations sont inccorect !")
        window.location.reload()
    }
   
})

btnCon.addEventListener('submit', (e)=>{
    e.preventDefault()

})
