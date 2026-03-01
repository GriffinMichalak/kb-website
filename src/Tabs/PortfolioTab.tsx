import '../App.scss'
import Article from '../Article';
import { NativeDropdown } from '../Dropdown';

type PortfolioTabProps = {
    articles: any;
    publication: string;
    setPublication: any;
    options: string[];
};

export const PortfolioTab = ({articles, publication, setPublication, options} : PortfolioTabProps) => {

  return (
    <div>
        <NativeDropdown publication={publication} setPublication={setPublication} options={options}/>
        <div className="portfolio__grid">
            {articles
                .slice()
                .sort((a: any, b: any) => {
                    const dateA: Date = new Date(a.date);
                    const dateB: Date = new Date(b.date);
                    return dateB.getTime() - dateA.getTime();
                })
                .filter((a: any) => {
                    const pub = a.publication;
                    if (!publication) {
                    return pub;
                    }
                    if (pub == publication) {
                    return pub;
                    }
                })
                .map((article: any) => (
                    <Article 
                    key={article.link || article.headline} 
                    image={article.image} 
                    link={article.link}
                    headline={article.headline} 
                    publication={article.publication} 
                    excerpt={article.excerpt} 
                    date={article.date} 
                    />
            ))}
        </div>
    </div>
  );
}