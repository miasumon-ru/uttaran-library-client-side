
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const { loading, user } = useAuth()


    if (loading) {
        return <div className="text-center flex flex-col justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>

        </div>
    }

    if (user) {
        return children
    }


    return <Navigate to={'/login'}></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;