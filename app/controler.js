var bionexControllers = angular.module('bionexControllers', ['ngAnimate', 'ui.bootstrap']);
function NavBarCtrl($scope) {

    $scope.isCollapsed = true;
}

function adjustThumbnails() {

    var tn1 = $("#thumbnail-1").height();
    //alert(tn1)
    var tn2 = $("#thumbnail-2").height();

    var tn3 = (tn1 - tn2) - 24;

    //if (tn1 > tn2) {
    //    $("#thumbnail-1").height(tn1);
    //    $("#thumbnail-2").height(tn1);
    //} else {
    //    $("#thumbnail-1").height(tn2);
    //    $("#thumbnail-2").height(tn2);



    //}


    //$("#thumbnail-2").height(296);
    //$("#thumbnail-3").height(296);

   // $("#thumbnail-3").height(tn3);

   


}

$(window).load(function () {
    $("#page-content").show();
    setTimeout(function () { adjustThumbnails() }, 500);


});



$(window).resize(function () {
    adjustThumbnails();
});


bionexControllers.controller('MainCtrl', function ($scope, $rootScope, $location) {



    //--This closes the navbar dropdown when you click  on a link, also scrolls the page to the top
    $(".dropper").click(function () {

        $("nav").removeClass("dropdown-onhover");
        $("li.dropdown-full.open").removeClass("open");
    });

    adjustThumbnails();
    $scope.showBackground = true;

    $scope.adjustThumbnails = function () {


        adjustThumbnails();

    }

    $rootScope.$on("$locationChangeStart", function (event, next, current) {
        $("body").scrollTop(0);
        adjustThumbnails();

    });

    $scope.hidebackground = function () {
        $scope.bodyStyle = {
            "background-image": "none"
        }
    }

    $scope.myInterval = 8000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];

    //slides.push({
    //    image: 'Images/sliders/laser-slider.png',
    //    href: 'stinger.html'

    //});
    //slides.push({
    //    image: 'Images/sliders/hive-slider.png',
    //    href: 'hive.html'

    //});

    slides.push({
        image: 'Images/sliders/hive-slider.png',
        href: 'hive.html'
    });

    slides.push({
        image: 'Images/sliders/laser.png',
        href: 'hibeam.html'
    });


    //slides.push({
    //    image: 'Images/sliders/BeeSmartKart.png',
    //    href: 'hive.html'

    //});


        slides.push({
        image: 'Images/sliders/bumblebee-slider.png',
        href: 'bumblebee.html'
    });


    //slides.push({
    //    image: 'Images/sliders/hig-slider.png',
    //    href: 'centrifuge.html'
    //});
    //slides.push({
    //    image: 'Images/sliders/beessure-slider.png',
    //    href: 'beesure.html'
    //});
    //slides.push({
    //    image: 'Images/sliders/BNX1536-slider.png',
    //    href: 'bnx1536.html'
    //});
    //slides.push({
    //    image: 'Images/sliders/nanodrop-slider.png',
    //    href: 'nanodrop.html'
    //});
    //slides.push({
    //    image: 'Images/sliders/direct-drive-slider.png',
    //    href: 'systems.html'
    //});


});


