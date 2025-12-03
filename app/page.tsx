import ListCities from "./Resources/ListCities/page";
import ProductsPage from "./Products/page";
import RegisterPage from "./Account/Register/page";
import LoginPage from "./Account/Login/page";
import ChangePasswordPage from "./Account/ChangePassword/page";

export default function Home() {
  return (
    <div className="p-6">
      <RegisterPage />
      <ListCities />
      <LoginPage />
      <ChangePasswordPage />
      <ProductsPage />
    </div>
  );
}
