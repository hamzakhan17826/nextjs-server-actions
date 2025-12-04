"use server";

import { revalidatePath } from "next/cache";
import { ProductType } from "../config/types";

let products: ProductType[] = [
  { id: 1, name: "Hamza", price: 500 },
  { id: 2, name: "Khan", price: 300 },
];

export async function getProducts() {
  return products;
}

export async function addProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const priceStr = formData.get("price") as string;

  if (!name || !priceStr || isNaN(Number(priceStr))) {
    throw new Error("Invalid product data");
  }

  const price = Number(priceStr);
  const newProduct = {
    id: Date.now(),
    name,
    price,
  };

  products.push(newProduct);
  revalidatePath("/products");
}

export async function deleteProduct(formData: FormData) {
  const id = Number(formData.get("id"));
  products = products.filter((product) => product.id != id);
  revalidatePath("/products");
}

export async function updateProduct(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));

  products = products.map((p) => (p.id === id ? { ...p, name, price } : p));
  revalidatePath("/products");
}
