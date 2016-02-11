directive('hideHeader', ['$window', function ($window) {
    return {
        restrict: 'AE',
        scope: {
            elm: '@', // elm to check offset for
            toggleClass: '@', // class to toggle when after @elm
            hideAfter: '@', // value after which the element gets a new class
            hideClass: '@' // class to toggle when after @elm and after @hideAfter
        },
        link: function (scope, element, attrs) {
            var rect = $(element).offset();
            var elmOffsetBottom = $(scope.elm).innerHeight();
            var check = document.body.scrollTop > elmOffsetBottom;

            scope.lastScrollTop = 0;
            var doToggle = function () {
                check = window.pageYOffset > elmOffsetBottom - 75;
                $(element).toggleClass(scope.toggleClass, check);
                scope.st = window.pageYOffset;
                var posCheck = window.pageYOffset > elmOffsetBottom + parseFloat(scope.hideAfter);
                if (scope.st > scope.lastScrollTop) {
                    $(element).toggleClass(scope.hideClass, posCheck);
                } else {
                    $(element).toggleClass(scope.hideClass, false);
                }
                scope.lastScrollTop = scope.st;
            };
            doToggle();
            angular.element($window).bind("scroll resize", function () {
                doToggle();
            });
        }
    };
}])
