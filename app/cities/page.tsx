import { City } from "../config/types";
import { getCities } from "./actions";

export default async function ListCities() {
  const data: City[] = await getCities(1, 1);

  return (
    <div className="mb-5">
      <h1>/Account/Cities</h1>
      {data.map((item) => (
        <div key={item.id}>
          {item.country.name} - {item.name}
        </div>
      ))}
    </div>
  );
}
