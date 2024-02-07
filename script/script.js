function calculate(){
    let a = document.getElementById("a").value;
    
    let b = Math.sqrt(a);
    b = b.toFixed(2);
    document.getElementById("root").innerHTML= "The squere root of "+ a + " is : " + b ;
}