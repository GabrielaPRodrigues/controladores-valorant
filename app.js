function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Digite o que deseja buscar</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    console.log(campoPesquisa);
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase;
        descricao = dado.descricao.toLowerCase;
        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
            <img ${dado.imagem}>
                <h2>
                    <a href="https://playvalorant.com/pt-br/agents/astra/" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Saiba mais sobre o(a) agente</a>
            </div>
            `
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    section.innerHTML = resultados;
}


