import React from 'react';
import { Container, Form } from 'semantic-ui-react';
import axios from 'axios';

const sleepStart = [
    { key: '0', text: '8:00 PM', value: '20:00' },
    { key: '1', text: '9:00 PM', value: '21:00' },
    { key: '2', text: '10:00 PM', value: '22:00' },
    { key: '3', text: '11:00 PM', value: '23:00' },
    { key: '4', text: '12:00 AM', value: '0:00' },
    { key: '5', text: '1:00 AM', value: '1:00' },
    { key: '6', text: '2:00 AM', value: '2:00' },
    { key: '7', text: '3:00 AM', value: '3:00' },
    { key: '8', text: '4:00 AM', value: '4:00' },
]

const sleepDuration = [
    {key: '0', text: '3 hours', value: '3'},
    {key: '1', text: '4 hours', value: '4'},
    {key: '2', text: '5 hours', value: '5'},
    {key: '3', text: '6 hours', value: '6'},
    {key: '4', text: '7 hours', value: '7'},
    {key: '5', text: '8 hours', value: '8'},
    {key: '6', text: '9 hours', value: '9'},
    {key: '7', text: '10 hours', value: '10'},
    {key: '8', text: '11 hours', value: '11'},
    {key: '9', text: '12 hours', value: '12'},
]

const studyBreaks = [
    {key: '0', text: '5 min', value: '5'},
    {key: '1', text: '10 min', value: '10'},
    {key: '2', text: '15 min', value: '15'},
    {key: '3', text: '30 min', value: '30'},
    {key: '4', text: '45 min', value: '45'},
    {key: '5', text: '1 hour', value: '60'},
]

const schoolDays = [
    {key: '0', text: '1 day', value: '1'},
    {key: '1', text: '2 days', value: '2'},
    {key: '2', text: '3 days', value: '3'},
    {key: '3', text: '4 days', value: '4'},
    {key: '4', text: '5 days', value: '5'},
]

