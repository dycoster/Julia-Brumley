const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    // Set nav active status with boolean
    let isActive = false;
    console.log("nav-active : " + isActive)
    

    burger.addEventListener("click", ()=>{

        //Toggle nav
        nav.classList.toggle("nav-active");

        // Toggle nav active status to true/false
        isActive = !isActive;
        console.log("nav-active : " + isActive)
        
        //Animate link
        navLinks.forEach((link, index)=>{
            if(isActive) {
                link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
                console.log("nav li: "+ index + " in");
            } else {
                // link.style.animation = "";
                link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
                // link.style.animation = "";
                console.log("nav li: "+ index + " out");
            }
            console.log(link.style.animation);
        });
        
        //Burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();

const observerOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin added to the root
  // threshold: 0.5 // Trigger animation when 50% of the element is visible
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('image-animation');
    } else {
      entry.target.classList.remove('image-animation'); // Remove animation class when out of viewport
    }
  });
}, observerOptions);

const viewbox = document.querySelectorAll('.image');
viewbox.forEach(image => {
  observer.observe(image);
});



