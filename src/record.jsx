import React, { useState } from 'react'
import './style.css'
const Record = () => {

  const [input, setInput] = useState([])

  const addMore = () => {
    let obj = {
      id: Date.now(),
      name: '',
    }
    setInput([...input, obj]);
  }

  const deleteI = (id) => {
    alert(id)
    let removeI = input.filter((val) => val.id != id);
    setInput(removeI);
  }

  return (
    <div align="center" className=' pt-5'>
      <h1 className='text-secondary mb-5 '>Dynamic Component Form</h1>
      <div className="d-flex justify-content-center box ">
        <form>
          <label htmlFor="" className='me-4 fs-5 fw-bold'>
            Name :- <input type="text" />
          </label>
          <label htmlFor="" className='fs-5 fw-bold'>
            Email :- <input type="email" />
          </label>
          <label htmlFor="" className='ms-4 fs-5 fw-bold'>
            Salary :- <input type="text" />
          </label>
        </form>
        <button className='ms-5 btn btn-secondary' onClick={() => addMore()}>Add</button>
      </div>



      {
        input.map((item, index) => {
          return (
            <div className="d-flex justify-content-center py-3 box mt-4" key={index}>
              <form>
                <label htmlFor="" className='me-4 fs-5 fw-bold'>
                  Name :- <input type="text" />
                </label>
                <label htmlFor="" className='fs-5 fw-bold'>
                  Email :- <input type="email" />
                </label>
                <label htmlFor="" className='ms-4 fs-5 fw-bold'>
                  Salary :- <input type="text" />
                </label>
              </form>
              <button className='ms-4 btn btn-danger' onClick={() => deleteI(item.id)}>Delete</button>
            </div>
          )
        })
      }

    </div >
  )
}

export default Record
