import React from 'react'
import "./MapForContact.css"

const MapForContact = () => {
  return (
    <div className='map-for-contact'>
      <iframe
        title="Zemalt Location Map"
        src="https://www.google.com/maps/d/embed?mid=1A9Xp-74ct--T1MVgMNUZz1QKT2Tq_kM&ehbc=2E312F"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default MapForContact
