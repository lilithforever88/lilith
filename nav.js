const headnav = document.getElementById('header')
headnav.innerHTML = `
<header>
    <b><a href="index.html">LILITH</a></b>
</header>`

const navbar = document.getElementById('navbar')
navbar.innerHTML = `

<nav>
    <div id="nav-links">
        <a href="esittely.html">Esittely</a>
        <a href="kuvat.html">Kuvat</a>
        <a href="https://www.youtube.com/@lilith8278">Videot</a>
        <a href="media.html">Media</a>
    </div>
    <div id="hamburger-overlay" onclick="closeHamburgerMenu()">
        <div id="burger-links">
            <img src="burger-menu.svg">
            <a href="esittely.html"><div>Esittely</div></a>
            <a href="kuvat.html"><div>Kuvat</div></a>
            <a href="https://www.youtube.com/@lilith8278"><div>Videot</div></a>
            <a href="media.html"><div>Media</div></a>
        </div>
    </div>

<div id="nav-hamburger" onclick="openHamburgerMenu()">
    <img src="burger-menu.svg">
</div>
</nav>`

function openHamburgerMenu() {
    document.getElementById('hamburger-overlay').style.display = 'block'
    disableScrolling()
}

function closeHamburgerMenu() {
    document.getElementById('hamburger-overlay').style.display = 'none'
    enableScrolling()
}

function disableScrolling() {
    const yPos = window.pageYOffset || document.documentElement.scrollTop
    const xPos = window.pageXOffset || document.documentElement.scrollLeft
    window.onscroll = function () {
        window.scrollTo(xPos, yPos)
    }
}

function enableScrolling() {
    window.onscroll = () => {}
}
