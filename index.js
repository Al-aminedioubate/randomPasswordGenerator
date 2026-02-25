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

	if (length > allCharacters.length) {
		alert("Erreur: longueur trop grande");
	}

	//evitons la repetition dans le mot de passe generer
	let noRepate = allCharacters.split("");

	for (let i = noRepate.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * i + 1);
		[noRepate[j], noRepate[i]] = [noRepate[i], noRepate[j]];
	}

	for (let i = 0; i < length; i++) {
		let randomIndex = Math.floor(Math.random() * allCharacters.length);
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
