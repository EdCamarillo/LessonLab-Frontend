import Header from '../components/page-components/composite/header';
import SideBar from '../components/page-components/base/sideBar';
import DashboardComponent  from '../components/page-components/composite/dashboardComponent';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <DashboardComponent />
    </div>
  )
}

export default Dashboard
