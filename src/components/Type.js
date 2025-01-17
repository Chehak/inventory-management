import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToType, updateItemValue } from "../utils/fieldsSlice";

const Type = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const types = useSelector((store) => store.fields).types;

  const filteredData = types.find(
    (type) => type.typeId === Number(params.typeId)
  );

  const handleAddItem = (typeId) => {
    const uniqueItemId = `item-${Math.floor(Math.random() * 10000)}`;
    dispatch(addItemToType({
      typeId,
      item: { itemId: uniqueItemId },
    }));
  }

  const handleItemValueChange = (itemId, fieldName, newValue) => {
    dispatch(updateItemValue({ itemId, fieldName, value: newValue, typeId: params.typeId }));
  };

  if (!filteredData) return (
    <div>No id found</div>
  )
  return (
    <div className="p-4">
      <button className="btn mb-2" onClick={() => { handleAddItem(params.typeId) }}>Add Item</button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >

        {
          Array.isArray(filteredData.items) && filteredData.items.length > 0 ?
            (
              filteredData.items.map((item) => (
                <div className="card bg-neutral w-96 shadow-lg mr-5" key={item.itemId}>
                  <div className="card-body p-3">
                    <div className="flex spa">
                    <h5 className="card-title text-[18px]">{filteredData.data.staticFields[0].value}</h5>
                    <button class="btn btn-square">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
                      </div>
                    {filteredData.data.dynamicFields.map((field, index) => (
                      <div key={index} >
                        <label>{field.name}</label>
                        <input
                        className="input input-sm input-bordered w-full max-w-xs"
                          type={field.type || "text"}
                          value={item[field.name] || ""}
                          onChange={(e) =>
                            handleItemValueChange(item.itemId, field.name, e.target.value)
                          }
                          
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) :
            (
              <div>NO ITEMS FOUND</div>
            )}

      </div>
    </div>
  );
};

export default Type;
