import { useEffect, useState } from "react";
import { FaStreetView } from "react-icons/fa6";
const Weather = () => {
  const [city, setCity] = useState("null");
  const [search, setSearch] = useState("Lahore");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=03be01d6f07226fdc81553fab5ea9e33 `;
      const response = await fetch(url);

      const resJson = await response.json();
      setCity(resJson);
      //   console.log(city);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="pt-32   ">
        <div className=" sohaib  rounded-lg w-[80%] lg:w-[20%] mx-auto">
          <div className="flex justify-center py-8">
            <input
              className="font-semibold w-[60%] lg:w-[60%] mx-auto rounded-xl text-center py-2 "
              type="search"
              value={search}
              placeholder="Search"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            ></input>
          </div>
          {!city ? (
            <p className="flex justify-center text-white py-20 text-2xl">
              No Data Found
            </p>
          ) : (
            <div className=" py-32 text-3xl flex justify-center gap-2">
              <FaStreetView className="text-center" />
              <div>
                <p className="font-bold text-white">{search}</p>
                <p className="font-semibold text-white">{city?.main?.temp}</p>
                <p className="text-base text-white">
                  Min : {city?.main?.temp_min} | Max : {city?.main?.temp_max}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
