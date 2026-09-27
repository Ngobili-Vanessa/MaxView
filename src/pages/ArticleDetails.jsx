import { useParams } from "react-router-dom";
import articles from "../data/articles.json";
import "./ArticleDetails.css";

function ArticleDetails() {
  const { id } = useParams();

  const article = articles.find(
  (item) => String(item.id) === String(id)
);
  if (!article) {
    return (
      <div className="article-details">
        <h1>Article not found</h1>
        <p>The article you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <article className="article-details">
      <div className="article-header">
        <span className="article-category">
          {article.category}
        </span>
        {article.featured && (
  <span className="article-featured">
    Featured
  </span>
)}

        <h1>{article.title}</h1>

        <div className="article-meta">
          <span>{article.date}</span>
          <span>By {article.author}</span>
        </div>
      </div>
{article.image ? (
  <img
    src={article.image}
    alt={article.title}
    className="article-image"
  />
) : (
  <div className="article-image-placeholder">
    No image available
  </div>
)}

      <div className="article-content">
        <p className="article-description">
  {article.description}
</p>

      <p className="article-body">
  {article.content}
</p>
      </div>
      {article.tags && article.tags.length > 0 && (
  <div className="article-tags">
    <h3>Tags</h3>

    <div className="tags-list">
      {article.tags.map((tag, index) => (
        <span key={index} className="article-tag">
          {tag}
        </span>
      ))}
    </div>
  </div>
)}
    </article>
  );
}

export default ArticleDetails;