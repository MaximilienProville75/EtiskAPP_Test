import "./App.css";
import { useState, useEffect } from "react";
import { getCatsBreeds, getCatImg } from "../services/cat";

import { Header } from "../components/Header";
import { TableCat } from "../components/TableCat";
import { Footer } from "../components/Footer";

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatsBreed = async () => {
      const cats = await getCatsBreeds();
      setCats(cats);
    };
    fetchCatsBreed();
  }, []);

  return (
    <>
      <Header />

      {!cats ? (
        <div>Page Loading...</div>
      ) : (
        <>
          <TableCat props={cats} />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
