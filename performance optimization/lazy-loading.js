let imgs = document.querySelectorAll("img");

const observer = new IntersectionObserver(function (enteries, observer) {
    enteries.forEach(function (entry) {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add("show");
            observer.unobserve(entry);
        }
    })
}, {
    root: null,
    threshold: 0.1,
})

imgs.forEach(function(img){
    observer.observe(img);
})