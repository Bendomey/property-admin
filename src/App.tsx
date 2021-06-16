import { Toaster } from "react-hot-toast";
import AppNavigation from "./navigation/router-config";

const App = () => (
  <>
    <AppNavigation />
    <Toaster
      position={"bottom-right"}
      reverseOrder={false}
      toastOptions={{
        // Define default options

        className: "",
        style: {
          margin: "40px",
          background: "#363636",
          // background: "#00e676",
          color: "#fff",
          zIndex: 1,
          // width: "28vh",
        },
        duration: 5000,
        // Default options for specific types
        success: {
          duration: 8000,
          theme: {
            primary: "#1F3A8A",
            secondary: "black",
          },
        },
        error: {
          style: {
            background: "#ffa726",
          },
          duration: 8000,
        },
      }}
    />
  </>
);

export default App;
