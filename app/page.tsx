import ListCities from "./cities/page";
import ProductsPage from "./products/page";
import RegisterPage from "./register/page";

export default function Home() {
  return (
    <div className="p-6">
      <RegisterPage />
      <ListCities />
      <ProductsPage />
    </div>
  );
}
