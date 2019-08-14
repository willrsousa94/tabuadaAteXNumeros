function calcular(){
    let txtv1 = document.getElementById('txtv1')
    let txtv2 = document.getElementById('txtv2')
    let res = document.getElementById('res')
    res.innerHTML = ""
    if(txtv1.value.length == 0 || txtv2.value.length == 0){
        window.alert('[ERRO] Por favor, digite os valores!') //Validação para assegurar que nenhum campo esteja vazio
    } else {
        let de = Number(txtv1.value)
        let ate = Number(txtv2.value)
        if(de > ate){
            window.alert('O Campo \"De\" precisa ser menor que \"Até\"') //Validação para que informe um erro caso o campo De seja maior que o campo Até
        }
        for(let c = de; c <= ate; c++){
            let tabuada = document.createElement('select')//Quando o for iniciar será sempre criado um novo elemento, dependendo dos valores De e Até
            tabuada.size = 10
            for(let aux = 1; aux <= 10; aux++){
                let item = document.createElement('option')//Quando iniciar o segundo For, será criada as options.
                item.text = `${c} x ${aux} = ${aux * c}` //Aqui será atribuido os valores para cada options
                tabuada.appendChild(item)
            }
            res.appendChild(tabuada)
        }
    }
}