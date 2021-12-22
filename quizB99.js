envia=document.getElementById('confirm')

q1=document.getElementsByName('beb')
q2=document.getElementsByName('fil')
q3=document.getElementsByName('num')
res=document.getElementById('res')
none=res.style.display="none"

msg=document.getElementById('msg')

imagem=document.getElementById('imagem')

function calc(){
rosa=0
jake=0
amy=0

    if (q1[0].checked){
        jake+=1
    }
    else if (q1[1].checked){
        rosa+=1
    }
    else{
        amy+=1
    }
    
    
    if (q2[0].checked){
        amy+=1
    }
    else if (q2[1].checked){
        jake+=1
    }
    else{
        rosa+=1
    }
    
    
    if (q3[0].checked){
        rosa+=1
    }
    else if (q3[1].checked){
        amy+=1
    }
    else{
        jake+=1
    }


    if (jake==1 && amy==1 && rosa==1){
        imagem.src='imagens/boyle.jpg'
        msg.innerText='Charles Boyle'
    }
    else if (jake>amy && jake>rosa){
        imagem.src='imagens/jake.jpg'
        msg.innerText='Jake Peralta'
    }
    else if (amy>rosa && amy>jake){
        imagem.src='imagens/amy.jpg'
        msg.innerText='Amy Santiago'
    }
    else if (rosa>jake && rosa>amy){
        imagem.src='imagens/rosa.jpg'
        msg.innerText='Rosa Dias'
    }

    if (true){
       none=res.style.display="block"
    }
}