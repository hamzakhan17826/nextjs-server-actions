export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id");
    const countryId = searchParams.get("countryId");
    const res = await fetch(`https://test.scrapcarfast.com/Resources/ListCities?id=${id}&countryId=${countryId}`);
    const data = await res.json();
    console.log(data);
    return Response.json(data);
}
