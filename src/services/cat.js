const apiUrl = "https://api.thecatapi.com/v1/breeds";
const apiImgUrl = (imgId) => `https://api.thecatapi.com/v1/images/${imgId}`;

const getCatsBreeds = async () => {
  const response = await fetch(apiUrl);
  const cats = await response.json();
  return cats;
};

const getCatImg = async (imgId) => {
  const response = await fetch(apiImgUrl(imgId));
  const catImg = await response.json();
  return catImg.url;
};

export { getCatsBreeds, getCatImg };
