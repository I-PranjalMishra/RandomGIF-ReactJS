import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {
  const { gif, Loading, fetchData } = useGif();
  const clickHandler = () => {
    fetchData();
  };

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-10 ">
      <h1 className="text-2xl underline uppercase font-bold mt-4">
        A Random GIF
      </h1>

      {Loading ? (
        <Spinner />
      ) : (
        <img src={gif} alt="Random GIF" className="" width="450" />
      )}

      <button
        className="w-10/12 mb-4 bg-yellow-500 text-lg py-2 rounded-lg"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}
