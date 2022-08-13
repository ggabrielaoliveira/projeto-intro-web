const objeto1={
    nome:"Cléo de Nile",
    idade:5843,
    especie:"Múmia",
    generoF:true,
    amigos:["Deuce Gorgon","Ghoulia Yelps","Clawdeen Wolf","Frankie Stein"]
}
const objeto2={
    nome:"Elissabat",
    idade:1601,
    especie:"Vampiro",
    generoF:true,
    amigos:["Draculaura","Viperine Gorgon"]
}
const objeto3={
    nome:"Clawd Wolf",
    idade:17,
    especie:"Lobisomem",
    generoF:false,
    amigos:["Heath Burns","Deuce Gorgon","Draculaura","Jackson Jekyll"]
}

console.log(objeto1,objeto2,objeto3)
// arrayObjt.push(objeto1,objeto2,objeto3);
const arrayObjt=[];
// // semana 4
if(objeto1.generoF){
    console.log("validado")
    arrayObjt.push(objeto1)
}else{
    console.log("não validado")
}
if(objeto2.generoF){
    console.log("validado")
    arrayObjt.push(objeto2)
}else{
    console.log("não validado")
}
if(objeto3.generoF){
    console.log("validado")
    arrayObjt.push(objeto3)
}else{
    alert("item não adicionado")
}
console.log(arrayObjt);
// objeto1.generoF ? arrayObjt.push(objeto1) : alert("item não adicionado")
// objeto2.generoF ? arrayObjt.push(objeto2) : alert("item não adicionado")
// objeto3.generoF ? arrayObjt.push(objeto3) : alert("item não adicionado")


// const nome="Cléo de Nile";
// const nomeMaiuscula=nome.toUpperCase();
// const idade=5843;
// const especie="Múmia";
// const generoF=true;
// const amigos=["Deuce Gorgon","Ghoulia Yelps","Clawdeen Wolf","Frankie Stein"];
// console.log(`${nomeMaiuscula}\nIdade:${idade} anos\nFilha(o) de qual monstro?:${especie}\nGênero Feminino?:${generoF}\nAmigos:${amigos}`);

// const nome2="Elissabat";
// const nome2Maiuscula=nome2.toUpperCase();
// const idade2=1601;
// const especie2="Vampiro";
// const generoF2= true;
// const amigos2=["Draculaura","Viperine Gorgon"];
// console.log(`${nome2Maiuscula}\nIdade:${idade2} anos\nFilha(o) de qual monstro?:${especie2}\nGênero Feminino?:${generoF2}\nAmigos:${amigos2}`);

// const nome3="Clawd Wolf";
// const nome3Maiuscula=nome3.toUpperCase();
// const idade3=17;
// const especie3="Lobisomem";
// const generoF3=false;
// const amigos3=["Heath Burns","Deuce Gorgon","Draculaura","Jackson Jekyll"];
// console.log(`${nome3Maiuscula}\nIdade:${idade3} anos\nFilha(o) de qual monstro?:${especie3}\nGênero Feminino?:${generoF3}\nAmigos:${amigos3}`);


// /// média
// // const soma=idade+idade2+idade3;
// console.log("soma das idades dos 3 personagens de Monster High:",soma);
// const media= soma/3;
// console.log("media das idades dos 3 personagens de Monster High:",media);
// //checagem de booleanos
// const verificaçãoGenero=generoF&&generoF2&&generoF3;
// console.log("Todos os personagens listados são mulheres?:",verificaçãoGenero);
// //
