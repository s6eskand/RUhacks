import React from 'react';
import './App.css';
import Home from './Views/Home';
import eventCalendar from './Views/eventCalendar';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/calendar" component={eventCalendar} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
