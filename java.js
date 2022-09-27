const observer = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 0.5) {
            entry.target.classList.add('init-hidden-off')
        }
    })
    }, {
        threshold: 0.5,
    })
    Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
        observer.observe(element)
    })

    
    const checkbox = document.getElementById("nav-check");
    const links = document.querySelectorAll('.nav-links a')

    for (const link of links) {
  link.addEventListener('click', function () {
    checkbox.checked = false;
  })
}