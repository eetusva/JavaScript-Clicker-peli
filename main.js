  let yhteensa=0;
  let klikkauksenMaara=1;   
  let pallomaara=0;
  let palloaSEK=0;
  let palloPois=5000;
  let klikmaara=0;
  let aika=1000;
  let sekuntikello=setInterval(lisaaPallo,aika);
  let tausta2kello;
  let tausta3kello;
  let tausta4kello;
  let tausta5kello;
  let tausta6kello;
  let tausta7kello;
  const painikkeetID=["#hinta1","#hinta2","#hinta3","#hinta4","#hinta5","#hinta6","#hinta7","#hinta8","#hinta9","#hinta10","#hinta11","#hinta12"];
  const hinnat=[1,2,3,4,5,6,7,8,9,10,11,12]; 
  const alkuhinnat=[1,2,3,4,5,6,7,8,9,10,11,12];
  const alapalkkiId=["#tekija","#kone","#tehdas","#kaivos","#meri","#planeetta"];
  const alapalkki=[0,0,0,0,0,0]
  const painikkeet= ["#eka","#toka","#kolmas","#neljas","#viides","#kuudes","#seiska","#kasi","#ysi","#kymppi","#ykstoista","#kakstoista"];
// klikkaus pallosta
document.querySelector(".pallo").addEventListener("mouseup",(event) => {
   klikkaus();
   numero();
})  
function klikkaus(){  
   yhteensa=yhteensa+klikkauksenMaara;   
   setTimeout(tausta,500)
}
function ekataso(){  
   klikkauksenMaara=klikkauksenMaara+1
   yhteensa=yhteensa-hinnat[0]; 
   hinnat[0]=hinnat[0]*2  
      }
function tokataso(){    
   klikkauksenMaara=klikkauksenMaara+10
   yhteensa=yhteensa-hinnat[1];
   hinnat[1]=hinnat[1]*2
   }
function kolmastaso(){    
   klikkauksenMaara=klikkauksenMaara+25
   yhteensa=yhteensa-hinnat[2];
   hinnat[2]=hinnat[2]*2
  }
function neljastaso(){       
      klikkauksenMaara=klikkauksenMaara+100
      yhteensa=yhteensa-hinnat[3];
      hinnat[3]=hinnat[3]*2         
   }
function viidestaso(){     
   klikkauksenMaara=klikkauksenMaara+500
   yhteensa=yhteensa-hinnat[4];
   hinnat[4]=hinnat[4]*2         
   }   
function kuudestaso(){   
   klikkauksenMaara=klikkauksenMaara+1000
   yhteensa=yhteensa-hinnat[5];
   hinnat[5]=hinnat[5]*2 
   }
function taso1(){ 
   let lisaa=0.1;      
   pallomaara=laskePallot(lisaa);
   yhteensa=yhteensa-hinnat[6];
   hinnat[6]=hinnat[6]*2 
   alapalkki[0]=alapalkki[0]+1
   tausta2kello=setInterval(tausta2,1000);
   } 
function taso2(){      
   let lisaa=0.3;      
   pallomaara=laskePallot(lisaa);
   yhteensa=yhteensa-hinnat[7];
   hinnat[7]=hinnat[7]*2 
   alapalkki[1]=alapalkki[1]+1;
   tausta3kello=setInterval(tausta3,1000);         
   } 
function taso3(){      
   let lisaa=0.6;      
   pallomaara=laskePallot(lisaa);
   yhteensa=yhteensa-hinnat[8];
   hinnat[8]=hinnat[8]*2 
   alapalkki[2]=alapalkki[2]+1;
   tausta4kello=setInterval(tausta4,1000); 
   }             
function taso4(){      
   let lisaa=1;      
   pallomaara=laskePallot(lisaa);
   yhteensa=yhteensa-hinnat[9];
   hinnat[9]=hinnat[9]*2 
   alapalkki[3]=alapalkki[3]+1 ;
   tausta5kello=setInterval(tausta5,1000);      
} 
function taso5(){      
   let lisaa=1.5;      
   pallomaara=laskePallot(lisaa);
   yhteensa=yhteensa-hinnat[10];
   hinnat[10]=hinnat[10]*2 
   alapalkki[4]=alapalkki[4]+1;
   tausta6kello=setInterval(tausta6,1000);    
} 
function taso6(){      
   let lisaa=2;      
   pallomaara=laskePallot(lisaa);
   yhteensa=yhteensa-hinnat[11];
   hinnat[11]=hinnat[11]*2 
   alapalkki[5]=alapalkki[5]+1 ;
   tausta7kello=setInterval(tausta7,1000);   
} 
paivitys()
function paivitys(){
   requestAnimationFrame(paivitys)
   for(let i=0;i<painikkeetID.length;i++){
      document.querySelector(painikkeetID[i]).innerHTML=(hinnat[i]+" palloa");}
   for(let i=0;i<alapalkki.length;i++){
      document.querySelector(alapalkkiId[i]).innerHTML=(alapalkki[i]);}   
   document.querySelector("#palloja").innerHTML= Math.floor(yhteensa);
   document.querySelector("#perklik").innerHTML=klikkauksenMaara;
   palloaSEK=aika/1000*pallomaara
   document.querySelector("#perS").innerHTML=palloaSEK;
   for(i=0;i<painikkeet.length;i++) 
      if(hinnat[i]<=yhteensa){
         document.querySelector(painikkeet[i]).disabled=false
      }else{
         document.querySelector(painikkeet[i]).disabled=true
      }
} 
function lisaaPallo(){
   yhteensa=yhteensa+pallomaara;    
}
function tausta(){     
   let palloLeft=Math.floor(Math.random()*400)+500+"px";
   let palloTop=Math.floor(Math.random()*100)-100+"px";
   let pallo=document.createElement("div");
   pallo.className="taustapallo";      
   pallo.style.left= palloLeft; 
   pallo.style.top  = palloTop; 
   document.querySelector("#tausta").appendChild(pallo);
   setTimeout(poistaPallo,1400)
  }
