"use server";

import { City } from "../config/types";

export async function getCities(
  id: number,
  countryId: number
): Promise<City[]> {
  const res = await fetch(
    `https://test.scrapcarfast.com/Resources/ListCities?id=${id}&countryId=${countryId}`
  );
  return res.json();
}
