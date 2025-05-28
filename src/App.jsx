import "./App.css";
import Header from "./components/Header/Header";

function App({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}

export default App;
