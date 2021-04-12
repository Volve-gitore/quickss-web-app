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
        <Layout onChange={onChange}>
            <BrowserRouter>
                <Route path='/admin/dashboard' exact component={() => <ClientList state={state} />} />
                <Route path='/admin/view-client' exact component={() => <ClientList state={state} />} />
                <Route path='/admin/add-client' exact component={() => <ClientRegistration />} />
            </BrowserRouter>
        </Layout>
    )
}

export default Dashboard;
