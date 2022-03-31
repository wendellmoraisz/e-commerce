// banners

const banners = document.querySelectorAll('.banners > a')
const bannerNext = document.getElementById('next')
const bannerBack = document.getElementById('back')

let primeiroElemento = 0
let segundoelemento = 1
let i = 1

bannerNext.onclick = () => {
    banners[getBanner()].style.left = '0'
    banners[getBanner2()].style.zIndex = `${i++}`
}

function nextBanner() {
    banners[getBanner()].style.left = '0'
    banners[getBanner2()].style.zIndex = `${i++}`
}

setInterval(nextBanner, 3000)

bannerBack.onclick = function () {
    banners[getBanner2()].style.right = '0'
}

let index = 0
function getBanner() {
    index == banners.length - 1 ? index = 0 : index++
    return index
}

let index2 = -1
function getBanner2() {
    index2 == banners.length - 1 ? index2 = 0 : index2++
    return index2
}

// login

const user = document.querySelector('.user')
const informations = document.querySelector('.informations')

user.onmouseenter = function () {
    informations.style.display = 'block'
}

user.onmouseover = function () {
    informations.style.display = 'none'
}

const cadastro = document.querySelector('.ent-cad')

cadastro.onclick = function () {
    document.querySelector('.produtos').style.display = 'none'
    document.querySelector('.categorias').style.display = 'none'
    document.querySelector('.banner').style.display = 'none'
    document.querySelector('.categorias-destaque').style.display = 'none'
    document.querySelector('.frete').style.display = 'none'
    document.querySelector('footer').classList.add('in-bottom')

    document.querySelector('.login').style.display = 'flex'
}

// chatApp

const chat = document.querySelector('.chat-app')
const chatIcon = document.querySelector('.chat-icon')
chatIcon.onclick = function () {
    chatIcon.style.display = 'none'
    chat.style.display = 'flex'
    return false
}

const sair = document.querySelector('.exit')
sair.onclick = function () {
    chat.style.display = 'none'
    chatIcon.style.display = 'block'
    return false
}

const enviar = document.getElementById('send')
const mensagem = document.getElementById('msg-txt')

enviar.onclick = function () {
    document.querySelector('.messages').innerHTML += `<p class="client-side">${mensagem.value}</p>`
    mensagem.value = ''
}

//produtos

const vitrine = document.querySelector('.produtos > ul')

function mostrarProduto(produto) {
    vitrine.innerHTML += `           <li>
    <a href="">
        <img class="image" src="${produto.imgFrente}" >
        <img class="img-costas" src="${produto.imgCostas}" alt="">
    </a>
    <p class="nome-produto">${produto.nome}
    </p>
    <p class="categoria-produto">${produto.categoria}</p>
    <p class="preco">R$${produto.preco}</p>
</li>`
}


function Produto(nome, categoria, imgFrente, imgCostas, preco) {
    this.nome = nome
    this.categoria = categoria
    this.imgFrente = imgFrente
    this.imgCostas = imgCostas
    this.preco = preco
}

let categorias = ['Homem Futebol', 'Mulher Futebol']
let produtos = [
    new Produto('Camisa 1 Real Madrid 21/22', categorias[0], 'img/real.webp', 'img/real-costas.webp', 239.99)
    ,
    new Produto('Camisa 1 Barcelona 21/22', categorias[0], 'img/barca.webp', 'img/barca-costas.webp', 239.99)
    ,
    new Produto('Camisa 1 Manchester United 21/22', categorias[0], 'img/united.jpg', 'img/united-costas.webp', 239.99)
    ,
    new Produto('Camisa 1 Paris Saint Germain 21/22', categorias[0], 'img/psg.webp', 'img/psg-costas.webp', 239.99)
    ,
    new Produto('Camisa 1 Flamengo 2021 Feminina', categorias[1], 'img/fla-fem.webp', 'img/fla-fem-costas.webp', 239.99)
    ,
    new Produto('Jaqueta Pré-jogo Flamengo', categorias[0], 'img/fla-jaque.jpg', 'img/fla-jaque-costas.jpg', 269.99)
]

produtos.filter(e => e.categoria == categorias[0]).forEach(e => mostrarProduto(e))

function Categoria(local, times) {
    this.local = local
    this.times = times
}

let timesBR = [
    new Categoria('Rio de Janeiro',
        ['Flamengo', 'Botafogo', 'Vasco', 'Fluminense'])
    ,
    new Categoria('São Paulo',
        ['Palmeiras', 'Corinthians', 'São Paulo', 'Santos'])
    ,
    new Categoria('Minas Gerais',
        ['Atlético-MG', 'Cruzeiro', 'América-MG'])
]


let timesInter = [
    new Categoria('França',
        ['Paris Saint Germain', 'Olympique de Marseille', 'AS Monaco'])
    ,
    new Categoria('Espanha',
        ['Real Madrid', 'Barcelona', 'Atlético de Madrid'])
    ,
    new Categoria('Inglaterra',
        ['Liverpool', 'Manchester United', 'Manchester City', 'Chelsea', 'Tottenham'])
    ,
    new Categoria('Alemanha',
        ['Bayern Munchen', 'Borussia Dortmund'])
]

let selecoes = [
    new Categoria('América do Sul',
        ['Brasil', 'Argentina', 'Uruguai', 'Chile', 'Colômbia', 'Peru', 'Paraguai'])
    ,
    new Categoria('Europa',
        ['Espanha', 'Alemanha', 'Portugal', 'Inglaterra', 'Itália', 'Bélgica', 'França', 'Holanda']),

    new Categoria('África',
        ['Nigéria', 'Costa do Marfim', 'África do Sul', 'Camarões', 'Marrocos'])
]

const itensCat = document.querySelector('.itens-cat')

const catInter = document.getElementById('inter-cat')
catInter.onmouseenter = function () { getCategoria(catInter, timesInter, 'pais') }

const catBR = document.getElementById('br-cat')
catBR.onmouseenter = function () { getCategoria(catBR, timesBR, 'local') }

const catSele = document.getElementById('sele-cat')
catSele.onmouseenter = function () { getCategoria(catSele, selecoes, 'continente') }

function getCategoria(categoria, objCat) {
    function enter() {
        itensCat.style.display = 'flex'
        itensCat.innerHTML = `        <ul>
            <h3>Gênero</h3>
            <li><a href="">Masculino</a></li>
            <li><a href="">Feminino</a></li>
            <li><a href="">Infantil</a></li>
            </ul>`
        objCat.forEach((e, i) => {
            itensCat.innerHTML += `<ul id=${i} class="itens"><a href=""><h3>${e.local}</h3></a></ul>`
            e.times.forEach(time => document.getElementById(`${i}`).innerHTML += `<li><a href="">${time}</a></li>`)
        })
    }
    enter()

    categoria.onmouseout = function () {
        itensCat.style.display = 'none'
        itensCat.innerHTML = `        <ul>
                <h3>Gênero</h3>
                <li><a href="">Masculino</a></li>
                <li><a href="">Feminino</a></li>
                <li><a href="">Infantil</a></li>
                </ul>`
    }

    itensCat.onmouseenter = function () {
        itensCat.style.display = 'flex'
        objCat.forEach((e, i) => {
            itensCat.innerHTML += `<ul id=${i} class="itens"><h3>${e.local}</h3></ul>`
            e.times.forEach(time => document.getElementById(`${i}`).innerHTML += `<li><a href="">${time}</a></li>`)
        })
    }
}

const inv = document.querySelector('#inv')
inv.onmouseenter = function () {
    document.querySelector('.itens-cat').style.display = 'none'
}