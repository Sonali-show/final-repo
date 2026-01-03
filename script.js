const app = document.getElementById("app");

/* ========== HERO / HOME ========== */
const hero = document.createElement("div");
hero.className = "section hero";

const hName = document.createElement("h1");
hName.innerText = "Sonali Show";

const hRole = document.createElement("p");
hRole.innerText = "Web Development Intern at YCSAS";

const hBtn = document.createElement("button");
hBtn.innerText = "View My Work";

hero.append(hName, hRole, hBtn);
app.appendChild(hero);

/* ========== ABOUT ========== */
const about = document.createElement("div");
about.className = "section";

const aboutTitle = document.createElement("h2");
aboutTitle.innerText = "About Me";

const aboutText = document.createElement("p");
aboutText.innerText =
"I am Sonali, a passionate frontend learner. Through the YCSAS Internship, I gained hands-on experience in HTML, CSS, JavaScript and DOM manipulation.";

about.append(aboutTitle, aboutText);
app.appendChild(about);

/* ========== SKILLS ========== */
const skills = document.createElement("div");
skills.className = "section";

const skillTitle = document.createElement("h2");
skillTitle.innerText = "Skills";

skills.appendChild(skillTitle);

const skillArr = ["HTML", "CSS", "JavaScript", "DOM", "GitHub"];

skillArr.forEach(s => {
    const span = document.createElement("span");
    span.className = "skill";
    span.innerText = s;
    skills.appendChild(span);
});

app.appendChild(skills);

/* ========== INTERNSHIP ========== */
const intern = document.createElement("div");
intern.className = "section";

const internTitle = document.createElement("h2");
internTitle.innerText = "YCSAS Internship";

const internText = document.createElement("p");
internText.innerHTML = `
Internship Name: YCSAS Web Development Internship <br>
Topics Learned: HTML, CSS, JavaScript, DOM, GitHub <br>
Experience: Practical learning through tasks and projects
`;

intern.append(internTitle, internText);
app.appendChild(intern);

/* ========== TASKS / PROJECTS ========== */
const tasks = document.createElement("div");
tasks.className = "section";

const taskTitle = document.createElement("h2");
taskTitle.innerText = "Internship Tasks";

tasks.appendChild(taskTitle);

const taskList = [
    "Task 1 : Create GitHub Account",
    "Task 2 : Make a Webpage and Push it to GitHub",
    "Task 3 : Create a Registration Form",
    "Task 4 : Create a To-Do List",
    "Task 5 : Create a Portfolio Website"
];

taskList.forEach(t => {
    const card = document.createElement("div");
    card.className = "task-card";
    card.innerText = t;

    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.03)";
        card.style.transition = "0.3s";
    });
    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
    });

    tasks.appendChild(card);
});

app.appendChild(tasks);

/* ========== CONTACT ========== */
const contact = document.createElement("div");
contact.className = "section";

const cTitle = document.createElement("h2");
cTitle.innerText = "Contact Me";

const input = document.createElement("input");
input.type = "email";
input.placeholder = "Enter your email";

const send = document.createElement("button");
send.className = "send";
send.innerText = "Send";

const msg = document.createElement("p");

send.addEventListener("click", () => {
    if (input.value === "") {
        msg.innerText = "Email is required!";
        msg.style.color = "red";
    } else {
        msg.innerText = "Thank you for contacting!";
        msg.style.color = "green";
    }
});

contact.append(cTitle, input, send, msg);
app.appendChild(contact);

/* ========== SCROLL BUTTON ========== */
hBtn.addEventListener("click", () => {
    tasks.scrollIntoView({ behavior: "smooth" });
});