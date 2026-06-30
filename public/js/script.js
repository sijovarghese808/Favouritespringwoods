//Responsive tabs scripts starts

$(document).ready(function () {
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion           
        width: 'auto', //auto or any width like 600px
        fit: true,   // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        activate: function (event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
    $('#verticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
    });
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

//resposive tabs scripts ends
//footer form script	
jQuery('#footer_Enquiry').validate({

    errorClass: 'error1',
    focusInvalid: false,
    errorElement: "div",

    rules: {
        fot_name: "required",
        fot_phone: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true

        }
    },
    messages: {
    },


    submitHandler: function (form) {

        //jQuery("input[type=submit]").val('Processing...');
        // jQuery("input[type=submit]").attr("disabled", "disabled");

        var name = jQuery('#fot_name').val();
        var email = jQuery('#fot_email').val();
        var phone = jQuery('#fot_phone').val();
        const payload = {

            name: name,
            phone: phone,
            email: email,
            propertyName: 'Favourite Spring Woods'
        }

        const url = "https://email-server.springwoods-favouritehomes.com/send-mail";
        // const url = "http://localhost:7030/send-mail"
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).then(
            response => { return response.json() }
        ).then((res) => {
            console.log('response', res)
            var msg = res;
            if(msg.error==true){
                 alert("Error sending mail");
             }
             else{
                 alert("Mail sent successfully"); 
             }
        }
        )
        //doument.getElementById("#footer_Enquiry").reset();
        //jQuery("input[type=submit]").val('Submit');
        //jQuery('#replyMsgfot').html('Thank You for your enquiry! One of Our representatives will contact you soon').css({'color':'green'}); 
        $('#footer_Enquiry')[0].reset();



    }
});
//footer form scripts ends
//magnetic popup script starts
$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return '<small>Favorite homes</small>';
            }
        }
    });
});
//magnetic popup script ends here


//map scripts starts
function init_map(lat, lng, containerId) {
    lat = lat || 8.499110;
    lng = lng || 76.946052;
    var var_location = new google.maps.LatLng(lat, lng);

    var var_mapoptions = {
        center: var_location,
        zoom: 16,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        styles: [
            {
                "featureType": "landscape",
                "stylers": [
                    { "saturation": -100 },
                    { "lightness": -3 },
                    { "visibility": "on" }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    { "saturation": -100 },
                    { "lightness": 51 },
                    { "visibility": "simplified" }
                ]
            },
            {
                "featureType": "road.highway",
                "stylers": [
                    { "saturation": -100 },
                    { "visibility": "simplified" }
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [
                    { "saturation": -100 },
                    { "lightness": 30 },
                    { "visibility": "on" }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    { "saturation": -100 },
                    { "lightness": 40 },
                    { "visibility": "on" }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    { "saturation": -100 },
                    { "visibility": "simplified" }
                ]
            },
            {
                "featureType": "administrative.province",
                "stylers": [
                    { "visibility": "off" }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    { "visibility": "on" },
                    { "lightness": -25 },
                    { "saturation": -100 }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    { "hue": "#ffff00" },
                    { "lightness": -25 },
                    { "saturation": -97 }
                ]
            }
        ]
    };

    var var_map = new google.maps.Map(document.getElementById(containerId),
        var_mapoptions);

    var iconBase = 'https://www.favouritehomes.com/wp-content/themes/favourite-homes/images/';
    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        icon: iconBase + 'Location_logo.png'
    });

    var_marker.setMap(var_map);

}

//      google.maps.event.addDomListener(window, 'load', init_map);

$(document).ready(function () {
    //init_map(8.499110, 76.946052, "map-container-1");  march 26-03-2018
});

//    $('a[href="#location"]').on('click', function () {
//        init_map(40.372264, -75.946858);
//    });
//    var mapTabs = $('#mapTabs');
//    mapTabs.on('click', '.map-tab', function(){
//        var click = $(this);
//        mapTabs.find('.front').removeClass('front');
//        click.addClass('front');
//        var latLng = click.attr('data-location').split(',');
//        init_map(latLng[0], latLng[1]);
//    })


$('#myModal').on('shown.bs.modal', function (e) {
    init_map(8.640696, 76.896061, "Popup-map");
})

//map scripts ends
//project enquiry scripts starts

jQuery('#projectEnquiry').validate({

    errorClass: 'error1',
    focusInvalid: false,
    errorElement: "div",

    rules: {
        name: "required",
        phone: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true
        }
    },

    messages: {

    },


    submitHandler: function (form) {

        //jQuery("input[type=submit]").val('Processing...');
        // jQuery("input[type=submit]").attr("disabled", "disabled");

        var name = jQuery('#prj_name').val();
        var email = jQuery('#prj_email').val();
        var phone = jQuery('#prj_phone').val();
        var message = jQuery('#prj_message').val();
        $('.modal').removeClass('in');
        $('.modal').attr("aria-hidden","true");
        $('.modal').css("display", "none");
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
        
        const payload = {

            name: name,
            phone: phone,
            email: email,
            propertyName: 'Favourite Spring Woods',
            message:message
        }

        const url = "https://email-server.springwoods-favouritehomes.com/send-mail";
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(
            response => {return response.json()}
        ).then( (res)=>{
            console.log('response' ,res )
            var msg = res;
           if(msg.error==true){
                alert("Error sending mail");
            }
            else{
                alert("Mail sent successfully"); 
            }
        }
        )
        //doument.getElementById("#footer_Enquiry").reset();
        //jQuery("input[type=submit]").val('Submit');
        //jQuery('#replyMsgfot').html('Thank You for your enquiry! One of Our representatives will contact you soon').css({'color':'green'}); 
        $('#projectEnquiry')[0].reset();


    }
});


function setProjectName(projectName) {
    $('#project_name').val(projectName);

}


//project enquiry scripts starts
//popup form

jQuery('#popup-form').validate({

    errorClass: 'error1',
    focusInvalid: false,
    errorElement: "div",

    rules: {
        name: "required",
        phone: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true
        }
    },

    messages: {

    },


    submitHandler: function (form) {

        //jQuery("input[type=submit]").val('Processing...');
        // jQuery("input[type=submit]").attr("disabled", "disabled");

        var name = jQuery('#prj_name1').val();
        var email = jQuery('#prj_email1').val();
        var phone = jQuery('#prj_phone1').val();
        var message = jQuery('#prj_message1').val();
        $('#disc-bg').hide();
        
        const payload = {

            name: name,
            phone: phone,
            email: email,
            propertyName: 'Favourite Spring Woods',
            message:message
        }

        const url = "https://email-server.springwoods-favouritehomes.com/send-mail";
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(
            response => {return response.json()}
        ).then( (res)=>{
            console.log('response' ,res )
            var msg = res;
           if(msg.error==true){
                alert("Error sending mail");
            }
            else{
                alert("Mail sent successfully"); 
            }
        }
        )
        //doument.getElementById("#footer_Enquiry").reset();
        //jQuery("input[type=submit]").val('Submit');
        //jQuery('#replyMsgfot').html('Thank You for your enquiry! One of Our representatives will contact you soon').css({'color':'green'}); 
        $('#popup-form')[0].reset();


    }
});


function setProjectName(projectName) {
    $('#project_name').val(projectName);

}
