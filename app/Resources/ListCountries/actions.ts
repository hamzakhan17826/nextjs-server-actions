"use server";

import { Countries } from "../../config/types";

export async function getCountries(
  id: number,
  name: string
): Promise<Countries[]> {
  const res = await fetch(
    `https://test.scrapcarfast.com/Resources/ListCountries?id=${id}&name=${name}`
  );
  return res.json();
}
