//Declaration et initialisation des variables
let password = document.getElementById("passwordInput");
let copyPassword = document.getElementById("copyIcon");
let btn = document.getElementById("genePassword-btn");

const toast = document.getElementById("toast");

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
		/*if (allCharacters[randomIndex]) {
			randomPassword += allCharacters[randomIndex];
		}*/

		randomPassword += allCharacters[randomIndex];
	}

	password.value = randomPassword;
}

//Evenement permettant de generer les mots de passe.
btn.addEventListener("click", () => {
	generatePassword();
});

//Evenement permettant de copier le mot de passe
copyPassword.addEventListener("click", () => {
	navigator.clipboard.writeText(password.value);
	toast.textContent = `${password.value}  Copied`;
	toast.classList.add("show");

	setTimeout(() => {
		toast.classList.remove("show");
	}, 2000);
});
