export function loadHeaderAndFooter() {

    // build header
    const headerTemplate = document.getElementById("header");
    const headerHTML = `
        <div id="header-div">
            <img id="favIcon" src="/img/easyHealthIcon.png" alt="logo">
            <h1>Easy Health</h1>
            <a href="./favorite-page/favorites.html"><img id="wishlist-icon" src="/img/star.png"
                    alt="wishlist icon"></a>
            <a href="./cart/cart.html"><img id="cart-icon" src="/img/cart.png" alt="cart icon"></a>
        </div>
    `
    headerTemplate.innerHTML = headerHTML;

    // build footer
    const footerTemplate = document.getElementById("footer");
    const footerHTML = `
        <div id="author-footer">
            <p>Author: Helamã Y. Barbour</p>
            <p>&copy;NOT a real business</p>
            <p>A BYU Project</p>
        </div>
        <div id="midia-footer">
            <img class="media-icon" src="/img/facebook.png" alt="Facebook logo">
            <img class="media-icon" src="/img/instagram.png" alt="Instagram logo">
        </div>
    `
    footerTemplate.innerHTML = footerHTML;
}

