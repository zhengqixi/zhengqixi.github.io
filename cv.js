// NOTE from current self to future self: 
// One day you'll get real drunk and be dared to put your SSN on here
// DON'T DO IT!!!! IT STAYS ON GITHUB FOREVER AND EVER AND EVER UNTIL THE END OF TIME
let format = "cv";
const resumeData = data();
const sectionHeader = "h3";
function data() {
    // Can't be bothered to make a db just for this...
    // Literally need this stuff every once in a blue moon
    const data =
        {
            // Header almost never changes. 
            header: {
                name: "Zhengqi Xi",
                email: "zhengqixi@gmail.com"
                // NO SSN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                // ABSOLUTELY NOT!!!!!
            },
            education: {
                college: {
                    institution: "Cooper Union for the Advancement of Science and Art",
                    major: "Bachelor of Engineering, Mechanical Engineering",
                    honors: ["Graduated Cum Laude (3.52)", "Full Tuition Scholarship"]
                },
                masters: {
                    institution: "New York University",
                    major: "Masters of Science, Computer Science",
                }
            },
            work: [
                {
                    duration: "2022-Present",
                    title: "Software Engineer",
                    company: "Google LLC",
                    responsibilities: [
                        "Develop workflows to automate replacement of Google datacenter networking devices",
                        "Design safety mechanisms to ensure multiple workflows can safely operate concurrently within a datacenter",
                        "Create tooling to implement network model changes in C++",
                        "Utilize Go and C++ to create automation for safe and scaleable replacement of Google's SDN servers",
                        "Maintain algorithms for port allocation for Google network disaster recovery tooling",
                        "Mock Interviewer for Tech Exchange, a CS outreach program for HBCU students"
                    ]
                },
                {
                    duration: "2017-2022",
                    title: "Software Engineer",
                    company: "Bloomberg LP",
                    responsibilities: [
                        "Maintain and create Bloomberg data center management software",
                        "Develop API endpoints using .NET Framework to allow programmatic access of various data center asset information, such as location and connectivity of server machines",
                        "Led large scale refactor of .NET application to follow command/query design patterns",
                        "Create relational database functionality to maintain tree-like relations between datacenter assets using SQL transactions and graph algorithms",
                        "Develop and maintain Golang libraries for use companywide to create microservices",
                        "Develop UIs for datacenter management using Typescript and Angular",
                        "Design and create UI for large scale compute resource management with React",
                        "Create API endpoints for automated compute resource allocation",
                        "Utilize Apache Airflow to orchestrate compute resource provisioning stages",
                        "Design and implement Go microservices for use in compute resource provisioning",
                        "Utilize Apache Kafka for asyncronous communcation between microservices and compute provisioning infrastructure",
                        "Create GraphQL endpoints for fleetwide compute management",
                        "Utilize Typescript to efficiently create generic, reusable components to reduce code bloat",
                        "Championed and standardized Go microservice patterns, such as error handling and propagation, for the team",
                        "Gather requirements from internal stakeholders to produce product designs",
                        "Create and structure project plans for long term feature implementation"
                    ]
                },
                {
                    duration: "Summer 2016",
                    title: "Engineering Intern",
                    company: "Energy Metrics",
                    responsibilities: [
                        "Designed a Linux based micro-service that extends the capabilities of the Energy Metrics core software service, transforming a real time energy monitoring dashboard into robust software that provides analysis and insight into building energy usage",
                        "Conducted energy simulations of building systems using EnergyPlus and OpenStudio",
                        "Utilized C# and Ruby to calibrate simulation models with hourly real time data such as occupancy and air conditioning setpoints, allowing for greater accuracy in simulating building energy usage",
                        "Created workflow to analyze energy usage data from building simulations using Python with NumPy and SciPy",
                        "Performed fieldwork installing smart thermostats in various buildings to monitor and control air conditioning usage"
                    ],
                    hideForResume: true
                },
                {
                    duration: "Summer 2015",
                    title: "Web Developer",
                    company: "Etza Group",
                    responsibilities: [
                        "Utilized PHP and JavaScript to create frontend and backend solutions for various websites",
                        "Implemented features such as user login and search using MySQL and PHP",
                        "Ensured smooth and continuous user experience using techniques such as lazy loading",
                        "Met with clients to design and properly detail the deliverables and timetables of various projects"
                    ],
                    hideForResume: true
                },
                {
                    duration: "Summer 2015",
                    title: "Teaching Assistant",
                    company: "The Cooper Union Summer Stem Program",
                    responsibilities: [
                        "Instructed the designing and prototyping of Rube Goldberg machines using salvaged parts",
                        "Manufactured various components using machining equipment such as lathes, mills, and drills, as well as design software such as AutoCAD and SolidWorks",
                        "Facilitated implementation of efficient solutions to coordinate movement of various components in Rube Goldberg machine"
                    ],
                    hideForResume: true
                },
                {
                    duration: "2014-2017",
                    title: "Student Manager",
                    company: "Cooper Union Computer Center",
                    responsibilities: [
                        "Managed Computer Center student staff and acted as liaison between student workers and full time staff",
                        "Maintained equipment and solved various IT related issues for students and faculty members",
                        "Upgraded old and outdated equipment and software to modern computing standards",
                        "Managed and distributed responsibilities to student staff"
                    ],
                    hideForResume: true
                }
            ],
            schoolProjects: [
                {
                    duration: "Spring 2017",
                    title: "Computational Graph Models for Machine Learning",
                    responsibilities: [
                        "Trained various neural networks for different tasks, such as distinguishing handwritten digits",
                        "Utilize Wasserstein GAN Architecture neural networks to generate handwritten digits from arbitrary noise",
                        "Apply a facial recognition technique to to time series data to classify brain waves readings, achieving 80% classification accuracy on unseen data"
                    ]
                },
                {
                    duration: "Fall 2017",
                    title: "Autonomous Mobile Robots",
                    responsibilities: [
                        "Designed and manufactured a robot using various techniques such as laser cutting and 3D printing",
                        "Competed against other robots in various competitions such as robot soccer and robot sumo",
                        "Created algorithms to traverse field, as well as perform tasks such as object avoidance",
                        "Programmed micro-controllers such as Arduino and PIC using C and Assembly",
                        "Utilized master-slave Arduino configuration for processing sensor input while calculating movement in parallel"
                    ]
                },
                {
                    duration: "Spring 2016",
                    title: "Natural Language Processing",
                    responsibilities: [
                        "Created model to classify various news snippets using a Naive Bayes approach, with 92% accuracy",
                        "Implemented a model to solve SHSAT scrambled paragraphs using a mix of Naive Bayes and N-grams"
                    ]
                },
                {
                    duration: "Spring 2014",
                    title: "Design and Prototyping",
                    responsibilities: [
                        "Designed and prototype an arcade machine by iterating through various prototypes and ideas via user feedback",
                        "Created various injection mold designs for manufacturing wax candles",
                    ],
                    hideForResume: true
                },
                {
                    duration: "Fall 2013",
                    title: "GAIA, Sustainable Greenhouse for the Future",
                    responsibilities: [
                        "Assisted in designing a self sustained greenhouse positioned on NYC rofftops that gathers required resources from surroundings and is adaptable to a wide variety of environments",
                        "Designed external and internal water collection/distribution systems and internal hydroponics setups to facilitate healthy plant growth",
                    ],
                    hideForResume: true
                }

            ],
            skills: [
                {
                    category: "Programming Languages (Relevant Frameworks and Libraries)",
                    items: [
                        "Golang",
                        "TypeScript/JavaScript/TypeScript (React, Angular, D3)",
                        "Python",
                        "HTML/CSS",
                        "C# (EntityFrameworks, WebAPI)",
                        "C/C++",
                        "Matlab",
                        "SQL/SQLite",
                        "PHP",
                    ]
                },
                /*
                {
                    category: "Software Tools and Suites",
                    items: [
                        "SolidWorks",
                        "AutoCAD",
                        "Microsoft Office"
                    ]
                },
                */
                {
                    category: "Miscellaneous",
                    items: [
                        "Conversational in Chinese(Mandarin and Shanghainese)",
                        "Conversational in Japanese",
                        "Long distance runner",
                        "Kenpo practitioner"
                    ]
                }
            ]
        };
    return data;
}

