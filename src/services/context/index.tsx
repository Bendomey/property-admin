import React, {
  Fragment,
  useContext,
  useReducer,
  useEffect,
  useMemo,
  createContext,
} from "react";
import { PageLoader } from "../../components/loaders";
import Auth from "../cookie.config";
import ClientApollo from "../graphql";
// import NavigationConfig from "../../navigation";

interface ContextState {
  isLoading: boolean;
  isSignout: boolean;
  userToken: object;
}

interface authContextControllerProps {
  signIn: Function;
  signOut: Function;
}

const AuthContext = createContext(
  [] as (ContextState | authContextControllerProps | any)[]
);

const Manipulator = (prevState: any, action: any) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.userToken,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.userToken,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isLoading: false,
        userToken: null,
        isSignout: true,
      };
    default:
      return prevState;
  }
};

function AppNavigator() {
  const [state, dispatch] = useReducer(Manipulator, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  useEffect(() => {
    let userToken: string | null = Auth.getCipher();
    let data;
    if (userToken) data = JSON.parse(userToken);
    else data = null;
    dispatch({ type: "RESTORE_TOKEN", userToken: data });
  }, []);

  const authContextController = useMemo(
    () => ({
      signIn: async (token: object): Promise<void> => {
        Auth.setCipher(JSON.stringify(token));
        dispatch({ type: "SIGN_IN", userToken: token });
      },
      signOut: (): void => {
        Auth.clearCipher();
        dispatch({ type: "SIGN_OUT" });
      },
    }),
    []
  );

  return (
    <Fragment>
      {state.isLoading ? (
        <PageLoader />
      ) : (
        <Fragment>
          <AuthContext.Provider value={[authContextController, state]}>
            <ClientApollo>{/* <NavigationConfig /> */}</ClientApollo>
          </AuthContext.Provider>
        </Fragment>
      )}
    </Fragment>
  );
}

export const useAuthProvider = () => useContext(AuthContext);

export default AppNavigator;
