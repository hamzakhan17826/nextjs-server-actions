import { getProducts, addProduct } from "./actions";
import ProductList from "./ProductList";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <h1>Products CRUD</h1>
      <form action={addProduct} className="flex flex-col mt-4 space-y-2">
        <input
          type="text"
          name="name"
          placeholder="Product name"
          className="border rounded-lg p-2 w-1/12 bg-white"
        />
        <input
          type="number"
          name="price"
          placeholder="Product price"
          className="border rounded-lg p-2 w-1/12 bg-white"
        />
        <button
          type="submit"
          className="flex cursor-pointer bg-gray-100 border border-gray-400 w-20 rounded-lg justify-center p-2 mb-5"
        >
          Add
        </button>
      </form>
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
