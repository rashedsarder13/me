const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  homepage: 'https://rashedsarder13.github.io/me',
  title: 'RS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Rashed Sarder',
  role: 'Front End Engineer',
  description:
    `Innovative software engineer offering two years of experience in the full software architect and development lifecycle – from concept through delivery of next-generation applications and customizable solutions.
    Expert in advanced development methodologies, tools and processes contributing to the design and rollout of cutting-edge software applications.
    Known for excellent troubleshooting skills – able to analyze code and engineer well-researched, cost-effective and responsive solutions.`,
  resume: "https://drive.google.com/file/d/1CM8cMHLNyblBo9IkynXtxSJXCeFIil6x/view?usp=sharing",
  social: {
    linkedin: 'https://www.linkedin.com/in/rashed-sarder13/',
    github: 'https://github.com/rashedsarder13',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Netflix Clone',
    description:
      'This project is based on React',
    stack: ['React', 'Redux-Toolkit', 'NodeJs', 'MongoDB', 'React Hook', 'CSS Styling'],
    sourceCode: 'https://github.com/rashedsarder13/Netflix-Clone-with-React-Redux-Toolkit-Nodejs-MongoDB',
    livePreview: 'https://netflixtubee.netlify.app',
  },
  {
    name: 'Advice',
    description:
      'This is mini fun project',
    stack: ['React', 'CSS', 'API'],
    sourceCode: 'https://github.com/rashedsarder13/advice',
    livePreview: 'https://onlyadvice.netlify.app/',
  },
  {
    name: 'Project 3',
    description:
      'Incomplete...',
    stack: ['TypeScript', 'React', 'GraphQL', 'NodeJs'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'NextJs',
  'Material UI',
  'Git',
  'C#',
  'GraphQL',
  'Web API',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rashedsarder13@gmail.com',
}

export { header, about, projects, skills, contact }
