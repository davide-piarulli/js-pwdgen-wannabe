const name = prompt('Scrivi il tuo nome');
const lastName = prompt('Scrivi il tuo cognome');

const fullName = name + lastName;

const favColor = prompt('Quale è il tuo colore preferito?');

const number = parseInt('24'); 

const pw = fullName + favColor + number;
console.log(pw);

document.getElementById('password').innerHTML =
`
  <p>
    La tua password è: <strong>${pw}</strong>
  </p>
`;