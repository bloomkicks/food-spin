const options = ["one", "two", "three", "four", "five"];

const WheelList = () => {
  let spaceY = 60;

  return (
    <section className="flex flex-row space-x-[26px]">
      {options.map((option, i) => (
        <div
          key={option}
          className="w-[50px] h-[50px] rounded-full bg-slate-200 leading-[50px] text-center"
          style={{
            transform: `translateY(-${
              i % 2 == 1 ? spaceY : i === 2 ? spaceY * 1.75 : 0
            }px)`,
            marginLeft: i === 2 ? "36px !important" : "",
            marginRight: i === 2 ? "20px !important" : "",
          }}
        >
          {option}
        </div>
      ))}
    </section>
  );
};

export default WheelList;
