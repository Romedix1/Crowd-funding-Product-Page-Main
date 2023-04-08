// book mark icon toogle

const bookMarkIcon = document.querySelector("#bookmark")
const circleFill = document.querySelector(".marked")

const bookMarkBox = document.querySelector(".bookmark-box")

let bookMarkChecked = false


bookMarkIcon.addEventListener('click',()=>{
    if(bookMarkChecked==true)
    {
        circleFill.style.fill = "#2F2F2F"
        bookMarkBox.style.backgroundColor = "#dddddd"
        bookMarkBox.style.color = "var(--DarkGray)"
        bookMarkChecked = false
    } else if(bookMarkChecked==false)
    {
        circleFill.style.fill = "var(--DarkCyan)"
        bookMarkBox.style.backgroundColor = "var(--ModerateCyan)"
        bookMarkBox.style.color = "#ffffff"
        bookMarkChecked = true
    }
})

bookMarkBox.addEventListener('click',()=>{
    if(bookMarkChecked==true)
    {
        circleFill.style.fill = "#2F2F2F"
        bookMarkBox.style.backgroundColor = "#dddddd"
        bookMarkBox.style.color = "var(--DarkGray)"
        bookMarkChecked = false
    } else if(bookMarkChecked==false)
    {
        circleFill.style.fill = "var(--DarkCyan)"
        bookMarkBox.style.backgroundColor = "var(--ModerateCyan)"
        bookMarkBox.style.color = "#ffffff"
        bookMarkChecked = true
    }
})

// nav bar mobile

const hamburgerIcon = document.querySelector("#hamburger-icon")
const closeMenuIcon = document.querySelector("#close-menu")
const navMenu = document.querySelector("#opened-nav-menu")
const backgroundShadow = document.querySelector("#darker-background-nav-menu")


    hamburgerIcon.addEventListener('click',()=>{
        navMenu.style.display = "block"
        hamburgerMenuStatus = true
        closeMenuIcon.style.display = "block"
        hamburgerIcon.style.display = "none"
        backgroundShadow.style.display = "block"
    })

    closeMenuIcon.addEventListener('click',()=>{
        navMenu.style.display = "none"
        hamburgerMenuStatus = false
        closeMenuIcon.style.display = "none"
        hamburgerIcon.style.display = "block"
        backgroundShadow.style.display = "none"
    })


// back this project open on click

const darkerBackgroundBackProject = document.querySelector("#darker-background")
const backProjectOverlay = document.querySelector("#back-project-overlay")
const closeProjectOverlay = document.querySelector("#close-back-project")
const backProjectButton = document.querySelector("#back-project-button")

backProjectButton.addEventListener('click',()=>{
    darkerBackgroundBackProject.style.display ="block"
    backProjectOverlay.style.display ="block"
    closeProjectOverlay.style.display ="block"
})

closeProjectOverlay.addEventListener('click',()=>{
    darkerBackgroundBackProject.style.display ="none"
    backProjectOverlay.style.display ="none"
    closeProjectOverlay.style.display ="none"
})


// input validation
let bambooLeft = document.querySelectorAll(".bamboo-left")
let blackEditionLeft = document.querySelectorAll(".black-edition-left")
let bambooLeftValue = 101
let blackEditionLeftValue = 64

for(bamboo of bambooLeft)
{
    bamboo.innerHTML = bambooLeftValue
}

for(black of blackEditionLeft)
{
    black.innerHTML = blackEditionLeftValue
}


const firstInputText = document.querySelector("#first-text-input")
const secondInputText = document.querySelector("#second-text-input")
const thirdInputText = document.querySelector("#third-text-input")
let validationCorrect = false;



const formBox = document.querySelectorAll('.form')
const submitButton = document.querySelectorAll('input[type="submit"]')

const onlyNumbers = new RegExp ^[0-9]

submitButton[0].addEventListener('click',(event)=>{
    event.preventDefault()

    
    if (firstInputText.value>=0 || firstInputText.value.match(onlyNumbers))
    {
        validationCorrect = false
        successOverlay.style.display="block"
        darkerBackgroundBackProject.style.display="block"
        backProjectOverlay.style.display = "none"
    }

})

submitButton[1].addEventListener('click',(event)=>{
    event.preventDefault()

    
    if (secondInputText.value>=25 || secondInputText.value.match(onlyNumbers))
    {
        validationCorrect = true
        successOverlay.style.display="block"
        darkerBackgroundBackProject.style.display="block"
        backProjectOverlay.style.display = "none"

        bambooLeftValue--

        for(bamboo of bambooLeft)
        {
         bamboo.innerHTML = bambooLeftValue
        }
    
    }

})
submitButton[2].addEventListener('click',(event)=>{
    event.preventDefault()

    
  
    if (thirdInputText.value>=75 || thirdInputText.value.match(onlyNumbers))
    {   
    validationCorrect = false
    successOverlay.style.display="block"
        darkerBackgroundBackProject.style.display="block"
        backProjectOverlay.style.display = "none"

        blackEditionLeftValue--

        for(black of blackEditionLeft)
        {
            black.innerHTML = blackEditionLeftValue
        }
    
    }

})

// main buttons

const bottomContentButtons = document.querySelectorAll(".bottom-content-button")


for (bottomContentButton of bottomContentButtons)
{
bottomContentButton.addEventListener('click',()=>{
    darkerBackgroundBackProject.style.display ="block"
    backProjectOverlay.style.display ="block"
    closeProjectOverlay.style.display ="block"
})
}


// select back project box

const chooseBoxes = document.querySelectorAll(".choose-box")
const radioInput = document.querySelectorAll('input[type="radio"]')
const checkedBox = document.querySelectorAll('.checked-box')
const radioChecked = document.querySelectorAll(".radio-checked")

for(let i=0; i<=radioChecked.length-1; i++)
{
    radioChecked[i].addEventListener('click',()=>{
        if(checkedBox[i].classList.contains('opened-pledge'))
        {
            checkedBox[i].classList.remove('opened-pledge')
            chooseBoxes[i].style.border = "0.1vw solid var(--DarkGray)"
        }
        else
        {
        checkedBox[i].classList.add('opened-pledge')
        chooseBoxes[i].style.border = "0.1vw solid var(--ModerateCyan)"
        }
    })
}




// got it button

const successOverlay = document.querySelector(".success-validation")
const successButton = document.querySelector("#success-got-it-button")

successButton.addEventListener('click',()=>{
    backProjectOverlay.style.display = "none"
    darkerBackgroundBackProject.style.display = "none"
    successOverlay.style.display = "none"
})