function cv() {
    d3.selectAll(".hide-for-resume")
        .attr("hidden", null);
}

function resume() {
    d3.selectAll(".hide-for-resume")
        .attr("hidden", true);
}

function generateHeader() {
    let section = d3.select("div.mainBody").append("section").attr("class", "introduction");
    section.append("h1").text(resumeData.header.name)
        .attr("id", "name");
    section.append("h3")
        .text(`Email: ${resumeData.header.email}`)
        .attr("id", "email");
}

function generateEducation() {
    let section = d3.select("div.mainBody").append("section").attr("class", "education");
    section.append(sectionHeader)
        .text("Education")
        .attr("id", "header");
    let college = section.append("div")
        .attr("id", "college");
    college.append("div").append("strong")
        .text(resumeData.education.college.institution)
        .attr("id", "institution");
    college.append("div")
        .text(resumeData.education.college.major)
        .attr("id", "major");
    college.append("div")
        .text(`Honors: ${resumeData.education.college.honors.join(", ")}`)
        .attr("id", "honors");
    
    let masters = section.append("div")
        .attr("id", "masters");
    masters.append("div").append("strong")
        .text(resumeData.education.masters.institution)
        .attr("id", "institution");
    masters.append("div")
        .text(resumeData.education.masters.major)
        .attr("id", "major");
}

