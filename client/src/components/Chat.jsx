import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Button, Col, Container, FormInput, Row } from "shards-react";

import { POST_MESSAGE } from "../api/messages";

const Chat = () => {
  const [state, setState] = useState({ user: "Jack", content: "" });
  const [sendMessage, { data }] = useMutation(POST_MESSAGE);

  const onSend = () => {
    if (state.content.length > 0) {
      sendMessage({
        variables: state,
      });
    }

    setState({
      ...state,
      content: "",
    });
  };

  return (
    <Container>
      <Message user={state.user} />
      <Row>
        <Col xs={2} style={{ padding: 0 }}>
          <FormInput
            label="User"
            value={state.user}
            onChange={(e) =>
              setState({
                ...state,
                user: e.target.value,
              })
            }
          />
        </Col>
        <Col xs={8} style={{ padding: 0 }}>
          <FormInput
            label="Content"
            value={state.content}
            onChange={(e) =>
              setState({
                ...state,
                content: e.target.value,
              })
            }
            onKeyUp={(e) => (e.keyCode === 13 ? onSend() : null)}
          />
        </Col>

        <Col xs={2} style={{ padding: 0 }}>
          <Button onClick={onSend} style={{ width: "100%" }}>
            Send
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
