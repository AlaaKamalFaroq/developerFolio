/* ======== PERSONALIZED PORTFOLIO FOR A'LAA KAMAL ======== */

const greeting = {
  title: "Hi, I'm A'laa Kamal",
  logo_name: "AlaaKamal",
  subTitle:
    "Aspiring Machine Learning Engineer | AI & Problem-Solving Enthusiast | Passionate about leveraging technology for social good 🚀",
  resumeLink: "https://link-to-your-resume.pdf", // Replace with your resume link
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
    link: "https://www.linkedin.com/in/a-laa-kamal-3b6baa2b2",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/yourusername", // Optional
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2",
  },
];
const aboutMe = {
  title: "About Me",
  description:
    "const aboutMe = {
  title: "About Me",
  description:
    "I’m A'laa Kamal, an aspiring Machine Learning Engineer passionate about creating AI-driven solutions that address real-world challenges. With experience in climate awareness projects, teaching programming, and content creation, I combine technical expertise with a strong commitment to social impact.",
};",
};
const skills = {
  data: [
    {
      title: "Artificial Intelligence & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing AI models for classification, regression, and prediction tasks",
        "⚡ Applying data preprocessing, feature engineering, and model evaluation techniques",
        "⚡ Working with ML libraries such as TensorFlow, scikit-learn, and Pandas",
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
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "logos:scikit-learn",
          style: { backgroundColor: "transparent" },
        },
      ],
    },
    {
      title: "Problem Solving & Algorithms",
      fileName: "FullStackImg",
      skills: [
        "⚡ Solving competitive programming challenges in C++, Python, and Dart",
        "⚡ Understanding algorithms, data structures, and optimization techniques",
        "⚡ Applying mathematical foundations including probability, statistics, and linear algebra",
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
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML, CSS, JavaScript",
        "⚡ Deploying projects using Netlify and GitHub Pages",
        "⚡ Integrating APIs and handling JSON data",
      ],
      softwareSkills: [
        {
          skillName: "HTML",
          fontAwesomeClassname: "vscode-icons:file-type-html",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "vscode-icons:file-type-css",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: { backgroundColor: "transparent" },
        },
      ],
    },
  ],
};

const projects = {
  data: [
    {
      name: "ML Model for Early Disease Detection",
      url: "",
      description:
        "Machine learning project using medical datasets to predict diseases like diabetes or heart disease. Focus on data preprocessing, model training, and evaluation.",
    },
    {
      name: "AI-Powered Resume Screening Tool",
      url: "",
      description:
        "NLP-based tool that matches resumes to job descriptions using TF-IDF or embeddings. Demonstrates applied natural language processing skills.",
    },
    {
      name: "Climate Impact Prediction Model",
      url: "",
      description:
        "Regression/classification model predicting environmental indicators such as air quality or rainfall using open datasets.",
    },
  ],
};



const certifications = {
  title: "Certifications",
  items: [
    {
      name: "AI Career Essentials",
      image: "cert1.png", // Upload to public/images
    },
    {
      name: "Google Introduction to UX/UI Design",
      image: "cert2.png",
    },
    {
      name: "Learn How to Learn - Coursera",
      image: "cert3.png",
    },
  ],
};

export { greeting, socialMediaLinks, skills, projects, aboutMe, certifications };
