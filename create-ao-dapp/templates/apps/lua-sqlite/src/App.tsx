import { ConnectButton } from "arweave-wallet-kit";
import "./App.css";
import { BOOKS } from "./constants/books_process";
import aoLogo from "/ao.svg";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import BooksCrud from "./components/books-crud";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://ao.g8way.io" target="_blank" rel="noreferrer">
          <img src={aoLogo} className="logo ao" alt="AO logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + AO</h1>
      <p className="read-the-docs">
        AO Books Process:{" "}
        <a
          href={`https://www.ao.link/#/entity/${BOOKS}`}
          target="_blank"
          rel="noreferrer"
        >
          {BOOKS}
        </a>
      </p>
      <div className="card">
        <div>
          <ConnectButton profileModal={true} showBalance={true} />
        </div>
        <BooksCrud />
      </div>
      <p>
        Project scaffolded using{" "}
        <a href="https://create-ao-dapp.dev">create-ao-dapp</a>. Built with ❤️
        by Autonomous Research
      </p>
    </>
  );
}

export default App;
