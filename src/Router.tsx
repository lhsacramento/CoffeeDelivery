import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home';
import { SuccessPage } from './pages/success';
import { CheckoutPage } from './pages/checkout';
import { DefaultLayout } from './layouts/defaultLayout.tsx';

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>                
                <Route path='/' element={<HomePage />}/>
                <Route path='/success' element={<SuccessPage />}/>
                <Route path='/checkout' element={<CheckoutPage />}/>
            </Route>
        </Routes>
    );
}