import { image_URL } from "../utils/constants";

const ItemList = ({ data }) => {
  return (
    <div>
      <div>
        {data.map((listItem) => (
          <div
            key={listItem.card?.info?.id}
            className="m-3 flex justify-between"
          >
            <div className="w-2/3">
              <span className="font-bold text-sm text-slate-800">
                {listItem.card?.info?.name} -
              </span>
              <span className="font-bold text-sm text-slate-800">
                ₹{" "}
                {listItem.card?.info?.defaultPrice
                  ? listItem.card?.info?.defaultPrice / 100
                  : listItem.card?.info?.price / 100}
              </span>
              <p className="text-xs text-slate-600">
                {listItem.card?.info?.description}
              </p>
            </div>
            <div className="w-1/3 m-3 p-3 ">
              <button className="my-24 mx-10 py-2 px-8  bg-slate-100 text-green-600 rounded-lg absolute">
                Add +
              </button>
              <img
                className="rounded-md"
                alt="list-menu"
                src={image_URL + listItem.card?.info?.imageId}
              />
            </div>
          </div>
        ))}
      </div>
      <hr className="h-px my-8 bg-slate-800 border-1" />
    </div>
  );
};

export default ItemList;
