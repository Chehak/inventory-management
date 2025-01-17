import React, { useState } from 'react'
import { addNewType, updateStaticFieldType, updateDynamicFieldType,addDynamicField } from '../utils/fieldsSlice'
import { useDispatch, useSelector } from 'react-redux';

const ManageTypes = () => {
    const dispatch = useDispatch()
    const types = useSelector((state) => state.fields).types;

    const handleStaticChange = (typeId, fieldName, targetValue) => {
        dispatch(updateStaticFieldType({ typeId, fieldName, targetValue }))
    };

    const handleDynamicChange = (typeId, index, key, targetValue) => {
        dispatch(updateDynamicFieldType({ typeId, index, key, targetValue }));
    }

    const handleAddField = (typeId, value)=>{
        dispatch(addDynamicField({typeId,value}));
    }

    console.log(types,"types")

    const handleAddType = () => {

        dispatch(addNewType(
            {
                typeId: Math.floor(Math.random() * 400),
                data: {
                    staticFields: [
                        {
                            name: "Object Type",
                            type: "text",
                        },
                        {
                            name: "Object Title",
                            type: "dropdown",
                        }
                    ],
                    dynamicFields: [
                        {
                            "name": "Modal",
                            "type": "text",
                            "value":""
                        },
                    ]
                }
            }

        ))
    }

    const attributes = [
        {
            name: "Text",
            value: "text"
        },
        {
            name: "Number",
            value: "number"
        },
        {
            name: "Date",
            value: "date"
        },
    ]

    return (
        <>
    <div className="p-4">
    <button className="btn btn-sm mb-4" onClick={handleAddType}>Add Type</button>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(types) && types.length > 0 ?
         (
            types.map((type) => (
                <div key={type.typeId} className="card bg-base-100 w-full shadow-xl">
                    <div className="card-body p-4">
                        {type.data.staticFields.map((field, index) => (
                            <div key={`static-${type.typeId}-${index}`}>
                                <label>{field.name}</label>
                                <input
                                    type={`${field.type}`}
                                    className="input input-sm input-bordered w-full max-w-xs"
                                    value={field.value || ""}
                                    onChange={(e) =>
                                        handleStaticChange(type.typeId, field.name, e.target.value)
                                    }
                                />
                            </div>
                        ))}

                        {type.data.dynamicFields.map((field, index) => (
                            <div
                                key={`dynamic-${type.typeId}-${index}`}
                                className="flex items-center w-full max-w-xs h-8 border border-gray-600 rounded-lg overflow-hidden"
                            >
                                <input
                                    type="text"
                                    className="input input-sm w-full max-w-xs"
                                    value={field.name}
                                    onChange={(e) =>
                                        handleDynamicChange(type.typeId, index, 'name', e.target.value)
                                    }
                                />
                                <select
                                    className="select select-bordered bg-neutral w-3/4 border-none rounded-none focus:ring-0"
                                    value={field.type}
                                    onChange={(e) =>
                                        handleDynamicChange(type.typeId, index, 'type', e.target.value)
                                    }
                                >
                                    {attributes.map((att) => (
                                        <option key={att.value} value={att.value}>{att.name}</option>
                                    ))}
                                </select>
                            </div>
                        ))}

                        <div className="dropdown">
                            <div tabIndex="0" role="button" className="btn w-full">Add Field</div>
                            <ul
                                tabIndex="0"
                                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full shadow"
                            >
                                {attributes.map((att) => (
                                    <li key={att.value}>
                                        <a onClick={() => handleAddField(type.typeId, att.value)}>{att.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <div>No types available</div>
        )}
    </div>
</div>


        </>
    



    )
}

export default ManageTypes