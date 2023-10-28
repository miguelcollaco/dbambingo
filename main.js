window.onload = initAll;

function initAll() {
    if (document.getElementById)
        newCard();
    else
        alert("Your browser does not support this script.");
}

const arr = ["Deafen (+ de 2 minutos)", "\"O caralho\"", "Mico", "Vídeo random antes de bazar (Mico)", "Alguém tiltado", "\"Boris\" (Maia)", "Maia", "Nena", "Debate de tema polémico", "Ver lives no TikTok (Mimi)", "Mendes", "Hicki", "Piçarra", "Mimi", "Kiko", "Dar flex", "Tota", "\"Insano\"", "O Mendes está mais de 10 minutos SEM deafen", "André", "Mostrar TikToks (Piçarra)", "Cantar durante a chamada (Tavares)", "Tavares", "Microfone estourado", "Microfone dá o tilt", "Falar da praxe", "Estudar em chamada (Nena)", "\"Puto\"", "Reclamar com dor de pés (Mimi)", "Piadas sem piada (Maia e Nena)", "Piadas com piada (todos os presentes têm de se rir)", "\"Mano\"", "Falar do gym", "\"Velho\"", "Fifa", "Observação culta (André)", "Pastilha elástica (Mico e Mimi)", "Fofoca", "\"Merêncio\"", "Gemer (Mendes)", "Rainbow", "\"Tou com fome\" (ou parecido)", "\"Primos\"", "Almoçar Lanchar Jantar em chamada", "Piadas polémicas", "Mota", "Piadas com cozinha (Hicki)", "Pausa para Almoço Lanche Jantar", "Massa", "Música no bot", "ASMR (Mendes)", "Casa de banho", "\"Primaço/a\"", "\"Faz partilha\"", "Mais de 3 pessoas com câmara ligada (eu próprio não conta)", "Curiosidade aleatória", "Lerda (Nena)", "Não ser politicamente correta (Nena)", "Penaldo vs Pessi", "Carro", "Trabalho para entregar no dia", "Estudo de última hora (Teste em menos de 24h)", "Manny Mãozinhas (Mico)", "Ouvir crianças (Tavares)", "Ouvir mãe (Piçarra)", "Entrar no DC alterado/a", "Ver Windoh Bingoh", "Arrotar", "Aparecer algum membro da família", "Crise de riso", "Comida depois do jantar", "Insultar", "\"Manhoso\"", "\"Pega\"", "Falar muito sobre o mesmo assunto", "Problemas de net", "Poliglota", "Fumar na call (Piçarra)", "Clubes"]

function newCard() {
    shuffle(arr);
    for(let i= 1; i <= 24; i++) {
        let el = document.getElementById("square" + i);
        el.innerHTML = arr[i];
        el.addEventListener("click", toggle);
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function toggle(e) {
    e.target.classList.toggle("active");
}