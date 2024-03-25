
import { Fragment, useState } from "react";
import Model from "../Components/model";

const model_page = () => {
    const [showModel, setShowModel] = useState(false);
  return (
    <Fragment>
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5" onClick={()=>setShowModel(true)}>
          Text Model
        </button>
        <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5">
          Video Model
        </button>
        <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5">
          Input Model
        </button>
      </div>
      <Model isVisible={showModel} onClose={()=>setShowModel(false)}/>
    </Fragment>
  )
}

export default model_page
