var menu_click = true;

if(_(".vertical"))_(".menu-icon").on("click", function(){
  menu_click = !menu_click;

  if(menu_click) {
    _(".menu")[0].style.transform = "translate3d(-150px,0,0)";
    _(".menu")[0].style.WebkitTransform = "translate3d(-150px,0,0)";
    _(".menu-object").removeClass("motion fade-in", function(){
      _(".menu-object").addClass("motion fade-out");
    });
    this.style.transform = "rotate(0deg)";
    this.style.WebkitTransform = "rotate(0deg)";
    this.style.color = "#000";
  } else {
    _(".menu")[0].style.transform = "translate3d(0px,0,0)";
    _(".menu")[0].style.WebkitTransform = "translate3d(0px,0,0)";
    _(".menu-object").removeClass("motion fade-out", function(){
      setTimeout(function(){
        _(".menu-object").addClass("motion fade-in");
      }, 200);
    });
    this.style.transform = "rotate(90deg)";
    this.style.WebkitTransform = "rotate(90deg)";
    this.style.color = "#FFF";
  }
});

_.resize(
  "_('body').scale().center('h')",
  "_('.menu-icon').scale({x:[85,65],y:[55,35],pos:['left','top']})"
);
