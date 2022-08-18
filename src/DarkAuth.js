import React from 'react'
import { FiSettings } from "react-icons/fi";
import $ from "jquery";
const Dark = () => {
    $(function () {
        $(".nav-settings").on("click", function () {
            $("#right-sidebar").toggleClass("open");
        });
        $(".settings-close").on("click", function () {

            $("#right-sidebar,#theme-settings").removeClass("open");
        });

        $("#settings-trigger").on("click", function () {
            $("#theme-settings").toggleClass("open");
        });
        $(".tiles.primary").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-primary");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        //sidebar backgrounds
        $("#sidebar-light-theme").on("click", function () {
            $body.removeClass(sidebar_classes);
            $body.addClass("sidebar-light");
            $(".sidebar-bg-options").removeClass("selected");
            $(this).addClass("selected");
        });
        $("#sidebar-dark-theme").on("click", function () {
            $body.removeClass(sidebar_classes);
            $body.addClass("sidebar-dark");
            $(".sidebar-bg-options").removeClass("selected");
            $(this).addClass("selected");
        });


        //Navbar Backgrounds
        $(".tiles.primary").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-primary");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".tiles.success").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-success");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });

        //background constants
        var auth_classes = "bg-dark bg-white text-white text-dark navbar-danger navbar-success navbar-warning navbar-dark navbar-light navbar-primary navbar-info navbar-pink"
        var navbar_classes = "navbar-danger navbar-success navbar-warning navbar-dark navbar-light navbar-primary navbar-info navbar-pink";
        var sidebar_classes = "sidebar-light sidebar-dark";
        var $body = $("body");
        $(".tiles.primary").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-primary");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        // .login-bg
     


        //Navbar Backgrounds
        $(".tiles.primary").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-primary");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".tiles.success").on("click", function () {
            $(".form-bg1").removeClass(auth_classes);
            $(".form-bg1").addClass("bg-dark");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });

        $(".tiles.dark").on("click", function () {
            $(".form-bg1").removeClass(auth_classes);
            $(".lable-form").addClass("text-white")
            $(".form-bg1").addClass("bg-dark").addClass("text-white");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".tiles.default").on("click", function () {
            $(".form-bg1").removeClass(auth_classes);
            $(".lable-form").addClass("text-dark")
            $(".form-bg1").addClass("bg-white").addClass("text-dark");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });

        $(".tiles.dark").on("click", function () {
            $(".login-bg").removeClass(auth_classes);
            $(".login-bg").addClass("text-white")
            $(".login-bg").addClass("bg-dark").addClass("text-white");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".tiles.default").on("click", function () {
            $(".login-bg").removeClass(auth_classes);
            $(".lable-form").addClass("text-dark")
            $(".login-bg").addClass("bg-white").addClass("text-dark");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
      



    });
    return (
        <>
            <div class="theme-setting-wrapper">
                <div id="settings-trigger"><FiSettings class="text-white" /></div>
                <div id="theme-settings" class="settings-panel">
                    <i class="settings-close ti-close"></i>

                    <p class="settings-heading mt-2">Auth Skin</p>
                    <div class="color-tiles mx-0 px-4">

                        <div class="tiles dark"></div>
                        <div class="tiles default"></div>
                        
                    </div>

                </div>
            </div>

        </>
    )
}

export default Dark;