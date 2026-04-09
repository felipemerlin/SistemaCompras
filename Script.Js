let carrinho = [];
let total = 0;

let radiosPagamento = document.querySelectorAll(`input[name="pagamento"]`);

function mostrarCartao(){

    let pagamentoSelecionado = document.querySelector('input[name="pagamento"]:checked');

    let opcoesCartao = document.getElementById("opcoes-cartao");
    let parcelamento = document.getElementById("parcelamento");

    if (pagamentoSelecionado.value === "Cartão") {
        opcoesCartao.style.display = "block";
    } else {
        opcoesCartao.style.display = "none";
        parcelamento.style.display = "none";
    }
}

function mostrarParcelamento(){

    let tipoCartao = document.querySelector('input[name="tipoCartao"]:checked');

    let parcelamento = document.getElementById("parcelamento");

    if (tipoCartao.value === "Crédito") {
        parcelamento.style.display = "block";
    } else {
        parcelamento.style.display = "none";
    }
}

function comprarProdutos(){

let produtoSelecionado = document.querySelector(`input[name="produto"]:checked`);
let quantidade = document.getElementById(`quantidade`).value;

if (!produtoSelecionado || quantidade === `` || quantidade <= 0){
    alert(`Selecione um produto e informe a quantidade!`);
    return;
}

let nomeProduto = ``;
let preco = 0;

switch (produtoSelecionado.value){
    case `1`:
        nomeProduto = `Copinho`;
        preco = 5;
        break;
    case `2`:
        nomeProduto = `Casquinha`;
        preco = 6;
        break;
    case `4`:
        nomeProduto = `Milk-Shake`;
        preco = 10;
        break;
    case `5`:
        nomeProduto = `Sundae`;
        preco = 12;
        break;
}

let subtotal = preco * quantidade;
total += subtotal;

    carrinho.push(`${nomeProduto} x ${quantidade} = R$ ${subtotal}`);

    document.getElementById(`carrinho`).innerHTML = `${carrinho.join(`<br>`)}<br><strong>Total: R$ ${total}</strong>`;

    document.getElementById(`quantidade`).value = ``;
}

function finalizarCompra(){

let pagamentoSelecionado = document.querySelector(`input[name="pagamento"]:checked`);

if (carrinho.length === 0){
    alert(`Carrinho vazio!`);
    return;
}

if (!pagamentoSelecionado){
    alert(`Escolha a forma de pagamento!`);
    return;
}

let pagamento = pagamentoSelecionado.value;

let tipoCartao = document.querySelector(`input[name="tipoCartao"]:checked`);
let parcelas = document.getElementById(`parcelas`).value;

let infoPagamento = pagamento;

if (pagamento === `Cartão`){

    if (!tipoCartao){
            alert(`Escolha crédito ou débito!`);
            return;
    }

    infoPagamento += ` - ${tipoCartao.value}`;

    if (tipoCartao.value === `Crédito`){

        if (parcelas === ``){
            alert(`Escolha o parcelamento!`);
            return;
        }

        infoPagamento += ` (${parcelas} x)`;
    }
}

    document.getElementById(`carrinho`).innerHTML = `${carrinho.join(`<br>`)}<br><strong>Total: R$ ${total}</strong><br><br>Pagamento: ${infoPagamento}<br><br><strong>Compra finalizada com sucesso! 🎉</strong>`;

    carrinho = [];
    total = 0;
}