const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

function page1Animation(){
  var tl1=gsap.timeline({
    scrollTrigger:{
      trigger:".page1",
      pin:true,
      scrub:true,
    }
  })
  gsap.to('.paratext1 h2',{
    y:-50,
    duration:1,
    delay:.7,
  })
gsap.to('.page1left video',{
  opacity:1,
  duration:.5,
  delay:1.5

})
gsap.to('.flowtext1 h1',{
  y:-320,
  duration:1,
  delay:2,
  ease:'expo.Inout',
})
tl1.to('.page1 .flowtext1',{
  x:'30vw',
  duration:1,

},'elem')


tl1.to('.page1 .paratextoverlay',{
  x:'15vw',
  duration:.8,

},'elem')
tl1.to('.overlaypage1',{
  y:'-99%',
  duration:2,
})
tl1.to('.elem h3',{
  y:-80,
  duration:.5,
  delay:-.8,

})


}
page1Animation();


function page3Animation(){
  var tl3=gsap.timeline({
    scrollTrigger:{
      trigger:'.page3',
      scroller:'body',
      pin:true,
      scrub:true,
    }
  })

  tl3.to('.img3container #imgright',{
    y:-740,
    duration:.7,
    scale:1.2,
  },'elem3')

  tl3.to('.img3container img',{
   
    duration:.7,
    scale:1.2,
  },'elem3')
  tl3.to('.videos #videoleft',{
    y:-235,
    duration:.7,
    scale:1.2
  },'elem3')
  tl3.to('.one h1',{
    y:-80,
    duration:.3,
    ease:'expo.Inout',
    delay:.3

  },'elem3')


  tl3.to('.one h2',{
    y:-83,
    duration:.3,
    ease:'expo.Inout',
    delay:.3

  },'elem3')


  tl3.to('.mcdonalds h1',{
    y:-80,
    duration:.3,
    ease:'expo.Inout',
    delay:.3,

  },'elem3')


  tl3.to('.mcdonalds h2',{
    y:-83,
    duration:.3,
    ease:'expo.Inout',
    delay:.3

  },'elem3')

  
  tl3.to('.crew h1',{
    y:-80,
    duration:.3,
    ease:'expo.Inout',
    delay:.3

  },'elem3')


  tl3.to('.crew h2',{
    y:-83,
    duration:.3,
    ease:'expo.Inout',
    delay:.3

  },'elem3')
  var page3right = document.querySelector('.img3container');
  page3right.addEventListener('mousemove', function(dets) {
    gsap.to('.page3right h3', {
      y: dets.y / 10 - 50 + 'px', // Further reduce the scaling factor and offset
      x: dets.x / 10 - 50 + 'px',  // Further reduce the scaling factor and offset
      duration:.4,
    });
  });
  
  

}
page3Animation();

function page4Animation(){
  var tl4=gsap.timeline({
    scrollTrigger:{
      trigger:".page4",
  
    }
  })
  tl4.to('.elem4 h5',{
    y:-60,
    duration:.8,
    delay:.7
  },'elem4')
  tl4.to('.img',{
    height:'16vw',
    duration:.8,
    delay:.7
  },'elem4')
  tl4.to('.elem4btm h2',{
    y:-150,
    duration:.7,
    delay:.3
  })
}

page4Animation();


function page5Animation(){
  var tl5=gsap.timeline({
    scrollTrigger:{
      trigger:'.page5',
      scroller:'body',
      // start:'top top'
    }
  })
  tl5.to('.elem5 h3',{
    y:-50,
    duration:.5,
    delay:.5

  })
  tl5.to('.elem5btm h3',{
    y:-50,
    duration:.5,
    // delay:.5

  })
}

page5Animation();


function page6Animation(){
  gsap.to('.h1text h1',{
    y:-160,
    duration:.7,
    delay:.5,
    scrollTrigger:{
      trigger:'.page6',
      // start:'top 1%'
    }
  })
}


page6Animation();




