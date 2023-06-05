const theme = {
  // Fonction d'initialisation
  init: function () {
      // Sélectionne le bouton avec l'ID "theme-switch" et l'attribue à theme.button
      theme.button = document.querySelector("#theme-switch");

      // Ajoute un écouteur d'événements "click" sur le bouton qui appelle handleClick lorsque le bouton est cliqué
      theme.button.addEventListener("click", theme.handleClick);
  },

  // Fonction gérant le clic sur le bouton
  handleClick: function () {
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

