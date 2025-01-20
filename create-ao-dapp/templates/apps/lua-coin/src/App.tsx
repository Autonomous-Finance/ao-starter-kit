import { ConnectButton } from "arweave-wallet-kit";
import "./App.css";
import Info from "./components/info";
import COIN from "./constants/coin_process";


function App() {
  return (
    <>
      <p className="read-the-docs">
        Bonding Curve Process:{" "}
        <a
          href={`https://www.ao.link/#/entity/${COIN}`}
          target="_blank"
          rel="noreferrer"
        >
          {COIN}
        </a>
      </p>
      <div className="card">
        <div>
          <ConnectButton profileModal={true} showBalance={true} />
        </div>
        <Info />
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
