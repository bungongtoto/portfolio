const sectionImg = document.querySelector('.section-photo');

// changing section image grayscale on view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("inview")
        }
    })
}, {threshold: 0.9});

observer.observe(sectionImg)