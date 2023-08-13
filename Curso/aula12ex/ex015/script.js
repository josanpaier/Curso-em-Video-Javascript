function calcular() {
var anoNasc = window.document.getElementById('ano').value
var data = new Date()
var anoAtual = data.getFullYear()
var res = window.document.querySelector('div#res')
var idade = anoAtual - anoNasc
var img = window.document.createElement('img')
img.setAttribute('id', 'foto')
var sexo = window.document.getElementsByName('sex')
var genero = ''
if (sexo[0].checked) {
    genero = 'Homem'
    if (idade >= 0 && idade < 6) {
        img.setAttribute('src', 'foto-bebe-m.png')
    } else if (idade < 20) {
        img.setAttribute('src', 'foto-jovem-m.png')
    } else if (idade < 60) {
        img.setAttribute('src', 'foto-adulto-m.png')
    } else {
        img.setAttribute('src', 'foto-idoso-m.png')
    }
} else if (sexo[1].checked) {
    genero = 'Mulher'
    if (idade >= 0 && idade < 6) {
        img.setAttribute('src', 'foto-bebe-f.png')
    } else if (idade < 20) {
        img.setAttribute('src', 'foto-jovem-f.png')
    } else if (idade < 60) {
        img.setAttribute('src', 'foto-adulto-f.png')
    } else {
        img.setAttribute('src', 'foto-idoso-f.png')
    }
}
res.style.textAlign = 'center'
res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos.<br>`
res.appendChild(img)

/*if (anoNasc.length == 0 || anoNasc > anoAtual) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    
}
*/

}