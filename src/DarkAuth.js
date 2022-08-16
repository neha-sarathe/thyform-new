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


        //background constants
        
        var navbar_classes = "navbar-danger navbar-success navbar-warning navbar-dark navbar-light navbar-primary navbar-info navbar-pink";
        var sidebar_classes = "sidebar-light sidebar-dark";
        var $body = $("body");
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
        $(".tiles.warning").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-warning");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".tiles.danger").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-danger");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".tiles.light").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-light");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".tiles.info").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-info");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".tiles.dark").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-dark");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".tiles.default").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".tiles.default").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });

        $(".color-theme.default").click(function () {
            $(".color-theme.default").attr({
                "href": "https://www.bootstrapdash.com/demo/star-admin2-pro/template/demo/vertical-default-light/index.html",
                "title": "Light"
            });
        });
        $(".color-theme.dark").click(function () {
            $(".color-theme.dark").attr({
                "href": "https://www.bootstrapdash.com/demo/star-admin2-pro/template/demo/vertical-default-dark/index.html",
                "title": "Dark"
            });
        });
        $(".color-theme.brown").click(function () {
            $(".color-theme.brown").attr({
                "href": "https://www.bootstrapdash.com/demo/star-admin2-pro/template/demo/vertical-default-brown/index.html",
                "title": "Brown"
            });
        });
        $('[data-bs-toggle="minimize"]').on("click", function () {
            if (($("#root").hasClass('sidebar-toggle-display')) || ($("#root").hasClass('sidebar-absolute'))) {
                $("#root").toggleClass('sidebar-hidden');
            } else {
                $("#root").toggleClass('sidebar-icon-only');
            }
        });
        $(".color-theme.primary").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-primary");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");


        });
        $(".color-theme.success").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-success");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".color-theme.warning").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-warning");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".color-theme.danger").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-danger");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".color-theme.light").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-light");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".color-theme.brown").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-info");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".color-theme.dark").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-dark");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".color-theme.default").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });
        //   $(".color-theme.default").on("click" , function(){
        //     $(".navbar").removeClass(navbar_classes);
        //     $(".tiles").removeClass("selected");
        //     $(this).addClass("selected");
        //   });


        //   side
        // $(".color-theme.primary").on("click" , function(){
        //     $body.removeClass(sidebar_classes);
        //     $body.addClass("sidebar-light");
        //     $(".sidebar-bg-options").removeClass("selected");
        //     $(this).addClass("selected");


        //   });
        //   $(".color-theme.success").on("click" , function(){
        //     $body.removeClass(sidebar_classes);
        //   $body.addClass("sidebar-dark");
        //   $(".sidebar-bg-options").removeClass("selected");
        //   $(this).addClass("selected");
        //   });
        //   $(".color-theme.warning").on("click" , function(){
        //     $(".navbar").removeClass(navbar_classes);
        //     $(".navbar").addClass("navbar-warning");
        //     $(".tiles").removeClass("selected");
        //     $(this).addClass("selected");
        //   });
        //   $(".color-theme.danger").on("click" , function(){
        //     $(".navbar").removeClass(navbar_classes);
        //     $(".navbar").addClass("navbar-danger");
        //     $(".tiles").removeClass("selected");
        //     $(this).addClass("selected");
        //   });
        //   $(".color-theme.light").on("click" , function(){
        //     $(".navbar").removeClass(navbar_classes);
        //     $(".navbar").addClass("navbar-light");
        //     $(".tiles").removeClass("selected");
        //     $(this).addClass("selected");
        //   });
        $(".color-theme.brown").on("click", function () {
            $body.removeClass(navbar_classes);
            $body.addClass("navbar-info");
            $(".sidebar-bg-options").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".color-theme.dark").on("click", function () {
            $body.removeClass(sidebar_classes);
            $body.addClass("sidebar-dark");
            $(".sidebar-bg-options").removeClass("selected");
            $(this).addClass("selected");
        });
        $(".color-theme.default").on("click", function () {
            $body.removeClass(sidebar_classes);
            $body.addClass("sidebar-light");
            $(".sidebar-bg-options").removeClass("selected");
            $(this).addClass("selected");
        });



    });
    return (
        <>
            <div class="theme-setting-wrapper">
                <div id="settings-trigger"><FiSettings class="text-white" /></div>
                <div id="theme-settings" class="settings-panel">
                    <i class="settings-close ti-close"></i>
                    <p class="settings-heading">SIDEBAR SKINS</p>
                    <div class="sidebar-bg-options selected" id="sidebar-light-theme"><div class="img-ss rounded-circle bg-light border me-3"></div>Light</div>
                    <div class="sidebar-bg-options" id="sidebar-dark-theme"><div class="img-ss rounded-circle bg-dark border me-3"></div>Dark</div>
                    <p class="settings-heading mt-2">HEADER SKINS</p>
                    <div class="color-tiles mx-0 px-4">
                        <div class="tiles success"></div>
                        <div class="tiles warning"></div>
                        <div class="tiles danger"></div>
                        <div class="tiles info"></div>
                        <div class="tiles dark"></div>
                        <div class="tiles default"></div>
                    </div>
                   
                </div>
            </div>

        </>
    )
}

export default Dark;