function Projects(name, imageUrl, url, id) {
    this.name = name
    this.src = imageUrl
    this.url = (e) => window.open(
        `${url}`, "_blank");
    this.id = id
}

function ChangeImg() {
    achievement.setAttribute("src",`Images/Achivements/${achievementsArr[N]}`)
}
let projectsArr = {
    "ATM": new Projects("ATM POS PIN Using Hand Gestures", 
    "ATM.png", 
    "https://github.com/Keshav7aug/ATM-POS-PIN-Using-Hand-Gestures",
    "ATM"), 

    "BRS": new Projects("Book Recommendation System", 
    "Book.png", 
    "https://github.com/Keshav7aug/Book-Recomendation-System",
    "BRS"), 

    "Face": new Projects("Attendance using Face Recognition", 
    "Attendance.png", 
    "https://github.com/Keshav7aug/Attendance-Using-Face-Recognition",
    "Face"), 

    "Wordle": new Projects("Wordle Helper", 
    "Wordle.png", 
    "https://github.com/Keshav7aug/WordleHelper",
    "Wordle"),

    "Sketch": new Projects("Etch a Sketch", 
    "Sketch.png", 
    "https://keshav7aug.github.io/Etch-a-Sketch/",
    "Sketch"),

    "RPS": new Projects("Rock Paper Scissors", 
    "RockPaperScissors.png", 
    "https://keshav7aug.github.io/RockPaperScissors/",
    "RPS"),
}

let achievementsArr = ['HackerCup_2022.jpg',
'KickStart_2022.jpg', 
'Foobar.jpg',
'Aerothon.jpg',
'CodeJam_2022.jpg',
'HashCode_2022.jpg',
'KickStart_2021.jpg', 
'CodeJam_2021.jpg',
'HackerCup_2021.jpg', 
'HashCode_2021.jpg',   
'KickStart_2020.jpg',
'HackerCup_2020.jpg',    
]
const noOfImages = achievementsArr.length
const projects = document.querySelector(".projects")

for (const project in projectsArr) {
    let projectObj = projectsArr[project]
    let newProject = document.createElement("div")
    newProject.textContent = projectObj['name']
    // newProject.setAttribute('src', `Images/${projectObj['src']}`)
    // newProject.setAttribute('alt', projectObj['name'])
    newProject.setAttribute('id', projectObj['id'])
    newProject.addEventListener('click', projectObj['url'])
    newProject.classList.add("project")
    projects.appendChild(newProject)
    console.log(newProject)
}
let N = 0
const achievement = document.querySelector(".achievements img")
ChangeImg()
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
nextBtn.addEventListener('click', function(){
    N=(N+1)%noOfImages
    ChangeImg()})
prevBtn.addEventListener('click', function(){
    N=(N-1+noOfImages)%noOfImages
    ChangeImg()})
