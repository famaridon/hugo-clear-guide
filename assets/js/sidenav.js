document.addEventListener("DOMContentLoaded", () => {
    // center cg-sidenav to the active link
        const sidenav = document.querySelector('.cg-sidenav');
        const activeLink = sidenav.querySelector('.active');
        // If both the sidenav and the active link exist
        if (sidenav && activeLink) {
            // Calculate the height of the sidenav
            const sidenavHeight = sidenav.clientHeight;

            // Calculate the distance from the top of the active link to the top of the document
            const activeLinkTop = activeLink.offsetTop;

            // Calculate the height of the active link
            const activeLinkHeight = activeLink.clientHeight;

            // Copy the distance from the top of the active link to the top of the document
            const activeLinkTopCopy = activeLinkTop;

            // Calculate the distance from the top of the active link to the bottom of the sidenav
            const activeLinkBottom = activeLinkTopCopy - sidenavHeight + activeLinkHeight;

            // If the current scroll position of the sidenav is either above the top of the active link or below the bottom of the sidenav
            if (sidenav.scrollTop > activeLinkTopCopy || sidenav.scrollTop < activeLinkBottom) {
                // Adjust the scroll position to center the active link within the sidenav
                sidenav.scrollTop = activeLinkTopCopy - sidenavHeight / 2 + activeLinkHeight / 2;
            }
        }
});