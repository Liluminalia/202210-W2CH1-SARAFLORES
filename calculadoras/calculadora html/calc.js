function setResult(value) {
    document.getElementById('result').innerHTML = value;
}
function getResult() {
    return(document.getElementById('result').innerHTML);
}
function add(key) { 
    var result = getResult();
    
    if(isNaN(result) && isNaN(key)) setResult(result.substring(0,result.length-1) + key);
    else if (result !=0 || isNaN(key)) setResult(result + key);
    else setResult(key);
}
function calc() {
    var percent=getResult();
    let all;
    if(percent.includes("%")){
        all= percent.replace("%","/100*");
        var result = eval(all); 
        setResult(result);
    } else{
    var result = eval(percent); 
    setResult(result);}
}
function sign(){
    var result = eval(getResult()); 
    setResult(result*(-1));
};
function del() { 
    setResult(0);
}
