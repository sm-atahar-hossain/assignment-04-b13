const jobBox = document.querySelector(".cards");
const availableJobs = document.querySelector("#available");
const noJobSection = document.querySelector(".no-jobs");

const totalJobs = document.querySelector("#total");
const interviewJobs = document.querySelector("#interview");
const rejectedJobs = document.querySelector("#rejected");
const buttons=document.querySelectorAll(".active-btn button");

let currentStatus = "all";

let jobs = [
    {
        id: 1,
        company: "Mobile First Corp",
        position: "React Native Developer",
        info: "Remote • Full-time • $130,000 - $175,000",
        desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        jobStatus: "all"
    },
    {
        id: 2,
        company: "WebFlow Agency",
        position: "Web Designer & Developer",
        info: "Los Angeles, CA • Part-time • $80,000 - $120,000",
        desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        jobStatus: "all"
    },
    {
        id: 3,
        company: "DataViz Solutions",
        position: "Data Visualization Specialist",
        info: "Boston, MA • Full-time • $125,000 - $165,000",
        desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        jobStatus: "all"
    },
    {
        id: 4,
        company: "CloudFirst Inc",
        position: "Backend Developer",
        info: "Seattle, WA • Full-time • $140,000 - $190,000",
        desc: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        jobStatus: "all"
    },
    {
        id: 5,
        company: "Innovation Labs",
        position: "UI/UX Engineer",
        info: "Austin, TX • Full-time • $110,000 - $150,000",
        desc: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
        jobStatus: "all"
    },
    {
        id: 6,
        company: "MegaCorp Solutions",
        position: "JavaScript Developer",
        info: "New York, NY • Full-time • $130,000 - $170,00",
        desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
        jobStatus: "all"
    },
    {
        id: 7,
        company: "StartupXYZ",
        position: "Full Stack Engineer",
        info: "Remote • Full-time • $120,000 - $160,000",
        desc: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        jobStatus: "all"
    },
    {
        id: 8,
        company: "TechCorp Industries",
        position: "Senior Frontend Developer",
        info: "San Francisco, CA • Full-time • $130,000 - $175,000",
        desc: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        jobStatus: "all"

    }
];

// Print jobs base on status
function printJobs(status) {
    jobBox.innerHTML = '';
    let count = 0;

    jobs.forEach(job => {
        if (status === "all" || job.jobStatus === status) {
            count++;
            let color = "gray";
            let text = "Not Applied";
            let bgColor = "#e9e6e6";

            if (job.jobStatus === "interview") {
                color = "rgb(255, 255, 255)";
                text = "Interview";
                bgColor = "rgb(1, 167, 1)"
            }

            if (job.jobStatus === "rejected") {
                color = "rgb(253, 253, 253)";
                text = "Rejected";
                bgColor = "rgb(254, 59, 56)"
            }


            jobBox.innerHTML += `<div class="card">
            <div class="card-start">
              <h4>${job.company}</h4>
              <button onclick="deleteJob(${job.id})">
              <i class="fa-solid fa-trash">
              </i>
              </button>
            </div>
            <div class="card-center">
              <p>${job.position}</p>
              <p>${job.info}</p>
              <button class="card-btn" style="
                  color:${color};
                  background-color: ${bgColor};
                  border: 2px solid;
                ">
              ${text}
              </button>
              <p>
                ${job.desc}
              </p>
            </div>
            <div class="card-end">
              <button onclick="updateStatus(${job.id}, 'interview')"
                class="card-btn"
                style="
                  color: rgb(1, 167, 1);
                  background-color: rgba(238, 245, 224, 0.698);
                  border: 2px solid;
                "
              >
                Interview
              </button>
              <button onclick="updateStatus(${job.id}, 'rejected')"
                class="card-btn"
                style="
                  color: rgb(254, 59, 56);
                  background-color: rgba(242, 215, 205, 0.698);
                  border: 2px solid;
                "
              >
                Rejected
              </button>
            </div>
          </div>
        `;
        };

    });

    availableJobs.innerText = count;
    if (count === 0) noJobSection.style.display = "flex";

    updateCounts();
}
// update jobStatus in job using find
function updateStatus(id, status) {
    const job = jobs.find(val => val.id === id);
    if(job)job.jobStatus = status;
    console.log(job.id,"=",job.status);
    printJobs(currentStatus);
}
// Delete job in jobs using filter
function deleteJob(id){
    jobs=jobs.filter(val=>val.id !== id);
    printJobs(currentStatus);
}
// Jobs count update 
function updateCounts(){
    totalJobs.innerText = jobs.length;
    let interview =0;
    let rejected =0;
    jobs.forEach(job=>{
        if(job.jobStatus === 'interview') interview++;
        if(job.jobStatus === 'rejected') rejected++;
    })
    interviewJobs.innerText =interview;
    rejectedJobs.innerText=rejected;
}
// event on status button
buttons.forEach(btn=>{
    btn.addEventListener("click",e=>{
        buttons.forEach(val=>{
            val.classList.remove("active");
        });
        btn.classList.add("active");

        currentStatus =btn.innerText.toLowerCase();
        printJobs(currentStatus);
    })
})

// first time load index.html
printJobs("all");


