import React from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const GoalItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.removeGoalHandler(props.id)}
    >
      <ListItem>
        <Text>{props.value}</Text>
      </ListItem>
    </TouchableOpacity>
  );
};

export default GoalItem;

const ListItem = styled.View`
  padding: 10px;
  background-color: #f2f2f2;
  margin-top: 5px;
`;
