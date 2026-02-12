const STORY = {

start:{
image:"images/Entree.webp",
text:"Apres une tres longue journée de travail, tu rentres chez toi. Tu ne sais pas si ta femme est chez toi ou chez un ami.",
choices:[
{label:"Entrer", next:"Entrer01"},
{label:"Envoyer un message", next:"SMS01"}
{label:"Appeller", next:"tel01"}
]
},

foret:{
image:"images/foret.jpg",
text:"La forêt devient dense. Vous entendez un bruit.",
choices:[
{label:"Continuer", next:"fin1"},
{label:"Fuir", next:"start"}
]
},

grotte:{
image:"images/grotte.jpg",
text:"Il fait sombre. Quelque chose bouge.",
choices:[
{label:"Avancer", next:"fin2"},
{label:"Sortir", next:"start"}
]
},

fin1:{
image:"images/fin.jpg",
text:"Vous avez survécu. FIN.",
choices:[]
},

fin2:{
image:"images/monstre.jpg",
text:"Le monstre vous dévore. FIN.",
choices:[]
}

};
