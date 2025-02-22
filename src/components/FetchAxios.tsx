import axios from "axios";
import { useEffect, useState } from "react";
type Product = {
  id: string;
  price: string;
  product: string;
};
function FetchAxios() {
  const [items, setItems] = useState<Product[]>();
  useEffect(() => {
    axios
      .get("https://64bc21c57b33a35a444711cc.mockapi.io/products")
      .then((res) => {
        const item = res.data;
        setItems(item);
      });
  }, []);
  return (
    <div>
        <h1>Fetch Axios Page</h1>
      {items?.map((item: Product) => (
        <p>{item.id}</p>
      ))}
    </div>
  );
}

export default FetchAxios;
