import React, { ChangeEvent, useState } from 'react';
import Layout from "../../components/Layout/Admin";
import ClientRegistration from "../../components/Admin/ClientRegistration/RegisterClient"
import ClientList from "../../components/Admin/ClientList"
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const Dashboard = () => {

    const [state, setState] = useState<any>({
        search: ""
      });
      
      const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
      };

    return (
        <BrowserRouter>
        <Layout onChange={onChange}>
            
            <Switch>
                <Route path='/admin/client/list' exact component={() => <ClientList state={state} />} />
                <Route path='/admin/client/add' exact component={() => <ClientRegistration />} />
            </Switch>
           
        </Layout>
        </BrowserRouter>
    )
}

export default Dashboard;
