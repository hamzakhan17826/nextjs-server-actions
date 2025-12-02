import ListCities from "./Resources/ListCities/page";
import ProductsPage from "./Products/page";
import RegisterPage from "./Account/Register/page";
import LoginPage from "./Account/Login/page";

export default function Home() {
  return (
    <div className="p-6">
      <RegisterPage />
      <ListCities />
      <LoginPage />
      <ProductsPage />
    </div>
  );
}
