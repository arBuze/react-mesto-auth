import { Navigate } from "react-router-dom";
import Header from "./Header";

function ProtectedRoute({element: Component,...props}) {
  return(
    props.loggedIn ?
      <>
        <Header route="/sign-in" linkName="Выйти" email={props.userEmail} onSignOut={props.onSignOut} />
        <Component {...props} />
      </>
      : <Navigate to="sign-in" replace />
  );
}

export default ProtectedRoute;
