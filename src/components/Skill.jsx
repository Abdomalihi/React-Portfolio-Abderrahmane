/* Components */

import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/scss.svg',
    label: 'SCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/bootstrap.svg',
    label: 'Bootstrap',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/material-ui.svg',
    label: 'Material UI',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/typescript.svg',
    label: 'Typescript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/angular.svg',
    label: 'Angular',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/mysql.svg',
    label: 'MySql',
    desc: 'Database'
  },
  {
    imgSrc: '/images/docker.svg',
    label: 'Docker',
    desc: 'Containerization Platform'
  },
  {
    imgSrc: '/images/git.svg',
    label: 'Git',
    desc: 'Version Control'
  },
];

function Skill() {
  return (
    <section className="section">
      <div className="container">


        <h2 className="headline-2 reveal-up">
          Essential Tools I use
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]  reveal-up">
          Explore the cutting-edge technologies and trusted tools 
          I leverage to build dynamic, high-quality websites and 
          applications that deliver outstanding results.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({imgSrc, label, desc}, key) => {
              return  <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up"/>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Skill
