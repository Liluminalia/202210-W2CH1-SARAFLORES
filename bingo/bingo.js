let gamer;
let bingo =()=>{
    let points = 0;
    
    let user = () =>{
        gamer= prompt("Introduce tu nombre: ")
        confirm("Hola! "+ gamer + ", tienes " + points + " puntos.")
    };
    let end = () =>{
        debugger
        confirm("BYE!")
    }
    let randomNumber;
    let listOfRandomNumbers =[]
    const Random = () => {
        
    for(k=1; k<100;k++){
        listOfRandomNumbers.push(k)
    }
    listOfRandomNumbers = listOfRandomNumbers.sort(function() {return Math.random() - 0.5});
    randomNumber = listOfRandomNumbers[0]
    };
    let numbersOfBingoCard;
    const randomBingoCard = () =>{
        numbersOfBingoCard=[]
        for (i=1;i<100;i++){
           numbersOfBingoCard.push(i)}
        numbersOfBingoCard = numbersOfBingoCard.sort(function() {return Math.random() - 0.5});
        numbersOfBingoCard = numbersOfBingoCard.slice(84);
    };
    let showBingoCard = () =>{
        console.log("------------------------------------------------------------")
        
        console.log( numbersOfBingoCard.slice(0, 5).join("|"));
        console.log( numbersOfBingoCard.slice(5, 10).join("|"));
        console.log( numbersOfBingoCard.slice(10, 15).join("|"));
        console.log("------------------------------------------------------------")
       
    };
    let likeBingoCard;
    let bingoCard = () =>{
        
        randomBingoCard();
        showBingoCard();
        debugger
        likeBingoCard= confirm("¿Te gusta este cartón " +gamer+"? ")
        if(likeBingoCard===false){
        do{
            bingoCard()
        }while(likeBingoCard=== false);
        }else{likeBingoCard=true}
    }
    let conf;
    let turn = () =>{
       
        
        confirm("El " + randomNumber)
        if (numbersOfBingoCard.includes(randomNumber)){
            for(j=0; j<numbersOfBingoCard.length; j++){
                if(numbersOfBingoCard[j]===randomNumber){
                    numbersOfBingoCard[j] = 0
                }else{}
            }
        }else{}
        showBingoCard()
        lines();
        bingou();
        if(conf===false){
            end()
        }else{conf = confirm("¿Desea continuar?")}
        
        
        
    };
    let lines = (sum1,sum2, sum3) =>{
        sum1=numbersOfBingoCard[0]+numbersOfBingoCard[1]+numbersOfBingoCard[2]+numbersOfBingoCard[3]+numbersOfBingoCard[4];
        sum2=numbersOfBingoCard[5]+numbersOfBingoCard[6]+numbersOfBingoCard[7]+numbersOfBingoCard[8]+numbersOfBingoCard[9];
        sum3=numbersOfBingoCard[10]+numbersOfBingoCard[11]+numbersOfBingoCard[12]+numbersOfBingoCard[13]+numbersOfBingoCard[14];
            if(sum1=== 0){
                numbersOfBingoCard[0]= "X"
                numbersOfBingoCard[1]= "X"
                numbersOfBingoCard[2]= "X"
                numbersOfBingoCard[3]= "X"
                numbersOfBingoCard[4]= "X"

                if((sum2 || sum3) != "XXXXX"){
                    confirm("LINEA!!!!")
                }else{}
            }else {}
        
            if(sum2=== 0){
                numbersOfBingoCard[5]= "X"
                numbersOfBingoCard[6]= "X"
                numbersOfBingoCard[7]= "X"
                numbersOfBingoCard[8]= "X"
                numbersOfBingoCard[9]= "X"
                if((sum1 || sum3) != "XXXXX"){
                    confirm("LINEA!!!!")
                }else{}
            }else{}
        
            if(sum3=== 0){
                numbersOfBingoCard[10]= "X"
                numbersOfBingoCard[11]= "X"
                numbersOfBingoCard[12]= "X"
                numbersOfBingoCard[13]= "X"
                numbersOfBingoCard[14]= "X"
                if((sum1 || sum2) != "XXXXX"){
                    confirm("LINEA!!!!")
                }else{}

            }else {}
        if((sum1||sum2||sum3) === 0){
            confirm("LINEA!!!!")
        }else{}
    }   
    let bingou = (sum4, again) =>{
        sum4=0
        for(p=0; p<numbersOfBingoCard.length; p++){
            sum4+= numbersOfBingoCard[p]}
        if(sum4=== "0XXXXXXXXXXXXXXX"){
            confirm("BINGOOOOOO!!!!")
            again = confirm("Desearia jugar de nuevo?")
            if (again === true){
                bingo()
            }else{
                conf=false
                }
        }else {}
    }
    
    let body = ()=>{
        points= points+100;
        do {
            turn();
            points= points-1   ; 
            listOfRandomNumbers.shift();
            randomNumber = listOfRandomNumbers[0];            
        } while(conf === true)
    }
    user();
    bingoCard();
    Random();
    body();
    }
    bingo();