import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="layout">
     <Header/>
      <main>content</main>
      <footer>
        <div>
          <footer className="bg-dark text-center text-lg-start">
            <div className="text-center text-light p-3">
              © 2020 Copyright :
              <span className="text-muted fw-bolder"> fouad FMF</span>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
}


export default App;
