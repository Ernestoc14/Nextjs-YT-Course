import MotoImage from "@/components/MotoImage";

async function getData() {
  const url ="https://motorcycle-specs-database.p.rapidapi.com/make/Yamaha/model/yz125";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7f84114117msh60749b07331b46ep1a4c46jsn837104533757",
      "X-RapidAPI-Host": "motorcycle-specs-database.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function HomePage() {
  const data = await getData();
  return (
    <div className="space-y-4">
      {data.slice(0, 3).map((item) => (
        <div key={item.articleCompleteInfo.articleID}>
          <h2>{item.articleCompleteInfo.makeName}</h2>
          <p>{item.articleCompleteInfo.articleID}</p>
          <MotoImage articleID={item.articleCompleteInfo.articleID} />
        </div>
      ))}
    </div>
  );
}
export default HomePage;