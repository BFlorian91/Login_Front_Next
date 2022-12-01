type Props = {
  count: number
}

const CounterDebug = ({ count }: Props) => {
  return (
    <div>
      {" "}
      <h3>
        Rendered:{" "}
        <span
          className="text-orange-700 decoration-red-400 font-black text-3xl"
        >
          {count}
        </span>
      </h3>
    </div>
  );
};

export default CounterDebug;
