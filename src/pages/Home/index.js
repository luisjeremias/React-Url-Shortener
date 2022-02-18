import React,{useState} from "react";
import {FiLink} from 'react-icons/fi'
import './home.css'
import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";
import api from '../../services/api'
import { saveLink } from '../../services/storeLinks'

export default function Home() {
  const [link,setLink] = useState('')
  const [showModal,setShowModal] = useState(false)
  const [data,setData] = useState({})
  const handleShortLink = async ()=>{
    try{
      const response = await api.post('/shorten',{
        long_url:link
      })
      setData(response.data)
      setShowModal(true)
      setLink('')
      saveLink('@reactshortener',response.data)
    }catch(error){
      alert(error)
      setLink('')
    }
    // setShowModal(true)
  }
  return (
    <div className="container-home">
      <div className="Logo">
        <img src="/logo.png" alt="React Url Shortener Logo"/>
        <h1>React Url Shortener</h1>
        <span>paste the link bellow 👇 </span>
      </div>
      <div className="area-input">
        <div>
          <FiLink size={24} color='#FFF'/>
          <input value={link} onChange={(e)=>setLink(e.target.value)} placeholder="Paste your link here..." />
        </div>
        <button onClick={handleShortLink}>Short Link</button>
      </div>
      <Menu/>
      { showModal &&
      <LinkItem closeModal={()=>setShowModal(false)} content={data}/>
      }
    </div>
  );
}
