console.log("who is Audrey anyway? OOOOOh, little Shop of Horrors")



const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/

document.addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */  audrey.style.minWidth = "50px";
        // const Y = window.scrollY/3 +"px";
        // audrey.style.width = `${Y}px` 
        audrey.style.width = window.scrollY/3 + "px";

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
     audrey.style.minHeight = "50px";
     const Y = window.scrollY/4;
     audrey.style.height = `${Y}px`
})