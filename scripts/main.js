//--------------------variables----------------------//

const $planets = 
{
    earth: document.querySelector('.earth'),
    moon: document.querySelector('.moon'),
    mars: document.querySelector('.mars'),
    background: document.querySelector('.background'),
    landingPad: document.querySelector('.landingPad')
} 

const $button = 
{
    hover: document.querySelector('.buttonHover'),
    main: document.querySelector('.button'),
    text: document.querySelector('.text'),
    center: document.querySelector('.center')
}

const $button2 = 
{
    hover: document.querySelector('.buttonHover2'),
    main: document.querySelector('.button2'),
    text: document.querySelector('.text2'),
    center: document.querySelector('.center2')
}
const $button3 = 
{
    hover: document.querySelector('.buttonHover3'),
    main: document.querySelector('.button3'),
    text: document.querySelector('.text3'),
    center: document.querySelector('.center3')
}



const $stars =
{
    background : document.querySelector('.stars'),
    cube : document.querySelector('.cube'),
}

const $scrollBarContainer = document.querySelector('.stepIndicator')
const $scrollBar = 
{
    round1: document.querySelector('.item1'),
    round2: document.querySelector('.item2'),
    round3: document.querySelector('.item3'),
    round4: document.querySelector('.item4'),
    round5: document.querySelector('.item5'),
    round6: document.querySelector('.item6'),
    round7: document.querySelector('.item7'),
    round8: document.querySelector('.item8'),

    bar1: document.querySelector('.n1'),
    bar2: document.querySelector('.n2'),
    bar3: document.querySelector('.n3'),
    bar4: document.querySelector('.n4'),
    bar5: document.querySelector('.n5'),
    bar6: document.querySelector('.n6'),
    bar7: document.querySelector('.n7'),

}

const $sounds = 
{
    speed: document.querySelector('.speedSong'),
    backgroundSound:   document.querySelector('.backgroundSong'),

}

const $rocket =
{
    full: document.querySelector('.rocket'),
    top: document.querySelector('.topRocket'),
    middle: document.querySelector('.middleRocket'),
    bottom: document.querySelector('.bottomRocket'),
}

const $finalStep = document.querySelector('.end')
const $controls = document.querySelector('.controls')

let paralaxState = 0 
let logoState = 0
let scrollStep = 0





//----------------loader----------------//

const $preloader = document.querySelector('.preloader')

window.addEventListener('load', () => 
{
    $preloader.style.opacity = '0'
    $preloader.style.visibility = 'hidden'
    $sounds.backgroundSound.play()
}) 


// ----------------- HomePageTitle----------//

const $homePageTitle = document.querySelector('.homePageTitle')
const $mainButton = $homePageTitle.querySelector('.mainButton')

$mainButton.addEventListener('click', ()=> 
{
    $homePageTitle.style.opacity = '0'
    $homePageTitle.style.visibility = 'hidden'

    $button.hover.style.opacity = '1'

    $controls.classList.add('display')

    const controls = () =>
    {
        $controls.classList.remove('display')
    }

    setTimeout(controls,6000)
    
})


//--------------------PARALAX EFFECT-------------------//

const mouse = { x:0, y:0}

document.addEventListener('mousemove', (event)=> 
{
    mouse.x = event.clientX
    mouse.y = event.clientY


    if(paralaxState == 0)
    {
        parallax()
    }

})
   
const parallax = () =>
{
    $planets.earth.style.transform = `translateX(${mouse.x/70}px) translateY(${mouse.y/50}px)`
    $planets.moon.style.transform = `translateX(${mouse.x/100}px) translateY(${-mouse.y/100}px) `
    $planets.mars.style.transform = `translateX(${-mouse.x/200}px) translateY(${-mouse.y/200}px) `
    $button.hover.style.transform = `translateX(${mouse.x/200}px) translateY(${mouse.y/200}px)`
}

//-------------------- scroll Bar -----------------------//

