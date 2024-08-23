function DataAtual() {
  this.dia = new Date().getDate()
  this.mes = new Date().getMonth() + 1
  this.ano = new Date().getFullYear()
}

function PegarDatas() {
  const data = document.querySelector('#data').value
  const novaData = new Date(data)
  this.dia = novaData.getDate()
  this.mes = novaData.getMonth() + 1
  this.ano = novaData.getFullYear()
}

function calcAnos() {
  this.diaAtual = new DataAtual().dia
  this.mesAtual = new DataAtual().mes
  this.anoAtual = new DataAtual().ano
  this.diaNascimento = new PegarDatas().dia
  this.mesNascimento = new PegarDatas().mes
  this.anoNascimento = new PegarDatas().ano

  let idade = this.anoAtual - this.anoNascimento

  if (this.mesAtual <= this.mesNascimento || this.diaAtual <= this.diaNascimento) {
    idade--
  }

  function Resposta() {
    let button = document.querySelector('button')
    let h1 = document.createElement('h1')
    h1.innerText = `Sua idade:${idade}`
    h1.style.fontSize = '3.2rem'
    button.insertAdjacentElement('afterend', h1)
  }
  Resposta()
}