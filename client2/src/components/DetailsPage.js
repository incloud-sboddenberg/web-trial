import { Component } from 'react'

import DetailsPageTemplate from '../templates/DetailsPageTemplate'
import { connect } from 'react-redux'

import { fetchWeatherForCountry } from '../utils/api'

class DetailsPage extends Component {

    componentDidMount() {
        if (this.props.userId === null) {
            this.props.history.push("/")
        }

        // TODO: Make a query to the server to fetch the name of the country.
        if (this.props.countryName.name !== undefined) {
            fetchWeatherForCountry(this.props.countryName.name)
                .then(data => console.log(data))
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
