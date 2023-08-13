function verificar() {
    var anoNasc = window.document.querySelector('input#ano').value
    var data = new Date()
    var anoAtual = data.getFullYear()
    var idade = anoAtual - anoNasc
    var sexo = window.document.getElementsByName('radsex')
    var genero = ''    
    var res = window.document.querySelector('div#res')
    var img = window.document.createElement('img') // Cria uma tag <img> com elemento/variável img
    img.setAttribute('id', 'foto') // Atribui um id 'foto' à tag <img id='foto'>

    if (anoNasc.length == 0 || anoNasc > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 6) {
                img.setAttribute('src', 'foto-bebe-m.png') // Atribui o src='foto-bebe-m.png' à foto
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
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
    res.appendChild(img)    
    }
    
}