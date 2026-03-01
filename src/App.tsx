import { useState } from 'react';
import './App.scss'
import { articles } from './articles'
import { PortfolioTab } from './Tabs/PortfolioTab';
import { ResumeTab } from './Tabs/ResumeTab';

function App() {
  const [publication, setPublication] = useState('');
  // Get unique publications for dropdown options
  const options = Array.from(new Set(articles.map(article => article.publication))).filter(Boolean);
  const [activeTab, setActiveTab] = useState('Portfolio');
  const tabNames = ['Portfolio', 'Resume']

  return (
    <div className="site">
      <header className="profile">
        <div className="profile__photo">
          <img
            // src="./assets/kelly-broder-pfp.png"
            src="https://media.licdn.com/dms/image/v2/D4E03AQHSIwCquUDelQ/profile-displayphoto-shrink_800_800/B4EZbXOA5fGcAc-/0/1747367499342?e=1773273600&v=beta&t=u0RyfPBTJKDawc7hNltSIFdfpSkU8L5xSDHIdRu8utQ"
            alt="Profile"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Kelly Broder</h1>
          {/* <p className="profile__role">Reporter, The Boston Globe</p> */}
          <p className="profile__bio">
          To be informed is to be empowered! I seek to give voice to the silenced, question systems in place and practice empathetic and objective reporting to serve the communities around me. I study journalism and women's, gender and sexuality studies at Boston University and will graduate in May 2027.
          </p>
          <p className="profile__bio">
          My work has appeared in The Boston Globe, NBC10 Boston, the Dorchester Reporter, the Enterprise papers on Cape Cod, and in other publications around New England.
          </p>
          <div className="profile__socials">
            {/* <a href="https://www.bostonglobe.com/about/staff-list/correspondent/kelly-broder/" target='_blank' aria-label="Website" className="social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </a> */}
            {/* <a href="#" aria-label="Twitter" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.32 3.91A12.16 12.16 0 0 1 3 4.79a4.28 4.28 0 0 0 1.32 5.72 4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.27 4.27 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.97A8.59 8.59 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0 0 23 6.29a8.49 8.49 0 0 1-2.54.7z" />
              </svg>
            </a> */}
            <a href="https://www.linkedin.com/in/kelly-broder-28110622b" target='_blank' aria-label="LinkedIn" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54A1.75 1.75 0 0 0 1.77 24h20.46A1.75 1.75 0 0 0 24 22.27V1.73A1.75 1.75 0 0 0 22.23 0z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/kellyjeanne04" target='_blank' aria-label="Instagram" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.41a4.86 4.86 0 0 1 1.76 1.04c.52.51.86 1.11 1.04 1.76.17.46.355 1.26.41 2.43.058 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.41 2.43a4.86 4.86 0 0 1-1.04 1.76 4.86 4.86 0 0 1-1.76 1.04c-.46.17-1.26.355-2.43.41-1.27.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.43-.41a4.86 4.86 0 0 1-1.76-1.04 4.86 4.86 0 0 1-1.04-1.76c-.17-.46-.355-1.26-.41-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.055-1.17.24-1.97.41-2.43a4.86 4.86 0 0 1 1.04-1.76A4.86 4.86 0 0 1 5.48 2.68c.46-.17 1.26-.355 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.74 0 8.332.013 7.052.07c-1.28.058-2.15.25-2.95.54A6.832 6.832 0 0 0 1.94 1.94C1.38 2.5.878 3.31.61 4.1.322 4.909.13 5.78.07 7.06.012 8.34 0 8.74 0 12c0 3.26.013 3.668.07 4.948.058 1.28.25 2.15.54 2.95.267.79.77 1.6 1.33 2.16.56.56 1.37 1.063 2.16 1.33.8.29 1.67.482 2.95.54C8.332 23.987 8.74 24 12 24c3.26 0 3.668-.013 4.948-.07 1.28-.058 2.15-.25 2.95-.54.79-.267 1.6-.77 2.16-1.33.56-.56 1.063-1.37 1.33-2.16.29-.8.482-1.67.54-2.95.057-1.28.07-1.688.07-4.948 0-3.26-.013-3.668-.07-4.948-.058-1.28-.25-2.15-.54-2.95a6.832 6.832 0 0 0-1.33-2.16A6.832 6.832 0 0 0 19.9.61c-.8-.29-1.67-.482-2.95-.54C15.668.013 15.26 0 12 0zm0 5.838A6.164 6.164 0 1 0 18.162 12 6.172 6.172 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 16 12a4.001 4.001 0 0 1-4 4zm6.406-10.845a1.44 1.44 0 1 1-1.44-1.44 1.444 1.444 0 0 1 1.44 1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <section className="portfolio">
        <div className="portfolio__tabs">
          {tabNames.map((tabName) => (
            <button onClick={() => setActiveTab(tabName)} key={tabName} className={`portfolio__tab ${activeTab==tabName ? 'portfolio__tab--active' : ''}`}>
              {tabName}
            </button>
          ))}
        </div>

        {activeTab == 'Portfolio' ? <PortfolioTab articles={articles} publication={publication} setPublication={setPublication} options={options} /> : null}
        {activeTab == 'Resume' ? <ResumeTab />: null}

      </section>
    </div>
  )
}

export default App
