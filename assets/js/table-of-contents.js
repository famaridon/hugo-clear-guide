document.addEventListener("DOMContentLoaded", function () {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#TableOfContents'
    });

    // in page anchor links not working with baseurl we have to bind the click event to all anchors in the toc
    const tocAnchors = document.querySelectorAll('#TableOfContents a');
    tocAnchors.forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
