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
function generatePassword(length = 14) {
	let randomPassword = "";
	const allCharacters =
		Characters.Uppercase +
		Characters.Lowercase +
		Characters.Numbers +
		Characters.Symbols;

	for (let i = 0; i < length; i++) {
		let randomIndex = Math.floor(Math.random() * allCharacters.length);
		randomPassword += allCharacters[randomIndex];

        
	}
	console.log("my password is :" + randomPassword);
}

generatePassword();
