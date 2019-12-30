import React, { useState, useContext } from "react";
import styled from "styled-components";
import InputGroup from "../input/input-group";
import Input from "../input/input";
import { PreferencesContext, UPDATE_PREFERENCES } from "./preferences-context";
import Button from "../button/button";
import validate from "./preferences-validation";
import Errors from "./errors";

const StyledPreferences = styled.div`
  margin-bottom: 3rem;
`;

const Form = styled.form`
  margin-top: 1rem;

  ${props => props.theme.breakpoints.xl} {
    display: flex;
    flex-flow: row wrap;
    margin: 1rem -0.75rem;
  }
`;

const FormGroup = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;

  ${props => props.theme.breakpoints.xl} {
    flex: 1 0 0%;
    margin: 0 0.75rem;
  }

  p {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 0.75rem;
  }
`;

const Select = styled.select`
  border-radius: 3px;
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.backgroundLight};
  border: none;
  color: ${props => props.theme.colors.text};
`;

const TimeInput = styled(Input)`
  width: 2.5rem;
`;

const DateInput = styled(Input)`
  width: 3.5rem;
`;

const Preferences = () => {
  const { state, dispatch } = useContext(PreferencesContext);
  const initialState = state;
  const [preferences, setPreferences] = useState(initialState);
  const [errors, setErrors] = useState([]);

  const onInputChanged = e => {
    const { name, value } = e.target;
    const val = Number.parseInt(value, 10);
    setPreferences({ ...preferences, [name]: val });
  };

  const onSelectChanged = e => {
    setPreferences({ ...preferences, units: e.target.value });
  };

  const onUpdateClicked = async () => {
    const validationErrors = await validate(preferences);
    if (validationErrors.length === 0) {
      setErrors([]);
      dispatch({ type: UPDATE_PREFERENCES, payload: { ...preferences } });
    } else {
      setErrors(validationErrors);
    }
  };

  const onSaveClicked = () => {
    localStorage.setItem("preferences", JSON.stringify(state));
  };

  return (
    <StyledPreferences>
      <Form>
        <FormGroup>
          <p>I can run 10km in:</p>
          <InputGroup>
            <TimeInput
              type="number"
              name="minutes"
              placeholder="mm"
              value={preferences.minutes}
              onChange={onInputChanged}
            />
            :
            <TimeInput
              type="number"
              name="seconds"
              placeholder="ss"
              value={preferences.seconds}
              onChange={onInputChanged}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <p>My marathon is on:</p>
          <InputGroup>
            <DateInput
              type="number"
              name="day"
              placeholder="DD"
              value={preferences.day}
              onChange={onInputChanged}
            />
            <DateInput
              type="number"
              name="month"
              placeholder="MM"
              value={preferences.month}
              onChange={onInputChanged}
            />
            <DateInput
              type="number"
              name="year"
              placeholder="YYYY"
              value={preferences.year}
              onChange={onInputChanged}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <p>I prefer distance in:</p>
          <Select value={preferences.units} onChange={onSelectChanged}>
            <option value="km">Kilometres</option>
            <option value="mile">Miles</option>
          </Select>
        </FormGroup>
      </Form>
      <Errors errors={errors} />
      <div>
        <Button text="Get Plan" type="button" onClick={onUpdateClicked} />
        <Button text="Save" type="button" onClick={onSaveClicked} />
      </div>
    </StyledPreferences>
  );
};

export default Preferences;
