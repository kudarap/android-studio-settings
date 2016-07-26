// device ready
angular.element(document).ready(function () {
    if (window.cordova) {
        console.log("Running in Cordova, will bootstrap AngularJS once 'deviceready' event fires.");

        document.addEventListener('deviceready', function () {
            console.log("Deviceready event has fired, bootstrapping AngularJS.");
            angular.bootstrap(document.body, ['phonegle']);

            // remove backdrop
            $('div.load-backdrop').addClass('hide');
        }, false);
    } else {
        console.log("Running in browser, bootstrapping AngularJS now.");
        angular.bootstrap(document.body, ['phonegle']);

        // remove backdrop
        $('div.load-backdrop').addClass('hide');
    }
});