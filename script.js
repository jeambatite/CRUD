let users = [];
let editIndex = -1;

const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const userTable = document.getElementById("userTable");
// js para simular base de datos
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;

  if (editIndex === -1) {
    users.push({ name, email });
  } else {
    users[editIndex] = { name, email };
    editIndex = -1;
  }

  form.reset();
  renderTable();
});

function renderTable() {
  userTable.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>
        <button onclick="editUser(${index})">Editar</button>
        <button onclick="deleteUser(${index})">Eliminar</button>
      </td>
    `;

    userTable.appendChild(row);
  });
}

function editUser(index) {
  const user = users[index];
  nameInput.value = user.name;
  emailInput.value = user.email;
  editIndex = index;
}

function deleteUser(index) {
  users.splice(index, 1);
  renderTable();
}
