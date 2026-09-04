import '../App.scss';

const ArticleSkeleton = () => {
  return (
    <article className="card card--skeleton">
      <div className="card__image">
        <div className="skeleton" />
      </div>
      <div className="card__meta">
        <span className="skeleton skeleton--text" style={{ width: '30%' }} />
        <span className="skeleton skeleton--text" style={{ width: '20%' }} />
      </div>
      <div className="card__line">
        <hr />
      </div>
      <div className="card__headline">
        <span className="skeleton skeleton--text" style={{ width: '90%' }} />
        <span className="skeleton skeleton--text" style={{ width: '60%' }} />
      </div>
      <div className="card__excerpt">
        <span className="skeleton skeleton--text" style={{ width: '100%' }} />
        <span className="skeleton skeleton--text" style={{ width: '100%' }} />
        <span className="skeleton skeleton--text" style={{ width: '70%' }} />
      </div>
    </article>
  );
};

export default ArticleSkeleton;
