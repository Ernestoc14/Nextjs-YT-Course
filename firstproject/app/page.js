import React from "react";

async function getData() {
  const url =
    "https://api.api-ninjas.com/v1/motorcycles?make=kawasaki&model=ninja";
  const options = {
    method: "GET",
    headers: { "X-Api-Key": "a141PyUM3f7JoY2ZTlY6kg==ZlAiGNVYjYlSD9IO" },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
  // const url =
  //   "https://bet365-api-inplay.p.rapidapi.com/bet365/get_sport_events/soccer";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "7f84114117msh60749b07331b46ep1a4c46jsn837104533757",
  //     "X-RapidAPI-Host": "bet365-api-inplay.p.rapidapi.com",
  //   },
  // };

  // try {
  //   const response = await fetch(url, options);
  //   const result = await response.json();
  //   return result;
  // } catch (error) {
  //   console.error(error);
  // }
}

async function HomePage() {
  const data = await getData();
  // console.log(data);

  return (
    <div className="flex flex-col space-y-4">
      {data.slice(0, 8).map((item) => (
        <div key={item.model}>
          <h2>{item.model}</h2>
          <p>{item.make}</p>
        </div>
      ))}
    </div>
  );
}
export default HomePage;
