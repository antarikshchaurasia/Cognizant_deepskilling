import officeImage from './office.svg';
import './App.css';

const office = {
  name: 'Office ',
  rent: 75000,
  address: 'NH, Mathura',
};

const officeList = [
  { id: 1, name: 'Netway', rent: 35000, address: 'NH, Mathura' },
  { id: 2, name: 'EBusiness', rent: 75000, address: 'Thane,Maharashtra' },
  { id: 3, name: 'Office', rent: 60000, address: 'Indiranagar, Bengaluru' },

];

const rentColor = (rent) => (rent < 60000 ? 'red' : 'green');

function App() {
  return (
    <div className="App">
      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office space"
        className="office-image"
        width="300"
        height="200"
      />

      <section className="featured-office">
        <h2>Featured Office</h2>
        <p>Name: {office.name}</p>
        <p>
          Rent: <span style={{ color: rentColor(office.rent) }}>₹{office.rent}</span>
        </p>
        <p>Address: {office.address}</p>
      </section>

      <section className="office-listing">
        <h2>Available Office Spaces</h2>
        <ul>
          {officeList.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> — Rent:{' '}
              <span style={{ color: rentColor(item.rent) }}>₹{item.rent}</span> — {item.address}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
