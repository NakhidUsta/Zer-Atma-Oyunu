var zarBir = document.querySelector(".oyuncuBir").children[3];
var sallabir = document.querySelector(".oyuncuBir").children[6];
var skorbir =document.querySelector(".a1");

var zarIki = document.querySelector(".oyuncuIki").children[3];
var sallaiki = document.querySelector(".oyuncuIki").children[6];
var skoriki =document.querySelector(".a2");
sallaiki.disabled = true;
var sira = 0 ;
var rdn = 0 ;
var skrbir = 0 ;
var skriki = 0 ;
var oyunbitti = false ;

function Salla(oyuncu){
    if(!oyunbitti)
    {
        sira = oyuncu ; 
  zarSalla= setInterval(zar,50)
    }
  
}

var zar = function()
 {
    
    rdn =Math.ceil(Math.random()*6);
    if(sira===1)
    {
        sallabir.disabled =true ;
        switch (rdn) {
        
            case 1:
            zarBir.src="Zer/zer"+1+".png"
            break;
            case 2:
                zarBir.src="Zer/zer"+2+".png"
            break;
            case 3:
                zarBir.src="Zer/zer"+3+".png"
            break;
            case 4:
                zarBir.src="Zer/zer"+4+".png"
            break;
            case 5:
                zarBir.src="Zer/zer"+5+".png"
            break;
            case 6:
                zarBir.src="Zer/zer"+6+".png"
            break;
    
                  }
    }
    if(sira===2)
    {
        sallaiki.disabled= true;
        switch (rdn) {
        
            case 1:
            zarIki.src="Zer/zer"+1+".png"
            break;
            case 2:
                zarIki.src="Zer/zer"+2+".png"
            break;
            case 3:
                zarIki.src="Zer/zer"+3+".png"
            break;
            case 4:
                zarIki.src="Zer/zer"+4+".png"
            break;
            case 5:
                zarIki.src="Zer/zer"+5+".png"
            break;
            case 6:
                zarIki.src="Zer/zer"+6+".png"
            break;
    
                   }
    }
   
}
function At ()
{
clearInterval(zarSalla);
if(sira===1)
{
    skrbir+= rdn ;
    skorbir.innerHTML=skrbir;
    if(skrbir>=50)
    {
        oyunbitti = true;
        alert("BIR NOMRE QAZANDI");
    }
    else 
    {
        sallaiki.disabled =false;
    }
   
  
}
if(sira===2)
{
    skriki+=rdn;
    skoriki.innerHTML=skriki;
    if(
        skriki>=50
    )
    {
        oyunbitti = true ;
        alert("IKI NOMRE QAZANDI");
    }
    else 
    {
        sallabir.disabled= false ;
    }
}
}