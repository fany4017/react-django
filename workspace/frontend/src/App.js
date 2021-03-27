import './App.css';
import Main from './components/Main'
import Detail from './components/Detail'
import {Route, Switch} from 'react-router-dom'
import Resturant from './components/Resturant';
import Notice from './components/Notice';
import Test from './components/Test';
import Test2 from './components/Test2';
function App() { //앱의 기본 js , 리액트 앱은 App.js 컴포넌트를 띄우는데 index.js 안에서 App.js가 포함되어있음
  //주소에 따라 해당 컴포넌트로 연결시키는 라우팅 설정이 가능함
  //localhost:3000/ 경로로 들어오면 component={Main} -> 즉 Main.js 를 로딩하겠다는 뜻.
  //Main.js 로 이동해보자
  return (
    <div>
      <Switch> 
        <Route path="/" component={Main} exact={true} />
        <Route path="/main" component={Main}/>
        <Route path="/detail/:site" component={Detail} />
        <Route path="/resturant" component={Resturant} />
        <Route path="/notice" component={Notice} />
        <Route path="/test" component={Test} />
        <Route path="/test2" component={Test2} />
      </Switch>
    </div>
  );
}

export default App;