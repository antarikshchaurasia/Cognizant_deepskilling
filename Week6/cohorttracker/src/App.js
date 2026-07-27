import './App.css';
import CohortDetails from './Components/CohortDetails';

function App() {

  const cohorts = [

    {
      title: "React Fundamentals",
      status: "Ongoing",
      startDate: "01-Jul-2026",
      endDate: "31-Aug-2026",
      mentor: "Aman Singh"
    },

    {
      title: "Java Full Stack",
      status: "Completed",
      startDate: "01-Jan-2026",
      endDate: "31-Mar-2026",
      mentor: "Anita Singh"
    },

    {
      title: "Spring Boot Bootcamp",
      status: "Ongoing",
      startDate: "15-Jun-2026",
      endDate: "15-Sep-2026",
      mentor: "Rahul Verma"
    },

    {
      title: "Data Structures & Algorithms",
      status: "Completed",
      startDate: "01-Feb-2026",
      endDate: "30-Apr-2026",
      mentor: "Neha Gupta"
    }

  ];

  return (

    <div className="App">

      <h1>Cognizant Academy - Cohort Dashboard</h1>

      <div className="container">

        {

          cohorts.map((cohort,index)=>

            <CohortDetails
              key={index}
              cohort={cohort}
            />

          )

        }

      </div>

    </div>

  );

}

export default App;