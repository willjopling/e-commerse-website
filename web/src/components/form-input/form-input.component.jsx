import React from "react";
import "./form-input.styles";
import { GroupContainer, Input } from "./form-input.styles";
import { css } from "@emotion/core";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <Input onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </GroupContainer>
);

export default FormInput;
