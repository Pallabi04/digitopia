var packageTrackerApp = angular.module('packageTrackerApp', ['ngTable']);

packageTrackerApp.controller('MainController', ['NgTableParams', '$http', function(NgTableParams, $http) {
    var self = this;
    // $http.get("http://starlord.hackerearth.com/cognizantinternal/trackr")
    //     .then(function(response) {
    //         var data = response.data.parcels;
    //     });
    self.hideImage = true;
    self.showMoreContent = false;

    self.parcels = [{
        "name": "Airwick Aroma Oil",
        "image": "http:\/\/n2.sdlcdn.com\/imgs\/a\/r\/o\/Airwick-Aroma-Oil-Refill-Pack-SDL286969364-12-2ac2e.jpg",
        "date": "1440937805",
        "type": "household",
        "weight": "0.6kg",
        "phone": "7553472627",
        "price": "274",
        "quantity": "2",
        "color": "#FF4747",
        "link": "https:\/\/www.google.co.in\/search?q=Airwick+Aroma+Oil&oq=Airwick+Aroma+Oil",
        "live_location": {
            "latitude": 12.941143,
            "longitude": 77.606938
        }
    }, {
        "name": "Canon EOS 6D",
        "image": "http:\/\/n3.sdlcdn.com\/imgs\/a\/i\/q\/Canon-EOS-6D-DSLR-24-1767357-1-1b0fd.jpg",
        "date": "1441252983",
        "type": "Camera",
        "weight": "0.77kg",
        "phone": "9732543391",
        "price": "142034",
        "quantity": "1",
        "color": "#7A7171",
        "link": "https:\/\/www.google.co.in\/search?q=Canon+EOS+6D&oq=Canon+EOS+6D",
        "live_location": {
            "latitude": 18.531867,
            "longitude": 73.846649
        }
    }, {
        "name": "Vegetable Chopper",
        "image": "http:\/\/n3.sdlcdn.com\/imgs\/a\/3\/l\/Noorstore-Green-Vegetable-Chopper-SDL823034672-1-f0e72.jpg",
        "date": "1441414923",
        "type": "household",
        "weight": "0.3kg",
        "phone": "7809942497",
        "price": "601",
        "quantity": "1",
        "color": "#B0F542",
        "link": "https:\/\/www.google.co.in\/search?q=Green+Vegetable+Chopper&oq=Green+Vegetable+Chopper",
        "live_location": {
            "latitude": 19.081116,
            "longitude": 72.872082
        }
    }, {
        "name": "Calvin Klein One",
        "image": "http:\/\/n1.sdlcdn.com\/imgs\/a\/i\/g\/Calvin-Klein-One-Shock-200-SDL115301666-1-f1f27.jpg",
        "date": "1440922026",
        "type": "Fragrances",
        "weight": "0.6kg",
        "phone": "7542424994",
        "price": "5874",
        "quantity": "3",
        "color": "#FC9FEB",
        "link": "https:\/\/www.google.co.in\/search?q=Calvin+Klein+One+Shock&oq=Calvin+Klein+One+Shock",
        "live_location": {
            "latitude": 28.619439,
            "longitude": 77.203521
        }
    }, {
        "name": "Note 4 32GB",
        "image": "http:\/\/n1.sdlcdn.com\/imgs\/a\/o\/3\/Samsung-Note-4-White--SDL740147488-1-1b4b0.jpg",
        "date": "1441854245",
        "type": "Electronics",
        "weight": "0.4kg",
        "phone": "8690364311",
        "price": "40999",
        "quantity": "1",
        "color": "#FFFFFF",
        "link": "https:\/\/www.google.co.in\/search?q=note+4&oq=note+4#safe=active&q=note+4+white",
        "live_location": {
            "latitude": 13.082366,
            "longitude": 80.269323
        }
    }, {
        "name": "Mac Mini MGEQ2HN\/A",
        "image": "http:\/\/n4.sdlcdn.com\/imgs\/a\/o\/0\/Apple-MGEQ2HN-A-Mac-Mini-SDL876750836-2-72cf1.jpg",
        "date": "1441966830",
        "type": "Electronics",
        "weight": "1.3kg",
        "phone": "9646831150",
        "price": "68,352",
        "quantity": "1",
        "color": "#B3B3B3",
        "link": "https:\/\/www.google.co.in\/search?q=mac+mini+MGEQ2HN%2FA&oq=mac+mini+MGEQ2HN%2FA",
        "live_location": {
            "latitude": 22.575691,
            "longitude": 88.359626
        }
    }, {
        "name": "Pebble Steel Smart Watch",
        "image": "http:\/\/n3.sdlcdn.com\/imgs\/a\/1\/1\/Pebble-Steel-Smart-Watch-SDL174768273-1-0b969.jpg",
        "date": "1440922811",
        "type": "Electronics",
        "weight": "0.1kg",
        "phone": "7190804197",
        "price": "10000",
        "quantity": "1",
        "color": "#E3CB9F",
        "link": "https:\/\/www.google.co.in\/search?q=pebble+time&oq=pebble+time",
        "live_location": {
            "latitude": 24.818236,
            "longitude": 93.935216
        }
    }, {
        "name": "TRESemme Shampoo",
        "image": "http:\/\/n4.sdlcdn.com\/imgs\/a\/l\/j\/Tresemme-Keratin-Smooth-Shampoo-600-SDL506080572-1-be887.jpg",
        "date": "1441069261",
        "type": "household",
        "weight": "1.28kg",
        "phone": "7961459392",
        "price": "800",
        "quantity": "2",
        "color": "#E36F6F",
        "link": "https:\/\/www.google.co.in\/search?q=TRESemme+Keratin+Smooth&oq=TRESemme+Keratin+Smooth",
        "live_location": {
            "latitude": 34.159386,
            "longitude": 77.570253
        }
    }, {
        "name": "Raspberry Pi 2",
        "image": "http:\/\/n2.sdlcdn.com\/imgs\/a\/l\/7\/Raspberry-Pi-Model-B-Plus-SDL455674881-1-03d82.jpg",
        "date": "1441879810",
        "type": "Electronics",
        "weight": "0.4kg",
        "phone": "7385833578",
        "price": "10400",
        "quantity": "4",
        "color": "#2F8035",
        "link": "https:\/\/www.google.co.in\/search?q=raspberry+pi+1gb+quad+core&oq=raspberry+pi+1gb+quad+core",
        "live_location": {
            "latitude": 32.226542,
            "longitude": 76.315904
        }
    }, {
        "name": "Dell U2414H 24\"",
        "image": "http:\/\/n4.sdlcdn.com\/imgs\/a\/j\/e\/Dell-UltraSharp-U2414H-24-Inches-SDL219157743-1-38eef.JPG",
        "date": "1441879810",
        "type": "Electronics",
        "weight": "3.61kg",
        "phone": "7670386267",
        "price": "18950",
        "quantity": "1",
        "color": "#EBF0EB",
        "link": "https:\/\/www.google.co.in\/search?q=U2414H&oq=U2414H",
        "live_location": {
            "latitude": 15.332174,
            "longitude": 73.900285
        }
    }, {
        "name": "JBL Flip 2",
        "image": "http:\/\/n4.sdlcdn.com\/imgs\/a\/i\/t\/JBL-Flip-2-Wireless-Portable-SDL028764616-1-a7991.jpg",
        "date": "1441879810",
        "type": "Electronics",
        "weight": "0.3kg",
        "phone": "7789033215",
        "price": "5400",
        "quantity": "1",
        "color": "#3A63E8",
        "link": "https:\/\/www.google.co.in\/search?q=jbl+flip+ii+blue&oq=jbl+flip+ii+blue",
        "live_location": {
            "latitude": 11.912153,
            "longitude": 79.807765
        }
    }];

    self.showMore = function(event) {
        if(angular.element(event.target).parentsUntil(angular.element("panel-info"), '.panel').find('img').hasClass('showImage')) {
            angular.element(event.target).find('.glyphicon-chevron-up').addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
            angular.element(event.target).parentsUntil(angular.element("panel-info"), '.panel').find('img').addClass('hideImage').removeClass('showImage');
            angular.element(event.target).parentsUntil(angular.element("panel-info"), '.panel').find('.hideContent').addClass('showContent').removeClass('hideContent');
        } else {
            angular.element(event.target).find('.glyphicon-chevron-down').addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
            angular.element(event.target).parentsUntil(angular.element("panel-info"), '.panel').find('img').addClass('showImage').removeClass('hideImage');
            angular.element(event.target).parentsUntil(angular.element("panel-info"), '.panel').find('.showContent').addClass('hideContent').removeClass('showContent');

        }

    }

    self.showMap = function(locations) {
        var latlng = new google.maps.LatLng(locations.latitude, locations.longitude),
            image = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png';

        var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(locations.latitude+0.005, locations.longitude-0.0125),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }

        self.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        marker = new google.maps.Marker({
            position: latlng,
            map: self.map,
            icon: image
        });
    }
    
    self.mySortFunction = function(item) {
        if(isNaN(item[self.sortExpression])) {
            return item[self.sortExpression];
        }
        return parseInt(item[self.sortExpression]);
    }

}]);
