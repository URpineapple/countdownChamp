import React, { Component } from 'react'
import './App.css'
export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    componentWillMount() {
        this.getTimeUntil(this.props.deadline)
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
    }

    getTimeUntil(deadline) {
        let currentDate = new Date()
        const time = Date.parse(deadline) - Date.parse(currentDate) + currentDate.getTimezoneOffset() * 60000
 
        const seconds = Math.floor((time / 1000) % 60)
        const minutes = Math.floor((time / 1000 / 60) % 60)
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
        const days = Math.floor((time / (1000 * 60 * 60 * 24)))

        this.setState({ days, hours, minutes, seconds })
    }

    addZero = num => {
        return num < 0 ? num : num < 10 ? '0' + num : num
    }

    render() {
        return (
            <div>
                <div className="Clock-days displayInline">{this.addZero(this.state.days)} days</div>
                <div className="Clock-hours displayInline">{this.addZero(this.state.hours)} hours</div>
                <div className="Clock-minutes displayInline">{this.addZero(this.state.minutes)} minutes</div>
                <div className="Clock-seconds displayInline">{this.addZero(this.state.seconds)} seconds</div>
            </div>
        )
    }
}
