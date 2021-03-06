let baseLayout = require("./layouts/base.js");
let HorizontalSlideNav = require("./components/nav-horizontal-slide.js");
let HeroBanner = require("./components/hero-banner.js");

module.exports = function() {
    let horizontalSlideNav = HorizontalSlideNav();
    let heroBanner = HeroBanner();

    let pageContent = html`
        ${horizontalSlideNav}
        ${heroBanner}
    `;

    return baseLayout(pageContent);
};
