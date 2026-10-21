$(document).ready(function(){

/* HERO SWIPER */

if ($(".heroSlider").length && typeof Swiper !== "undefined") {

new Swiper(".heroSlider",{

loop:true,

autoplay:{
delay:4000,
disableOnInteraction:false
},

speed:900,

pagination:{
el:".swiper-pagination",
clickable:true
}

});

}

$(document).ready(function(){

/* LOGIN DROPDOWN */

$(".login-icon").click(function(e){

e.stopPropagation();
$(".login-dropdown").slideToggle(200);

});

/* NAV MENU DROPDOWN */

$(".menu-toggle").click(function(e){

e.stopPropagation();
$(".nav-dropdown").slideToggle(200);

});

/* CLOSE WHEN CLICK OUTSIDE */

$(document).click(function(e){

if(!$(e.target).closest(".login-area").length){
$(".login-dropdown").slideUp(200);
}

if(!$(e.target).closest(".menu-toggle, .nav-dropdown").length){
$(".nav-dropdown").slideUp(200);
}

});

});

/* -----------------------
DARK MODE
----------------------- */

$("#darkToggle").click(function(){
$("body").toggleClass("dark-mode");
});

/* -----------------------
SEARCH EVENTS
----------------------- */

$(".search-bar input").on("keyup", function(){

var value = $(this).val().toLowerCase();

$(".event-card").each(function(){

var text = $(this).text().toLowerCase();

$(this).toggle(text.indexOf(value) > -1);

});

});

/* -----------------------
EVENT FILTER
----------------------- */

$(".filter-btn").click(function(){

var value=$(this).attr("data-filter");

$(".filter-btn").removeClass("active");
$(this).addClass("active");

if(value=="all"){
$(".event-card").fadeIn();
}else{
$(".event-card").hide();
$("."+value).fadeIn();
}

});

/* -----------------------
SMOOTH SCROLL
----------------------- */

$("nav a").click(function(e){

var target=$(this.hash);

if(target.length){

e.preventDefault();

$("html, body").animate({

scrollTop:target.offset().top-60

},800);

}

});

/* -----------------------
STICKY NAVBAR
----------------------- */

$(window).scroll(function(){

if($(this).scrollTop()>50){
$("header").addClass("scrolled");
}else{
$("header").removeClass("scrolled");
}

});

/* -----------------------
COUNTER ANIMATION
----------------------- */

var counterStarted=false;

$(window).scroll(function(){

if($("#stats").length){

var statsOffset=$("#stats").offset().top-window.innerHeight;

if(!counterStarted && $(window).scrollTop()>statsOffset){

$(".counter").each(function(){

var $this=$(this);
var target=$this.data("target");

$({countNum:0}).animate(
{countNum:target},
{
duration:2000,
step:function(){
$this.text(Math.floor(this.countNum));
},
complete:function(){
$this.text(this.countNum);
}
});

});

counterStarted=true;

}

}

});

/* -----------------------
AOS ANIMATION
----------------------- */

if(typeof AOS!=="undefined"){

AOS.init({
duration:1000,
once:true
});

}

});

$(document).ready(function(){

AOS.init({
duration:1000,
once:true
});

/* COUNTER */

var started=false;

$(window).scroll(function(){

var offset=$(".about-stats").offset().top-window.innerHeight;

if(!started && $(window).scrollTop()>offset){

$(".counter").each(function(){

var $this=$(this);
var target=$this.data("target");

$({countNum:0}).animate(
{countNum:target},
{
duration:2000,
step:function(){
$this.text(Math.floor(this.countNum));
},
complete:function(){
$this.text(this.countNum);
}
});

});

started=true;

}

});

});

/* EVENT FILTER */

$(".filter-btn").click(function(){

var value=$(this).attr("data-filter");

$(".filter-btn").removeClass("active");
$(this).addClass("active");

if(value=="all"){
$(".event-card").show(300);
}else{
$(".event-card").hide();
$("."+value).show(300);
}

});

/* PAGE TRANSITION */

$("a").click(function(e){

var link=$(this).attr("href");

if(link && link.indexOf("#") !== 0){

e.preventDefault();

$(".page-transition").css({
transform:"translateY(-100%)",
transition:"0.6s"
});

setTimeout(function(){

window.location=link;

},600);

}

});