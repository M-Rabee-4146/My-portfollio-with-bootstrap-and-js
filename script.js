
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
  // const c_detail_1=document.querySelector('.card_1')
  // c_detail_1.addEventListener('click',()=>{
  //   document.querySelector('.card-detail-1').classList.toggle('open')
  //   document.querySelector('.myClass').classList.toggle('no-scroll')

  // })
  // const c_detail_2=document.querySelector('.card_2')
  // c_detail_1.addEventListener('click',()=>{
  //   document.querySelector('.card-detail-2').classList.toggle('open')
  //   document.querySelector('.myClass').classList.toggle('no-scroll')
  
  // })
  // const close_btn= document.querySelector('.close-btn')
  // close_btn.addEventListener('click',()=>{
    //   document.querySelector('.in-card-bg').classList.toggle('open')      
    //   document.querySelector('.myClass').classList.toggle('no-scroll')
    // document.querySelector('.card-detail-2').classList.toggle('open')
    // document.querySelector('.card-detail-1').classList.toggle('open')
  
  // })
  
  const cards = document.querySelectorAll('.row-1');
const cardDetails = document.querySelectorAll('.in-card-bg');
const scroll_lock= document.querySelector('.myClass')
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    cardDetails.forEach((detail, i) => {
      if (i === index) {
        detail.classList.add('open');
        // scroll_lock.classList.toggle('no-scroll')

        } else {
          detail.classList.remove('open');
          // scroll_lock.classList.toggle('no-scroll')
        }
    });
  });
});

cardDetails.forEach(detail => {
  const closeBtn = detail.querySelector('.close-btn'); 
  const closeBtn2 = detail.querySelector('.second-close-btn'); 

  closeBtn.addEventListener('click', () => {
    detail.classList.remove('open');
  });
  closeBtn2.addEventListener('click', () => {
    detail.classList.remove('open');
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
      
    CircularBar.style.background = `conic-gradient( var(--main-color-red) ${
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
  let finaleValue2 = 95;
  let speed2 = 20;
  
  let timer2 = setInterval(() => {
    InitialValue2 += 1;
  
    CircularBar2.style.background = `conic-gradient( var(--main-color-red) ${
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
  let finaleValue3 = 80;
  let speed3 = 20;
  
  let timer3 = setInterval(() => {
    InitialValue3 += 1;
  
    CircularBar3.style.background = `conic-gradient( var(--main-color-red) ${
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
  
    CircularBar4.style.background = `conic-gradient( var(--main-color-red) ${
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

  // const rowContainer = document.querySelectorAll('.row-1');

  // sites.forEach(site => {
  //   for(i=1;i>=6;i++){
  //     document.classList.add(`outer-card+${i}`)
  //   }
  //   const cardElement = createCard(site);
  //   galleryContainer.appendChild(cardElement);
  // });