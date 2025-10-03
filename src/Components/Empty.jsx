import React from 'react'
import { GiDiamonds, GiCutDiamond } from 'react-icons/gi';
// import { FaGem } from 'react-icons/fa';  //This also is a icon lib element, looks bad enough to comment out and normal enough to not just delete


export default function Empty() {
  return (
    <div style={{height: "15px", backgroundColor: "Black", display: 'flex',
      alignItems: 'center', justifyContent: 'center'
    }}>
      <GiCutDiamond size={18} color="cyan" style={{margin: '8px'}} />
      <p style={
        {
          height: '3px',
          backgroundColor: '#73FFD5',
          width: '90%', margin: 'auto'
        }
      }>
        {/* Empty p for spacing */}
      </p>
            <GiCutDiamond size={18} color="cyan" style={{margin: '8px'}} />
    </div>
  )
}