const Crypto = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.code)
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Liste des cryptos"),
        React.createElement(Crypto, {name: "Etherium", code: "ETH"}),
        React.createElement(Crypto, {name: "Bitcoin", code: "BTC"}),
        React.createElement(Crypto, {name: "Cardano", code: "ADA"}),
    ]);
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));