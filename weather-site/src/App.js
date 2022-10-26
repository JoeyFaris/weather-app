import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';

function App() {
  //const [query, setQuery] = useState({q: 'berlin'})

  // const formatBackground = () => {
  //   if (!weather) return "from-cyan-700 to-blue-700";
  //   const threshold = units === "metric" ? 20 : 60;
  //   if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

  //   return "from-yellow-700 to-orange-700";
  // };

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: 'London'})
    console.log(data)
  }

  fetchWeather()

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
    <TopButtons/>
    <Inputs/>

    <TimeAndLocation/>
    <TemperatureAndDetails/>
    <Forecast title='hourly forecast' />
    <Forecast title='daily forecast' />
    </div>
  );
}

export default App;
