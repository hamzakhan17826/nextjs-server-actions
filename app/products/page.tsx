import { getProducts } from "./actions";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <h1>Products CRUD</h1>
      <AddProduct />
      <h2>All Products:</h2>
      <table className="w-full text-left">
        <thead className="border-b border-default">
          <th scope="col" className="px-6 py-3 font-bold">
            Id
          </th>
          <th scope="col" className="px-6 py-3 font-bold">
            Name
          </th>
          <th scope="col" className="px-6 py-3 font-bold">
            Price
          </th>
          <th className="px-6 py-3 font-bold">Actions</th>
        </thead>
        <tbody>
          <ProductList products={products} />
        </tbody>
      </table>
    </div>
  );
}
