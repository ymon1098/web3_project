// import {Navbar, Welcome, Footer, Transactions} from "./components";
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Transactions from './components/Transactions';

const App = () => {
  return (
      <div className='min-h-screen'>
        <div className='gradient-bg-welcome'>
          <Navbar />
          <Welcome />
        </div>
        
        <Transactions />
        <Footer />
      </div>
  );
}

export default App;
