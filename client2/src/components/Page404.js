import React, { Component } from 'react'


class Page404 extends Component {
    render() {
        return (
            <div className="App">
                <img src={process.env.PUBLIC_URL + '/images/404.gif'} alt="404 gif" />
                <p>The Page you are looking for... We Don't seem to have it.</p>
            </div>
        )
    }
}

export default Page404