let scrollDir = ''
const fillScrollBar = () =>
{
    if (scrollStep == 1)
    {
        $scrollBar.round1.style.background = '#ffffff'
        $scrollBar.round2.style.background = null
        $scrollBar.round3.style.background = null
        $scrollBar.round4.style.background = null
        $scrollBar.round5.style.background = null
        $scrollBar.round6.style.background = null
        $scrollBar.round7.style.background = null
        $scrollBar.round8.style.background = null
    }
    else if (scrollStep == 2)
    {
        $scrollBar.round1.style.background = '#ffffff'
        $scrollBar.round2.style.background = '#ffffff'
        $scrollBar.round3.style.background = null
        $scrollBar.round4.style.background = null
        $scrollBar.round5.style.background = null
        $scrollBar.round6.style.background = null
        $scrollBar.round7.style.background = null
        $scrollBar.round8.style.background = null
        
    }
    else if (scrollStep == 3)
    {
        $scrollBar.round1.style.background = '#ffffff'
        $scrollBar.round2.style.background = '#ffffff'
        $scrollBar.round3.style.background = '#ffffff'
        $scrollBar.round4.style.background = null
        $scrollBar.round5.style.background = null
        $scrollBar.round6.style.background = null
        $scrollBar.round7.style.background = null
        $scrollBar.round8.style.background = null
    }
    else if (scrollStep == 4)
    {
        $scrollBar.round1.style.background = '#ffffff'
        $scrollBar.round2.style.background = '#ffffff'
        $scrollBar.round3.style.background = '#ffffff'
        $scrollBar.round4.style.background = '#ffffff'
        $scrollBar.round5.style.background = null
        $scrollBar.round6.style.background = null
        $scrollBar.round7.style.background = null
        $scrollBar.round8.style.background = null
    }
    else if (scrollStep == 5)
    {
        $scrollBar.round1.style.background = '#ffffff'
        $scrollBar.round2.style.background = '#ffffff'
        $scrollBar.round3.style.background = '#ffffff'
        $scrollBar.round4.style.background = '#ffffff'
        $scrollBar.round5.style.background = '#ffffff'
        $scrollBar.round6.style.background = null
        $scrollBar.round7.style.background = null
        $scrollBar.round8.style.background = null
    }
    else if (scrollStep == 6)
    {
        $scrollBar.round1.style.background = '#ffffff'
        $scrollBar.round2.style.background = '#ffffff'
        $scrollBar.round3.style.background = '#ffffff'
        $scrollBar.round4.style.background = '#ffffff'
        $scrollBar.round5.style.background = '#ffffff'
        $scrollBar.round6.style.background = '#ffffff'
        $scrollBar.round7.style.background = null
        $scrollBar.round8.style.background = null
    }
    else if (scrollStep == 7)
    {
        $scrollBar.round1.style.background = '#ffffff'
        $scrollBar.round2.style.background = '#ffffff'
        $scrollBar.round3.style.background = '#ffffff'
        $scrollBar.round4.style.background = '#ffffff'
        $scrollBar.round5.style.background = '#ffffff'
        $scrollBar.round6.style.background = '#ffffff'
        $scrollBar.round7.style.background = '#ffffff'
        $scrollBar.round8.style.background = null

    }
    else if (scrollStep == 8)
    {
        $scrollBar.round1.style.background = '#ffffff'
        $scrollBar.round2.style.background = '#ffffff'
        $scrollBar.round3.style.background = '#ffffff'
        $scrollBar.round4.style.background = '#ffffff'
        $scrollBar.round5.style.background = '#ffffff'
        $scrollBar.round6.style.background = '#ffffff'
        $scrollBar.round7.style.background = '#ffffff'
        $scrollBar.round8.style.background = '#ffffff'
    }
}

//-------------------- Steps Trigger --------------------//

//Launch button trigger
$button.hover.addEventListener('mouseover', () => 
{
    console.log('hover')
    $button.text.style.display = 'block'
    $button.main.style.transform = 'scale(1.5)'
    

    $button.hover.addEventListener('mousemove', () =>
    {
        $button.text.style.transform = `translateX(${(mouse.x - $button.hover.offsetLeft)/8}px) translateY(${(mouse.y - $button.hover.offsetTop)/8}px) `
        
    })
})

$button.hover.addEventListener('mouseout', () => 
{
    $button.text.style.display = 'none'
    $button.main.style.transform = ' scale(1)'
})

