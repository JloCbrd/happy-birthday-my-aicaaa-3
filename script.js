document.addEventListener("DOMContentLoaded", function () {

    const ribbon =
        document.getElementById("solid-ribbon");

    const messageContainer =
        document.getElementById("message-container");

    const openScreen =
        document.getElementById("openScreen");

    const hint =
        document.getElementById("hint");

    const audio =
        document.getElementById("myAudio");


    let opened = false;


    ribbon.addEventListener("click", function () {

        if (opened) {
            return;
        }

        opened = true;


        /* Hide opening screen */

        openScreen.classList.add("hidden");


        /* Hide hint */

        hint.classList.add("hide");


        /* Stop ribbon animation */

        ribbon.classList.add("no-bobbing");


        /* Show message */

        messageContainer.style.display = "block";

        messageContainer.style.height = "0px";

        messageContainer.style.overflowY = "hidden";


        /* Force browser to calculate height */

        const targetHeight =
            messageContainer.scrollHeight;


        setTimeout(function () {

            messageContainer.style.height =
                targetHeight + "px";

            messageContainer.style.overflowY =
                "auto";

        }, 50);


        /* Play music */

        audio.volume = 0.45;

        audio.play().catch(function (error) {

            console.log(
                "Audio autoplay was blocked:",
                error
            );

        });

    });


    /* Recalculate message height on resize */

    window.addEventListener("resize", function () {

        if (!opened) {
            return;
        }

        messageContainer.style.height =
            "auto";

        const newHeight =
            messageContainer.scrollHeight;

        messageContainer.style.height =
            newHeight + "px";

    });

});