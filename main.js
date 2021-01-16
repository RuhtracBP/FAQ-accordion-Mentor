

const questions = document.querySelectorAll(".accordion-item-header") ;
/* const box = document.querySelector(".box") ; */




questions.forEach( question => {
    question.addEventListener("click", () => {

        /* var isMobile = /Mobi/i.test(navigator.userAgent);
            if (isMobile) {
                box.classList.toggle("expand");
                console.log(box.classList);

            } */
        
        if(question.parentNode.classList.contains("active")) {
            question.parentNode.classList.toggle("active");

        } else {
            questions.forEach( question => {
                question.parentNode.classList.remove("active");
            });
            question.parentNode.classList.add("active");
        }
    })
})