const STORY = {

start:{
image:"images/clairiere.jpg",
text:"Vous vous réveillez dans une clairière. Deux chemins s'offrent à vous.",
choices:[
{label:"Aller à gauche", next:"foret"},
{label:"Entrer dans la grotte", next:"grotte"}
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
