import React from 'react'

const form = ({handleOnChange,handleSubmit}) => {
  return (
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
  )
}

export default form
