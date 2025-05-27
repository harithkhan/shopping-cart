import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}

export default App;
