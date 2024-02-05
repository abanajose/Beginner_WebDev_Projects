var string="";
var lengthButton=document.querySelectorAll(".button").length;
for(let i=0;i<lengthButton;i++){
    document.querySelectorAll(".button")[i].addEventListener("click",function (){
       var numbers=this.innerHTML;
    try{
       if(numbers == '='){
        string=eval(string);
        document.querySelector('.input').value=string;
       }
       else if(numbers == 'C'){
        string="";
        document.querySelector('.input').value=string;
       }
       else{
       string+=numbers;
       document.querySelector('.input').value=string;
      }
    }catch(error){
        console.log("ERROR",error);
        document.querySelector('.input').value="Error";
    }
    });
}