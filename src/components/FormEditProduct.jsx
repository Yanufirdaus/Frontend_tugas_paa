import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditProduct = () => {
  const [judul, setJudul] = useState("");
  const [episode, setEpisode] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${id}`
        );
        setJudul(response.data.judul);
        setEpisode(response.data.episode);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getProductById();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, {
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
       <h2 className="subtitle">Edit Anime</h2>
       <div className="card is-shadowless">
         <div className="card-content">
           <div className="content">
             <form onSubmit={updateProduct}>
         
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

export default FormEditProduct;
