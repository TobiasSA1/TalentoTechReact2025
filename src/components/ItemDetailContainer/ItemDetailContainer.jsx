import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom"; // si tu proyecto ya usa react-router
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const params = useParams ? useParams() : { id: null };
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    fetch("/data/products.json", { cache: "no-store" })
      .then(r => r.json())
      .then(d => { if (alive) setItems(d); })
      .catch(console.error)
      .finally(() => alive && setLoading(false));
    return () => { alive = false; };
  }, []);

  const product = useMemo(
    () => items.find(p => String(p.id) === String(params?.id)),
    [items, params?.id]
  );

  if (loading) return <div className="idc-skeleton" aria-busy="true">Cargando…</div>;
  if (!product) return <p className="idc-empty">Producto no encontrado.</p>;

  return (
    <section className="idc-wrap">
      <ItemDetail product={product} />
    </section>
  );
}
