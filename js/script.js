 $(document).on("click", ".dlistlast a", function () {
        //var dataSrc = $(this).attr("data-src");
        var datalat = $(this).attr("data-lat");
        var datalong = $(this).attr("data-long");
        var datadealername = $(this).attr("data-dealername");
        var dataaddress = $(this).attr("data-address");
        var datacity = $(this).attr("data-city");

        // alert(datalat + ',' + datalong);
        if (datalat != null && datalong != null) {
            myMap(datalat, datalong, datadealername, dataaddress, datacity);
        }
        //alert(dataSrc);
        //$(".mapid iframe").attr('src', dataSrc);
        $(".mapSection").show();
        //$('#googleMap').show();
    });
    //$(".mapClose").click(function () {
    //    $(".mapSection").hide();
    //});
    $(document).on("click", ".mapClose", function () {
        $(".mapSection").hide();
    });
    $(".currentlocation").click(function () {
        var token = $('input[name="__RequestVerificationToken"]').val();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var lat = pos.lat;
                var lon = pos.lng;
                // alert(lat + ":::" + lon);
                $.ajax({
                    type: "GET",
                    url: "getlanloncity",
                    data: { lat: lat, lon: lon },
                    //headers: { "RequestVerificationToken": token },
                    success: function (response) {
                        var stateid = (response.stateid);
                        var cityid = (response.cityid);
                        BindRACB_DealerMaster(stateid, cityid, "0", "0");
                    },
                });
                //map = new google.maps.Map(document.getElementById('map'), {
                //    center: pos,
                //    zoom: 10
                //});
                //bounds.extend(pos);

                //infoWindow.setPosition(pos);
                //infoWindow.setContent('Location found for Nissan.');
                //infoWindow.open(map);
                //map.setCenter(pos);

                // Call Places Nearby Search on user's location
                //getNearbyPlaces(pos);
            }, () => {
                // Browser supports geolocation, but user has denied permission
                handleLocationError(true, infoWindow);
            });
        } else {

            // Browser doesn't support geolocation
            handleLocationError(false, infoWindow);
        }
    });