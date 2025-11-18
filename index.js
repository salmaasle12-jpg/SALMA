// -- page to navigate
// page: from HTML CLICK Example /page:/01/demos/index.html
function loadPage(page) {

// -- Get Ref for HTML ELEMENT BY ITS ID
// -- contentFrame is iframe element type
    let iframeElement = document.getElementById("contentFrame");

    // --Give sidebar on mobile
    iframeElement.src = page;

    // Close sidebar on mobile
    document.getElementById("sidebar").classList.remove("show");
}

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
}