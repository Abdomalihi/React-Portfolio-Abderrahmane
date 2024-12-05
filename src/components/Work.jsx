import WorkCard from "./WorkCard";

const works = [
  {
    imgSrc: '/images/file_management_app.png',
    title: 'Full stack File Management',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://github.com/Abdomalihi/ProjectFinEtude'
  },
  {
    imgSrc: '/images/photoeditorapp.jpg',
    title: 'Free photo editor app',
    tags: ['API', 'SPA'],
    projectLink: 'https://github.com/Abdomalihi/PhotoEdit'
  },
  {
    imgSrc: '/images/admindashboard.jpg',
    title: 'Admin Dashboard',
    tags: ['Development', 'API'],
    projectLink: 'https://github.com/Abdomalihi/React-Admin-Dashboard'
  },
  {
    imgSrc: '/images/find-movies.png',
    title: 'React Movie App',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/Abdomalihi/React-Movie-App'
  },
  {
    imgSrc: '/images/ProductManagementApp.png',
    title: 'Product Management App',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/Abdomalihi/ProductApplication'
  },
  {
    imgSrc: '/images/portfolio.jpg',
    title: 'Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://abderrahmane-portfolio.online/'
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          A Glimpse of My Expertise
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {
            works.map(({imgSrc, title, tags, projectLink}, key)=> {
              return <WorkCard key={key} imgSrc={imgSrc} tags={tags} title={title} projectLink={projectLink} classes="reveal-up"/>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Work
