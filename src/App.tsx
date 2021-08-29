import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About';
import Current from './components/Current';
import HistoryResult from './components/HistoryResult';
import Historys from './components/Historys';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        
					<Route path='/' exact>
						<Current></Current>
					</Route>

					<Route path='/current'>
						<Current></Current>
					</Route>

					<Route path='/history/select'>
						<Historys></Historys>
					</Route>

					<Route path='/history/result'>
						<HistoryResult></HistoryResult>
					</Route>

					<Route path='/about'>
						<About></About>
					</Route>
      </Switch>


    </Router>
  );
}

export default App;