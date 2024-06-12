const DeliverySchedule = ({options, selected, handleClick}) => {
  return (
    <div className="my-5 rounded-lg shadow-xl px-10 py-10 bg-white">
      <div className="flex justify-between mb-4">
        <div className="flex justify-start gap-2 items-center">
          <p className="bg-fourth px-3 py-2 rounded-full text-white font-normal text-xs">
            3
          </p>
          <p className=" tracking-widest text-sm font-semibold">
            Delivery Schedule
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {options.map((option, index) => (
          <div
            key={option.id}
            className={`w-44 border rounded-lg py-4 px-4 bg-fifth hover:cursor-pointer hover:border-seventh hover:duration-300 ${
              selected === index ? "border-seventh" : "border-fifth"
            }`}
            onClick={() => handleClick(index)}
          >
            <p className="font-semibold text-sm">{option.label}</p>
            <p className="text-xs mt-2">{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliverySchedule;
