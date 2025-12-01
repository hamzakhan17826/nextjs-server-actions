export type City = {
  id: number;
  countryId: number;
  country: { id: number; name: string };
  name: string;
};

export type ProductType = {
  id: number;
  name: string;
  price: number;
};
