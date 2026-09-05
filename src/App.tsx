import { useState, useRef, useEffect, useCallback } from 'react';
import './App.scss';
import { fetchArticles, type Article } from './articles';
import { PortfolioTab } from './Tabs/PortfolioTab';
import { ResumeTab } from './Tabs/ResumeTab';
import { Header } from './Components/Header';
import { PhotosTab } from './Tabs/PhotosTab';
import { AudienceEngagementTab } from './Tabs/AudienceEngagementTab';
// import { SocialStrategyTab } from './Tabs/SocialStrategyTab';

const FF_PHOTOS_TAB: boolean = false;
const FF_SCROLL_TOP_BTN: boolean = true;

function App() {
  const [publication, setPublication] = useState('');
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [articlesLoading, setArticlesLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then(setArticles)
      .finally(() => setArticlesLoading(false));
  }, []);

  const options = Array.from(new Set(articles.map((article) => article.publication))).filter(
    Boolean
  );
  const [activeTab, setActiveTab] = useState('Clip Portfolio');
  const tabNames = ['Clip Portfolio', 'Audience Engagement', 'Resume'];

  if (FF_PHOTOS_TAB) {
    tabNames.push('Photos');
  }

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

  useEffect(() => {
    if (!FF_SCROLL_TOP_BTN) return;

    const updateScrollButton = () => setShowScrollToTop(window.scrollY > 300);

    updateScrollButton();
    window.addEventListener('scroll', updateScrollButton, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollButton);
  }, []);

  return (
    <div className="site">
      <Header />

      <section className="portfolio">
        <div className="portfolio__tabs" ref={tabsRef}>
          {tabNames.map((tabName) => (
            <button
              onClick={() => setActiveTab(tabName)}
              key={tabName}
              className={`portfolio__tab ${activeTab == tabName ? 'portfolio__tab--active' : ''}`}
            >
              {tabName}
            </button>
          ))}
          <div className="portfolio__tabs-indicator" ref={indicatorRef} />
        </div>

        <div className="portfolio__content" key={activeTab}>
          {activeTab == 'Clip Portfolio' ? (
            <PortfolioTab
              articles={articles}
              loading={articlesLoading}
              publication={publication}
              setPublication={setPublication}
              options={options}
            />
          ) : null}
          {activeTab == 'Resume' ? <ResumeTab /> : null}
          {activeTab == 'Photos' && FF_PHOTOS_TAB ? <PhotosTab /> : null}
          {activeTab == 'Audience Engagement' ? <AudienceEngagementTab /> : null}
          {/* {activeTab == 'Social Strategy' ? <SocialStrategyTab /> : null} */}
        </div>
      </section>

      {FF_SCROLL_TOP_BTN ? (
        <button
          type="button"
          className={`scroll-to-top ${showScrollToTop ? 'scroll-to-top--visible' : ''}`}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                ? 'auto'
                : 'smooth',
            })
          }
          aria-label="Scroll to top"
          title="Scroll to top"
          tabIndex={showScrollToTop ? 0 : -1}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 19V5m-6 6 6-6 6 6" />
          </svg>
        </button>
      ) : null}
    </div>
  );
}

export default App;
