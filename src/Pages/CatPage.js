import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getCatsBreeds, getCatImg } from "../services/cat";

export const CatPage = () => {
  const [cats, setCats] = useState([]);
  const [catImg, setCatImg] = useState("");
  const catId = useParams().catId;
  const cat = cats.find((cat) => cat.reference_image_id === catId);

  useEffect(() => {
    const fetchCatsBreed = async () => {
      const cats = await getCatsBreeds();
      setCats(cats);
    };
    const fetchCatImg = async () => {
      const catImg = await getCatImg(catId);
      setCatImg(catImg);
    };
    fetchCatImg();
    fetchCatsBreed();
  }, [catId]);

  return (
    <>
      {!cat ? (
        <>Page Loading...</>
      ) : (
        <>
          <Header />
          <main className="max-w-3xl mb-20 m-auto border-4 p-4 rounded-lg shadow-lg  ">
            <img
              src={catImg}
              alt="cat"
              className="rounded-full shadow-lg border-blue-300 border-4 max-h-96 m-auto"
            />
            <section className="mt-5">
              <h1 className="text-3xl text-bold">{cat.name}</h1>
              <p className="italic text-gray-600 text-xl">({cat.origin})</p>
              <div className="border-4 mt-5 border-blue-300 rounded-full"></div>
              <section className="mt-10">
                <h2 className="text-2xl text-bold text-extrabold">
                  Description:{" "}
                </h2>
                <p>{cat.description}</p>
                <h2 className="text-2xl text-bold mt-6 text-extrabold">
                  Temperament:{" "}
                </h2>
                <p>{cat.temperament}</p>
              </section>
              <div className="border-4 mt-5 border-blue-300 rounded-full"></div>
              <section className="mt-5 flex flex-row justify-between">
                <a
                  href={cat.wikipedia_url}
                  target="_blank"
                  rel="noreferrer"
                  className="border-4 border-blue-400 rounded-full p-2  bg-blue-200 hover:text-white hover:bg-blue-500"
                >
                  Wikipedia
                </a>
                <a
                  href={cat.cfa_url}
                  target="_blank"
                  rel="noreferrer"
                  className="border-4 border-blue-400 rounded-full p-2  bg-blue-200 hover:text-white hover:bg-blue-500"
                >
                  cfa.org
                </a>
                <a
                  href={cat.vcahospitals_url}
                  target="_blank"
                  rel="noreferrer"
                  className="border-4 border-blue-400 rounded-full p-2  bg-blue-200 hover:text-white hover:bg-blue-500"
                >
                  VcaHospitals
                </a>
              </section>
            </section>
          </main>
          <Footer />
        </>
      )}
    </>
  );
};
