const Board = ({ data }) => {
  console.log(data);
  const handleClick = (index) => {
    // console.log(index);
    // if data.winner === null, game continues.
    // if data.winner === "x"/"o", game done.
    if (data.winner === "x" || data.winner === "o") return;
    data.handleTurn(index);
  };

  //

  return (
    <div className="w-full h-full grid grid-cols-3 place-items-center gap-1 bg-slate-100">
      {data.squares.map((val, index) => (
        <div
          key={index}
          className="min-h-[97.333333333px] h-full w-full bg-slate-800 flex justify-center items-center"
          onClick={() => {
            handleClick(index);
          }}
        >
          <span
            className={`text-6xl uppercase ${
              val === "x" ? "text-green-500" : "text-red-400"
            }`}
          >
            {val}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Board;