function poistaPallo(){
   document.querySelector(".taustapallo").remove(".taustapallo")
}
function poistaPallo2(){
   document.querySelector(".taustapallo2").remove(".taustapallo2")
}
function poistaPallo3(){
   document.querySelector(".taustapallo3").remove(".taustapallo3")
}
function poistaPallo4(){
   document.querySelector(".taustapallo4").remove(".taustapallo4")
}
function poistaPallo5(){
   document.querySelector(".taustapallo5").remove(".taustapallo5")
}
function poistaPallo6(){
   document.querySelector(".taustapallo6").remove(".taustapallo6")
}
function poistaPallo7(){
   document.querySelector(".taustapallo7").remove(".taustapallo7")
}
function tausta2(){     
   let palloLeft=Math.floor(Math.random()*1100)+"px";
   let palloTop=Math.floor(Math.random()*100)+"px";
   let pallo=document.createElement("div");
   pallo.className="taustapallo2";      
   pallo.style.left= palloLeft; 
   pallo.style.top  = palloTop;   
   document.querySelector("#tausta").appendChild(pallo);   
   setTimeout(poistaPallo2,1400)
}
function tausta3(){     
   let palloLeft=Math.floor(Math.random()*1100)+"px";
   let palloTop=Math.floor(Math.random()*100)+"px";
   let pallo=document.createElement("div");
   pallo.className="taustapallo3";      
   pallo.style.left= palloLeft; 
   pallo.style.top  = palloTop;   
   document.querySelector("#tausta").appendChild(pallo);   
   setTimeout(poistaPallo3,1400)
}
function tausta4(){     
   let palloLeft=Math.floor(Math.random()*1100)+"px";
   let palloTop=Math.floor(Math.random()*100)+"px";
   let pallo=document.createElement("div");
   pallo.className="taustapallo4";      
   pallo.style.left= palloLeft; 
   pallo.style.top  = palloTop;   
   document.querySelector("#tausta").appendChild(pallo);   
   setTimeout(poistaPallo4,1400)
}
function tausta5(){     
   let palloLeft=Math.floor(Math.random()*1100)+"px";
   let palloTop=Math.floor(Math.random()*100)+"px";
   let pallo=document.createElement("div");
   pallo.className="taustapallo5";      
   pallo.style.left= palloLeft; 
   pallo.style.top  = palloTop;   
   document.querySelector("#tausta").appendChild(pallo);   
   setTimeout(poistaPallo5,1400)
}
function tausta6(){     
   let palloLeft=Math.floor(Math.random()*1100)+"px";
   let palloTop=Math.floor(Math.random()*100)+"px";
   let pallo=document.createElement("div");
   pallo.className="taustapallo6";      
   pallo.style.left= palloLeft; 
   pallo.style.top  = palloTop;   
   document.querySelector("#tausta").appendChild(pallo);   
   setTimeout(poistaPallo6,1400)
}
function tausta7(){     
   let palloLeft=Math.floor(Math.random()*1100)+"px";
   let palloTop=Math.floor(Math.random()*100)+"px";
   let pallo=document.createElement("div");
   pallo.className="taustapallo7";      
   pallo.style.left= palloLeft; 
   pallo.style.top  = palloTop;   
   document.querySelector("#tausta").appendChild(pallo);   
   setTimeout(poistaPallo7,1400)
}
function laskePallot(a){
   let luku= Math.round((pallomaara+a)*100)
   return luku/100;
}
function lopeta(){
window.location.reload();
}
function numero(){
   let num=document.createElement("div");
   num.className="numeroanim"; 
    document.querySelector("#numero").appendChild(num); 
    num.style.top=100;
    document.querySelector(".numeroanim").innerHTML="+"+klikkauksenMaara;
    setTimeout(poistanumero,300)
}
function poistanumero(){
   document.querySelector(".numeroanim").remove(".numeroanim")
}





