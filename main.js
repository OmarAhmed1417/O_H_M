
let text=document.querySelectorAll('.text');
text.forEach((word)=>{
    let letters=word.textContent.split(" ");
    // console.log(letter);
    word.textContent="";
    letters.forEach((letter)=>{
        let span=document.createElement('span');
        span.textContent=letter;
        span.className='letter';
        word.append(span);
        // console.log(char+' ');
    });
});
let index=0;
let text_len=text.length-1;
text[index].style.opacity=1;
let changeword=()=>{
    let currenttext=text[index];
    let nexttext=index===text_len? text[0]: text[index+1];
    Array.from(currenttext.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className='letter out';
            // let span2=document.createElement('span');
            // span2.textContent=letter[sum];
    
        },i * 80)
    });
    nexttext.style.opacity=1;
    Array.from(nexttext.children).forEach((letter,i)=>{
        letter.className="letter behind";
        setTimeout(()=>{
            letter.className='letter in';
        },340 + i * 80);
    });
    index= index===text_len ? 0 : index+1;
};
changeword();
setInterval(changeword,3000);
let about_me=document.getElementById('about_me');
let about_content =document.getElementById('about_content');
let hidden=document.querySelectorAll('.hidden');
let animation2=new IntersectionObserver((val)=>{
    val.forEach((val2)=>{
        if(val2.isIntersecting){
            val2.target.classList.add('show')
        }
        else{
            val2.target.classList.remove('show')

        }
    })
})
hidden.forEach((el)=>{
    animation2.observe(el);
})

let hidden2=document.querySelectorAll('.hidden2');
let transform=new IntersectionObserver((val)=>{
    val.forEach((val2)=>{
        if(val2.isIntersecting){
            val2.target.classList.add('show2');
        }
        else{
            val2.target.classList.remove('show2');
        }
    })
})
hidden2.forEach((el)=>{
    transform.observe(el)
})
let skills=document.getElementById('skills');
let html=document.querySelector('.html')
let css=document.querySelector('.css')
let Javascript=document.querySelector('.JavaScript')
let json=document.querySelector('.json')
let block=document.getElementsByClassName('block');
let block1=document.getElementsByClassName('block1');
let block2=document.getElementsByClassName('block2');
let block3=document.getElementsByClassName('block3');
let ans=0;
let rating=document.getElementsByClassName('rating')[0];
let rating1=document.getElementsByClassName('rating1')[0];
let rating2=document.getElementsByClassName('rating2')[0];
let rating3=document.getElementsByClassName('rating3')[0];
let active=document.getElementById('active');






onscroll=function(){
    // console.log(right.className);
    if(skills.className==='hidden2 show2'){
        html.classList.add('ani');
        css.classList.add('ani');
        Javascript.classList.add('ani');
        json.classList.add('ani');
    }
    else{
        html.classList.remove('ani');
        css.classList.remove('ani');
        Javascript.classList.remove('ani');
        json.classList.remove('ani');   
    }
}
skills.onclick=function(){

    for(let i=1;i<100;i++){
        
        rating.innerHTML+="<div class=block id=aniblock></div>";
        block[i].style.transform="rotate("+ 3.6*i+"deg)";
        block[i].style.animationDelay=`${i/40}s`
    } 
    for(let i=1;i<=100;i++){
        rating1.innerHTML+="<div class=block1 id=aniblock></div>";
        block1[i].style.transform="rotate("+ 3.6*i+"deg)";
        block1[i].style.animationDelay=`${i/40}s`
    } 
    for(let i=1;i<=100;i++){
        rating2.innerHTML+="<div class=block2 id=aniblock></div>";
        block2[i].style.transform="rotate("+ 3.6*i+"deg)";
        block2[i].style.animationDelay=`${i/40}s`
    } 
    for(let i=1;i<=100;i++){
        rating3.innerHTML+="<div class=block3 id=aniblock></div>";
        block3[i].style.transform="rotate("+ 3.6*i+"deg)";
        block3[i].style.animationDelay=`${i/40}s`
    }
    
    ///360/100=3.6 *i;
}
var mixer = mixitup('.protifolio_img');
let nav=document.querySelector('nav');
window.addEventListener("scroll",function(){
    nav.style.backgroundColor='#00122b';
    nav.style.borderBottom="1px solid #1892ff"
})
//////////////start responsive/////////////

