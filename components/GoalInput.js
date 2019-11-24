import React, { useState } from "react";
import { View, TextInput, Button, Modal } from "react-native";
import styled from "styled-components";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [warning, setWarning] = useState({ visible: false, text: "" });

  const goalInputHandler = enteredText => {
    setWarning({ visible: false, text: "" });
    setEnteredGoal(enteredText);
  };

  const onSubmit = () => {
    setEnteredGoal("");
    if (enteredGoal.length === 0) {
      setWarning({ visible: true, text: "Please fill the form" });
    } else {
      props.addGoalHandler(enteredGoal);
      props.closeAddModelHandler();
    }
  };

  const ErrorComp = visible => {
    if (visible && warning.text.length > 0) {
      return (
        <ViewS>
          <TextS>{warning.text}</TextS>
        </ViewS>
      );
    } else {
      return null;
    }
  };
  return (
    <Modal animationType="slide" visible={props.visible}>
      <Top>
        <Input
          placeholder="Add a Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <ErrorComp visible={warning.visible} />
        <ButtonContainer>
          <ButtonS>
            <Button title="ADD" onPress={onSubmit} />
          </ButtonS>
          <ButtonS>
            <Button
              title="CLOSE"
              color="red"
              onPress={props.closeAddModelHandler}
            />
          </ButtonS>
        </ButtonContainer>
      </Top>
    </Modal>
  );
};

export default GoalInput;

const Top = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 60px;
`;

const Input = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: black;
  padding: 10px 0;
  margin-bottom: 20px;
`;
const ButtonContainer = styled.View`
  /* flex-direction: row; */
  /* align-items: stretch; */
  justify-content: space-between;
  width: 100%;
`;
const ButtonS = styled.View`
  /* width: 45%; */
  margin-bottom: 10px;
`;

const ViewS = styled.View`
  margin-top: 10px;
  background-color: #f0f0f0;
  width: 100%;
  justify-content: center;
  padding: 20px;
`;

const TextS = styled.Text`
  text-align: center;
  color: #c2c2c2;
`;
