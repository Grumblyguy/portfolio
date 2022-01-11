const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');



var children = document.getElementById("skillCardContainer").children;
var dict = {}
const toggleIt = (evt) => {
    var temp = document.querySelector(dict[evt.currentTarget.myParam]);
    console.log("togglingit");
    temp.classList.toggle("toggleText");
}

const addListener = () => {
    staticLogo.myParam = staticLogo.id;
    staticLogo.addEventListener('mouseenter', toggleIt, false);
    staticLogo.addEventListener('mouseleave', toggleIt, false);
}

var staticLogo;
for (var i = 0; i < children.length; i++) {
    var temp = children[i].id.replace("Container", "");
    staticText = '.' + temp + 'Text';
    staticLogo = children[i];
    dict[staticLogo.id] = staticText;
    addListener();
  }

const toggleAll = () => {
    for (elem in dict){
        temp = document.querySelector(dict[elem]);
        temp.classList.toggle("toggleText");
    }
}
var portfolioItems = document.querySelector(".portfolioItems");
portfolioItems.style.display = 'none';
var currentPortfolioItem = 'none'

const togglePortfolioApp = (evt) => {
    var buttonId = evt.currentTarget.myParam;
    if (portfolioItems.style.display == 'none' || buttonId != currentPortfolioItem){
        portfolioItems.style.display='';
        console.log(buttonId);
        document.getElementById(buttonId+"Class").style.display='';
        if (currentPortfolioItem != 'none'){
            console.log("hiding previous")
            document.getElementById(currentPortfolioItem+"Class").style.display='none';
        }

        currentPortfolioItem = buttonId;
        portfolioItems.scrollIntoView();
    }else {
        portfolioItems.style.display='none';
        currentPortfolioItem = 'none';
    }
    
    
}
portfolioItemArray = [];
portfolioItemArray.push(document.getElementById("socialMediaApp"))
portfolioItemArray.push(document.getElementById("crashBot"))
portfolioItemArray.push(document.getElementById("cryptoTradingBot"))
portfolioItemArray.push(document.getElementById("sudokuSolver"))

for (var x = 0; x < portfolioItemArray.length; x++){
    document.getElementById(portfolioItemArray[x].id+"Class").style.display='none';
    portfolioItemArray[x].addEventListener('click',togglePortfolioApp)
    portfolioItemArray[x].myParam=portfolioItemArray[x].id;
}
/*socialMediaAppButton.addEventListener('click', togglePortfolioApp);
socialMediaAppButton.myParam=socialMediaAppButton.id;
*/

var skillsText = document.querySelector(".skillsText");
skillsText.addEventListener('mouseenter', toggleAll, false);
skillsText.addEventListener('mouseleave', toggleAll, false);
/*
var pythonText = document.querySelector('.pythonText');
var pythonLogo = document.querySelector('#pythonlogo');
pythonLogo.addEventListener('mouseenter', toggleIt);
pythonLogo.addEventListener('mouseleave', toggleIt);
*/