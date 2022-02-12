    document.querySelector(".hamburger-menu").addEventListener("click", () => {
      document.querySelector(".container").classList.toggle("change");
    });

    $(".accordian-container").click(function() {
      $(".accordian-container").children(".body").slideUp();
      $(".accordian-container").removeClass("active")
      $(".accordian-container").children(".head").children("span").removeClass("fa-angle-down").addClass("fa-angle-up")
      $(this).children(".body").slideDown();
      $(this).addClass("active")
      $(this).children(".head").children("span").removeClass("fa-angle-up").addClass("fa-angle-down")
    })