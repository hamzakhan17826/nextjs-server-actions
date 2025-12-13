"use client";

import { useEffect, useState } from "react";
import { Countries } from "../../config/types";
import { getCountries } from "./actions";

export default function ListCountries() {
  const [countries, setCountries] = useState<Countries[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data: Countries[] = await getCountries(1, "USA");
      setCountries(data);
      // console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="mb-5">
      <h1>/Account/Countries</h1>
      {countries.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
