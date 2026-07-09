import React, { useRef, useState } from "react";

function Form() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };

    setData((prev) => [...prev, formData]);
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Name: </label>
          <input type="text" ref={nameRef} placeholder="Enter Name" className="border px-3 py-2 ml-2" />
        </div>

        <div>
          <label>Email: </label>
          <input type="email" ref={emailRef} placeholder="Enter Email" className="border px-3 py-2 ml-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      {/* Display all submissions */}
      <div className="mt-5">
        <h2 className="text-xl font-bold mb-2">Submitted Data</h2>

        {data.map((item, index) => (
          <div key={index} className="border p-3 rounded mb-2">
            <p>
              <strong>Name:</strong> {item.name}
            </p>
            <p>
              <strong>Email:</strong> {item.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form; 
