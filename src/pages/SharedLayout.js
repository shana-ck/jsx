import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const SharedLayout = () => {
  return (
    <>
    <div className="ui huge inverted masthead segment">
        <Navbar />
        </div>
      <Outlet />
    
    </>
  );
};

export default SharedLayout;
