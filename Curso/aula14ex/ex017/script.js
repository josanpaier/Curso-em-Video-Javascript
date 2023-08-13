function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option') // Cria uma tag <option> com elemento/variável img
            item.text = `${n} x ${c} = ${n*c}` // "item.text" é a parte textual de dentro da tag option
            item.value = `tab${c}` // "item.value" é a parte valor da tag option
            tab.appendChild(item) // adiciona um elemento filho "item" à tabuada "tab"
            c++
        }
    }
}