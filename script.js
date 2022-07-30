const nome="Cléo de Nile";
const nomeMaiuscula=nome.toUpperCase();
const idade=5843;
const especie="Múmia";
const generoF=true;
const amigos=["Deuce Gorgon","Ghoulia Yelps","Clawdeen Wolf","Frankie Stein"];
console.log(`${nomeMaiuscula}\nIdade:${idade} anos\nFilha(o) de qual monstro?:${especie}\nGênero Feminino?:${generoF}\nAmigos:${amigos}`);

const nome2="Elissabat";
const nome2Maiuscula=nome2.toUpperCase();
const idade2=1601;
const especie2="Vampiro";
const generoF2= true;
const amigos2=["Draculaura","Viperine Gorgon"];
console.log(`${nome2Maiuscula}\nIdade:${idade2} anos\nFilha(o) de qual monstro?:${especie2}\nGênero Feminino?:${generoF2}\nAmigos:${amigos2}`);

const nome3="Clawd Wolf";
const nome3Maiuscula=nome3.toUpperCase();
const idade3=17;
const especie3="Lobisomem";
const generoF3=false;
const amigos3=["Heath Burns","Deuce Gorgon","Draculaura","Jackson Jekyll"];
console.log(`${nome3Maiuscula}\nIdade:${idade3} anos\nFilha(o) de qual monstro?:${especie3}\nGênero Feminino?:${generoF3}\nAmigos:${amigos3}`);


/// média
const soma=idade+idade2+idade3;
console.log("soma das idades dos 3 personagens de Monster High:",soma);
const media= soma/3;
console.log("media das idades dos 3 personagens de Monster High:",media);
//checagem de booleanos
const verificaçãoGenero=generoF&&generoF2&&generoF3;
console.log("Todos os personagens listados são mulheres?:",verificaçãoGenero);
//
