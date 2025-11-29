"use client";
import { useEffect, useState } from "react";
import { getCities } from "./actions";

const ListCities = () => {
  type City = {
    id: number;
    countryId: number;
    country: { id: number; name: string };
    name: string;
  };
  const [cities, setCities] = useState<City[]>([]);

  const id = 1;
  const countryId = 1;
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCities(id, countryId);
      setCities(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="text-2xl font-bold">/Resources/ListCities</div>
      {cities.map((city) => (
        <div key={city.id}>
          Country: {city.country.name}
          <br />
          City: {city.name}
        </div>
      ))}
      <br />
    </>
  );
};

export default ListCities;
