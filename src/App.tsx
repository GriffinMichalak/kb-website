import { useState } from 'react';
import './App.scss'
import { articles } from './articles'
import { PortfolioTab } from './Tabs/PortfolioTab';
import { ResumeTab } from './Tabs/ResumeTab';
import { Header } from './Components/Header';

function App() {
  const [publication, setPublication] = useState('');
  // Get unique publications for dropdown options
  const options = Array.from(new Set(articles.map(article => article.publication))).filter(Boolean);
  const [activeTab, setActiveTab] = useState('Portfolio');
  const tabNames = ['Portfolio', 'Resume']

  return (
    <div className="site">

      <Header />

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
