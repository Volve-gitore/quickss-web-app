import React, { ChangeEvent, useEffect, useState } from 'react';
import Layout from "../../components/Layout/Admin";
import ClientRegistration from "../../components/Admin/ClientRegistration/RegisterClient"
import ClientList from "../../components/Admin/ClientList"
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hotelRestoView } from '../../store/admin/actions';
import { hotelRestoReducer } from '../../store/admin/reducers';
import { IHotelRestoParams } from '../../store/admin/types';
import { AppState } from '../../store/configureStore';

const Dashboard = () => {

    const [state, setState] = useState<any>({
        search: ""
      });
      
      const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
      };
      const hotelRestoReducer = useSelector(
          (state: AppState) => state.hotelResto
        );

      const dispatch = useDispatch();
        useEffect(() => {
            dispatch(hotelRestoView());  
            // eslint-disable-next-line
        }, []);

        const {
            allHotelResto
        }: {
            allHotelResto: IHotelRestoParams[];
        } = hotelRestoReducer;

    return (
        <BrowserRouter>
        <Layout onChange={onChange}>
            
            <Switch>
                <Route path='/admin/client/list' exact component={() => <ClientList state={state} client={allHotelResto} />} />
                <Route path='/admin/client/add' exact component={() => <ClientRegistration />} />
            </Switch>
           
        </Layout>
        </BrowserRouter>
    )
}

export default Dashboard;
