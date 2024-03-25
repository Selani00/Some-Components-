import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../Components/form";

axios.defaults.baseURL = "http://localhost:8080";

const table_page = () => {
  const [addSection, setAddSection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    email: "",
    mobile: "",
    id: "",
  });

  const [dataList, setDataList] = useState([]);
  const [editSection, setEditSection] = useState(false);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("/create", formData);
    console.log(data);
    if (data.data.success) {
      alert(data.data.message);
      getFetchData();
    }
  };

  const getFetchData = async () => {
    const data = await axios.get("/");
    console.log(data);
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };

  const handleDelete = async (id) => {
    const data = await axios.delete("/delete/" + id);
    alert(data.data.message);
    if (data.data.success) {
      getFetchData();
    }
  };

  const handleUpdate = async (id) => {};

  const handleEditOnChange = async (id) => {
    const { value, name } = e.target;
    setFormDataEdit((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
    
  };

  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div className="">
      <div className="  p-10">
        <button
          className="bg-black text-white p-3"
          onClick={() => setAddSection(true)}
        >
          {" "}
          Add +
        </button>
      </div>
      {/* form */}
      {editSection && (
        <Form
          handleOnChange={handleUpdate}
          handleSubmit={handleEditOnChange}
          handleClose={() => setEditSection(flase)}
          rest={formDataEdit}
        />
      )}
      {addSection && (
        <Form
          handleOnChange={handleOnChange}
          handleSubmit={handleSubmit}
          handleClose={() => setAddSection(flase)}
          rest={formData}
        />
      )}

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
            {dataList[0] ? (
              dataList.map((el) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4">{el.name}</td>
                    <td className="px-6 py-4">{el.email}</td>
                    <td className="px-6 py-4">{el.mobile}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-between ">
                        <button
                          className="bg-green-300 text-black p-2 mx-2"
                          onClick={() => handleEdit(el)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-700 text-black p-2 mx-2"
                          onClick={() => handleDelete(el._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default table_page;
