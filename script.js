// const dropdown=document.querySelector('.icon')
// const dropdownMenu=document.querySelector('.links')
// dropdown.addEventListener('click',()=>{
//     dropdownMenu.classList.toggle('show')
// })
const navLinks = document.querySelectorAll('.navlinks');
document.querySelector('.third-button').addEventListener('click', function () {
    document.querySelector('.animated-icon3').classList.toggle('open');
    document.querySelector('.links').classList.toggle('open');
    document.querySelector('.myClass').classList.toggle('no-scroll'); 
    document.body.classList.toggle('no-scroll')
  });
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.animated-icon3').classList.toggle('open');
      document.querySelector('.links').classList.toggle('open'); 
      document.querySelector('.myClass').classList.toggle('no-scroll'); 
      document.body.classList.toggle('no-scroll')

    });
  });
  
  
  // for 1st circle 
  const progress=()=>{

    let CircularBar = document.querySelector(".circular-bar");
    let PercentValue = document.querySelector(".percent");
    
    let InitialValue = 0;
    let finaleValue = 100;
    let speed = 20;
    
    let timer = setInterval(() => {
      InitialValue += 1;
      
    CircularBar.style.background = `conic-gradient(#cf1f1f ${
      (InitialValue / 100) * 360
    }deg, transparent 0deg)`;
    PercentValue.innerHTML = InitialValue + "%";
    
    if (InitialValue >= finaleValue) {
      clearInterval(timer);
    }
  }, speed);
  // for 2nd circle 
  
  let CircularBar2 = document.querySelector("#circular-bar2");
  let PercentValue2 = document.querySelector("#percent2");
  
  let InitialValue2 = 0;
  let finaleValue2 = 90;
  let speed2 = 20;
  
  let timer2 = setInterval(() => {
    InitialValue2 += 1;
  
    CircularBar2.style.background = `conic-gradient(#cf1f1f ${
      (InitialValue2 / 100) * 360
    }deg, transparent 0deg)`;
    PercentValue2.innerHTML = InitialValue2 + "%";
  
    if (InitialValue2 >= finaleValue2) {
      clearInterval(timer2);
    }
  }, speed2);
// for 3rd circle 

  let CircularBar3 = document.querySelector("#circular-bar3");
  let PercentValue3 = document.querySelector("#percent3");
  
  let InitialValue3 = 0;
  let finaleValue3 = 70;
  let speed3 = 20;
  
  let timer3 = setInterval(() => {
    InitialValue3 += 1;
  
    CircularBar3.style.background = `conic-gradient(#cf1f1f ${
      (InitialValue3 / 100) * 360
    }deg, transparent 0deg)`;
    PercentValue3.innerHTML = InitialValue3 + "%";
  
    if (InitialValue3 >= finaleValue3) {
      clearInterval(timer3);
    }
  }, speed3);
// for 4th circle 

  let CircularBar4 = document.querySelector("#circular-bar4");
  let PercentValue4 = document.querySelector("#percent4");
  
  let InitialValue4 = 0;
  let finaleValue4 = 60;
  let speed4 = 20;
  
  let timer4 = setInterval(() => {
    InitialValue4 += 1;
  
    CircularBar4.style.background = `conic-gradient(#cf1f1f ${
      (InitialValue4 / 100) * 360
    }deg, transparent 0deg)`;
    PercentValue4.innerHTML = InitialValue4 + "%";
  
    if (InitialValue4 >= finaleValue4) {
      clearInterval(timer4);
    }
  }, speed4);
}

  const elementsToAnimate = document.querySelectorAll('.animation');

  function handleInView(element, callback) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(); 
          observer.unobserve(entry.target); 

        }
      });
    });
  
    observer.observe(element);
  }
  
  elementsToAnimate.forEach(element => {
    handleInView(element, () => {
      element.classList.add('animated'); 
      progress();


    });
  });

  // import gsap from 'gsap';

 

  