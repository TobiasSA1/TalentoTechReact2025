import "./Item.css";

export default function Item({ item }) {
  const { id, title, price, thumbnail, category } = item;

  return (
    <article className="it-card" data-id={id}>
      <a className="it-media" href={`/item/${id}`} aria-label={`Ver detalle de ${title}`}>
        <img
          src={thumbnail}
          alt={`${title} – categoría ${category}`}
          loading="lazy"
          width="320"
          height="240"
        />
      </a>

      <div className="it-body">
        <div className="it-topline">
          <span className="it-badge">{category}</span>
        </div>

        <h3 className="it-title" title={title}>{title}</h3>

        <div className="it-meta">
          <span className="it-price">$ {Number(price).toLocaleString("es-AR")}</span>
        </div>

        <div className="it-actions">
          <a className="it-btn it-btn-primary" href={`/item/${id}`}>Ver detalle</a>
        </div>
      </div>
    </article>
  );
}