const schoolHours = [
    { key: '0', text: '12:00 PM', value: '12:00' },
    { key: '1', text: '1:00 PM', value: '13:00' },
    { key: '2', text: '2:00 PM', value: '14:00' },
    { key: '3', text: '3:00 PM', value: '15:00' },
    { key: '4', text: '4:00 PM', value: '16:00' },
    { key: '5', text: '5:00 PM', value: '17:00' },
    { key: '6', text: '6:00 PM', value: '18:00' },
    { key: '7', text: '7:00 PM', value: '19:00' },
    { key: '8', text: '8:00 PM', value: '20:00' },
    { key: '9', text: '8:00 PM', value: '21:00'}
]

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            sleepStart: '',
            sleepDuration: '',
            exercise: '',
            studyBreakIntervals: '',
            studyHabits: '',
            daysOfSchool: '',
            schoolDay1: '',
            schoolDay2: '',
            schoolDay3: '',
            schoolDay4: '',
            schoolDay5: '',
        }
    }

    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    handleSleepStartChange = (e, { value }) => this.setState({ sleepStart: value })

    handleSleepDurationChange = (e, { value }) => this.setState({ sleepDuration: value })

    handleActiveChange = (e, { value }) => this.setState({ exercise: value })

    handleStudyChange = (e, { value }) => this.setState({ studyHabits: value})

    handleStudyBreakChange = (e, { value }) => this.setState({ studyBreakIntervals: value })

    handleSchoolDaysChange = (e, { value }) => this.setState({ daysOfSchool: value })

    handleSchoolDay1Change = (e, { value }) => this.setState({ schoolDay1: value })

    handleSchoolDay2Change = (e, { value }) => this.setState({ schoolDay2: value })

    handleSchoolDay3Change = (e, { value }) => this.setState({ schoolDay3: value })

    handleSchoolDay4Change = (e, { value }) => this.setState({ schoolDay4: value })

    handleSchoolDay5Change = (e, { value }) => this.setState({ schoolDay5: value })

    handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:4000/api/info/create', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            sleepStart: this.state.sleepStart,
            sleepDuration: this.state.sleepDuration,
            exercise: this.state.exercise,
            studyBreakIntervals: this.state.studyBreakIntervals,
            studyHabits: this.state.studyHabits,
            daysOfSchool: this.state.daysOfSchool,
            schoolDay1: this.state.schoolDay1,
            schoolDay2: this.state.schoolDay2,
            schoolDay3: this.state.schoolDay3,
            schoolDay4: this.state.schoolDay4,
            schoolDay5: this.state.schoolDay5,
        })
            .then(res => console.log(res.data))

        this.setState({
            firstName: '',
            lastName: '',
            sleepStart: '',
            sleepDuration: '',
            exercise: '',
            studyBreakIntervals: '',
            studyHabits: '',
            daysOfSchool: '',
            schoolDay1: '',
            schoolDay2: '',
            schoolDay3: '',
            schoolDay4: '',
            schoolDay5: '',
        })
    }


    render() {
        const { value } = this.state;
        console.log(this.state)
        return(
            <div>
                <Container>
                    <div style={{paddingTop: '50px'}} className="center-text-column">
                        <h1>Welcome to 'insert product name here'!</h1>
                        <h3>Just answer some quick questions and we can get your customized COVID-friendly calendar up and running!</h3>
                    </div>
                    <Form style={{paddingTop: '50px'}}>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid label='First name'
                                placeholder='First name'
                                value={this.state.firstName}
                                onChange={this.handleFirstNameChange}
                            />
                            <Form.Input
                                fluid label='Last name'
                                placeholder='Last name'
                                value={this.state.lastName}
                                onChange={this.handleLastNameChange}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Select
                                fluid
                                label='When do you sleep?'
                                options={sleepStart}
                                placeholder='Bedtime'
                                value={value}
                                onChange={this.handleSleepStartChange}
                            />
                            <Form.Select
                                fluid
                                label='How long do you sleep?'
                                options={sleepDuration}
                                placeholder='Zzz...'
                                value={value}
                                onChange={this.handleSleepDurationChange}
                            />
                        </Form.Group>
                        <Form.Group inline>
                            <label>How Active are You?</label>
                            <Form.Radio
                                label='Very'
                                value='active'
                                checked={value === 'active'}
                                onChange={this.handleActiveChange}
                            />
                            <Form.Radio
                                label='Somewhat'
                                value='somewhat active'
                                checked={value === 'somewhat active'}
                                onChange={this.handleActiveChange}
                            />
                            <Form.Radio
                                label='I like the couch better'
                                value='not active'
                                checked={value === 'not active'}
                                onChange={this.handleActiveChange}
                            />
                            <label className="label-right">How do you study?</label>
                            <Form.Radio
                                label='Long intervals'
                                value='long study'
                                checked={value === 'long study'}
                                onChange={this.handleStudyChange}
                            />
                            <Form.Radio
                                label='short intervals'
                                value='short study'
                                checked={value === 'short study'}
                                onChange={this.handleStudyChange}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Select
                                fluid
                                label='How long are your study breaks?'
                                options={studyBreaks}
                                placeholder='Totally deserved'
                                onChange={this.handleStudyBreakChange}
                            />
                            <Form.Select
                                fluid
                                label='How many days of school do you have per week?'
                                options={schoolDays}
                                placeholder='School is cool'
                                onChange={this.handleSchoolDaysChange}
                            />
                        </Form.Group>
                        <h4 className="center-text-column">When do you end class?</h4>
                        <Form.Group widths="equal">
                            <Form.Select
                                fluid
                                label='Monday'
                                options={schoolHours}
                                placeholder='Schools Out!'
                                onChange={this.handleSchoolDay1Change}
                            />
                            <Form.Select
                                fluid
                                label='Tuesday'
                                options={schoolHours}
                                placeholder='Schools Out!'
                                onChange={this.handleSchoolDay2Change}
                            />
                            <Form.Select
                                fluid
                                label='Wednesday'
                                options={schoolHours}
                                placeholder='Schools Out!'
                                onChange={this.handleSchoolDay3Change}
                            />
                            <Form.Select
                                fluid
                                label='Thursday'
                                options={schoolHours}
                                placeholder='Schools Out!'
                                onChange={this.handleSchoolDay4Change}
                            />
                            <Form.Select
                                fluid
                                label='Friday'
                                options={schoolHours}
                                placeholder='Schools Out!'
                                onChange={this.handleSchoolDay5Change}
                            />
                        </Form.Group>
                        <Form.Button className="submit-button" onClick={this.handleSubmit}>Submit</Form.Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Home;