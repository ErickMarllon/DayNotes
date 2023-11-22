import React from "react";

import {
  Wrapper,
  Item,
  RadioButtonLabel,
  RadioButtons,
  Span,
} from "../RadioButton/RadioStyle";


function RadioButton({ selectdValue, handleChange }) {
  return (
    <Wrapper>
      <Item>
        <RadioButtons
          type="radio"
          value="all"
          checked={selectdValue === "all"}
          onChange={(e) => handleChange(e.target)}
        />
        <RadioButtonLabel />
        <Span>todos</Span>
        
      </Item>
      <Item>
        <RadioButtons
          type="radio"
          value="false"
          checked={selectdValue === "false"}
          onChange={(e) => handleChange(e.target)}
        />
        <RadioButtonLabel />
        <Span>normal</Span>
      </Item>
      <Item>
        <RadioButtons
          type="radio"
          value="true"
          checked={selectdValue === "true"}
          onChange={(e) => handleChange(e.target)}
        />
        <RadioButtonLabel/>
        <Span>prioridade</Span>
      </Item>
    </Wrapper>
  );
}

export default RadioButton;
