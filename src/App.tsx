import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EmployeeCard from './components/EmployeeCard'
import './App.css'

function App() {
  const getEmployee = () => {
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployee(data.results[0]);
      });
  };
  const [employee, setEmployee] = useState (sampleEmployee);
return (
  <div className='App'>
  < EmployeeCard employee={employee}/>
  <button type="button" onClick={getEmployee}>Get employee</button>
  </div>
);
}
const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};
export default App
