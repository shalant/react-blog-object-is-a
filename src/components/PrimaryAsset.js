import React from 'react';

import '../styles/primary_asset_styles.css';

function PrimaryAsset(props) {
  return (
    <div className='primary_asset' dangerouslySetInnerHTML={{__html: props.primary_asset}} >
    </div>
  )
}

export default PrimaryAsset;
