// recuperer depuis localstorage
function getAdmin() {
    return JSON.parse(localStorage.getItem('admin'))
}
  
// ajouter dans localstorage
function setAdmin(employee) {
    localStorage.setItem('admin', JSON.stringify(employee))
}

// um tableau de employee
let initialEmployee = getAdmin() || []

// const countEmployee = document.querySelector('.box .count_user')
const table = document.querySelector('.table-employ')
const tblBody = document.querySelector('.table-employ tbody')
const boxTable = document.querySelector('.box-table')

// // function counter
// function setCount(count) {
//   countEmployee.innerHTML = count
// }


setAdmin(initialEmployee)
let employee = getAdmin()

// remplir la table
function createTable() {
for (let index = 0; index < employee.length; index++) {
    let row = document.createElement('tr')
    // creer le button de supression
    let buttonCell = document.createElement('td')
    let deleteButton = document.createElement('button')
    let buttonText = document.createTextNode('Supprimer')
    deleteButton.setAttribute('class', 'delete-btn')
    deleteButton.appendChild(buttonText)

    for (let element = 0; element < Object.keys(employee[0]).length; element++) {
    // ajouter les td
    const cell = document.createElement('td')
    const cellText = document.createTextNode(
        Object.values(employee[index])[element]
    )
    deleteButton.setAttribute('contactPhone', employee[index].telephone)
    buttonCell.appendChild(deleteButton)
    cell.appendChild(cellText)
    row.appendChild(cell)
    row.appendChild(buttonCell)
    row.setAttribute('id', employee[index].telephone)
    }
    tblBody.appendChild(row)
}
table.appendChild(tblBody)

boxTable.appendChild(table)
}

createTable()

let deleteButton = document.querySelectorAll('.delete-btn')

deleteButton.forEach(function (button) {
button.addEventListener('click', function () {
    const email = this.getAttribute('contactPhone')

    let row = document.getElementById(email)
    row.parentNode.removeChild(row)

    // enlever l'element supprimer
    let filteredEmployee = employee.filter(
    (contact) => contact.telephone !== email
    )
    employee = filteredEmployee
    // setCount(employee.length)
    setAdmin(employee)
})
})

// modal
let modal = document.getElementById('employeeModal')
let modalButton = document.getElementById('btnEmploiAjout')
let closemodal = document.querySelector('.close')

modalButton.onclick = function () {
modal.style.display = 'block'
}

closemodal.onclick = function () {
modal.style.display = 'none'
}

window.onclick = function (event) {
if (event.target == modal) {
    modal.style.display = 'none'
}
}

// ajouter un contact
let addEmployeButton = document.querySelector('.addEmployeButton')
addEmployeButton.onclick = function (event) {
    event.preventDefault()
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    if (!username || !email || !password) {
        alert('merci de tout remplir')
        return
    }
    const newEmployee = { username, email, password}
    employee.push(newEmployee)
    // setCount(employee.length)
    setAdmin(employee)

    // ajouter un tr
    let row = document.createElement('tr')

    let cell0 = row.insertCell(0)
    const cell0Text = document.createTextNode(username)
    cell0.appendChild(cell0Text)
    row.appendChild(cell0)

    let cell1 = row.insertCell(1)
    const cell1Text = document.createTextNode(email)
    cell1.appendChild(cell1Text)
    row.appendChild(cell1)

    let cell2 = row.insertCell(2)
    const cell2Text = document.createTextNode(password)
    cell2.appendChild(cell2Text)
    row.appendChild(cell2)


    // creer le button de supression
    let buttonCell = document.createElement('td')
    let deleteButton = document.createElement('button')
    let buttonText = document.createTextNode('Supprimer')
    deleteButton.setAttribute('class', 'delete-btn')
    deleteButton.setAttribute('contactPhone', telephone)
    deleteButton.appendChild(buttonText)

    // ajouter un evenment
    deleteButton.addEventListener('click', function () {
        const telephone = this.getAttribute('contactPhone')

        let row = document.getElementById(telephone)
        row.parentNode.removeChild(row)

        // enlever l'element supprimer
        let filteredEmployee = employee.filter(
        (contact) => contact.telephone !== telephone
        )
        employee = filteredEmployee
        // setCount(employee.length)
        setAdmin(employee)
    })

    buttonCell.appendChild(deleteButton)

    row.appendChild(buttonCell)

    row.setAttribute('id', telephone)
    tblBody.appendChild(row)
    table.appendChild(tblBody)

    boxTable.appendChild(table)

    // vider les inputs
    document.getElementById('username').value = ''
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''
    modal.style.display = 'none'
}
// setCount(employee.length)



const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('#sidebar');
const header = document.querySelector('.header');

const countEmployee = document.querySelector('.box .count_user')
const nomDuConect = document.querySelector('.nom_du_conect')

function setNomAdminConect(nom) {
    nom.forEach(element => {
        if (element["super"] === true){
        nomDuConect.innerHTML = element["username"]
        }
    });

}

let nomAdmin = getAdmin()
setNomAdminConect(nomAdmin)
