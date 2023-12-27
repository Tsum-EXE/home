//imagine reading this js script lmao

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

const ref1 = document.querySelectorAll(".ref1")
const observer0 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('show');
        }
        else {
            entryIter.target.classList.remove('show');
        }

    });
});
ref1.forEach((element) =>
    observer0.observe(element)
);

const gaming2 = document.querySelectorAll("#gaming2")
const observer00 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('shown0');
        }
        else {
            entryIter.target.classList.remove('shown0');
        }

    });
});
gaming2.forEach((element) =>
    observer00.observe(element)
);


const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('shown');
        }
        else {
            entryIter.target.classList.remove('shown');
        }

    });
});
hiddenElements.forEach((element) =>
    observer.observe(element)
);

const hidden1 = document.querySelectorAll('.hidden1');
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('shown1');
        }
        else {
            entryIter.target.classList.remove('shown1');
        }

    });
});
hidden1.forEach((element) =>
    observer2.observe(element)
);

const hidden2 = document.querySelectorAll('.hidden2');
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('shown2');
        }
        else {
            entryIter.target.classList.remove('shown2');
        }

    });
});
hidden2.forEach((element) =>
    observer3.observe(element)
);

const hidden3 = document.querySelectorAll('.hidden3');
const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('shown3');
        }
        else {
            entryIter.target.classList.remove('shown3');
        }

    });
});
hidden3.forEach((element) =>
    observer4.observe(element)
);

const hidden4 = document.querySelectorAll('.firster');
const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('first');
        }
        else {
            entryIter.target.classList.remove('first');
        }

    });
});
hidden4.forEach((element) =>
    observer5.observe(element)
);

const hidden5 = document.querySelectorAll('.seconder');
const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('second');
        }
        else {
            entryIter.target.classList.remove('second');
        }

    });
});
hidden5.forEach((element) =>
    observer6.observe(element)
);



var lastScrollTop = 0;
var doc = document.documentElement;

window.addEventListener("scroll", function(){ 
     var st = window.scrollY || document.documentElement.scrollTop; 
     var top = (window.scrollY || doc.scrollTop)  - (doc.clientTop || 0);
     if (top >= 6000) {
        document.querySelector('#cancan').classList.add("fadee")
     } else if (top < 6000) {
        document.querySelector('#cancan').classList.remove("fadee")
     } 
     lastScrollTop = st <= 0 ? 0 : st; 

}, false);
