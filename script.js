// SEMANA 1

const nome="Herminone Jean Granger";
const nomeMaiuscula=nome.toUpperCase();
const idade= 43;
const mestico=false;
const ocupacao=["Funcionária do Departamento para Regulamentação e Controle das Criaturas Mágicas"," Vice-chefe do Departamento de Execução das Leis da Magia"," Ministra da Magia"];
// console.log(`${nomeMaiuscula}\nIdade:${idade} anos\nMestiço?:${mestico}\nOcupações:${ocupacao}`);

const nome2="Harry Tiago Potter";
const nomeMaiuscula2=nome2.toUpperCase();
const idade2= 42;
const mestico2=true;
const ocupacao2=["Chefe da Seção dos Aurores"," Palestrante convidado de Defesa Contra as Artes das Trevas"," Chefe do Departamento de Execução das Leis da Magia"];
// console.log(`${nomeMaiuscula2}\nIdade:${idade2} anos\nMestiço?:${mestico2}\nOcupações:${ocupacao2}`);

const nome3="Ronald Abílio Weasley";
const nomeMaiuscula3=nome3.toUpperCase();
const idade3= 42;
const mestico3=false;
const ocupacao3=["Chefe da Seção dos Aurores"," Palestrante convidado de Defesa Contra as Artes das Trevas"," Chefe do Departamento de Execução das Leis da Magia"];
// console.log(`${nomeMaiuscula3}\nIdade:${idade3} anos\nMestiço?:${mestico3}\nOcupações:${ocupacao2}`);

//MÉDIA
const soma=idade+idade2+idade3;
// console.log("soma das idades dos 3 personagens principais de Harry Potter:",soma);
const media= soma/3;
// console.log("media das idades dos 3 personagens principais de Harry Potter:",media);

// CHECAGEM DE BOOLEANOS
const verificaçãoGenero=mestico&&mestico2&&mestico3;
// console.log("Todos os personagens são Mestiços?:",verificaçãoGenero);

// SEMANA 2
// const ocupacao=["Funcionária do Departamento para Regulamentação e Controle das Criaturas Mágicas"," Vice-chefe do Departamento de Execução das Leis da Magia"," Ministra da Magia"];
// const ocupacao2=["Chefe da Seção dos Aurores"," Palestrante convidado de Defesa Contra as Artes das Trevas"," Chefe do Departamento de Execução das Leis da Magia"];
// const ocupacao3=["Chefe da Seção dos Aurores"," Palestrante convidado de Defesa Contra as Artes das Trevas"," Chefe do Departamento de Execução das Leis da Magia"];
// const nomeMaiuscula=nome.toUpperCase();
// const nomeMaiuscula2=nome2.toUpperCase();
// const nomeMaiuscula3=nome3.toUpperCase();

// SEMANA 3

const objt1={
    nome:"Herminone Jean Granger".toUpperCase(),
    idade: 43,
    mestico:false,
    ocupacao:["Funcionária do Departamento para Regulamentação e Controle das Criaturas Mágicas"," Vice-chefe do Departamento de Execução das Leis da Magia"," Ministra da Magia"]
}

const objt2={
    nome:"Harry Tiago Potter".toUpperCase(),
    idade: 42,
    mestico:true,
    ocupacao:["Chefe da Seção dos Aurores"," Palestrante convidado de Defesa Contra as Artes das Trevas"," Chefe do Departamento de Execução das Leis da Magia"]
}

const objt3={
    nome:"Ronald Abílio Weasley".toUpperCase(),
    idade: 42,
    mestico:false,
    ocupacao:["Chefe da Seção dos Aurores"," Palestrante convidado de Defesa Contra as Artes das Trevas"," Chefe do Departamento de Execução das Leis da Magia"]
}
// console.log(objt1,objt2,objt3);
const arrayObjt=[];
arrayObjt.push(objt1,objt2,objt3);
console.log(arrayObjt);

// SEMANA 4

// if(objt1.mestico){
//         console.log("validado")
//         arrayObjt.push(objt1)
//     }else{
//         console.log("item não adicionado")
//         alert("item objt 1 não adicionado")
//     }
//     if(objt2.mestico){
//         console.log("validado")
//         arrayObjt.push(objt2)
//     }else{
//         console.log("item objt 2 não adicionado")
//     }
//     if(objt3.mestico){
//         console.log("validado")
//         arrayObjt.push(objt3)
//     }else{
//         console.log("item não adicionado")
//         alert("item objt 3 não adicionado")
//     }

// objt1.mestico ? arrayObjt.push(objt1) : alert("item objt 1 não adicionado")
// objt2.mestico ? arrayObjt.push(objt2) : alert("item objt 2 não adicionado")
// objt3.mestico ? arrayObjt.push(objt3) : alert("item objt 3 não adicionado")
// console.log(arrayObjt);

// SEMANA 5
const FazendoStringOcupacao = (array) => {
  
    return {
        nome:array.nome,
        idade:array.idade,
        mestico:array.mestico,
        ocupacao:array.ocupacao.toString()
    }
};
const arrayComStringOcupacao =arrayObjt.map(FazendoStringOcupacao)
console.log("array em formato de string", arrayComStringOcupacao)

// // SEMANA 6
// const funcaoWeekSeis = (objt) =>{
//     return {
//         nome:objt.nome,
//         idade:objt.idade,
//         mestico:objt.mestico,
//         ocupacao:objt.ocupacao.toString()   
//     }
// }
// console.log( funcaoWeekSeis(objt1));
// dar uma olhada para ver se é isso mesmo
// PARTE 2
function weekSeisParteDois(arrayDeObjt, valorString){

    let objtARetornar={}

    for(let i = 0 ; i < arrayDeObjt.length; i++){
        if(arrayDeObjt[i].nome===valorString){
            // objtARetornar.nome = arrayDeObjt[i].nome;
            // objtARetornar.idade = arrayDeObjt[i].idade;
            // objtARetornar.mestico = arrayDeObjt[i].mestico;
            // objtARetornar.ocupacao = arrayDeObjt[i].ocupacao;

        }
    }
}


// const retornaString = (arrayObjt, string) =>{
//     arrayObjt
//     if(arrayObjt.nome == string){
//         return arrayObjt
//     }
// }
// const stringHermione = arrayObjt.filter(retornaString())

// console.log(stringHermione);
// const retornaString = arrayObjt.filter(array, string =>array.nome == string)

// if (objtARetornar=== {}) {
//     alert("nao identificado")
// }else{
// //    return objtARetornar;
// }

// funcaoWeekSeis();
// console.log();


