import React, { useEffect, useRef } from 'react';

import '../styles/write_up_styles.css';

function WriteUp() {
    const CopyWriteRef = useRef();
    const text_threshold = 500;

    useEffect(() => {
        const copywrite = CopyWriteRef.current;

        // if (copywrite.getBoundingClientRed().height > text_threshold) {
        //     copywrite.style.height = `${text_threshold}px`;
        // }
    })

  return (
    <div className='write_up'>
        <div className='copyright'>
            lorem30 lorem30 lorem30
            lorem30 lorem 30 lorem 30 lorem30 lorem 30 lorem 30 lorem30 lorem 30 lorem 30 lorem30 lorem 30 lorem 30 lorem30
        </div>
        <div className='blur'></div>
        <div className='read_more'>Read more...</div>
    </div>
  )
}

export default WriteUp;
