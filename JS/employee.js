// recuperer depuis localstorage
function getEmployee() {
  return JSON.parse(localStorage.getItem('employee'))
}

// ajouter dans localstorage
function setEmployee(employee) {
  localStorage.setItem('employee', JSON.stringify(employee))
}
  
// um tableau de employee
let initialEmployee = getEmployee() || []

// const countEmployee = document.querySelector('.box .count_user')
const table = document.querySelector('.table-employ')
const tblBody = document.querySelector('.table-employ tbody')
const boxTable = document.querySelector('.box-table')

// function counter
// function setCount(count) {
//   countEmployee.innerHTML = count
// }


setEmployee(initialEmployee)
let employee = getEmployee()
  
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
    const telephone = this.getAttribute('contactPhone')

    let row = document.getElementById(telephone)
    row.parentNode.removeChild(row)

    // enlever l'element supprimer
    let filteredEmployee = employee.filter(
      (contact) => contact.telephone !== telephone
    )
    employee = filteredEmployee
    setCount(employee.length)
    setEmployee(employee)
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
  const nom = document.getElementById('nom').value
  const prenom = document.getElementById('prenom').value
  const telephone = document.getElementById('telephone').value
  const poste = document.getElementById('poste').value
  const statut = document.getElementById('statut').value
  if (!nom || !prenom || !telephone || !poste || !statut) {
    alert('merci de tout remplir')
    return
  }
  const newEmployee = { nom, prenom, telephone, poste, statut }
  employee.push(newEmployee)
  // setCount(employee.length)
  setEmployee(employee)

  // ajouter un tr
  let row = document.createElement('tr')

  let cell0 = row.insertCell(0)
  const cell0Text = document.createTextNode(nom)
  cell0.appendChild(cell0Text)
  row.appendChild(cell0)

  let cell1 = row.insertCell(1)
  const cell1Text = document.createTextNode(prenom)
  cell1.appendChild(cell1Text)
  row.appendChild(cell1)

  let cell2 = row.insertCell(2)
  const cell2Text = document.createTextNode(poste)
  cell2.appendChild(cell2Text)
  row.appendChild(cell2)

  let cell3 = row.insertCell(3)
  const cell3Text = document.createTextNode(telephone)
  cell3.appendChild(cell3Text)
  row.appendChild(cell3)

  let cell4 = row.insertCell(4)
  const cell4Text = document.createTextNode(statut)
  cell4.appendChild(cell4Text)
  row.appendChild(cell4)

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
    setEmployee(employee)
  })

  buttonCell.appendChild(deleteButton)

  row.appendChild(buttonCell)

  row.setAttribute('id', telephone)
  tblBody.appendChild(row)
  table.appendChild(tblBody)

  boxTable.appendChild(table)

  // vider les inputs
  document.getElementById('nom').value = ''
  document.getElementById('prenom').value = ''
  document.getElementById('telephone').value = ''
  document.getElementById('poste').value = ''
  document.getElementById('statut').value = ''
  modal.style.display = 'none'
}
// setCount(employee.length)
  