$button.main.addEventListener('click', ()=> 
{
    scrollStep++
    step1()
    

   
})
// button2
$button2.hover.addEventListener('mouseover', () => 
{
    console.log('hover')
    $button2.text.style.display = 'block'
    $button2.main.style.transform = 'scale(1.5)'
    

    $button2.hover.addEventListener('mousemove', () =>
    {
        $button2.text.style.transform = `translateX(${(mouse.x - $button2.main.offsetLeft)/8}px) translateY(${(mouse.y - $button2.main.offsetTop)/8}px) `
        
    })
})

$button2.hover.addEventListener('mouseout', () => 
{
    $button2.text.style.display = 'none'
    $button2.main.style.transform = ' scale(1)'
})

// button3
$button3.hover.addEventListener('mouseover', () => 
{
    console.log('hover')
    $button3.text.style.display = 'inherit'
    $button3.main.style.transform = 'scale(1.5)'
    

    $button3.hover.addEventListener('mousemove', () =>
    {
        $button3.text.style.transform = `translateX(${(mouse.x - $button3.main.offsetLeft)/8}px) translateY(${(mouse.y - $button3.main.offsetTop)/8}px) `
        
    })
})

$button3.hover.addEventListener('mouseout', () => 
{
    $button3.text.style.display = 'none'
    $button3.main.style.transform = ' scale(1)'
})


// scroll trigger
let incremented = false

const incrementation = () =>
{
    incremented = true
    setTimeout(() => { incremented = false }, 2000)

    if(scrollDir == 'up')
    {
        if(scrollStep < 8)
        {
            scrollStep++
            console.log(scrollStep)
            if(scrollStep == 1){ step1() }
            else if(scrollStep == 2){ step2() }
            else if(scrollStep == 3){ step3() }
            else if(scrollStep == 4){ step4() }
            else if(scrollStep == 5){ step5() }
            else if(scrollStep == 6){ step6() }
            else if(scrollStep == 7){ step7() }
            else if(scrollStep == 8){ step8() }
        }
    }
    else if(scrollDir == 'down')
    {
        if(scrollStep >= 2)
        {
            scrollStep--
            if(scrollStep == 1){ step1() }
            else if(scrollStep == 2){ step2() }
            else if(scrollStep == 3){ step3() }
            else if(scrollStep == 4){ step4() }
            else if(scrollStep == 5){ step5() }
            else if(scrollStep == 6){ step6() }
            else if(scrollStep == 7){ step7() }
            else if(scrollStep == 8){ step8() }
        }
    }
}


document.addEventListener('mousewheel', (event) =>
{
    if(scrollStep > 0)
    {
        if(event.deltaY < 0)
            {
                scrollDir = 'up'
                console.log(scrollDir)
            }
        else if(event.deltaY > 0)
            {
                scrollDir = 'down'
                console.log(scrollDir)
            }
        incremented == false ? incrementation() : false
    }
})



//-------------- ANIMATION STEPS ---------------//

const step1 = () => 
{
    fillScrollBar()
    const zoomDelay = () =>
    {
         $planets.earth.classList.add('step1')
         $planets.moon.classList.add('step1')
         $planets.mars.classList.add('step1')
         $stars.background.classList.add('step1')
         $button2.hover.classList.add('step1')
         $button2.text.innerHTML = ' Ascension in the atmosphere last approximately 165s until 130km of height, also known as the thermosphere'
         $button3.hover.classList.add('step1')
    } 
    $planets.earth.classList.remove('step2','step3','step4','step5','step6','step7','step8')
    $planets.landingPad.classList.remove('step7')
    $planets.moon.classList.remove('step2','step3','step4','step5','step6','step7','step8')
    $planets.mars.classList.remove('step2','step3','step4','step5','step6','step7','step8')
    $stars.background.classList.remove('step2','step3','step4','step5','step6','step7','step8')
    $planets.background.classList.remove('step2','step3','step4','step5','step6','step7','step7-2','step8')
    $rocket.full.classList.remove('step2','step3','step4','step5','step6','step7','step8')
    $rocket.bottom.classList.remove('step2','step3','step4','step5','step5-2','step6','step6-2','step7','step8')
    $rocket.middle.classList.remove('step2','step3','step4','step5','step6','step7','step8')
    $rocket.top.classList.remove('step2','step3','step4','step5','step6','step7','step8')
    $button2.hover.classList.remove('step2','step3','step4','step5','step6','step7','step8')
    $button3.hover.classList.remove('step2','step3','step4','step5','step6','step7','step8')
    $finalStep.classList.remove('end')
    

    const rocketApparitionDelay = () =>
    {
         $rocket.full.classList.add('step1')
    } 

    paralaxState = 1
    $planets.earth.style.transform = null 
    $planets.moon.style.transform = null 
    $planets.mars.style.transform = null
    setTimeout(zoomDelay,1500)
    setTimeout(rocketApparitionDelay,1600)

    $button.main.style.display = 'none'

    $stars.background.style.animationPlayState = 'running'
    $stars.cube.style.animationPlayState = 'running'

    $scrollBarContainer.style.visibility ='visible'
    $scrollBarContainer.style.opacity ='1'

    $sounds.speed.play()
    
}

