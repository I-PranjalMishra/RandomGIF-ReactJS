import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag() {
  const [Tag, setTag] = useState("");
  const { gif, Loading, fetchData } = useGif(Tag);
  const clickHandler = () => {
    fetchData();
  };
  function changeHandler(e) {
    setTag(e.target.value);
  }

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-10 ">
      <h1 className="text-2xl underline uppercase font-bold mt-4">
        Random {Tag} GIF
      </h1>

      {Loading ? (
        <Spinner />
      ) : (
        <img src={gif} alt="Random GIF" className="" width="450" />
      )}

      <input
        className="w-10/12 py-2 text-lg rounded-lg  text-center text-black"
        onChange={changeHandler}
        value={Tag}
      />

      <button
        className="w-10/12 mb-4 bg-yellow-500 text-lg py-2 rounded-lg"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}
