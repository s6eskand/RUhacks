import React from "react";
import ReactDOM from "react-dom";



const ReactCalendar = () => {
    const [date, setDate] = useState(newDate());

    const onChange = date => {
        setDate(date)
    }
    return (
    <div>
        <Calendar onChange={onChange} value={date} />
     </div>

);
};



render(<ReactCalendar />, document.querySelector("#root"));