const step2 = () =>
{
    
    console.log('etape2')
    $planets.earth.classList.add('step2')
    $stars.background.classList.add('step2')
    $rocket.full.classList.add('step2')
    $rocket.top.classList.add('step2')
    $rocket.middle.classList.add('step2')
    $rocket.bottom.classList.add('step2')
    $button2.hover.classList.add('step2')
    $button2.text.innerHTML = ' The second floor is also equipped with an engine MERLIN 1D, to forward the satellite on orbit'
    $button3.hover.classList.add('step2')
    $button3.text.innerHTML = ' after having propelled the satellite in the thermosphere, the first floor is going to begin its way back to earth'

    $planets.earth.classList.remove('step1','step3','step4','step5','step6','step7','step8')
    $planets.landingPad.classList.remove('step7')
    $stars.background.classList.remove('step1','step3','step4','step5','step6','step7','step8')
    $rocket.full.classList.remove('step1','step3','step4','step5','step6','step7','step8')
    $rocket.bottom.classList.remove('step1','step3','step4','step5','step5-2','step6','step6-2','step7','step7-2','step8')
    $rocket.middle.classList.remove('step1','step3','step4','step5','step6','step7','step8')
    $rocket.top.classList.remove('step1','step3','step4','step5','step6','step7','step8')
    $button2.hover.classList.remove('step1','step3','step4','step5','step6','step7','step8')
    $button3.hover.classList.remove('step1','step3','step4','step5','step6','step7','step8')
    $finalStep.classList.remove('end')

    fillScrollBar()
}

const step3 = () =>
{
    console.log('etape3')
    $planets.earth.classList.add('step3')
    $stars.background.classList.add('step3')
    $rocket.full.classList.add('step3')
    $rocket.bottom.classList.add('step3')
    $rocket.middle.classList.add('step3')
    $rocket.top.classList.add('step3')
    $button2.hover.classList.add('step3')
    $button2.text.innerHTML = 'the second floor separates from the satellite to drop it into orbit'
    $button3.hover.classList.add('step3')
    $button3.text.innerHTML = ' transition phase to the redescent, the first floor wich stayed in the thermosphere initiate its placement rototation'

    $planets.earth.classList.remove('step1','step2','step4','step5','step6','step7','step8')
    $planets.landingPad.classList.remove('step7')
    $stars.background.classList.remove('step1','step2','step4','step5','step6','step7','step8')
    $rocket.full.classList.remove('step1','step2','step4','step5','step6','step7','step8')
    $rocket.bottom.classList.remove('step1','step2','step4','step5','step5-2','step6','step6-2','step7','step7-2','step8')
    $rocket.middle.classList.remove('step1','step2','step4','step5','step6','step7','step8')
    $rocket.top.classList.remove('step1','step2','step4','step5','step6','step7','step8')
    $button2.hover.classList.remove('step1','step2','step4','step5','step6','step7','step8')
    $button3.hover.classList.remove('step1','step2','step4','step5','step6','step7','step8')
    $finalStep.classList.remove('end')

    fillScrollBar()
}