const maxWidth = window.screen.width;
if(maxWidth === 1200){
  console.log(maxWidth)
  var tl1=gsap.timeline({
    scrollTrigger:{
      // trigger:".page1",
      pin:true,
      scrub:true,
    }
  })
  
tl1.to('.page1 .flowtext1',{
  x:'30vw',
  duration:1,

},'elem')


tl1.to('.page1 .paratextoverlay',{
  x:'15vw',
  duration:.8,

},'elem')
tl1.to('.overlaypage1',{
  y:'-99%',
  duration:2,
})
tl1.to('.elem h3',{
  y:-40,
  duration:.5,
  delay:-.8,

})
gsap.to('.paratext1 h2',{
  y:-40,
  duration:1,
  delay:.7,
})
gsap.to('.page1left video',{
opacity:1,
duration:.5,
delay:1.5

})
gsap.to('.flowtext1 h1',{
y:-280,
duration:1,
delay:2,
ease:'expo.Inout',
})



function page4Animation(){
  var tl4=gsap.timeline({
    scrollTrigger:{
      // trigger:".page4",
  
    }
  })
  tl4.to('.elem4 h5',{
    y:-20,
    duration:.8,
    delay:.7
  },'elem4')
  tl4.to('.img',{
    height:'16vw',
    duration:.8,
    delay:.7
  },'elem4')
  tl4.to('.elem4btm h2',{
    y:-100,
    duration:.7,
    delay:.3
  })
}

page4Animation();



function page5Animation(){
  var tl5=gsap.timeline({
    scrollTrigger:{
      // trigger:'.page5',
      scroller:'body',
      // start:'top top'
    }
  })
  tl5.to('.elem5 h3',{
    y:-20,
    duration:.5,
    delay:.5

  })
  tl5.to('.elem5btm h3',{
    y:-20,
    duration:.5,
    // delay:.5

  })
}

page5Animation();




function page6Animation(){
  gsap.to('.h1text h1',{
    y:-120,
    duration:.7,
    delay:.5,
    scrollTrigger:{
      trigger:'.page6',
      // start:'top 1%'
    }
  })
}


page6Animation();




if(maxWidth===992){


  function page1Animation(){
    tl1.to('.page1 .flowtext1',{
      x:'30vw',
      duration:.5,
    
    },'elem')
    
    
    tl1.to('.page1 .paratextoverlay',{
      x:'36vw' ,
      duration:.5
    
    },'elem')
    tl1.to('.overlaypage1',{
      y:'-99%',
      duration:2,
    })
    tl1.to('.elem h3',{
      y:-50,
      duration:.5,
      delay:-.8,
    
    })
    gsap.to('.paratext1 h2',{
      y:-40,
      duration:1,
      delay:.7,
    })
    gsap.to('.page1left video',{
    opacity:1,
    duration:.5,
    delay:1.5
    
    })
    gsap.to('.flowtext1 h1',{
    y:'-10vw',
    duration:1,
    delay:2,
    ease:'expo.Inout',
    })

    
  }

  page1Animation();

function page4Animation(){
  var tl4=gsap.timeline({
    scrollTrigger:{
      // trigger:".page4",
  
    }
  })
  tl4.to('.elem4 h5',{
    y:-20,
    duration:.8,
    delay:.7
  },'elem4')
  tl4.to('.img',{
    height:'16vw',
    duration:.8,
    delay:.7
  },'elem4')
  tl4.to('.elem4btm h2',{
    y:-30,
    duration:.7,
    delay:.3
  })
}

page4Animation();
}


if(maxWidth===768){
  function page1Animation(){
    tl1.to('.page1 .flowtext1',{
      x:'30vw',
      duration:.5,
    
    },'elem')
    
    
    tl1.to('.page1 .paratextoverlay',{
      x:'36vw' ,
      duration:.5
    
    },'elem')
    tl1.to('.overlaypage1',{
      y:'-99%',
      duration:2,
    })
    tl1.to('.elem h3',{
      y:-50,
      duration:.5,
      delay:-.8,
    
    })
    gsap.to('.paratext1 h2',{
      y:'-2vw',
      duration:1,
      delay:.7,
    })
    gsap.to('.page1left video',{
    opacity:1,
    duration:.5,
    delay:1.5
    
    })
    gsap.to('.flowtext1 h1',{
    y:'-5vw',
    duration:1,
    delay:2,
    ease:'expo.Inout',
    })

    
  }

  page1Animation();

}

}