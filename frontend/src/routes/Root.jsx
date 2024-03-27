import { Navigate } from "react-router-dom";
import { HOME_URL, B2B_CATEGORY_NAVIGATION_LAYOUT } from "./urls";
import { useSelector } from "react-redux";
const Root = () => {
    const user_type = useSelector(state => state.auth.user_type);
    // const customer = process.env.REACT_APP_CUSTOMER;
    const business_customer = process.env.REACT_APP_BUSINESS_CUSTOMER;
    if (user_type === business_customer) {
        return <Navigate to={`${B2B_CATEGORY_NAVIGATION_LAYOUT}`} />;
    }
    else {
        return <Navigate to={`${HOME_URL}`} />;
    }
};

export default Root;