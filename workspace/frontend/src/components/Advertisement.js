/* 사용 소스 */
import React, {useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AdvertisementList from './AdvertisementList';
import ReactGA from "react-ga"; 
ReactGA.initialize("UA-73002501-5");
ReactGA.pageview("Advertisement");
const Advertisement = () => {

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Header /> */}
      <main>
        <AdvertisementList />
      </main>
    </React.Fragment>
  );
}

export default Advertisement
