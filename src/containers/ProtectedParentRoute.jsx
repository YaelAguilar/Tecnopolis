import {Outlet, Navigate} from 'react-router-dom'

function ProtectedParentRoute({isLoged}) {

    return(

        isLoged ? <Outlet /> : <Navigate to="/login"/>
        
    );
}

export default ProtectedParentRoute;