const Result = ({ result }) => {
  // console.log(result);
  return (
    <>
      {(result === "x" || result === "o") && (
        <div className="flex justify-center items-center">
          <p className="font-bold text-white text-2xl">Winner is:</p>
          <span
            className={`ml-1 text-4xl font-bold uppercase text-white ${
              result === "x" ? "text-green-500" : "text-red-400"
            }`}
          >
            {result}
          </span>
        </div>
      )}
      {result === null && <div></div>}
      {result === false && (
        <>
          <p className="underline font-bold text-white text-3xl">DRAW</p>
        </>
      )}
    </>
  );
};

export default Result;
