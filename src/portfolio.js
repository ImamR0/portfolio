/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Imam Rinjani",
  title: "Imam Rinjani",
  subTitle:
    "I build enterprise automation systems, reporting workflows, and business intelligence solutions with Power Platform, SharePoint, SQL, and Power BI.",
  resumeLink: "/resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/ImamR0",
  linkedin: "https://www.linkedin.com/in/lalu-imam-adiguna-rinjani-8108b324a/",
  gmail: "imamrinjani0@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle:
    "Digital Transformation and Business Intelligence Engineer building automation systems, enterprise dashboards, and data-driven platforms using Power BI, SQL, and Microsoft Power Platform.",
  skills: [
    "Build executive dashboards using Power BI",
    "Develop automation workflows using Power Automate",
    "Build business apps using Power Apps",
    "Design SQL data models for analytics",
    "Integrate SharePoint and enterprise systems"
  ],
  softwareSkills: [
    {
      skillName: "Power BI",
      fontAwesomeClassname: "simple-icons:powerbi"
    },
    {
      skillName: "SQL Server",
      fontAwesomeClassname: "simple-icons:microsoftsqlserver"
    },
    {
      skillName: "Power Automate",
      fontAwesomeClassname: "simple-icons:powerautomate"
    },
    {
      skillName: "Power Apps",
      fontAwesomeClassname: "simple-icons:powerapps"
    },
    {
      skillName: "SharePoint",
      fontAwesomeClassname: "simple-icons:microsoftsharepoint"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Mataram",
      logo: require("./assets/images/unram.png"),
      subHeader: "Bachelor of Electrical Engineering (Telematics)",
      duration: "2013 - 2018",
      desc: "Specialized in telematics and information systems engineering.",
      descBullets: [
        "Built a strong analytical and systems engineering foundation",
        "Focused on telecommunications, data systems, and digital technologies",
        "Graduated with GPA 3.51"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Business Intelligence (Power BI, DAX, Data Modeling)",
      progressPercentage: "95%"
    },
    {
      Stack: "Automation and Business Apps (Power Platform, SharePoint)",
      progressPercentage: "90%"
    },
    {
      Stack: "Data and Databases (SQL, SQL Server, ETL, Data Warehouse)",
      progressPercentage: "85%"
    },
    {
      Stack: "Analytics and Reporting (Dashboard Design, KPI Analysis)",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Business Analyst - Power BI and Power Platform",
      company: "PT Amman Mineral",
      cardColor: "#F4B400",
      companylogo: require("./assets/images/amman.png"),
      date: "Jul 2023 - Present",
      desc:
        "Leading business intelligence and digital transformation initiatives across multiple departments.",
      descBullets: [
        "Developed executive Power BI dashboards for KPI monitoring and management reviews",
        "Built Power Apps and Power Automate workflows that reduced manual processes by about 60%",
        "Designed SQL-based data models supporting enterprise reporting and analytics",
        "Collaborated with SCM, Safety, HR, and Operations teams to improve data-driven decision making"
      ]
    },
    {
      role: "Data Warehouse and Business Intelligence Engineer",
      company: "PT Macmahon Indonesia",
      companylogo: require("./assets/images/macmahon.png"),
      date: "Feb 2022 - Jul 2023",
      desc: "Managed data warehouse infrastructure and enterprise reporting systems.",
      descBullets: [
        "Maintained SQL Server data warehouse supporting operational reporting",
        "Developed SSRS enterprise reports used across departments",
        "Optimized SQL queries to improve reporting performance",
        "Ensured reliability and scalability of BI reporting systems"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

const bigProjects = {
  title: "Projects",
  subtitle:
    "Systems and automation platforms I designed to improve operational efficiency and decision-making",
  projects: [
    {
      image: require("./assets/images/pjo.png"),
      projectName: "PJO Management System",
      projectDesc:
        "Contractor workforce management platform covering registration, evaluation, termination, and reporting in one structured operational workflow.",
      footerLink: [
        {
          name: "Architecture",
          url: process.env.PUBLIC_URL + "/pjo-architecture.png"
        }
      ]
    },
    {
      image: require("./assets/images/vrr.png"),
      projectName: "Vendor Registration Request (VRR)",
      projectDesc:
        "Vendor onboarding platform covering request submission, verification, approval, and final registration with clearer tracking and reporting.",
      footerLink: [
        {
          name: "Architecture",
          url: process.env.PUBLIC_URL + "/vrr-architecture.png"
        }
      ]
    },
    {
      image: require("./assets/images/mpmh.png"),
      projectName: "MPMH Calculator",
      projectDesc:
        "Monthly manpower and manhour reporting platform covering data entry, validation, submission, reporting, and archive control in one structured process.",
      footerLink: [
        {
          name: "Architecture",
          url: process.env.PUBLIC_URL + "/mpmh-architecture.png"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements and Certifications"),
  subtitle:
    "Achievements, certifications, award letters, and selected highlights.",
  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani selected as a Google Code-in Finalist from 4000 students across 77 countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action available on billions of devices worldwide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "PWA Web App Developer",
      subtitle: "Completed certification from SMIT for PWA web app development.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "I enjoy writing and sharing what I learn while building useful systems.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant T-shirt and $200 in Google Cloud Credits",
      description:
        "Create a Google Assistant Action in less than 30 minutes and explore cloud credits and swag opportunities."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why React Is the Best?",
      description:
        "React is a JavaScript library for building user interfaces, maintained by Facebook and a broad community of developers and companies."
    }
  ],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("I enjoy sharing practical knowledge and real project experience."),
  talks: [
    {
      title: "Build Actions for Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

const podcastSection = {
  title: emoji("Podcast"),
  subtitle: "Conversations about technology, projects, and professional growth.",
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume.",
  display: false
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open.",
  email_address: "imamrinjani0@gmail.com"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
