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

portfolioItemArray = [];
portfolioItemArray.push(document.getElementById("blockchainSocialMedia"))
portfolioItemArray.push(document.getElementById("socialMediaApp"))
//portfolioItemArray.push(document.getElementById("crashBot"))
portfolioItemArray.push(document.getElementById("pygame"))

var temp;
const closeAllPortfolio = () => {
    temp.style.display ='none';
    portfolioItems.style.display='none';
}

document.getElementById("closePortfolio").addEventListener('click', closeAllPortfolio);

const togglePortfolioApp = (evt) => {
    var buttonId = evt.currentTarget.myParam;
    if (document.getElementById(buttonId+"Class").style.display == ''){
        document.getElementById(buttonId+"Class").style.display='none';
        portfolioItems.style.display='none';
    }else{
        for (var x = 0; x < portfolioItemArray.length; x++){
            if(portfolioItemArray[x].id == buttonId){
                portfolioItems.style.display='';
                document.getElementById(portfolioItemArray[x].id+"Class").style.display='';
                temp = document.getElementById(portfolioItemArray[x].id+"Class");
                document.getElementById("portfolioItems").scrollIntoView();
            }else{
                document.getElementById(portfolioItemArray[x].id+"Class").style.display='none';
            }
        }
    }
}



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