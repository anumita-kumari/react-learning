import { useState } from "react";
import ItemList from "./ItemList";

const ItemCategory = ({ items, showList, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className=" border border-b-1 rounded-md shadow-lg m-2 p-2 bg-slate-50">
        <div
          className="flex justify-between"
          onClick={() => {
            handleClick();
          }}
        >
          <h1 className="font-bold text-md">
            {items.title}({items.itemCards?.length})
          </h1>
          <span>⬇️</span>
        </div>
        {showList && <ItemList data={items.itemCards} />}
      </div>
    </div>
  );
};
export default ItemCategory;
