import ListCities from "./Resources/ListCities/page";
import ProductsPage from "./Products/page";
import RegisterPage from "./Account/Register/page";

export default function Home() {
  return (
    <div className="p-6">
      <RegisterPage />
      <ListCities />
      <ProductsPage />
    </div>
  );
}
