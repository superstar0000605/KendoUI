import { FC, Fragment } from 'react';
import Sidebar from './Sidebar';
import GridsComponent from './GridsComponent';
import Footer from './Footer';

const MainComponent: FC = () => {

  return (
    <Fragment>
      <Sidebar />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '100%',
          gridTemplateRows: 'auto 50px',
          width: '100%',
          height: 'calc(100vh - 65px)',
        }}
      >
        <GridsComponent />
        <Footer />
      </div>
    </Fragment>
  );
};
export default MainComponent;
