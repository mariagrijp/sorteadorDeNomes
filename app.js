let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = "";
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `<p>🎉 O sorteado foi: <strong>${sorteado}</strong> 🎉</p>`;
}


function exibirResultado(listaResultado) {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";
    
    listaResultado.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ulResultado.appendChild(li);
    });
}
