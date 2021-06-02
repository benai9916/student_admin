import React , {useEffect, useState } from "react";
import { BrowserRouter, Switch, Route }  from 'react-router-dom';
import { useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from './components/constants/actionType';

import { Container } from "@material-ui/core";

import Navbar from './components/Navbar/navbar';
import AddStudent from './components/Students/students';
import Auth from '../src/components/Auth/Auth';

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch({ type: actionType.LOGOUT });

        history.push('/auth');

        setUser(null);
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [history]);


    return (
      <BrowserRouter>
       <div>
           <Navbar />
           <Container width="xl">
             <Switch>

               <Route path="/" exact component={AddStudent}/>
             </Switch>
             <Route path="/auth" exact component={Auth} />
           </Container>
           
       </div>
      </BrowserRouter>

    )
}

 export default App