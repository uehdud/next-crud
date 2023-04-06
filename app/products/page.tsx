export const metadata = {
  title: "ProductList",
};

import AddProduct from "./AddProduct";
import DeleteProduct from "./deleteProduct";
type Product = {
  id: number;
  title: string;
  price: number;
};

async function getProducts() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductList() {
  const products: Product[] = await getProducts();
  return (
    <div className="py-10 px-10 body">
      <div className="py-2">
        <AddProduct />
      </div>
      <table className="table w-full body">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
               <DeleteProduct {...product}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
