import './link-item.css'
import {FiX,FiClipboard} from 'react-icons/fi'

export default function LinkItem({closeModal,content}) {
  const copyLink = async () =>{
    await navigator.clipboard.writeText(content.link)
    alert('Link copied!')
  }
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Shorted link</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>
      <span>{content.long_url}</span>
      <button className="modal-link" onClick={copyLink}>
        {content.link}
        <FiClipboard size={28} color="#FFF" />
      </button>
    </div>
  );
}