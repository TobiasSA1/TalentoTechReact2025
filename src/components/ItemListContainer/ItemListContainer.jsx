import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    const base = import.meta.env.BASE_URL || "/";
    fetch(`${base}data/products.json`, { cache: "no-store" })
      .then(r => r.json())
      .then(d => { if (alive) setItems(d); })
      .catch(console.error);
    return () => { alive = false; };
  }, []);
  
  if (loading) {
    return (
      <div className="ilc-skeleton" aria-busy="true" aria-live="polite">
        Cargando productos…
      </div>
    );
  }

  return (
    <section className="ilc-wrap">
      <header className="ilc-header">
        <h1>Catálogo</h1>
        <p className="ilc-sub">Explorá los últimos ingresos</p>
      </header>
      <ItemList items={items} />
    </section>
  );
}
