import './App.scss'
import Article from './Article'

const articles = [
  {
    image: 'https://picsum.photos/seed/story1/400/280',
    publication: 'Boston Globe',
    date: '12/19/2025',
    headline:
      'Brown campus shooter harbored resentment as a PhD student in the early 2000s',
    excerpt:
      'Growing up in Portugal, Claudio Manuel Neves Valente stood out for his intellectual potential. In high school, he traveled to national and international physics competitions. He later graduated from Portugal\u2019s top university for science and engineering.',
  },
  {
    image: 'https://picsum.photos/seed/story2/400/280',
    publication: 'Boston Globe',
    date: '10/23/2025',
    headline:
      'Mother and former nurse killed in shooting amid mental illness and life on the streets',
    excerpt:
      'As a teenager in the early 1980s, Marie Molea was captain of the cheerleading team and homecoming queen at Lynn Classical High School. But everything changed when she started experiencing bouts of paranoia, leaving her family perplexed and concerned.',
  },
  {
    image: 'https://picsum.photos/seed/story3/400/280',
    publication: 'AP News',
    date: '09/10/2025',
    headline:
      'She was adopted into an abusive US home. Decades later, ICE deported her',
    excerpt:
      'It sounded like freedom, like a world of possibility beyond the orphanage walls. Maria Pires was getting adopted. At 11 years old, she saw herself escaping the chaos and violence of the Sao Paulo orphanage, where she\u2019d been sexually assaulted by a staff member.',
  },
]

function App() {
  return (
    <div className="site">
      <header className="profile">
        <div className="profile__photo">
          <img
            // src="./assets/kelly-broder-pfp.jpg"
            src="https://media.licdn.com/dms/image/v2/D4E03AQHSIwCquUDelQ/profile-displayphoto-shrink_800_800/B4EZbXOA5fGcAc-/0/1747367499342?e=1773273600&v=beta&t=u0RyfPBTJKDawc7hNltSIFdfpSkU8L5xSDHIdRu8utQ"
            alt="Profile"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Kelly Broder</h1>
          <p className="profile__role">Reporter, The Boston Globe</p>
          <p className="profile__bio">
            Kelly Broder is a criminal justice reporter for the Boston Globe. She
            previously worked for the Associated Press, The Baltimore Sun, The
            Advocate | Times-Picayune and other newspapers.
          </p>
          <div className="profile__socials">
            <a href="https://www.bostonglobe.com/about/staff-list/correspondent/kelly-broder/" target='_blank' aria-label="Website" className="social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.32 3.91A12.16 12.16 0 0 1 3 4.79a4.28 4.28 0 0 0 1.32 5.72 4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.27 4.27 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.97A8.59 8.59 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0 0 23 6.29a8.49 8.49 0 0 1-2.54.7z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/kelly-broder-28110622b" target='_blank' aria-label="LinkedIn" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54A1.75 1.75 0 0 0 1.77 24h20.46A1.75 1.75 0 0 0 24 22.27V1.73A1.75 1.75 0 0 0 22.23 0z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <section className="portfolio">
        <div className="portfolio__tabs">
          <button className="portfolio__tab portfolio__tab--active">
            Portfolio
          </button>
        </div>

        <div className="portfolio__grid">
          {articles.map((article) => (
            <Article 
              image={article.image} 
              headline={article.headline} 
              publication={article.publication} 
              excerpt={article.excerpt} 
              date={article.date} 
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
