import './App.css';
import Main from './components/Main'
import Detail from './components/Detail'
import {Route, Switch} from 'react-router-dom'
import Test from './components/Test';
import Resturant from './components/Resturant';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Main} exact={true} />
        <Route path="/main" component={Main}/>
        <Route path="/detail/:site" component={Detail} />
        <Route path="/resturant" component={Resturant} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  );
}

export default App;