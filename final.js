const navlinks = document.querySelectorAll('header nav a');
const logolink = document.querySelector('.logo');
const menuIcon = document.querySelector('#icon');
const sections = document.querySelectorAll('section');
const navBar = document.querySelector('nav');



menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active');
})


const activepage = () =>{

    const barsBox = document.querySelector(".box-bars");
    const header = document.querySelector("header");
    
    header.classList.remove('active');
    setTimeout(()=>{
        header.classList.add('active');
    },1100);


    navlinks.forEach(link =>{
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(()=>{
        barsBox.classList.add('active');
    },1100);

    sections.forEach(section =>{
        section.classList.remove('active');
    });

     menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');

}
navlinks.forEach((link,idx) => {
    link.addEventListener('click',()=>{
        if(!link.classList.contains("active")){
            activepage();

            link.classList.add('active')

            setTimeout(()=>{
                sections[idx].classList.add('active')
            },1100);

        }
    })
})

logolink.addEventListener('click',() =>{
    if(!navlinks[0].classList.contains('active')){
        activepage();

        navlinks[0].classList.add('active');

        setTimeout(()=>{
                sections[0].classList.add('active')
            },1100);

    }
})




const resumeBtns = document.querySelectorAll(".resume-btn");

resumeBtns.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
            const resumedetail = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn =>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumedetail.forEach(detail =>{
            detail.classList.remove('active');
        });

        resumedetail[idx].classList.add('active');
    });   
});

const arrowRight = document.querySelector('.pf-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.pf-box .navigation .arrow-left');

let index = 0;

const acp = () => {
    const imgslide = document.querySelector('.pf-carousel .img-slide');
    const pfdetail = document.querySelectorAll('.pf-detail');

   imgslide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    pfdetail.forEach(detail =>{
        detail.classList.remove('active');
    });
    pfdetail[index].classList.add('active')
}

arrowRight.addEventListener('click',()=>{
    if(index < 4){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index = 5;
        arrowRight.classList.add('disabled');
    }

   acp();
});

arrowLeft.addEventListener('click',()=>{
    if(index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    acp();
});

