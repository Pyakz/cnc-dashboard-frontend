import { Switch, Route } from "react-router-dom";
import './styles/style.css';

import Login from './pages/Login'

import RouterWrapper from './routes/RouterWrapper'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from "./routes/PublicRoute";
import NotFoundPage from "./components/common/NotFoundPage";


import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProject from "./pages/admin/AdminProjects";
import AdminDevelopers from "./pages/admin/AdminDevelopers";


import DevDashboard from "./pages/developer/DevDashboard";
import DevProfile from "./pages/developer/DevProfile";
import DevProject from "./pages/developer/DevProject";



function App() {

  return (
    <div className="App" style={{ height:'100%'}}>

        <Switch>

            <PrivateRoute
              exact
              path="/"
              component={RouterWrapper}
              role={['DEVELOPER', 'ADMIN']}
            />

            <PrivateRoute
              
              path="/admin/dashboard"
              component={AdminDashboard}
              role={['ADMIN']}
            />

            <PrivateRoute
              
              path="/admin/projects"
              component={AdminProject}
              role={['ADMIN']}
            />
              <PrivateRoute
              
              path="/admin/developers"
              component={AdminDevelopers}
              role={['ADMIN']}
            />

            <PrivateRoute
              
              path="/developer/dashboard"
              component={DevDashboard}
              role={['DEVELOPER']}
            />

            <PrivateRoute
              
              path="/developer/profile"
              component={DevProfile}
              role={['DEVELOPER']}
            />

            <PrivateRoute
              
              path="/developer/projects"
              component={DevProject}
              role={['DEVELOPER']}
            />

          <PublicRoute exact path='/login' component={Login} />
          <Route component={NotFoundPage} />

        </Switch>
    </div>
  );
}

export default App;
