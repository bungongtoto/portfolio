const sectionImg = document.querySelector('.section-photo');
const banner = document.getElementById('header-bottom');
const bannerLeft = document.getElementById('banner-left');
const bannerRight = document.getElementById('banner-right');
const connectBtn = document.getElementById('connect-button');
const newbannerText = document.createElement('p');

// adding default styling class to the banner text
newbannerText.classList.add('banner-text');
newbannerText.innerHTML = "Hello, I Am Kingsley Ndzi Bungong"

const updateLayout = () => {
    if (window.innerWidth < 701) {
        bannerLeft.style.display = "none";
        bannerRight.style.display = "none";
        banner.appendChild(connectBtn);
        banner.prepend(newbannerText);
    } else {
        bannerLeft.style.display = "inline-block";
        bannerRight.style.display = 'inline-block';
        bannerRight.appendChild(connectBtn);

        if ([... banner.children].includes(newbannerText)) {
            banner.removeChild(newbannerText)
        }
    }
}

// changing section image grayscale on view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("inview")
        }
    })
}, {threshold: 0.9});

observer.observe(sectionImg);
window.onload = updateLayout;
window.onresize = updateLayout;