e$(document).ready(function () {


    $("#page-content").show()
   
   
    $('#LoadMe').load('views/home.html');
  

    setTimeout(function () { $('#jquery-slider').load('views/jquery-slider.html'); }, 100);
    
   

    $('.dropper').click(function () {

        var href = $(this).attr('href')

        switch (href) {
            case '/home':

                $('#LoadMe').load('views/home.html');
                $('#jquery-slider').load('views/jquery-slider.html');


                break;
        

            case '/bumblebee':

                $('#LoadMe').load('views/bumblebee.html');

                break;
            case '#/centrifuge':

                $('#LoadMe').load('views/centrifuge.html');

                break;
            case '/beesure':

                $('#LoadMe').load('views/beesure.html');

                break;
            case '/bnx1536':

                $('#LoadMe').load('views/bnx1536.html');

                break;

            case '/nanodrop':

                $('#LoadMe').load('views/nanodrop.html');

                break;
            case '#/hive':

                $('#LoadMe').load('views/hive.html');

                break;
            case '/systems':

                $('#LoadMe').load('views/systems.html');

                break;

            case '/VWorks':

                $('#LoadMe').load('views/VWorks.html');

                break;

            case '/synapsis':

                $('#LoadMe').load('views/Synapsis.html');

                break;

            case '/about':

                $('#LoadMe').load('views/about.html');

                break;

            case contact':

                $('#LoadMe').load('views/contact.html');

                break;
            case '#/careers':

                $('#LoadMe').load('views/careers.html');

                break;

            case '/partnership':

                $('#LoadMe').load('views/partnership.html');

                break;




        }

        //$('#LoadMe').load($(this).attr('href'));
     
        return false;
    });

});

$(window).load(function () {

    $("#page-content").show()
});