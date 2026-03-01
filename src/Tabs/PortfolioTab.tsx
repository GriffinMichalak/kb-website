import { useState, useEffect, useMemo } from 'react';
import '../App.scss'
import Article from '../Components/Article';
import { NativeDropdown } from '../Components/Dropdown';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PortfolioTabProps = {
    articles: any;
    publication: string;
    setPublication: any;
    options: string[];
};

export const PortfolioTab = ({articles, publication, setPublication, options} : PortfolioTabProps) => {
    const ARTICLES_PER_PAGE = 21;
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
    }, [publication]);

    const filteredArticles = useMemo(() =>
        articles
            .slice()
            .sort((a: any, b: any) => {
                const dateA: Date = new Date(a.date);
                const dateB: Date = new Date(b.date);
                return dateB.getTime() - dateA.getTime();
            })
            .filter((a: any) => {
                const pub = a.publication;
                if (!publication) return pub;
                if (pub == publication) return pub;
            }),
        [articles, publication]
    );

    const pageCount = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
    const startIndex = (page - 1) * ARTICLES_PER_PAGE;
    const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  return (
    <div>
        <NativeDropdown publication={publication} setPublication={setPublication} options={options}/>
        <div className="portfolio__grid">
            {paginatedArticles.map((article: any) => (
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
        {pageCount > 1 && (
            <Stack spacing={2} alignItems="center" sx={{ mt: 3, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                <Pagination
                    count={pageCount}
                    page={page}
                    onChange={(_e, value) => setPage(value)}
                    shape="rounded"
                />
            </Stack>
        )}
    </div>
  );
}