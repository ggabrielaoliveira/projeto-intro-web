// SEMANA 1

// const nome="Hermione Jean Granger";
const idade= 43;
const mestico=false;
// const ocupacao=["Funcionária do Departamento para Regulamentação e Controle das Criaturas Mágicas"," Vice-chefe do Departamento de Execução das Leis da Magia"," Ministra da Magia"];

// const nome2="Harry Tiago Potter";
const idade2= 42;
const mestico2=true;
// const ocupacao2=["Chefe da Seção dos Aurores"," Palestrante convidado de Defesa Contra as Artes das Trevas"," Chefe do Departamento de Execução das Leis da Magia"];

// const nome3="Ronald Abílio Weasley";
const idade3= 42;
const mestico3=false;
// const ocupacao3=["Chefe da Seção dos Aurores"," Palestrante convidado de Defesa Contra as Artes das Trevas"," Chefe do Departamento de Execução das Leis da Magia"];

//MÉDIA
const soma=idade+idade2+idade3;
// console.log("soma das idades dos 3 personagens principais de Harry Potter:",soma);
const media= soma/3;
console.log("media das idades dos 3 personagens principais de Harry Potter:",media);

// CHECAGEM DE BOOLEANOS
const verificaçãoGenero=mestico&&mestico2&&mestico3;
console.log("Todos os personagens são Mestiços?:",verificaçãoGenero);

// SEMANA 2

// const ocupacao=["Funcionária do Departamento para Regulamentação e Controle das Criaturas Mágicas"," Vice-chefe do Departamento de Execução das Leis da Magia"," Ministra da Magia"];
// const ocupacao2=["Chefe da Seção dos Aurores"," Palestrante convidado de Defesa Contra as Artes das Trevas"," Chefe do Departamento de Execução das Leis da Magia"];
// const ocupacao3=["Chefe da Seção dos Aurores"," Palestrante convidado de Defesa Contra as Artes das Trevas"," Chefe do Departamento de Execução das Leis da Magia"];

// console.log(`${nome.toUpperCase()}\n${idade}\n${mestico}\n${ocupacao}`);
// console.log(`${nome2.toUpperCase()}\n${idade2}\n${mestico2}\n${ocupacao2}`);
// console.log(`${nome3.toUpperCase()}\n${idade3}\n${mestico3}\n${ocupacao3}`);

// SEMANA 3

const objt1={
    nome:"hermione jean granger",
    idade: 43,
    mestico:false,
    imagem: "./img/Hermione-Granger-Batalha-Harry-Potter-PNG.png",
    ocupacao:["Funcionária do Departamento para Regulamentação e Controle das Criaturas Mágicas"," Vice-chefe do Departamento de Execução das Leis da Magia"," Ministra da Magia"],
    link:"https://harrypotter.fandom.com/pt-br/wiki/Hermione_Granger"
}

const objt2={
    nome:"harry tiago potter",
    idade: 42,
    mestico:true,
    imagem: "./img/Harry-Potter-com-Fundo-Transparente.png",
    ocupacao:["Chefe da Seção dos Aurores"," Palestrante convidado de Defesa Contra as Artes das Trevas"," Chefe do Departamento de Execução das Leis da Magia"],
    link:"https://harrypotter.fandom.com/pt-br/wiki/Harry_Potter"
}

const objt3={
    nome:"ronald abílio weasley",
    idade: 42,
    mestico:false,
    imagem:"./img/Rony-Weasley-Harry-Potter-PNG.png",
    ocupacao:["Chefe da Seção dos Aurores"," Palestrante convidado de Defesa Contra as Artes das Trevas"," Chefe do Departamento de Execução das Leis da Magia"],
    link:"https://harrypotter.fandom.com/pt-br/wiki/Ronald_Weasley" 
}
// console.log(objt1,objt2,objt3);
const arrayObjt=[];
arrayObjt.push(objt1,objt2,objt3);
console.log(arrayObjt);