const step4 = () =>
{
    console.log('etape4')
    $planets.earth.classList.add('step4')
    $stars.background.classList.add('step4')
    $rocket.full.classList.add('step4')
    $rocket.bottom.classList.add('step4')
    $rocket.middle.classList.add('step4')
    $rocket.top.classList.add('step4')
    $button2.hover.classList.add('step4')
    $button2.text.innerHTML = 'éThe fist stage performs the flip manoeuver thanks to the coldd gas trhuster'
    $button3.hover.classList.add('step4')
    $button3.text.innerHTML = ' étape4  button 3'

    $planets.earth.classList.remove('step1','step2','step3','step5','step6','step7','step8')
    $planets.landingPad.classList.remove('step7')
    $stars.background.classList.remove('step1','step2','step3','step5','step6','step7','step8')
    $rocket.full.classList.remove('step1','step2','step3','step5','step6','step7','step8')
    $rocket.bottom.classList.remove('step1','step2','step3','step5','step5-2','step6','step6-2','step7','step7-2','step8')
    $rocket.middle.classList.remove('step1','step2','step3','step5','step6','step7','step8')
    $rocket.top.classList.remove('step1','step2','step3','step5','step6','step7','step8')
    $button2.hover.classList.remove('step1','step2','step3','step5','step6','step7','step8')
    $button3.hover.classList.remove('step1','step2','step3','step5','step6','step7','step8')
    $finalStep.classList.remove('end')

    fillScrollBar()
}

const step5 = () =>
{
   
    console.log('etape5')
    $planets.earth.classList.add('step5')
    $stars.background.classList.add('step5')
    $rocket.full.classList.add('step5')
    $rocket.bottom.classList.add('step5')
    $rocket.middle.classList.add('step5')
    $rocket.top.classList.add('step5')
    $button2.hover.classList.add('step5')
    $button2.text.innerHTML = ' <br>Boostback burn</br> Restarts are required both at supersonic speed in the upper atmosphere - in order to decelerate and return the launcher to a descent position - and at high transonic speed in the lower atmosphere - to slow down the final descent and to make a slowly landing.'
    $button3.hover.classList.add('step5')
    $button3.text.innerHTML = ' étape5  button 3'

    const rocketBottomStep5 = () =>
    {
         $rocket.bottom.classList.add('step5-2')
         console.log('step5-2')
    } 

    setTimeout(rocketBottomStep5,1500)

    $planets.earth.classList.remove('step1','step2','step3','step4','step6','step7','step8')
    $planets.landingPad.classList.remove('step7')
    $stars.background.classList.remove('step1','step2','step3','step4','step6','step7','step8')
    $rocket.full.classList.remove('step1','step2','step3','step4','step6','step7','step8')
    $rocket.bottom.classList.remove('step1','step2','step3','step4','step6','step6-2','step7','step7-2','step8')
    $rocket.middle.classList.remove('step1','step2','step3','step4','step6','step7','step8')
    $rocket.top.classList.remove('step1','step2','step3','step4','step6','step7','step8')
    $button2.hover.classList.remove('step1','step2','step3','step4','step6','step7','step8')
    $button3.hover.classList.remove('step1','step2','step3','step4','step6','step7','step8')
    $finalStep.classList.remove('end')

    fillScrollBar()
}

const step6 = () =>
{
    
    console.log('etape6')
    $planets.earth.classList.add('step6')
    $stars.background.classList.add('step6')
    $rocket.full.classList.add('step6')
    $rocket.bottom.classList.add('step6')
    $rocket.middle.classList.add('step6')
    $rocket.top.classList.add('step6')
    $button2.hover.classList.add('step6')
    $button2.text.innerHTML = ''
    $button3.hover.classList.add('step6')
    $button3.text.innerHTML = ' Control system with a software algorithm to be able to have accurate guidance of the terminal rocket. It includes closed thrust, vector control and accelerator commands.'

    const rocketBottomDelayStep6 = () =>
    {
         $rocket.bottom.classList.add('step6-2')
         console.log('step6-2')
    } 

    setTimeout(rocketBottomDelayStep6,1500)

    $planets.earth.classList.remove('step1','step2','step3','step4','step5','step7','step8')
    $planets.landingPad.classList.remove('step7')
    $stars.background.classList.remove('step1','step2','step3','step4','step5','step7','step8')
    $rocket.full.classList.remove('step1','step2','step3','step4','step5','step7','step8')
    $rocket.bottom.classList.remove('step1','step2','step3','step4','step5','step5-2','step7','step7-2','step8')
    $rocket.middle.classList.remove('step1','step2','step3','step4','step5','step7','step8')
    $rocket.top.classList.remove('step1','step2','step3','step4','step5','step7','step8')
    $button2.hover.classList.remove('step1','step2','step3','step4','step5','step7','step8')
    $button3.hover.classList.remove('step1','step2','step3','step4','step5','step7','step8')
    $finalStep.classList.remove('end')

    fillScrollBar()
}

