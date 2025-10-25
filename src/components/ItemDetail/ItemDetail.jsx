import { useState } from "react";
import "./ItemDetail.css";

export default function ItemDetail({ product }) {
  const { title, description, price, images = [], stock, category, thumbnail } = product;
  const gallery = images.length ? images : [thumbnail];
  const [current, setCurrent] = useState(gallery[0]);

  return (
    <article className="idetail">
      <div className="idetail-media">
        <img
          className="idetail-main"
          src={current}
          alt={`${title} – imagen principal`}
          loading="lazy"
        />
        <div className="idetail-thumbs">
          {gallery.map((src, i) => (
            <button
              key={i}
              className={`idetail-thumb ${src === current ? "is-active" : ""}`}
              onClick={() => setCurrent(src)}
              aria-label={`Ver miniatura ${i + 1}`}
            >
              <img src={src} alt={`Miniatura ${i + 1} de ${title}`} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <div className="idetail-info">
        <span className="idetail-badge">{category}</span>
        <h1 className="idetail-title">{title}</h1>

        <div className="idetail-price">$ {Number(price).toLocaleString("es-AR")}</div>
        <p className="idetail-desc">{description}</p>
        <p className="idetail-stock">Stock: {stock}</p>

        <div className="idetail-actions">
          <button className="idetail-btn idetail-btn-primary">Agregar al carrito</button>
          <a className="idetail-btn idetail-btn-ghost" href="/">Seguir comprando</a>
        </div>
      </div>
    </article>
  );
}
