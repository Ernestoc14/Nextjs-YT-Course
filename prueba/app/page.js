import Image from "next/image";

async function getData() {
  const url = "https://api-formula-1.p.rapidapi.com/drivers?search=lewi";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7f84114117msh60749b07331b46ep1a4c46jsn837104533757",
      "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.response;
  } catch (error) {
    console.error(error);
  }
}

async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div className="flex flex-col justify-center items-center h-screen text-white bg-slate-950">
      <h1 className="text-3xl">
        {data[0].name} {data[0].number}
      </h1>
      <Image
        src={data[0].image}
        alt="Image"
        width={230}
        height={180}
        priority
      />
      <p>
        Carrer Points: {data[0].career_points}
        <br />
        World Championships: {data[0].world_championships}
      </p>
    </div>
  );
}

export default Home;
