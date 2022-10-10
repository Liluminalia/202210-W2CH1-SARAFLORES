start= confirm("¿Quieres empezar el juego?");
let users=[];
let person;
function User(user,points){
    this.user = user;
    this.points = points;

};
users[0] = new User("david", 25);
users[1] = new User("antonio", 32);
users[2] = new User("patricia", 12);
users[3] = new User("sara", 44); 
const questions = [
    {
      letter: "a",
      answer: "abducir",
      status: 0,
      question:
        "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
      letter: "b",
      answer: "bingo",
      status: 0,
      question:
        "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
      letter: "c",
      answer: "churumbel",
      status: 0,
      question: "CON LA C. Niño, crío, bebé",
    },
    {
      letter: "d",
      answer: "diarrea",
      status: 0,
      question:
        "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
      letter: "e",
      answer: "ectoplasma",
      status: 0,
      question:
        "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },
    {
      letter: "f",
      answer: "facil",
      status: 0,
      question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
      letter: "g",
      answer: "galaxia",
      status: 0,
      question:
        "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {
      letter: "h",
      answer: "harakiri",
      status: 0,
      question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
    },
    {
      letter: "i",
      answer: "iglesia",
      status: 0,
      question: "CON LA I. Templo cristiano",
    },
    {
      letter: "j",
      answer: "jabali",
      status: 0,
      question:
        "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
      letter: "k",
      answer: "kamikaze",
      status: 0,
      question:
        "CON LA K. Persona que se juega la vida realizando una acción temeraria",
    },
    {
      letter: "l",
      answer: "licantropo",
      status: 0,
      question: "CON LA L. Hombre lobo",
    },
    {
      letter: "m",
      answer: "misantropo",
      status: 0,
      question:
        "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
      letter: "n",
      answer: "necedad",
      status: 0,
      question: "CON LA N. Demostración de poca inteligencia",
    },
    {
      letter: "ñ",
      answer: "señal",
      status: 0,
      question:
        "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {
      letter: "o",
      answer: "orco",
      status: 0,
      question:
        "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
      letter: "p",
      answer: "protoss",
      status: 0,
      question:
        "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },
    {
      letter: "q",
      answer: "queso",
      status: 0,
      question:
        "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    {
      letter: "s",
      answer: "stackoverflow",
      status: 0,
      question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
    },
    {
      letter: "t",
      answer: "terminator",
      status: 0,
      question:
        "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
      letter: "u",
      answer: "unamuno",
      status: 0,
      question:
        "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
      letter: "v",
      answer: "vikingos",
      status: 0,
      question:
        "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
      letter: "w",
      answer: "sandwich",
      status: 0,
      question:
        "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
    },
    {
      letter: "x",
      answer: "botox",
      status: 0,
      question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    },
    {
      letter: "y",
      answer: "peyote",
      status: 0,
      question:
        "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
      letter: "z",
      answer: "zen",
      status: 0,
      question:
        "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },
  ];
  let oldUser;
  
let defineUser = () =>{
    person = prompt("Introduce tu nombre: ");
    oldUser= users.findIndex((x) => x.user===person)
    if(users[oldUser] === undefined){
      
      users.unshift(new User(person, 0));
    }
};
let corrects;
let failed;
let pasapalabra;
let firstRound=()=>{
    for (i=0;i<questions.length;i++){
        Answer= prompt(questions[i].question);
        Answer.toLowerCase();
            
            if( Answer===null){
                i=100
                alert("Has acertado " + corrects.length + " respuestas! pero no has terminado el juego, por lo que no puedes entrar en el ranking :(          BYE!")
            }else if(Answer===questions[i].answer){
                questions[i].status=1
                
            }else if (Answer==="pasapalabra"){
                questions[i].status=2
            }else if (Answer!=questions[i].answer){
                questions[i].status=3
            }   
        }
    
            failed = questions.filter(comparedAnswer => comparedAnswer.status === 3)
            pasapalabra = questions.filter(comparedAnswer => comparedAnswer.status === 2)
            corrects = questions.filter(comparedAnswer => comparedAnswer.status === 1)
            
}
let pasapalabraBucle=()=>{
    do{
        for(j=0; j<pasapalabra.length; j++){
            Answer= prompt(pasapalabra[j].question);
            Answer.toLowerCase();

            if( Answer===null){
                i=100
                alert("Has acertado " + corrects.length + " respuestas! pero no has terminado el juego, por lo que no puedes entrar en el ranking :(          BYE!")
            }else if(Answer===pasapalabra[j].answer){
                pasapalabra[j].status=1
                corrects.push(pasapalabra[j])
                delete pasapalabra[j]
                
            }else if (Answer==="pasapalabra"){
                pasapalabra[j].status=2
            }else if (Answer!=pasapalabra[j].answer){
                pasapalabra[j].status=3
                failed.push(pasapalabra[j])
                delete pasapalabra[j]
                
            }   


        }
       pasapalabra = pasapalabra.filter(comparedAnswer => comparedAnswer.status === 2)
    }
    while(pasapalabra.length>0)
}
let ranking;
let end=()=>{
    

    alert("Has acertado " + corrects.length + " respuestas!")
    ranking=confirm("¿quieres ver tu posición en el ranking?")
    
        if(ranking===true){
            users.sort(function (a,b){return b.points-a.points});

            for(k=0;k<users.length;k++){ 
                if(users[k].user === person){
                    
                    users[k].points = users[k].points+corrects.length

                }
            console.log(users[k].user+ " tiene " + users[k].points + " respuestas acertadas!")
            }
            console.log("--------------------------------------------------------")
        }else{
            alert("BYE!")
        }
    
    again=confirm("¿quieres jugar de nuevo?");
        if(again===false){
            alert("BYE!")
        }else{
            do{
                game()
            }while(again===true)
        }
       
       

}
let game =()=>{
    if (start=== true){
        
        defineUser()
        firstRound()
        pasapalabraBucle()
        end()
        
    
    }else{
        alert("BYE!")
    };
}
game()