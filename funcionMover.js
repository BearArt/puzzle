function mover(NoBoton) {
    b1=document.getElementById("btn1");
    b2=document.getElementById("btn2");
    b3=document.getElementById("btn3");
    b4=document.getElementById("btn4");
    b5=document.getElementById("btn5");
    b6=document.getElementById("btn6");
    b7=document.getElementById("btn7");
    b8=document.getElementById("btn8");
    b9=document.getElementById("btn9");
    switch (NoBoton) {
        case "b1":
            if (b2.value=="") 
            {
               b2.value=b1.value;
               b1.value=""; 
            }
            if (b4.value=="")
            {
                b4.value=b1.value;
                b1.value="";
   
            }
            break;
        case "b2":
            if (b1.value=="") 
            {
               b1.value=b2.value;
               b2.value=""; 
            }
            if (b3.value=="") 
            {
               b3.value=b2.value;
               b2.value=""; 
            }
            if (b5.value=="") 
            {
               b5.value=b2.value;
               b2.value=""; 
            }
            
            break;
        case "b3":
            if (b2.value=="") 
            {
               b2.value=b3.value;
               b3.value=""; 
            }
            if (b6.value=="") 
            {
               b6.value=b3.value;
               b3.value=""; 
            }
          
            break;
        case "b4":
            if (b1.value=="") 
            {
               b1.value=b4.value;
               b4.value=""; 
            }
            if (b7.value=="") 
            {
               b7.value=b4.value;
               b4.value=""; 
            }
            if (b5.value=="") 
            {
               b5.value=b4.value;
               b4.value=""; 
            }
            
            break;
        case "b5":
            if (b2.value=="") 
            {
               b2.value=b5.value;
               b5.value=""; 
            }
            if (b4.value=="") 
            {
               b4.value=b5.value;
               b5.value=""; 
            }
            if (b6.value=="") 
            {
               b6.value=b5.value;
               b5.value=""; 
            }
            if (b8.value=="") 
            {
               b8.value=b5.value;
               b5.value=""; 
            }
            break;
        case "b6":
            if (b3.value=="") 
            {
               b3.value=b6.value;
               b6.value=""; 
            }
            if (b5.value=="") 
            {
               b5.value=b6.value;
               b6.value=""; 
            }
            if (b9.value=="") 
            {
               b9.value=b6.value;
               b6.value=""; 
            }
            break;
            case "b7":
                if (b4.value=="") 
                {
                   b4.value=b7.value;
                   b7.value=""; 
                }
                if (b8.value=="") 
                {
                   b8.value=b7.value;
                   b7.value=""; 
                }
            
            
            break;
        case "b8":
            if (b7.value=="") 
            {
               b7.value=b8.value;
               b8.value=""; 
            }
            if (b5.value=="") 
            {
               b5.value=b8.value;
               b8.value=""; 
            }
            if (b9.value=="") 
            {
               b9.value=b8.value;
               b8.value=""; 
            }
    
            break;
        case "b9":
            if (b8.value=="") 
            {
               b8.value=b9.value;
               b9.value=""; 
            }
            if (b6.value=="") 
            {
               b6.value=b9.value;
               b9.value=""; 
            }
           
            ganar();
            break;
           
        default:
            break;
    }
}
function ganar() {
   b1=document.getElementById("btn1");
   b2=document.getElementById("btn2");
   b3=document.getElementById("btn3");
   b4=document.getElementById("btn4");
   b5=document.getElementById("btn5");
   b6=document.getElementById("btn6");
   b7=document.getElementById("btn7");
   b8=document.getElementById("btn8");
   b9=document.getElementById("btn9");

if (b1.value =="1" 
&& b2.value=="2" 
&& b3.value=="3" 
&&  b4.value=="4"
&& b5.value=="5" 
&&  b6.value=="6"
&&  b7.value=="7"
&&  b8.value=="8"
&&  b9.value=="")
{
     alert("Lo haz completado!!!")  
}
    
}

function reiniciar() {
   b1=document.getElementById("btn1");
   b2=document.getElementById("btn2");
   b3=document.getElementById("btn3");
   b4=document.getElementById("btn4");
   b5=document.getElementById("btn5");
   b6=document.getElementById("btn6");
   b7=document.getElementById("btn7");
   b8=document.getElementById("btn8");
   b9=document.getElementById("btn9");
   b1.value=3;
   b2.value=4;
   b3.value=1;
   b4.value=2;
   b5.value=5;
   b6.value=7;
   b7.value=8;
   b8.value=6;
   b9.value="";
   
 }
 