// SEMANA 4

// if(objt1.mestico){
//     arrayObjt.push(objt1)
//     alert("Hermione é mestiça")
//     }else{
//         alert("Hermione não é mestiça")
//     }
// if(objt2.mestico){
//     arrayObjt.push(objt2)
//     alert("Harry é mestiço")
// }else{
//         alert("Harry não é mestiço")
//     }
// if(objt3.mestico){
//     arrayObjt.push(objt3)
//         alert("Rony é mestiço")
//     }else{
//         alert("Rony não é mestiço")
//     }
console.log(arrayObjt);

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
// console.log("array em formato de string", arrayComStringOcupacao)

// // SEMANA 6.1
function imprimeObjeto(objeto){
    let stringObjeto = ''
    stringObjeto = objeto
    // console.log(stringObjeto);
}
imprimeObjeto(objt2)

// // SEMANA 6.2
function retornaObjeto(arrayObjt, input){
    // let retornaObjeto = {}
    for(let i in arrayObjt){
        for(let j in arrayObjt[i]){
            if(arrayObjt[i][j]=== input){
                // retornaObjeto = arrayObjt[i]
                let main = document.getElementById("main-container")
                let div = document.createElement("div");
                let section = document.createElement("section")
                let imagem = document.createElement("img");
                let ul = document.createElement("ul");
                let li = document.createElement("li")
                let li2 = document.createElement("li")
                let li3 = document.createElement("li")
                let li4 = document.createElement("li")
                let a = document.createElement("a");


            div.setAttribute("id","div-sections");
            section.setAttribute("id", "section1")
            imagem.setAttribute("id","imagem-personagens");
                imagem.src = arrayObjt[i].imagem
            a.setAttribute("href", arrayObjt
                [i].link)
            a.setAttribute("target","_blank")

                a.innerHTML = arrayObjt[i].nome.toUpperCase();
                li2.innerHTML = `Idade: ${arrayObjt[i].idade}`;
                li3.innerHTML = `É mestiço(a): ${arrayObjt[i].mestico}`;
                li4.innerHTML = arrayObjt[i].ocupacao;

            main.appendChild(div)
            div.appendChild(section);
            section.appendChild(imagem);
            section.appendChild(ul);
            ul.appendChild(li);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            li.appendChild(a)

            section.innerHtml;
            ul.innerHTML

           return retornaObjeto
            }
        }
    } 
}



// WEEK 11
for(i in arrayObjt){
    let div = document.getElementById("div-sections");
    let section = document.createElement("section")
    let imagem = document.createElement("img");
    let ul = document.createElement("ul");
    let li = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    let li4 = document.createElement("li")
    let a = document.createElement("a");


  div.setAttribute("id","div-sections");
  section.setAttribute("id", "section1")
   imagem.setAttribute("id","imagem-personagens");
    imagem.src = arrayObjt[i].imagem
    a.setAttribute("href", arrayObjt
    [i].link)
    a.setAttribute("target","_blank")

    a.innerHTML = arrayObjt[i].nome.toUpperCase();
    li2.innerHTML = `Idade: ${arrayObjt[i].idade}`;
    li3.innerHTML = `É mestiço(a): ${arrayObjt[i].mestico}`;
    li4.innerHTML = arrayObjt[i].ocupacao;

   div.appendChild(section);
   section.appendChild(imagem);
   section.appendChild(ul);
   ul.appendChild(li);
   ul.appendChild(li2);
   ul.appendChild(li3);
   ul.appendChild(li4);
   li.appendChild(a)

   section.innerHtml;
   ul.innerHTML
}

function busca(event){
    event.preventDefault()
    let input = document.getElementById("id-input").value.toLowerCase()
    if(input === ""){
        alert("não é possivel achar o personagem")
    }else{
        document.getElementById("div-sections").remove()

        retornaObjeto(arrayObjt, input);
    }
}
