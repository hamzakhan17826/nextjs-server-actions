import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "./actions";

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
          className="border rounded-lg p-2 w-1/12"
        />
        <input
          type="number"
          name="price"
          placeholder="Product price"
          className="border rounded-lg p-2 w-1/12"
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
          {products.map((p) => (
            <tr key={p.id} className="border-b border-default">
              <td className="px-6 py-4">{p.id}</td>
              <td className="px-6 py-4">{p.name}</td>
              <td className="px-6 py-4">{p.price}</td>
              <td className="px-6 py-4">
                <form action={deleteProduct}>
                  <input type="hidden" name="id" value={p.id} />
                  <button className="px-2 py-1 rounded-lg bg-red-200 border border-red-900 justify-center cursor-pointer">
                    Delete
                  </button>
                </form>
              </td>
              <td>
                <details>
                  <summary>Edit</summary>
                  <form action={updateProduct}>
                    <input type="hidden" name="id" value={p.id} />
                    <input type="text" name="name" defaultValue={p.name} />
                    <input type="text" name="price" defaultValue={p.price} />
                    <button className="px-2 py-1 rounded-lg bg-green-200 border border-green-900 justify-center cursor-pointer">
                      Update
                    </button>
                  </form>
                </details>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
