import React from 'react'
import { FiSettings } from "react-icons/fi";
import $ from "jquery";
const Dark = ({ darkmodes, setDarkmodes }) => {
    console.log(darkmodes, 'darkmodes')
    $(function () {
        $(".nav-settings").on("click", function () {
            $("#right-sidebar").toggleClass("open");
        });
        $(".settings-close").on("click", function () {

            $("#right-sidebar,#theme-settings").removeClass("open");
        });

        $("#settings-trigger").on("click", function () {
            $("#theme-settings").addClass("open");
            // $("#theme-settings").toggle("open");
        });
        $(".tiles.primary").on("click", function () {
            $(".navbar").removeClass(navbar_classes);
            $(".navbar").addClass("navbar-primary");
            $(".tiles").removeClass("selected");
            $(this).addClass("selected");
        });

        var auth_classes = "bg-dark bg-white  navbar-danger navbar-success navbar-warning navbar-dark navbar-light navbar-primary navbar-info navbar-pink"
        var auth_text_classes = "text-white text-dark "
        var navbar_classes = "navbar-danger navbar-success navbar-warning navbar-dark navbar-light navbar-primary navbar-info navbar-pink";
        var sidebar_classes = "sidebar-light sidebar-dark";
        var $body = $("body");



    });
    const handleMode = () => {
        setDarkmodes(true)
    }

    const handletheme = () => {
        setDarkmodes(false)
    }
    return (
        <>
            <div class="theme-setting-wrapper">
                <div id="settings-trigger"><FiSettings class="text-white" /></div>
                <div id="theme-settings" class={"settings-panel " + (darkmodes ? "text-white dash-chart-dark" : "text-dark bg-white")}>
                    <i class="settings-close ti-close"></i>

                    <p class="settings-heading mt-2">THEMES</p>
                    <div class="color-tiles mx-0 px-4">

                        <div class="tiles dark" onClick={handleMode}></div>
                        <div class="tiles default" onClick={handletheme}></div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Dark;