//////////////////////menu//////////////////

let menu=document.getElementById('menu');
let closee=document.getElementById('close');
let colle=document.getElementById('colle');
let links = document.getElementById('link');
let responsive = document.getElementById('responsive');


let sum=0;
menu.onclick=function(){
    sum++;
    if(sum%2!=0){
        links.style.transform="translateX(5px)";
        links.style.transitionDuration=1+'s';
        // menu.style.transform="translateX(-100px)";
        menu.style.transitionDuration=1.1+'s';
        menu.style.transform="rotateX(180deg)";
        menu.className=("fa-solid fa-xmark");
        responsive.style.transform="transformX(10px)"
        responsive.style.alignItems="start";
    }
    else{
        links.style.transform="translateX(190px)";
        links.style.transitionDuration=1+'s';
        menu.style.transitionDuration=1.1+'s';
        menu.style.transform="rotateX(180deg)";
        menu.className=("fa-solid fa-bars");
        menu.style.transform="translateX(150px)"
    }
}
let collec=document.getElementById('collection');
let reload=document.getElementById('reload');


    setTimeout(function(){
        collec.style.display="none";
        reload.style.display="none";
    },8000)


    let Home=document.getElementById('Home');
    let skill_link=document.getElementById('skill_link');
    let project=document.getElementById('project');
    let mode=document.getElementById('mode');
    if(window.innerWidth>=1200){

        window.onscroll=function(){
            // console.log(scrollY);
            if(scrollY===0||scrollY<1058){
            Home.classList.add('scroll');
            skill_link.classList.remove('scroll');
            mode.classList.remove('scroll');
            project.classList.remove('scroll');
        }
        else if(scrollY>=1972&&scrollY<2125){
            Home.classList.remove('scroll');
            mode.classList.remove('scroll');
            project.classList.remove('scroll');
            skill_link.classList.add('scroll');
        }
        else if(scrollY >=2125&&scrollY<2611){
            skill_link.classList.remove('scroll');
            Home.classList.remove('scroll');
            mode.classList.remove('scroll');
            project.classList.add('scroll');
        }
        else if(scrollY>=2611){
            project.classList.remove('scroll');
            Home.classList.remove('scroll');
            skill_link.classList.remove('scroll');
            mode.classList.add('scroll');
        }
        console.log(scrollY);
    }
}
if(window.innerWidth<=450){
    onscroll=function(){

        if(scrollY===0||scrollY<992){
            Home.classList.add('scroll');
        skill_link.classList.remove('scroll');
        mode.classList.remove('scroll');
        project.classList.remove('scroll');
    }
    else if(scrollY>=993&&scrollY<1809){
        Home.classList.remove('scroll');
        mode.classList.remove('scroll');
        project.classList.remove('scroll');
        skill_link.classList.add('scroll');
    }
    else if(scrollY >=1810&&scrollY<2940.5595703125){
        skill_link.classList.remove('scroll');
        Home.classList.remove('scroll');
        mode.classList.remove('scroll');
        project.classList.add('scroll');
    }
    else if(scrollY>=3940.5595703125){
        project.classList.remove('scroll');
        Home.classList.remove('scroll');
        skill_link.classList.remove('scroll');
        mode.classList.add('scroll');
        
    }
}

}

function sendemail(){
    
    let username=document.getElementById("Name").value;
    let phone=document.getElementById("phone").value;
    let source=document.getElementById("email").value;
    let work=document.getElementById("work").value;
    let meesagebody=`Name : ${username} <br/> Phone 
    ${phone} <br/> email : ${source} <br/> ${work}`;
    fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
            to: "omarahmedramadan77@gmail.com",
            subject: "Protofolio email",
            from:source,
            message: meesagebody
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data){
            console.log(data);
            swal("Sucessful Send", "You clicked the button!", "success");
        }else{
                swal("Error", "You clicked the button!", "error");
        }
    })
}
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};