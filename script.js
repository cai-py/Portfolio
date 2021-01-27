

var currentPage = 'about me'
//document.getElementById('aboutMeButton').style.color = '#cae4db'
//document.getElementById('aboutMeButton').style.background = '#cdac81'


function aboutMe() {
    currentPage = 'about me'
    console.log(currentPage)
    document.getElementById("currentPage").innerHTML = 'About me'
    document.getElementById('projectsPage').style.display = 'none'
    document.getElementById('aboutMePage').style.display = 'block'

    document.getElementById('projectsButton').style.color = '#cdac81'
    document.getElementById('projectsButton').style.background = '#f5f4f4'
    document.getElementById('aboutMeButton').style.color = '#cae4db'
    document.getElementById('aboutMeButton').style.background = '#cdac81'

}
function projects() {
    currentPage = 'projects'
    console.log(currentPage)
    document.getElementById("currentPage").innerHTML = 'Projects'
    document.getElementById('aboutMePage').style.display = 'none'
    document.getElementById('projectsPage').style.display = 'block'

    document.getElementById('aboutMeButton').style.color = '#cdac81'
    document.getElementById('aboutMeButton').style.background = '#f5f4f4'
    document.getElementById('projectsButton').style.color = '#cae4db'
    document.getElementById('projectsButton').style.background = '#cdac81'
}

if (currentPage === 'about me') {
    aboutMe()
}else if (currentPage === 'projects') {
    projects()
}

function openMusique() {
    window.open('https://dry-brushlands-36744.herokuapp.com/home/library')
}

function openTheOffice() {
    window.open('https://gentle-cove-52214.herokuapp.com/')
}
function openMuSe() {
    window.open('https://muse-music.herokuapp.com/#')
}

function openInstagram() {
    window.open('https://www.instagram.com/cai.py/')
}

function openGithub() {
    window.open('https://github.com/cai-py')
}

function openLinkedin() {
    window.open('https://www.linkedin.com/in/cairo-flores/')
}