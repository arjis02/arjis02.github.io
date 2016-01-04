(function(){
  generateHTML();

  $(document).ready(function(){
    $('.my-name').fadeIn("slow");
    $('.headlogolinks a').hover(fadeInLink, fadeOutLink);
    $('.menu-button').on('click', showMainContent);
    $('a.node').on('click', expandListToggle);
    $('.about-me').on('click', toggleAboutMeContent);
  });

  function fadeInLink() {
    $(this).fadeTo("fast", 1.0);
  }

  function fadeOutLink() {
    $(this).fadeTo("fast", 0.6);
  }

  function showMainContent() {
    $(".main-content").fadeIn();
    $('.menu-button').hide();
    $('.logo').fadeIn();
  }

  function expandListToggle() {
    $(this).toggleClass("expanded");
    $(this).next('ul').toggle('fast');
  };

  function toggleAboutMeContent() {
    $('.about-me-content').slideToggle();
  }
})();
