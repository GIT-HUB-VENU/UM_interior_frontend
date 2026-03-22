import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import App, { AppContext } from "../App";
import { toast } from "react-toastify";

function Logout() {
    const { user, setUser } = useContext(AppContext);
    const Navigate = useNavigate();
    useEffect(() => {
        setUser({});
        toast.error("Logout successful!");
        Navigate("/");
    }, []);
    return <h2>Logout Page</h2>;
}
export default Logout;