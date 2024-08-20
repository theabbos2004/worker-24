import React from 'react'
import { AppstoreDowloadIcon, PlaymarketDownloadIcon } from '../../assets/icon'

export default function Download() {
  return (
    <div className='position-relative d-flex col-12 col-md-6 justify-content-center align-items-center justify-content-md-end align-self-md-end' style={{height:"10%"}}>
        <AppstoreDowloadIcon width="160" height="70"/>
        <PlaymarketDownloadIcon width="160" height="70"/>
    </div>
  )
}
