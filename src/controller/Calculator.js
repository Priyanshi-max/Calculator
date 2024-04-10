import React from 'react'
import Cost from '../components/Cost'
import Settings from '../components/Settings'
import Summary from '../components/Summary'
import './calculator.css'

export default function Calculator() {
  return (
    <div className='calculator-container'>
      <p className='title'>Manage Costs Overheads</p>
        <div className='cost-entry'>
            <div className="left-block block-design"><Cost/></div>
            <div className="right-block block-design"><Settings/></div>
        </div>
        
    </div>
  )
}
