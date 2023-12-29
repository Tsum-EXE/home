//imagine reading this js script lmao

// window.onbeforeunload = () => {
//     window.scrollTo(0, 0);
// }

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



///////////////
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+=1234567890`~/>.<,?;:][";

let interval = null;

document.querySelector("#texteffect").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 62)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / (Math.floor(Math.random() * 5)+2);
    }, 10);
  }

const hidden6 = document.querySelector('#texteffect');
const observer7 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            let iteration = 0;
            clearInterval(interval);
            interval = setInterval(() => {
                hidden6.innerText = hidden6.innerText.split("").map((letter, index) => {        
                if(index < iteration) {
                    return hidden6.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 62)]
                })
                .join("");
                if(iteration >= hidden6.dataset.value.length){ 
                    clearInterval(interval);
                }
                iteration += 1 / (Math.floor(Math.random() * 5)+2); 
            }, 10);
        }
        else {

        }

    });
});
observer7.observe(hidden6)


const hidden7 = document.querySelectorAll('.card');
const observer8 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('arder');
        }
        else {
            entryIter.target.classList.remove('arder');
        }

    });
});
hidden7.forEach((element) =>
    observer8.observe(element)
);




const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
  const element = document.getElementById(id),
        text = element.innerText.split("");
  element.innerText = "";
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    outer.className = "outer";
    const inner = document.createElement("span");
    inner.className = "inner";
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    const letter = document.createElement("span");
    letter.className = "letter";
    letter.innerText = value;
    letter.style.animationDelay = `${index * 1000 }ms`;
    inner.appendChild(letter);
    outer.appendChild(inner);
    element.appendChild(outer);
  });
}

enhance("spread");
enhance("thisthis");



const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
      randomString = length => Array.from(Array(length)).map(randomChar).join("");

const dard = document.querySelector(".dard"),
      dardletters = dard.querySelector(".dard-letters");

const handleOnMove = e => {
  const rect = dard.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

        dardletters.style.setProperty("--x", `${x}px`);
        dardletters.style.setProperty("--y", `${y}px`);

        dardletters.innerText = randomString(2000);    
}

dard.onmousemove = e => handleOnMove(e);

dard.ontouchmove = e => handleOnMove(e.touches[0]);


const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove2 = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove2(e);

window.ontouchmove = e => handleOnMove2(e.touches[0]);





const left = document.getElementById("left-side");

const handleMove = e => {
  left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}

document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);