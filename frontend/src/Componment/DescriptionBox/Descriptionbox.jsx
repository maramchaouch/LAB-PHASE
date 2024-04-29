import React from 'react'
import './Descriptionbox.css'

const Descriptionbox = () => {
  return (
    <div className='descriptionbox'>
      <div className="description-navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox fade">Reviews(180)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, tempora. Laboriosam possimus nemo provident tempora velit mollitia veritatis ex cupiditate, numquam exercitationem laborum fuga soluta, ea sunt vero facilis fugit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default Descriptionbox