const step7 = () =>
{
    
    console.log('etape7')
    $planets.earth.classList.add('step7')
    $planets.landingPad.classList.add('step7')
    $stars.background.classList.add('step7')
    $rocket.full.classList.add('step7')
    $rocket.bottom.classList.add('step7')
    $rocket.middle.classList.add('step7')
    $rocket.top.classList.add('step7')
    $button2.hover.classList.add('step7')
    $button2.text.innerHTML = ''
    $button3.hover.classList.add('step7')
    $button3.text.innerHTML = 'Ignition of the engines to slow down its descent while placing itself right and once right the engine lowers its power progressively adjusts its position if need until the complete landing then cuts its engines.'

    const rocketBottomDelayStep7 = () =>
    {
         $rocket.bottom.classList.add('step7-2')
         console.log('step7-2')
    } 

    setTimeout(rocketBottomDelayStep7,1500)


    $planets.earth.classList.remove('step1','step2','step3','step4','step5','step6','step8')
    $stars.background.classList.remove('step1','step2','step3','step4','step5','step6','step8')
    $rocket.full.classList.remove('step1','step2','step3','step4','step5','step6','step8')
    $rocket.bottom.classList.remove('step1','step2','step3','step4','step5','step5-2','step6','step6-2','step8')
    $rocket.middle.classList.remove('step1','step2','step3','step4','step5','step6','step8')
    $rocket.top.classList.remove('step1','step2','step3','step4','step5','step6','step8')
    $button2.hover.classList.remove('step1','step2','step3','step4','step5','step6','step8')
    $button3.hover.classList.remove('step1','step2','step3','step4','step5','step6','step8')
    $finalStep.classList.remove('end')

    fillScrollBar()
}

const step8 = () =>
{
    console.log('etape8')
    $finalStep.style.display = 'inherit'
    $finalStep.classList.add('end')
    fillScrollBar()
    
}


// click on scrollBar
$scrollBar.round1.addEventListener('mousedown', (event) => 
{
    scrollStep = 1
    step1()
})

$scrollBar.round2.addEventListener('mousedown', (event) => 
{
    scrollStep = 2
    step2()

})

$scrollBar.round3.addEventListener('mousedown', (event) => 
{
    scrollStep = 3
    step3()
})
$scrollBar.round4.addEventListener('mousedown', (event) => 
{
    scrollStep = 4
    step4()
})

$scrollBar.round5.addEventListener('mousedown', (event) => 
{
    scrollStep = 5
    step5()
})

$scrollBar.round6.addEventListener('mousedown', (event) => 
{
    scrollStep = 6
    step6()
})

$scrollBar.round7.addEventListener('mousedown', (event) => 
{
    scrollStep = 7
    step7()
})

$scrollBar.round8.addEventListener('mousedown', (event) => 
{
    scrollStep = 8
    step8()
})

// arrow on scrollBar

document.addEventListener('keydown', (event) =>
{
    if(event.keyCode == 37)
    {
        
        if(scrollStep > 0)
        {
            scrollStep--
            if(scrollStep == 1){ step1() }
            else if(scrollStep == 2){ step2() }
            else if(scrollStep == 3){ step3() }
            else if(scrollStep == 4){ step4() }
            else if(scrollStep == 5){ step5() }
            else if(scrollStep == 6){ step6() }
            else if(scrollStep == 7){ step7() }
            else if(scrollStep == 8){ step8() }
        }
    }
    else if(event.keyCode == 39)
    {
        if(scrollStep < 8)
        {
            scrollStep++
            console.log(scrollStep)
            if(scrollStep == 1){ step1() }
            else if(scrollStep == 2){ step2() }
            else if(scrollStep == 3){ step3() }
            else if(scrollStep == 4){ step4() }
            else if(scrollStep == 5){ step5() }
            else if(scrollStep == 6){ step6() }
            else if(scrollStep == 7){ step7() }
            else if(scrollStep == 8){ step8() }
        }
    }
})
