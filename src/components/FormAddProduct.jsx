import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddProduct = () => {
  const [judul, setJudul] = useState("");
  const [episode, setEpisode] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        judul: judul,
        episode: episode,
      });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
       <div>
       <h1 className="title">Anime</h1>
       <h2 className="subtitle">Add New Anime</h2>
       <div className="card is-shadowless">
         <div className="card-content">
           <div className="content">
             <form onSubmit={saveProduct}>
         
               <div className="field">
                 <label className="label">Judul</label>
                 <div className="control">
                   <input
                     type="text"
                     className="input"
                     value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                     placeholder="Judul"
                   />
                 </div>
               </div>
               <div className="field">
                 <label className="label">Episode</label>
                 <div className="control">
                 <input
                     type="text"
                     className="input"
                     value={episode}
                    onChange={(e) => setEpisode(e.target.value)}
                     placeholder="Episode"
                   />
                 </div>
               </div>
               
               <div className="field">
                 <div className="control">
                   <button type="submit" className="button is-success">
                     Save
                   </button>
                 </div>
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
  );
};

export default FormAddProduct;
