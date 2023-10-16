
document.addEventListener("DOMContentLoaded",function data(){
    let dat=new Date(2023,8,15).toLocaleDateString('pt-BR');
document.getElementById('hojedia').textContent=dat;
var dat1=dat;
localStorage.setItem('data1',dat1);
});


document.addEventListener("DOMContentLoaded",function data2(){
let dat=new Date().toLocaleString('pt-br',{day:'2-digit',month:"2-digit",year:"numeric"});
document.getElementById('d2').textContent=dat;
var dat2=dat;
localStorage.setItem('data2',dat2)
});

document.addEventListener("DOMContentLoaded",function data3(){
    let dat=new Date(2023,8,18).toLocaleDateString('pt-br');
    document.getElementById('d3').textContent=dat;
    var dat3=dat;
    localStorage.setItem('data3',dat3)
    });

    document.addEventListener("DOMContentLoaded",function data4(){
        let dat=new Date().toLocaleString('pt-br',{day:'2-digit',month:"2-digit",year:"numeric"});
        document.getElementById('d4').textContent=dat;
        var dat4=dat;
        localStorage.setItem('data4',dat4)
        });


        var clicks=0;
        var clicks2=0;
        var clicks3=0;
        var clicks4=0;
       document.addEventListener('DOMContentLoaded',function clicar(){
           
        if(localStorage.getItem('contador1')){
            clicks=localStorage.getItem('contador1');
        }


        let card=document.querySelector('.visualização1');
           let display=document.getElementById('display1');
           display.textContent=clicks;
        card.addEventListener('click',function clicar(){
        clicks++;   
         display.textContent=clicks;
    localStorage.setItem('contador1',clicks);
    localStorage.setItem('svg','.visualização1');
    localStorage.removeItem('menu');
    window.location.href="http://127.0.0.1:5501/pagina2.html";    

});
    
 
   
});

        document.addEventListener('DOMContentLoaded',function clicar2(){
            if(localStorage.getItem('contador2')){
             clicks2=localStorage.getItem('contador2')
            }
            
            
            
            let card2=document.querySelector('.visualização2');
            let display2=document.getElementById('display2');
            display2.textContent=clicks2;   
            card2.addEventListener('click',function clicar2(){;
            clicks2++;
            display2.textContent=clicks2;        
            localStorage.setItem('contador2',clicks2);
            localStorage.setItem('svg','.visualização2');
            localStorage.removeItem('menu');
            window.location.href="http://127.0.0.1:5501/pagina2.html";
        
        });
    })
        
    document.addEventListener('DOMContentLoaded',function clicar3(){
    if(localStorage.getItem('contador3')){
clicks3=localStorage.getItem('contador3')
    }  


   
   let card3=document.querySelector('.visualização3');
   let display3=document.getElementById('display3');
   display3.textContent=clicks3;
   card3.addEventListener('click',function clicar3(){
    clicks3++;
    display3.textContent=clicks3;
   localStorage.setItem('contador3',clicks3);
   localStorage.setItem('svg','.visualização3');
   localStorage.removeItem('menu');
   window.location.href="http://127.0.0.1:5501/pagina2.html";
});

});

    document.addEventListener('DOMContentLoaded', function clicar4(){
   if(localStorage.getItem('contador4')){
   clicks4=localStorage.getItem('contador4')
   }
   
   let card4=document.querySelector('.visualização4');
   let display4=document.getElementById('display4');
   display4.textContent=clicks4;
   card4.addEventListener('click',function clicar4(){
   clicks4++;
   display4.textContent=clicks4;
    localStorage.setItem('contador4',clicks4);
    localStorage.setItem('svg','.visualização4');
    localStorage.removeItem('menu');
    window.location.href="http://127.0.0.1:5501/pagina2.html";
});

});
    


document.addEventListener('DOMContentLoaded',function(){
let menuPro=document.querySelector('.link2');
let menuIA=document.querySelector('.link3');
let menuMedi=document.querySelector('.link4');
let menuAmbi=document.querySelector('.link5');


menuPro.addEventListener('click',function(){
localStorage.setItem('menu','.link2');
localStorage.removeItem('svg');
window.location.href="http://127.0.0.1:5501/pagina2.html";
});

menuIA.addEventListener('click',function(){
    localStorage.setItem('menu','.link3');
    localStorage.removeItem('svg');
    window.location.href="http://127.0.0.1:5501/pagina2.html";

})
menuMedi.addEventListener('click',function(){
    localStorage.setItem('menu','.link4');
    localStorage.removeItem('svg');
    window.location.href="http://127.0.0.1:5501/pagina2.html";

})

menuAmbi.addEventListener('click',function(){
    localStorage.setItem('menu','.link5');
    localStorage.removeItem('svg');
    window.location.href="http://127.0.0.1:5501/pagina2.html";
})
});

  



 
