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

Entrer01:{
image:"images/Entree.webp",
text:"Tu entends du bruit dans la maison.",
choices:[
{label:"Ca vient du salon", next:"Salon01"},
{label:"Ca vient de la chambre", next:"chb01"}
{label:"Ca vient de la salle de bain", next:"SdB01"}
]
},

SMS01:{
image:"images/SMS01.jfif",
text:"Tu patientes quelques secondes et :",
choices:[
{label:"Elle répond, tu vas pouvoir lui demander ce qu'elle fait", next:"SMS02"},
{label:"Elle ne repond pas, tu l'appelles", next:"tel01"}
{label:"Elle ne repond pas, tu rentre", next:"Entrer01"}
]
},

tel01:{
image:"images/tel01.jfif",
text:"Tu patientes quelques sonneries et :",
choices:[
{label:" ", next:"fin2"},
{label:" ", next:"start"}
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
