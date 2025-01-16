import React, { useState } from 'react'

const ManageTypes = () => {
    const [inputs, setInputs] = useState([]);
    const [staticFields, setStaticFields] = useState({
        objectType: '',
        objectTitle: '',
    });

    const handleStaticChange = (event) => {
        const { name, value } = event.target;
        setStaticFields({
            ...staticFields,
            [name]: value,
        });
    };

    const handleChange = (index, event) => {
        const values = [...inputs];
        values[index].value = event.target.value;
        setInputs(values);
        console.log(inputs);
        console.log(staticFields);

    };

    const handleTypeChange = (index, event) => {
        const values = [...inputs];
        // Handle type change
        values[index].type = event.target.value;
        setInputs(values);
    };

    const handleAdd = (type) => {
        console.log(type);

        setInputs([...inputs, { value: '', type: type }]);
    };

    const handleRemove = (index) => {
        const updatedInputs = inputs.filter((_, i) => i !== index); // Remove the field at the given index
        setInputs(updatedInputs)
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
        <div className='p-4'>
            <button className="btn btn-sm">Add Type</button>
            <div className="flex flex-wrap gap-4">
                <div className="card bg-base-100 w-96 shadow-xl flex flex-row">
                    <div className="card-body w-2/3 p-4">
                        <label>Object type</label>
                        <input type="text"
                            name="objectType"
                            placeholder="Type here"
                            className="input input-sm input-bordered w-full max-w-xs"
                            value={staticFields.objectType}
                            onChange={handleStaticChange} />

                        <label>Object title</label>
                        <input type="text"
                            name="objectTitle"
                            placeholder="Type here"
                            className="input input-sm input-bordered w-full max-w-xs"
                            value={staticFields.objectTitle}
                            onChange={handleStaticChange} />

                        <label>Fields</label>
                        {
                            inputs.map((input, index) => (
                                <div key={index} className="flex items-center w-full max-w-xs h-8 border border-gray-600 rounded-lg overflow-hidden">
                                    <input
                                        type="text"
                                        placeholder="Type here"
                                        className="input input-sm w-full max-w-xs"
                                        value={input.fieldName}
                                        onChange={(event) => handleChange(index, event)}
                                    />
                                    <select
                                        className="select select-bordered bg-neutral w-3/4 border-none rounded-none focus:ring-0"
                                        value={input.type}  // Patch type to the select input
                                        onChange={(event) => handleTypeChange(index, event)}
                                    >
                                        {attributes.map((att) => (
                                            <option key={att.value} value={att.value}>{att.name}</option>
                                        ))}
                                        <option onClick={() => handleRemove(index)}>Remove</option>
                                    </select>
                                    <button
                                        className="btn btn-sm btn-error ml-2"
                                        onClick={() => handleRemove(index)}
                                    >
                                        X
                                    </button>
                                </div>


                            ))
                        }

                        <div className="dropdown">
                            <div tabIndex="0" role="button" className="btn w-full">Add Field</div>
                            <ul
                                tabIndex="0"
                                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full shadow"
                            >
                                {attributes.map((att) => (
                                    <li key={att.value}>
                                        <a onClick={() => handleAdd(att.value)}>{att.name}</a>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ManageTypes