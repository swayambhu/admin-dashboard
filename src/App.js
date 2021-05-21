import {  Redirect, Route, Switch } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar"
import Dashboard from './Pages/Dashboard';
import ExpenseTracker from './Pages/ExpenseTracker';
import ToDoList from './Pages/ToDoList'
import classes from './App.module.css';
import Error404 from './Pages/Error404';


const App = () => {
    return (
      <div className={classes.layout}>
        <Sidebar />
        <main>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/dashboard' />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/expense-tracker'>
              <ExpenseTracker />
            </Route>
            <Route path='/to-do'>
              <ToDoList />
            </Route>
            <Route path='*'>
              <Error404 />
            </Route>
          </Switch>
        </main>
      </div>
    );
}
 
export default App;