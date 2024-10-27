import { useDispatch } from "react-redux";
import { CDN_URL } from "../config/constants";
import { addItem, removeItem } from "../config/cartSlice";

const DataList = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          data-testid="foodItems"
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between hover:bg-blue-300"
        >
          <div className="w-9/12">
            <div className="py-2">
              <h3 className="font-bold text-center">{item.card.info.name}</h3>
              <p className="font-bold text-center">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
            </div>
            <p className="italic text-left">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4 flex flex-col items-center">
            <img
              src={`${CDN_URL}${item.card.info.imageId}`}
              alt={item.card.info.name}
              className="object-cover w-full h-32"
            />
            <div className="flex justify-evenly w-full mt-2">
              <button
                className="p-2 rounded-lg bg-white font-bold text-green-700"
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
              <button
                className="p-2 rounded-lg bg-white font-bold text-green-700"
                onClick={() => handleRemoveItem(index)}
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataList;
