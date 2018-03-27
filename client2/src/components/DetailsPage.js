import { Component } from 'react'

import DetailsPageTemplate from '../templates/DetailsPageTemplate'
import { connect } from 'react-redux'

import { 
    fetchWeatherForCountry as _fetchWeatherForCountry,
    addWeatherToCountry as _addWeatherToCountry,
    getWeathersOfCountry as _getWeathersOfCountry
} from '../utils/api'

class DetailsPage extends Component {

    state = {
        humidity: 'nada',
        temp: 'nada',
        icon: 'nada',
        rain: 'nada'
    }

    componentDidMount() {
        if (this.props.userId === null) {
            this.props.history.push("/")
        }
    
        const countryId = this.props.match.params.country

        _getWeathersOfCountry(countryId).then(data => {
                if (data instanceof Array && data.length > 0) {
                    if (this.calculateMinutesDiff(data[0].creationDate) > 10) {
                       this.refetchWeatherForCountry() 
                    } else {
                        this.setWeatherData(data[0].humidity, data[0].temp, data[0].icon, data[0].rain)
                    }
                } else {
                       this.refetchWeatherForCountry() 
                }

        })
    }

    setWeatherData = (humidity, temp, icon, rain) => 
        this.setState({ 
            humidity, 
            temp, 
            icon: `http://openweathermap.org/img/w/${icon}.png`, 
            rain 
    })

    refetchWeatherForCountry = () => {
            _fetchWeatherForCountry(this.props.countryName.name)
                .then(data => {
                    console.log(data)
                    const { humidity, temp } = data.main
                    const icon = data.weather[0].icon
                    // FIXME: make sure that the rain field exist this way in the API
                    // loop over data.weather.main
                    const rain = (data["rain"] !== undefined)? true: false

                    _addWeatherToCountry(this.props.match.params.country, temp, humidity, rain, icon)
                        .then(data => {
                            console.log(data)
                            this.setWeatherData(data.humidity, data.temp, data.icon, data.rain)
                        })
                })
    }


    calculateMinutesDiff = (date) => {
        const rightNow = new Date()
        const lastFetchingDate = new Date(date)
        const timeDiff = Math.abs(rightNow.getTime() - lastFetchingDate.getTime());
        const diffMinutes = Math.ceil(timeDiff / (1000 * 60)); 
        return diffMinutes
    }

    



    render() {
        const { humidity, temp, rain, icon } = this.state
        return (
            DetailsPageTemplate(this.props.countryName.name , humidity, temp, rain, icon)
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
