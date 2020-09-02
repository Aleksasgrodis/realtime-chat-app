import React from "react";
import ReactDOM from "react-dom";
import {
  Container
} from 'shards-react';
import Chat from 'chat/Chat';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import "./index.css";

const App = () => (
  <Container>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate similique voluptates ducimus natus! Dignissimos ipsam dolores illum quia ad? Mollitia adipisci architecto, optio quibusdam voluptatibus minima dicta consequatur tenetur voluptas.</p>
    <h1>Chat!</h1>
    <Chat />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate similique voluptates ducimus natus! Dignissimos ipsam dolores illum quia ad? Mollitia adipisci architecto, optio quibusdam voluptatibus minima dicta consequatur tenetur voluptas.</p>
    
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
