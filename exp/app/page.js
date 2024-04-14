import Image from "next/image";

async function Insta() {
  const url =
    "https://instagram-scraper-api2.p.rapidapi.com/v1.1/posts?username_or_id_or_url=ernie.codes";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7f84114117msh60749b07331b46ep1a4c46jsn837104533757",
      "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
}

async function Page() {
  const info = await Insta();
  const posts = info.items;
  console.log(posts);

  return (
    <div className="flex flex-col justify-center items-center max-h-screen">
      <h2 className="text-3xl m-10">Posts</h2>
      <div className="grid grid-cols-3 gap-x-4 mt-12 ">
        {posts.map((post) => (
          <div key={post.id} className="">
            <h2>Post: </h2>
            <Image
              src={post.image_versions[0].url}
              alt="Image"
              width={80}
              height={80}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;