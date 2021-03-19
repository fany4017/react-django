import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NoticeList from './NoticeList';

const Notice = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Header /> */}
      <main>
        <NoticeList />
      </main>
    </React.Fragment>
  );
}

export default Notice
