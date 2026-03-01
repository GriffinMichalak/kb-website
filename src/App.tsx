import { useState, useRef, useEffect, useCallback } from 'react';
import './App.scss'
import { articles } from './articles'
import { PortfolioTab } from './Tabs/PortfolioTab';
import { ResumeTab } from './Tabs/ResumeTab';
import { Header } from './Components/Header';

function App() {
  const [publication, setPublication] = useState('');
  const options = Array.from(new Set(articles.map(article => article.publication))).filter(Boolean);
  const [activeTab, setActiveTab] = useState('Portfolio');
  const tabNames = ['Portfolio', 'Resume']

  const tabsRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const updateIndicator = useCallback(() => {
    const container = tabsRef.current;
    const indicator = indicatorRef.current;
    if (!container || !indicator) return;
    const activeBtn = container.querySelector('.portfolio__tab--active') as HTMLElement | null;
    if (!activeBtn) return;
    indicator.style.left = `${activeBtn.offsetLeft}px`;
    indicator.style.width = `${activeBtn.offsetWidth}px`;
  }, []);

  useEffect(() => {
    updateIndicator();
  }, [activeTab, updateIndicator]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  return (
    <div className="site">

      <Header />

      <section className="portfolio">
        <div className="portfolio__tabs" ref={tabsRef}>
          {tabNames.map((tabName) => (
            <button onClick={() => setActiveTab(tabName)} key={tabName} className={`portfolio__tab ${activeTab==tabName ? 'portfolio__tab--active' : ''}`}>
              {tabName}
            </button>
          ))}
          <div className="portfolio__tabs-indicator" ref={indicatorRef} />
        </div>

        <div className="portfolio__content" key={activeTab}>
          {activeTab == 'Portfolio' ? <PortfolioTab articles={articles} publication={publication} setPublication={setPublication} options={options} /> : null}
          {activeTab == 'Resume' ? <ResumeTab />: null}
        </div>

      </section>
    </div>
  )
}

export default App
