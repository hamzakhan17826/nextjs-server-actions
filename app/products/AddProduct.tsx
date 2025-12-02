import { addProduct } from "./actions";

const AddProduct = () => {
  return (
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
  );
};

export default AddProduct;
