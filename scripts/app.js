// < nav bar scripts

// ? Features Menu open close
let Features = document.querySelectorAll(".FeaturesClick");
let FeaturesMenu = document.querySelector(".Features_Menu");
let FeaturesArrow = document.querySelector(".FeaturesArrow")
let LinkIsActive = document.querySelectorAll(".LinkIsActive")

Features.forEach(feature => {
    feature.addEventListener("click", () => {
        FeaturesMenu.classList.toggle('active');
        FeaturesArrow.classList.toggle('Rotate')
        CompanyMenu.classList.remove('active')
        CompanyArrow.classList.remove('Rotate')
    });
});

LinkIsActive.forEach(LinkActive =>{
    LinkActive.addEventListener("click", () => {
        FeaturesMenu.classList.remove('active')
        FeaturesArrow.classList.remove('Rotate')
    })
})
// ? Company Menu open close
let Company = document.querySelectorAll(".CompanyClick")
let CompanyMenu = document.querySelector(".Company_menu")
let CompanyArrow = document.querySelector(".CompanyArrow")


Company.forEach(company => {
    company.addEventListener("click" , () => {
        CompanyMenu.classList.toggle('active')
        CompanyArrow.classList.toggle('Rotate')
        FeaturesMenu.classList.remove('active')
        FeaturesArrow.classList.remove('Rotate')
    })
})
// ? Responsive Menu open close
let BurgerMenu = document.querySelectorAll('.BurgerMenu')
let ResponsiveMenuClose = document.querySelectorAll('.ResponsiveMenuClose')
let ResponsiveMenu = document.querySelector('.Responsive_Menu')

BurgerMenu.forEach(burgermenu =>{
    burgermenu.addEventListener("click" , () =>{
        ResponsiveMenu.classList.toggle('active')
    })
})

ResponsiveMenuClose.forEach(MenuClose =>{
    MenuClose.addEventListener("click" , () =>{
        ResponsiveMenu.classList.remove('active')
    })
})

// ? responsive menu Feature Menu open close
let RespFeatureMenuOpenClose = document.querySelectorAll('.RespFeatureMenuOpenClose')
let ResponsiveMenuFeatureMenu = document.querySelector('.Features_MenuResponse')
let FeaturesArrowResp = document.querySelector('.FeaturesArrowResp')


RespFeatureMenuOpenClose.forEach(FeatureOpenClose => {
    FeatureOpenClose.addEventListener("click" , () => {
        ResponsiveMenuFeatureMenu.classList.toggle('active')
        FeaturesArrowResp.classList.toggle('Rotate')
    })
})