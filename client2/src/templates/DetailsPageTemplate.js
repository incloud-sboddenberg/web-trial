import React from 'react'
import HeaderActionBar from '../components/HeaderActionBar'


const DetailsPageTemplate = (humidity, temp, rain, icon) => (
    <div>
        <HeaderActionBar />

        <br/>
        <br/>
        <br/>
        <br/>
        <h4>humidity:</h4><p>{humidity}</p>
        <h4>temp:</h4><p>{temp}</p>
        <h4>rain:</h4><p>{rain}</p>

        <img src={icon} />
    </div>
)


export default DetailsPageTemplate
