import React from 'react';
import Calendar from 'react-calendar';

class eventCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            focusDate: ''
        }
    }

    onChange = date => {
        const newDate = date.toString().split(" ");
        let newArrDate = [newDate[1], newDate[2]];
        const focusDate = newArrDate.join("-")

        this.setState({
            date,
            focusDate
        })
    }

    render() {
        console.log(this.state.focusDate)
        return (
          <div className="full-calendar">
              <Calendar
                  onChange={this.onChange}
                  value={this.state.date.view}
              />
          </div>
        );
    }
}

export default eventCalendar;