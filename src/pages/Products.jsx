import { useEffect, useState } from "react";
import Loader from "../UI/Loader.jsx";

const Products = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchApi();
  }, []);
  if (error) return <div>Error: No data Available {error}</div>;
  if (data.length === 0) return <Loader />;
  return (
    <>
      <div>Products</div>
      <div className="flex flex-wrap  ">
        {data?.map((v, i) => {
          return (
            <div
              className="p-10 shadow-2xl w-[20rem] mx-auto hover:bg-green-800 duration-1000 "
              key={i}
            >
              <div className="">
                <img className="size-28 mx-auto  block" src={v.image} alt="/" />
                <p>{v.title}</p>
                <p>{v.description}</p>
                <p>price:{v.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
