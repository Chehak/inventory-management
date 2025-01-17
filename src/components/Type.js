import React, { useState } from "react";
import formStructure from "../utils/types.json";
import { useParams } from "react-router-dom";

const Type = () => {
  const params = useParams();
  const [formData, setFormData] = useState(formStructure);

  // Filter the data based on the typeId
  const filteredData = formData.find(
    (type) => type.typeId === Number(params.typeId)
  );
  return (
    <>
      {filteredData.data.map((formField) => (
        <div className="card bg-base-100 shadow-xl p-4 flex flex-row items-center lg:w-96 w-full">
          <div className="card-body flex-grow">
            <h1 className="card-title text-lg font-semibold">
              {formField.objectType.name}
            </h1>
            <p className="text-sm text-gray-600">
              {formField.objectType.value} ({formField.objectType.type})
            </p>
            <div className="card-actions mt-2 flex justify-end">
              <button className="btn btn-primary btn-sm">Edit</button>
              <button className="btn btn-secondary btn-sm">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Type;
