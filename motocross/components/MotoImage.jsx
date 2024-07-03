import Image from "next/image";

async function getImage(articleID) {
  const url = `https://motorcycle-specs-database.p.rapidapi.com/article/${articleID}/image/link`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7f84114117msh60749b07331b46ep1a4c46jsn837104533757',
      'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options, { cache: 'force-cache' });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function MotoImage({ articleID }) {
  const image = await getImage(articleID)

  return (
    <Image
      src={image.link}
      alt="Moto Image"
      width={248}
      height={248}
    />
  )
}

export default MotoImage
