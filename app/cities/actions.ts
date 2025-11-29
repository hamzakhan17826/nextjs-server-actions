"use server";

export async function getCities(id: number, countryId: number){
    const res = await fetch(`https://test.scrapcarfast.com/Resources/ListCities?id=${id}&countryId=${countryId}`);
    return res.json();
}