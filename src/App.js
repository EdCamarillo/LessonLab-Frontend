import './App.css'
import Header from './components/page-components/composite/header';
import SideBar from './components/page-components/base/sideBar';
import './index.css'
import DashboardComponent from './components/page-components/composite/dashboardComponent';

function App() {

  return (
    <>
     <Header />
     <SideBar />
     <DashboardComponent />
    </>
  )
}

export default App
