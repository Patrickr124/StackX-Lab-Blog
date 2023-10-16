

 function svg () {
    
    let svg=localStorage.getItem('svg'); 
    
    let svgtexto1=document.getElementById('svgtexto1');
    let svgtexto2=document.getElementById('svgtexto2');
    let svgtexto3=document.getElementById('svgtexto3');
    let svgtexto4=document.getElementById('svgtexto4');
    
    let img1=document.querySelector('.imagem1');
    let img2=document.querySelector('.imagem2');
    let img3=document.querySelector('.imagem3');
    let img4=document.querySelector('.imagem4');
   
    
    let data=document.querySelector('.date');
    let caractere=document.querySelector('.caracter');
    let contador=document.querySelector('.visuSvg');
   
    let views=document.querySelector('.viewsSvg');

    var card=document.querySelector('.conteudoCard');
    


       if(svg===".visualização1"){
    svgtexto1.innerHTML='<strong>A Arte da Programação</strong><br><br>'+
    'A programação é uma habilidade essencial no mundo moderno, uma forma de arte que permite a criação de software, sites, jogos, aplicativos e muito mais. Vamos explorar o fascinante mundo da programação.<br><br>'+
    
    '<strong>O Que é Programação?</strong><br><br>'+
    'Programação é o processo de criar um conjunto de instruções que dizem a um computador como realizar uma tarefa. Tudo o que você faz em um computador, desde navegar na internet até jogar videogames ou usar um aplicativo, é possível graças à programação.<br><br>'+
    
    '<strong>Linguagens de Programação</strong><br><br>'+
    'Existem muitas linguagens de programação, cada uma com suas próprias forças, fraquezas e usos. Algumas das mais populares incluem Python, conhecida por sua simplicidade e versatilidade; JavaScript, a linguagem padrão para desenvolvimento web; e C++, usada para criar software de alto desempenho.<br><br>'+
    
    '<strong>Por Que Aprender a Programar?</strong><br><br>'+
    'Aprender a programar pode abrir muitas portas. Não só é uma habilidade valiosa no mercado de trabalho, mas também permite que você crie suas próprias ferramentas e soluções. Além disso, a programação pode ser uma atividade gratificante e criativa.<br><br>'+
    
    '<strong>Como Começar</strong>?<br><br>'+
    'Existem muitos recursos disponíveis para quem quer aprender a programar. Muitos sites oferecem cursos gratuitos ou pagos em várias linguagens de programação. Além disso, existem muitos livros e tutoriais online disponíveis.<br><br>'+
    
    '<strong>Conclusão</strong><br><br>'+
    'A programação é uma habilidade valiosa e uma forma de arte em si. Seja você um aspirante a desenvolvedor ou alguém que apenas quer entender melhor como a tecnologia funciona, aprender a programar pode ser uma jornada gratificante e empolgante.<br><br>',
    img1.src='Imagens/imagem  programação pagina2.jpg';
    
    data.innerHTML=localStorage.getItem('data1');
    
    caractere.innerHTML='Código';

    contador.innerHTML=localStorage.getItem('contador1');    
    card.style.display='none';
    views.innerHTML='Visualizações:';
document.querySelector('.imagem2').style.display='none';
document.querySelector('.imagem3').style.display='none';
document.querySelector('.imagem4').style.display='none';
}
    
    
    else if(svg===".visualização2"){
    svgtexto2.innerHTML='<strong>Desvendando a Inteligência Artificial</strong><br><br>'+
            
    'A Inteligência Artificial (IA) é uma das tecnologias mais revolucionárias do nosso tempo, prometendo transformar muitos aspectos da nossa vida, desde como trabalhamos até como jogamos. Mas o que exatamente é IA e por que ela é tão importante?<br><br>'+
    
     '<strong>O Que é Inteligência Artificial?</strong><br><br>'+
    
    'A IA é uma área da ciência da computação que se concentra na criação de sistemas capazes de realizar tarefas que normalmente exigem inteligência humana. Isso inclui coisas como reconhecimento de voz, aprendizado, planejamento e percepção.<br><br>'+
    
     '<strong>Tipos de IA</strong><br><br>'+
    
    'Existem dois tipos principais de IA: IA fraca e IA forte. A IA fraca é projetada para realizar uma tarefa específica, como recomendar músicas em um serviço de streaming. Já a IA forte, também conhecida como IA geral, é uma forma de IA que tem a capacidade de entender, aprender e aplicar o conhecimento a diferentes contextos, muito parecido com um ser humano.<br><br>'+
    
     '<strong>Aplicações da IA</strong><br><br>'+
    
    'A IA tem uma ampla gama de aplicações. Ela está sendo usada para melhorar os cuidados de saúde, tornando os diagnósticos mais precisos e os tratamentos mais eficazes. No campo dos negócios, a IA está ajudando as empresas a tomar decisões mais informadas e a prever tendências futuras. E no mundo do entretenimento, a IA está criando experiências de jogo mais imersivas e personalizadas.<br><br>'+
    
     '<strong>O Futuro da IA</strong><br><br>'+
    
    'O futuro da IA é incrivelmente emocionante. Estamos apenas começando a arranhar a superfície do que é possível. Com o desenvolvimento contínuo da tecnologia e o aumento da computação em nuvem e dos dados disponíveis, podemos esperar ver avanços ainda maiores na IA nos próximos anos.<br><br>'+
    
    'Em resumo, a IA tem o potencial de transformar o mundo de maneiras que mal podemos imaginar. Estamos ansiosos para ver o que o futuro nos reserva!',
    img2.src='Imagens/imagem IA pagina2.webp';
    data.innerHTML=localStorage.getItem('data2');
    caractere.innerHTML='IA';
    contador.innerHTML=localStorage.getItem('contador2');
    card.style.display='none';
    views.innerHTML='Visualizações:';
    document.querySelector('.imagem1').style.display='none';
    document.querySelector('.imagem3').style.display='none';
    document.querySelector('.imagem4').style.display='none';
}
    
    else if(svg===".visualização3"){
    svgtexto3.innerHTML='<strong>A Revolução da Tecnologia Médica</strong><br><br>'+
    'A tecnologia médica está transformando a maneira como cuidamos da nossa saúde. Desde diagnósticos mais precisos até tratamentos mais eficazes, a tecnologia está no centro de quase todas as facetas da medicina moderna.<br><br>'+
    
    '<strong>Diagnósticos Melhorados</strong><br><br>'+
    'Os avanços na tecnologia de imagem médica, como a ressonância magnética (MRI) e a tomografia computadorizada (CT), permitem que os médicos visualizem o corpo humano de maneiras que antes eram impossíveis. Isso permite diagnósticos mais precisos e intervenções mais cedo em muitas doenças.<br><br>'+
    
    '<strong>Tratamentos Inovadores</strong><br><br>'+
    'A tecnologia também está revolucionando o tratamento de doenças. Por exemplo, a terapia genética, que usa a tecnologia para modificar os genes de um paciente, tem o potencial de curar doenças genéticas. Da mesma forma, a imunoterapia usa o próprio sistema imunológico do paciente para combater o câncer.<br><br>'+
    
    '<strong>Telemedicina</strong><br><br>'+
    'A telemedicina permite que pacientes e médicos se conectem virtualmente, tornando o atendimento médico mais acessível para aqueles em áreas rurais ou para aqueles que são fisicamente incapazes de viajar. Além disso, aplicativos de saúde e wearables permitem que os indivíduos monitorem sua própria saúde em tempo real.<br><br>'+
    
    '<strong>O Futuro da Tecnologia Médica</strong><br><br>'+
    'O futuro da tecnologia médica é brilhante. Com o desenvolvimento contínuo de inteligência artificial e aprendizado de máquina, podemos esperar diagnósticos ainda mais precisos e tratamentos personalizados. Além disso, à medida que exploramos mais o genoma humano, é provável que vejamos avanços ainda maiores na terapia genética.<br><br>'+
    
    'Em resumo, a tecnologia médica está redefinindo os limites do possível na medicina. Estamos vivendo em uma era emocionante de descoberta e inovação médica, e mal podemos esperar para ver o que o futuro nos reserva.',

    img3.src='Imagens/imagem tecnologia médica pagina2.jpg';
    data.innerHTML=localStorage.getItem('data3');
    caractere.innerHTML='Medicina';
    contador.innerHTML=localStorage.getItem('contador3');
    card.style.display='none';
    views.innerHTML='Visualizações:';
    document.querySelector('.imagem1').style.display='none';
    document.querySelector('.imagem2').style.display='none';
    document.querySelector('.imagem4').style.display='none';
}
    
   else  if(svg===".visualização4"){
        svgtexto4.innerHTML='<strong>A Ascensão da Tecnologia Ambiental</strong><br><br>'+
        'A tecnologia ambiental, também conhecida como tecnologia verde, está desempenhando um papel cada vez mais importante na nossa luta contra as mudanças climáticas e na promoção de um futuro sustentável.<br><br>'+
        
        '<strong>Energia Renovável</strong><br><br>'+
        'A tecnologia tem sido fundamental para o avanço das energias renováveis. Painéis solares e turbinas eólicas estão se tornando mais eficientes e acessíveis, permitindo que mais pessoas e empresas aproveitem essas fontes de energia limpa.<br><br>'+
        
        '<strong>Eficiência Energética</strong><br><br>'+
        'A tecnologia também está ajudando a tornar nossos dispositivos e edifícios mais eficientes em termos energéticos. Desde lâmpadas LED até eletrodomésticos de baixo consumo de energia e edifícios inteligentes, estamos reduzindo nosso consumo de energia e nossa pegada de carbono.<br><br>'+
        
        '<strong>Tecnologia de Reciclagem</strong><br><br>'+
        'As inovações na tecnologia de reciclagem estão permitindo que reciclemos mais materiais e reduzamos a quantidade de resíduos que enviamos para os aterros sanitários. Além disso, a tecnologia está ajudando a transformar resíduos em recursos valiosos, através do reaproveitamento de materiais ou da conversão de resíduos em energia.<br><br>'+
        
        '<strong>Agricultura Sustentável</strong><br><br>'+
        'A tecnologia está transformando a agricultura, tornando-a mais sustentável. Desde drones que monitoram a saúde das plantações até sistemas de irrigação inteligentes que economizam água, a tecnologia está ajudando a alimentar o mundo de uma maneira mais sustentável.<br><br>'+
        
        '<strong>O Futuro da Tecnologia Ambiental</strong><br><br>'+
        'O futuro da tecnologia ambiental é promissor. Com o desenvolvimento contínuo de novas inovações, podemos esperar ver ainda mais progresso na nossa luta contra as mudanças climáticas e na promoção da sustentabilidade.<br><br>'+
        
        'Em resumo, a tecnologia ambiental está desempenhando um papel crucial na proteção do nosso planeta para as gerações futuras. Estamos vivendo em uma era emocionante de inovação ambiental, e mal podemos esperar para ver o que o futuro nos reserva.',

    img4.src='Imagens/imagem tecnologia ambiental pagina2.jpg';
   data.innerHTML=localStorage.getItem('data4');
   caractere.innerHTML='Ambiental';
   contador.innerHTML=localStorage.getItem('contador4');
   card.style.display='none';
   views.innerHTML='Visualizações:';
   document.querySelector('.imagem1').style.display='none';
   document.querySelector('.imagem2').style.display='none';
   document.querySelector('.imagem3').style.display='none';
}
     
};


