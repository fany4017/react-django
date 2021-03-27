/* 사용 소스 */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AdvertisementList from './AdvertisementList';

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
