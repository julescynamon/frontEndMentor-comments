// Fonction pour pouvoir afficher une date comprehensible lors de l'ajout d'un post
export const timestampParser = (num) => {
	let options = {
		weekday: "long",
		year: "numeric",
		month: "short",
		day: "numeric",
	};

	let date = new Date(num).toLocaleDateString("fr-FR", options);

	return date.toString();
};