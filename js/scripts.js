/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const theme = {
    // Fonction d'initialisation
    init () {
        // Sélectionne le bouton avec l'ID "theme-switch" et l'attribue à theme.button
        theme.button = document.querySelector("#theme-switch");
  
        // Ajoute un écouteur d'événements "click" sur le bouton qui appelle handleClick lorsque le bouton est cliqué
        theme.button.addEventListener("click", theme.handleClick);
    },
  
    // Fonction gérant le clic sur le bouton
    handleClick () {
        // Sélectionne l'élément <body> de la page et l'attribue à theme.body
        theme.body = document.querySelector("body");
        theme.main = document.querySelector("main");
        theme.about = document.querySelector(".about");
        
     
        
  
        // Ajoute ou supprime la classe "theme-dark" de l'élément <body> pour basculer entre les thèmes clair et sombre
        theme.body.classList.toggle("theme-dark");
        theme.main.classList.toggle("theme-dark");
        theme.about.classList.toggle("theme-dark");
    
    }
  };
  
  // Appelle la fonction d'initialisation pour mettre en place le bouton et les écouteurs d'événements
  theme.init();