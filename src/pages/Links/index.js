import React,{useState,useEffect} from "react";
import {FiArrowLeft,FiLink,FiTrash} from 'react-icons/fi'
import { Link } from "react-router-dom";
import './links.css'
import {getLinksSave, deleteLink} from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem'

export default function Links() {
  const [myLinks,setMyLinks] = useState([])
  const [data,setData] = useState({})
  const [showModal,setShowModal] = useState(false)
  const [emptyList,setEmptyList] = useState(false)
  useEffect(()=>{
    async function getLinks() {
      const result = await getLinksSave("@reactshortener");
      if(result.length == 0){
       setEmptyList(true)
      }
      setMyLinks(result)
    }
    getLinks()
  },[])
  const handleClickLink = (link) =>{
    setData(link)
    setShowModal(true)
    
  }
  const handleDeleteLink = async (id) =>{
     const result = await deleteLink(myLinks,id)
     if(result.length == 0){
      setEmptyList(true);
      console.log(emptyList)
     }
     setMyLinks(result)
  }
  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#FFF" />
        </Link>
        <h1>My Links</h1>
      </div>
      {emptyList && (
        <div className="links-item">
        <h2 className="empty-text">Your list is empty!</h2>
        </div>
      )}

      {myLinks.map((link) => (
        <div key={link.id} className="links-item">
          <button className="link" onClick={() => handleClickLink(link)}>
            <FiLink size={18} color="#FFF" />
            {link.long_url}
          </button>
          <button
            className="link-delete"
            onClick={() => handleDeleteLink(link.id)}
          >
            <FiTrash size={24} color="#FF5454" />
          </button>
        </div>
      ))}
      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
