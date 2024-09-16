import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faSpinner } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

export default function Loader({title, textSize}) {
  return (
      <div className={`text-center flex gap-2 items-center justify-center text-slate-300 ${"text-"+textSize}`}>
        <FontAwesomeIcon icon={faSpinner} spin={true} size='50px' />
        Loading {title} ...
    </div>
  )
}
