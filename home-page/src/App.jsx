import React from "react";
import ReactDOM from "react-dom";
import { Container } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import "./index.css";

import Chat from "chat/Chat";

const App = () => (
  <Container>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
      consequuntur laudantium? Placeat est, eius, eligendi facilis non
      doloremque dolorum hic sed fuga optio eaque. Quas!
    </p>
    <h1>Chat!</h1>
    <Chat />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores
      laborum delectus cumque dignissimos architecto labore atque inventore!
      Animi fugiat a cumque culpa maxime. Neque?
    </p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
