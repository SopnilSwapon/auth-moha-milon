import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
    const authInfon = useContext(AuthContext);
    console.log(authInfon);
    return (
        <div>
           <h2>This is Home page for: </h2> 
           {/* <p>{authInfo}</p> */}
        </div>
    );
};

export default Home;