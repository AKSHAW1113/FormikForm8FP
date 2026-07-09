import React, { useRef, useState } from 'react'

function Parent() {
  let nameRef = useRef(null)
  let emailRef = useRef(null)
  const [data, setData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEntry = {
      name: nameRef.current.value.trim(),
      email: emailRef.current.value.trim()
    }
    if (!name || !email) {
      alert("Please fill all fields.");
      return;
    }
    // console.log(newEntry);
    setData(prev => [...prev, newEntry])
    nameRef.current.value = ""
    emailRef.current.value = ""
  }

  console.log("data: ", data);


  return (
    <div className='p-5'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label>Enter Name</label>
          <input type="text" ref={nameRef} placeholder='Enter Name' className='px-4 py-2 border-slate-50 border-2 ml-4' />
        </div>
        <div>
          <label>Enter Email</label>
          <input type="email" ref={emailRef} placeholder='Enter Email' className='px-4 py-2 border-slate-50 border-2 ml-4' />
        </div>
        <button type='Submit' className='bg-purple-600 px-4 py-2.5'>Submit</button>
      </form>

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
  )
}

export default Parent
