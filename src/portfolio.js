/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Imam Rinjani",
  title: "Hi, I'm Imam 👋",
  subTitle:
    "Digital Transformation & Business Intelligence Engineer specializing in Power BI, SQL, and Power Platform. I design automation systems and analytics platforms that help organizations make better decisions.",
  resumeLink: "/resume.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ImamR0",
  linkedin: "https://www.linkedin.com/in/lalu-imam-adiguna-rinjani-8108b324a/",
  gmail: "imamrinjani0@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Digital Transformation & Business Intelligence Engineer building automation systems, enterprise dashboards, and data-driven platforms using Power BI, SQL, and Microsoft Power Platform.",
  skills: [
  "⚡ Build executive dashboards using Power BI",
  "⚡ Develop automation workflows using Power Automate",
  "⚡ Build business apps using Power Apps",
  "⚡ Design SQL data models for analytics",
  "⚡ Integrate SharePoint and enterprise systems"
],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
  display: true // Set false to hide this section, defaults to true
};

// Education Section

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
        "Built strong analytical and systems engineering foundation",
        "Focused on telecommunications, data systems, and digital technologies",
        "Graduated with GPA 3.51"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Business Intelligence (Power BI, DAX, Data Modeling)",
      progressPercentage: "95%"
    },
    {
      Stack: "Automation & Business Apps (Power Platform, SharePoint)",
      progressPercentage: "90%"
    },
    {
      Stack: "Data & Databases (SQL, SQL Server, ETL, Data Warehouse)",
      progressPercentage: "85%"
    },
    {
      Stack: "Analytics & Reporting (Dashboard Design, KPI Analysis)",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Business Analyst – Power BI & Power Platform",
      company: "PT Amman Mineral",
      cardColor: "#F4B400",
      companylogo: require("./assets/images/amman.png"),
      date: "Jul 2023 – Present",
      desc: "Leading business intelligence and digital transformation initiatives across multiple departments.",
      descBullets: [
        "Developed executive Power BI dashboards used for KPI monitoring and management reviews",
        "Built Power Apps and Power Automate workflows reducing manual processes by ~60%",
        "Designed SQL-based data models supporting enterprise reporting and analytics",
        "Collaborated with SCM, Safety, HR, and Operations teams to improve data-driven decision making"
      ]
    },
    {
      role: "Data Warehouse & Business Intelligence Engineer",
      company: "PT Macmahon Indonesia",
      companylogo: require("./assets/images/macmahon.png"),
      date: "Feb 2022 – Jul 2023",
      desc: "Managed data warehouse infrastructure and enterprise reporting systems.",
      descBullets: [
        "Maintained SQL Server data warehouse supporting operational reporting",
        "Developed SSRS enterprise reports used across departments",
        "Optimized SQL queries improving reporting performance",
        "Ensured reliability and scalability of BI reporting systems"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Systems and automation platforms I designed to improve operational efficiency and decision-making",
  projects: [
    {
      image: require("./assets/images/pjo.png"),
      projectName: "PJO Management System",
      projectDesc:
        "A workforce management platform for handling PJO registration, transfers, termination, and performance evaluation. Built to improve data accuracy and streamline administrative workflows.",
      footerLink: [
        {
          name: "Case Study",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/vrr.png"),
      projectName: "Vendor Registration Request (VRR)",
      projectDesc:
        "Centralized vendor onboarding platform enabling full lifecycle tracking of vendor registration from submission to approval. Improved transparency, accountability, and reporting capabilities.",
      footerLink: [
        {
          name: "Case Study",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/mpmh.png"),
      projectName: "MPMH Calculator",
      projectDesc:
        "Automated manpower and manhour reporting system that streamlined monthly reporting for contract support teams, including validation, submission, and archiving processes.",
      footerLink: [
        {
          name: "Case Study",
          url: "#"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
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
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
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
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
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
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: "imamrinjani0@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
