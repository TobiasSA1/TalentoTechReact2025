import Item from "./Item";
import "./ItemList.css";

export default function ItemList({ items = [] }) {
  if (!items.length) {
    return <p className="il-empty">No hay productos disponibles.</p>;
  }
  return (
    <div className="il-grid">
      {items.map(p => <Item key={p.id} item={p} />)}
    </div>
  );
}
