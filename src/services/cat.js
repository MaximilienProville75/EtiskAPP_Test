const getCatsBreeds = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/breeds");
  const cats = await response.json();
  return cats;
};

const getCatImg = async (imgId) => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/${imgId}`);
  const catImg = await response.json();
  return catImg.url;
};

export { getCatsBreeds, getCatImg };
