function saluer(heure) {
    if (heure < 12) {
        return "Bonjour"
    } else if (heure < 18) {
        return "Bon après-midi"
    } else {
        return "Bonsoir"
    }
}

function changeTitle(heure) {
    const accueil = document.querySelector("#accueil");
    accueil.textContent = saluer(heure) + ", Bienvenue sur mon Portfolio";
    accueil.classList.add("accueil");
}


const liste = document.querySelector("#loisirs");
const loisirs = ["Basket", "Musique", "Photo"];
for (const item of loisirs) {
    const li = document.createElement("li");
    li.textContent = item;
    liste.append(li);
}

changeTitle(20)
const button = document.querySelector("#button");
button.addEventListener("click", () => {
    changeTitle(10)
})