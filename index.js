//Declaration et initialisation des variables
let password = document.getElementById("passwordInput");
let copyPassword = document.getElementById("copyIcon");
let btn = document.getElementById("genePassword-btn");

const Characters = {
	Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	Lowercase: "abcdefghijklmnopqrstuvwxyz",
	Numbers: "0123456789",
	Symbols: "~!@#$%^&*()_+{}[].,:;|",
};

//Creons une fonction permettant de generer aleatoirement les mots de passe
function generatePassword() {
	let randomUpperCase = Math.floor(Math.random() * Characters);

	console.log(randomUpperCase);
}

generatePassword();
