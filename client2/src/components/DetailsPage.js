import { Component } from 'react'

import DetailsPageTemplate from '../templates/DetailsPageTemplate'
import { connect } from 'react-redux'

import { 
    fetchWeatherForCountry as _fetchWeatherForCountry,
    addWeatherToCountry as _addWeatherToCountry
} from '../utils/api'

class DetailsPage extends Component {

    componentDidMount() {
        if (this.props.userId === null) {
            this.props.history.push("/")
        }

        if (this.props.countryName.name !== undefined) {
            _fetchWeatherForCountry(this.props.countryName.name)
                .then(data => {
                    console.log(data)
                    const { humidity, temp } = data.main
                    const icon = data.weather[0].icon
                    // FIXME: make sure that the rain field exist this way in the API
                    const rain = (data["rain"] !== undefined)? true: false
                    console.group()
                    console.log(humidity)
                    console.log(icon)
                    console.log(temp)
                    console.log(rain)
                    console.groupEnd()
                })
        }
    }


    render() {

        return (
            DetailsPageTemplate()
        )
    }
}

function mapStateToProps ({ loggedUser, countries }, ownProps) {
    return {
        userId: loggedUser.id,
        countryName: countries[ownProps.match.params.country]
    }
}

function mapDispatchToProps (dispatch) {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage)