function generateWork() {
    let section = d3.select("div.mainBody").append("section").attr("class", "work");
    section.append(sectionHeader)
        .text("Work Experience")
        .attr("id", "header");
    let workExperience = section.append("div")
        .attr("id", "work-container");
    let workData = workExperience.selectAll("div")
        .data(resumeData.work)
        .enter().append("div")
        .attr("id", "single-work")
        .attr("class", function(d) { return hideForResume(d); });
    let itemHeader = workData.append("div")
        .attr("id", "item-header");
    itemHeader.append("span")
        .attr("id", "company-role")
        .append("strong")
        .text(function (d) {
            return `${d.company}, ${d.title}`;
        });
    itemHeader.append("span")
        .attr("id", "duration")
        .append("strong")
        .text(function (d) {
            return d.duration;
        });
    workData.append("div").append("ul")
        .selectAll("li")
        .data(function (d) {
            return d.responsibilities;
        }).enter().append("li")
        .text((function (d) {
            return d;
        }));
}

function generateSchoolProjects() {
    let section = d3.select("div.mainBody")
        .append("section").attr("class", "school-projects");
    section.append(sectionHeader)
        .text("Projects")
        .attr("id", "header")
    let projects = section.append("div")
        .attr("id", "project-container");
    let projectsData = projects.selectAll("div")
        .data(resumeData.schoolProjects)
        .enter().append("div")
        .attr("id", "single-project")
        .attr("class", function(d) { return hideForResume(d); });
    let projectHeader = projectsData.append("div")
        .attr("id", "item-header");
    projectHeader.append("span")
        .attr("id", "project-name")
        .append("strong")
        .text(function(d) {
            return d.title;
        });
    projectHeader.append("span")
        .attr("id", "duration")
        .append("strong")
        .text(function(d) {
            return d.duration;
        });
    projectsData.append("div").append("ul")
        .selectAll("li")
        .data(function(d) {
            return d.responsibilities;
        }).enter().append("li")
        .text(function(d) {
            return d;
        }); 
}

function generateSkills() {
    let section = d3.select("div.mainBody").append("section").attr("class", "skills");
    section.append(sectionHeader)
        .text("Skills")
        .attr("id", "header");
    
    let skills = section.append("div")
        .attr("id", "container")
        .selectAll("div")
        .data(resumeData.skills).enter().append("div")
        .attr("id", "skills");
    skills.append("span")
        .attr("id", "category")
        .append("strong")
        .text(function(d) {
            return `${d.category}: `;
        });
    skills.append("span")
        .text(function(d) {
            return d.items.join(", ");
        })
        .attr("id", "skill");
}

function hideForResume(d) {
    if (d.hideForResume === true) {
        return "hide-for-resume";
    }
    return "always-display";

}

function toggleFormat() {
    if (format === "resume") {
        format = "cv";
        cv();
    } else {
        format = "resume";
        resume();
    }
    console.log(`Viewing ${format} mode`);
}

function dumpToConsole() {
    console.log(format);
    console.log(data());
}

function initialLoad() {
    format = "cv";
    generateHeader();
    generateEducation();
    generateWork();
    //generateSchoolProjects();
    generateSkills();
    cv();
}

initialLoad();
