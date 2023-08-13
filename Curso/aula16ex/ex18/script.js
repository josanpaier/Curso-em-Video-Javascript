let val = window.document.getElementById('txtn')
let list = document.getElementById('list')
let res = document.querySelector('div#res')
let vet = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function compararNumeros(a, b) {
    return a - b;
  }

function adicionar() {
    if (isNumber(val.value) && !inList(val.value, vet)) {
        // for (let pos = 0; pos < vet.length; pos++) {
        vet.push(Number(val.value))
        let item = document.createElement('option')
        item.text = `Valor ${val.value} adicionado.`
        // item.value = `list${val.value}`
        list.appendChild(item)
        res.innerHTML = ''
        // }        
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    val.value = ''
    val.focus()
}

function finalizar() {
    if (vet.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML = ''
        vet.sort(function(a, b) {
            return a - b;
         })
        res.innerHTML += `<p>O vetor é ${vet}.</p>`
        res.innerHTML += `<p>Ao todo temos ${vet.length} números cadastrados.</p>`        
        let lastVal = vet.length - 1        
        res.innerHTML += `<p>O maior valor informado foi ${vet[lastVal]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${vet[0]}.</p>`
        let soma = 0
            for (let pos = 0; pos < vet.length; pos++) {
            soma = soma + vet[pos]
            }
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        let media = soma / vet.length
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`        
    }

}