function verificarCPF(){/*Função verificar*/
    let cpf = document.getElementById("entrada").value/*Armazenar valor inserido*/
    let estado = "";/*Variável para avaliar estado*/

    let digito = parseInt(cpf.split("-")[0].split(".")[2][2]);/*Ler digito*/

    switch(digito){/*Caso - estados*/
        case 9:
            estado = ' PR ou SC'
            break
        case 8:
            estado = ' SP'
            break
        case 7:
            estado = ' RJ ou ES'
            break
        case 6:
            estado = ' MG'
            break
        case 5: 
            estado = ' BA ou SE'
            break
        case 4: 
            estado = ' PB, PE, AL ou RN'
            break
        case 3: 
            estado = ' CE, MA ou PI'
            break
        case 2:
            estado = ' AM, PA, RR, AP, AC ou RO'
            break
        case 1: 
            estado = ' DF, GO, MT, MS ou TO'
            break
        case 0:
            estado = ' RS'
            break
    }

    document.getElementById("saida").textContent = estado;/*Resultado na saída*/
}