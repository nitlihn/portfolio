/* Start Menu & Animation */
$(function () {
    $(".hamburger-menu").on("click", function () {
        $(".toggle").toggleClass("open");
        $(".nav-list").toggleClass("open");
    });

    $(".nav-link").on("click", function () {
        var act = $(".nav-list").hasClass("open");

        if (act) {
            $(".toggle").toggleClass("open");
            $(".nav-list").toggleClass("open");
        }
    });
});

/* End Menu & Animation */