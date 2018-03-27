import React from 'react'
import HeaderActionBar from '../components/HeaderActionBar'
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card'


const DetailsPageTemplate = (country, humidity, temp, rain, icon) => (
    <div>
        <HeaderActionBar />

        <br/>
        <br/>
        <br/>
        <br/>
     <Card>
        <CardTitle title={country}/>
        <CardHeader
          avatar={icon}
        />
        <CardText>

            <h4>humidity:</h4><p>{humidity}</p>
            <h4>temp:</h4><p>{temp}</p>
            <h4>rain:</h4><p>Probably {(rain)? 'Yes': 'No'}</p>
        </CardText>
      </Card>
    </div>


)


export default DetailsPageTemplate