document.addEventListener('DOMContentLoaded',svg);
document.addEventListener('DOMContentLoaded',menu);
    
    
    
function menu(){
        let menu=localStorage.getItem('menu');
        let sinopsePro=document.getElementById('textopro'); 
        let sinopseIA=document.getElementById('texto2'); 
        let sinopseM=document.getElementById('texto3'); 
        let sinopseA=document.getElementById('texto4');
        let imagem1=document.getElementById('img'); 
        let imagem2=document.getElementById('img2'); 
        let imagem3=document.getElementById('img3'); 
        let imagem4=document.getElementById('img4');
    
        
        let data=document.querySelector('.date2');
        let data2=document.querySelector('.dat');
        let data3=document.querySelector('.date3');
        let data4=document.querySelector('.date4');

        let caractere=document.querySelector('.caractere2');
        let caractere2=document.querySelector('.caractere');
        let caractere3=document.querySelector('.caractere3');
        let caractere4=document.querySelector('.caractere4');
        let contador=document.querySelector('.visu2');
        let contador2=document.querySelector('.visu');
        let contador3=document.querySelector('.visu3');
        let contador4=document.querySelector('.visu4');
        
        
        let categoria=document.querySelector('.categoria');
        let categoria2=document.querySelector('.categoria2');
        let categoria3=document.querySelector('.categoria3');
        let categoria4=document.querySelector('.categoria4');
        
        let views2=document.querySelector('.views2');
        let views=document.querySelector('.views');
        let views3=document.querySelector('.views3');
        let views4=document.querySelector('.views4');
        
    
        

        if(menu==='.link2'){ 
    sinopsePro.innerHTML='Aprender a programar pode abrir novas oportunidades de carreira, de negócios e de lazer. Além disso, a programação pode ser divertida e gratificante, pois permite criar coisas incríveis com o poder da tecnologia.'; 
    let imageUrl ='Imagens/Programação.jpg'; 
     imagem1.src=imageUrl;
     data.innerHTML=localStorage.getItem('data1');
     caractere.innerHTML='Código';
     contador.innerHTML=localStorage.getItem('contador1');
     categoria.innerHTML='Programação';
      views2.innerHTML='Visualizações:';
      document.querySelector('.imagens').style.display='none'
      document.getElementById('img2').style.display='none';
      document.getElementById('img3').style.display='none';
      document.getElementById('img4').style.display='none';

}  else if(menu==='.link3'){ 
        sinopseIA.innerHTML='IA pode trazer benefícios para a sociedade e para a economia, como melhorar a qualidade de vida das pessoas, aumentar a produtividade e a inovação das empresas e dos países, e resolver problemas complexos.'; 
        let imageUrl ='Imagens/IA.jpg'; 
        imagem2.src=imageUrl;
        data2.innerHTML=localStorage.getItem('data2');
        caractere2.innerHTML='IA';
        contador2.innerHTML=localStorage.getItem('contador2');
        categoria2.innerHTML='Inteligência Artificial';
        views.innerHTML='Visualizações:';
        document.getElementById('img').style.display='none';
        document.getElementById('img3').style.display='none';
        document.getElementById('img4').style.display='none';
        document.querySelector('.imagens').style.display='none'
    
    } else if(menu==='.link4'){ 
    sinopseM.innerHTML='tecnologia médica é a aplicação da ciência e da engenharia para melhorar a saúde e o bem-estar das pessoas. A tecnologia médica envolve o desenvolvimento, a produção e o uso de dispositivos, equipamentos, sistemas e softwares.';
    let imageUrl='Imagens/medicina-tecnologia.jpg';    
    imagem3.src=imageUrl;
    data3.innerHTML=localStorage.getItem('data3');
    caractere3.innerHTML='Medicina';
    contador3.innerHTML=localStorage.getItem('contador3');
    categoria3.innerHTML='Tecnologia Médica';
    views3.innerHTML='Visualizações:';
    document.querySelector('.imagens').style.display='none'
    document.getElementById('img').style.display='none';
    document.getElementById('img2').style.display='none';
    document.getElementById('img4').style.display='none';
} 
    
     else if(menu==='.link5'){  
sinopseA.innerHTML='Tecnologia ambiental é usar ciência e engenharia para proteger ou melhorar o meio ambiente. Ela cria e usa dispositivos, equipamentos, sistemas, softwares e serviços que evitam, diminuem ou eliminam a poluição e o desperdício.';
let imageUrl='Imagens/tecnologia ambiental.png';
imagem4.src=imageUrl;
data4.innerHTML=localStorage.getItem('data4');  
caractere4.innerHTML='Ambiental'; 
contador4.innerHTML=localStorage.getItem('contador4');   
categoria4.innerHTML='Tecnologia Ambiental';    
views4.innerHTML='Visualizações:';
document.querySelector('.imagens').style.display='none'
document.getElementById('img').style.display='none';
document.getElementById('img2').style.display='none';
document.getElementById('img3').style.display='none';
    }
}





window.addEventListener('DOMContentLoaded',function(){
let retornarclass=this.document.querySelector('.link1');
retornarclass.addEventListener('click',function retornando(){

document.location.href="http://127.0.0.1:5501/blog.html";

});

})









