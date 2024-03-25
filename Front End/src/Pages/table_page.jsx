import React, { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const table_page = () => {
    
    const [formData,setFormData] = useState({
        name : "",
        email : "",
        mobile : "",
    })

    const [dataList,setDataList] = useState([])

    const handleOnChange =(e)=>{
        const {value,name} = e.target
        setFormData((preve)=>{
            return {
                ...preve,
                [name] : value
            }
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const data= await axios.post("/create",formData)
        console.log(data)
        if(data.data.success){
            
            alert(data.data.message)
        }
    }


    const getFetchData = async()=>{
        const data= await axios.get("/")
        console.log(data)
        if(data.data.success){ 
            setDataList(data.data.data)     
            
            
        }

    }

    const handleDelete = async(id)=>{
        const data = await axios.delete("/delete/"+id)
        alert(data.data.message)
    
    }

    useEffect(()=>{
        getFetchData()
    },[])

         
  return (
    <div className="">
      <div className="  p-10">
        <button className="bg-black text-white p-3"> Add +</button>
      </div>
{/* form */}
      <form className="max-w-sm mx-auto p-5">
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name = "email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@flowbite.com"
            required
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name = "name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-5">
          <label
            for="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Mobile
          </label>
          <input
            type="text"
            id="mobile"
            name = "mobile"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            onChange={handleOnChange}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={handleSubmit}
        >
          Create
        </button>
      </form>

      <div className="relative overflow-x-auto px-10">
    {/* Table */}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
                dataList.map((el)=>{
                    return(
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">{el.name}</td>
                            <td className="px-6 py-4">{el.email}</td>
                            <td className="px-6 py-4">{el.mobile}</td>
                            <td className="px-6 py-4">
                                <div className="flex justify-between ">
                                <button className="bg-green-300 text-black p-2 mx-2">Edit</button>
                                <button className="bg-red-700 text-black p-2 mx-2" onClick={()=>handleDelete(el._id)}>Delete</button>
                                </div>
                                

                            </td>
                        </tr>
                    )
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default table_page;
