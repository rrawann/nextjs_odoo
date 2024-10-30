import Search from "@/components/base/Search";
// import { partnerData, searchDataPartner } from "../api/partners/route";
import GetPartners from "@/components/partner/partners";

export default async function Partners({searchParams}: {searchParams?: { query?: string;}}) {
    const query = searchParams?.query || "";
  let data: any[];
 
  // if (query == "") {
  //   data = await partnerData();
  // } else {
  //   data = await searchDataPartner(query);
  // }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search />
      < GetPartners />
    </main>
  );
}
