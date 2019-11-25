import React from 'react';
import {Route} from 'react-router-dom';
import List1 from './pages/list1';
import Pagination from './pages/pagination';
import Tabs1 from './pages/tabs1';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={List1} />
        <Route exact path='/pagination/' component={Pagination} />
        <Route exact path='/tab1/' component={Tabs1} />
    </div>
);
export default BaseRouter;