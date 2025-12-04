import ListCities from "./Resources/ListCities/page";
import ProductsPage from "./Products/page";
import RegisterPage from "./Account/Register/page";
import LoginPage from "./Account/Login/page";
import ChangePasswordPage from "./Account/ChangePassword/page";
import CreateUserPage from "./Account/CreateUser/page";
import DesktopUsersPage from "./Account/DesktopUsers/page";
import ListCountries from "./Resources/ListCountries/page";

export default function Home() {
  return (
    <div className="p-6">
      <RegisterPage />
      <LoginPage />
      <ChangePasswordPage />
      <CreateUserPage />
      <DesktopUsersPage />
      <ListCountries />
      <ListCities />
      <ProductsPage />
    </div>
  );
}
