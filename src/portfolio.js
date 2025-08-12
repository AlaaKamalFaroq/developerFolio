/* Change this file to customize your portfolio */

const greeting = {
  title: "Hi, I'm A'laa Kamal",
  logo_name: "AlaaKamal",
  subTitle:
    "Aspiring Machine Learning Engineer | Applied AI & Problem-Solving Enthusiast | Passionate about using technology for social good 🚀",
  resumeLink: "https://link-to-your-resume.pdf", // add your resume link
  portfolio_repository: "https://github.com/AlaaKamalFaroq/developerFolio",
  githubProfile: "https://github.com/AlaaKamalFaroq",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/AlaaKamalFaroq",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alaa-kamal-faroq", // add your LinkedIn link
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/yourusername",
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2",
  },
];

const skills = {
  data: [
    {
      title: "Artificial Intelligence & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building and experimenting with AI tools for solving real-world problems",
        "⚡ Applying ML models to small datasets for climate change and community development projects",
        "⚡ Understanding model evaluation metrics for classification problems",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos:tensorflow",
          style: { backgroundColor: "transparent" },
        },
      ],
    },
    {
      title: "Problem Solving & Algorithms",
      fileName: "FullStackImg",
      skills: [
        "⚡ Practicing C++, Python, and Dart through problem-solving platforms",
        "⚡ Understanding data structures, algorithms, and optimization",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
          style: { backgroundColor: "transparent" },
        },
      ],
    },
  ],
};

const projects = {
  data: [
    {
      name: "Climate Change Awareness Website",
      url: "https://github.com/AlaaKamalFaroq/climate-change-awareness",
      description:
        "An interactive website built with HTML, CSS, and JavaScript to raise awareness about climate change in Africa.",
    },
    {
      name: "AI Tools for Low-Resource Societies",
      url: "https://github.com/AlaaKamalFaroq/ai-low-resource",
      description:
        "A project exploring AI tools that can operate in areas with limited infrastructure.",
    },
  ],
};

const aboutMe = {
  title: "About Me",
  description:
    "I’m A'laa Kamal, an aspiring Machine Learning Engineer passionate about using AI and problem-solving to create impactful, low-cost solutions for developing communities. I’ve participated in climate change programs, taught programming, and contributed to enriching Arabic programming content. My ultimate goal is to integrate technology with social good.",
};

export { greeting, socialMediaLinks, skills, projects, aboutMe };
