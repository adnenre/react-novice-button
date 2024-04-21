import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "react-novice-button";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <h3> Button shape</h3>
        <Button $variant="primary" $shape="flat">
          pill
        </Button>
        <Button $variant="primary" $shape="round-sm">
          round-sm
        </Button>
        <Button $variant="primary" $shape="round">
          round
        </Button>
        <Button $variant="primary" $shape="pill">
          pill
        </Button>
      </div>

      <div className="card">
        <h3> Button variant</h3>
        <Button $variant="primary">primary</Button>
        <Button $variant="secondary">secondary</Button>
        <Button $variant="success">success</Button>
        <Button $variant="warning">warning</Button>
        <Button $variant="danger">danger</Button>
        <Button $variant="black">black</Button>
        <Button $variant="info">info</Button>
      </div>

      <h3>Button size</h3>
      <div className="card">
        <Button $variant="primary" $size="xs">
          primary
        </Button>
        <Button $variant="secondary" $size="sm">
          secondary
        </Button>

        <Button $variant="danger" $size="md">
          danger
        </Button>
        <Button $variant="warning" $size="lg">
          warning
        </Button>
        <Button $variant="black" $size="xl">
          black
        </Button>
        <Button $variant="info" $size="xxl">
          info
        </Button>
      </div>
      <div className="card">
        <Button $variant="primary" $size="md">
          primary
        </Button>
        <Button $variant="secondary" $size="md">
          secondary
        </Button>
        <Button $variant="danger" $size="md">
          danger
        </Button>
        <Button $variant="warning" $size="md">
          warning
        </Button>
        <Button $variant="black" $size="md">
          black
        </Button>
        <Button $variant="info" $size="md">
          info
        </Button>
      </div>
      <div className="card">
        <Button $variant="primary" $size="lg">
          primary
        </Button>
        <Button $variant="secondary" $size="lg">
          secondary
        </Button>
        <Button $variant="danger" $size="lg">
          danger
        </Button>
        <Button $variant="warning" $size="lg">
          warning
        </Button>
        <Button $variant="black" $size="lg">
          black
        </Button>
        <Button $variant="info" $size="lg">
          info
        </Button>
      </div>

      <p className="read-the-docs">Click on the React logos to learn more</p>
    </>
  );
}

export default App;
