import { useState } from "react";

function ToDo() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  return (
    <div className="w-[80%] h-full lg:w-[30%] mx-auto rounded-lg bg-gray-600 mt-32">
      <div className="py-12 w-[60%] mx-auto space-y-4">
        <h1 className="text-3xl font-bold">ToDo List</h1>
        <div>
          <input
            className="ps-2 p-2 w-[70%] lg:w-[80%] rounded-lg"
            type="text"
            placeholder="Add Items"
            value={inputList}
            onChange={itemEvent}
          ></input>
          <button
            onClick={listOfItems}
            className="bg-green-700 px-4 p-2 text-xl text-white rounded-full"
          >
            +{" "}
          </button>
        </div>
        <ol>
          {items.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default ToDo;
