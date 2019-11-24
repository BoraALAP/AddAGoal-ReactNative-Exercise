import React, { useState } from "react";
import { View, Button, ScrollView, FlatList, Modal, Text } from "react-native";
import styled from "styled-components";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = enteredGoal => {
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter(goal => goal.id !== goalId);
    });
  };

  const isAddModeHandler = () => {
    setIsAddMode(true);
  };

  const closeAddModelHandler = () => {
    setTimeout(() => {
      setIsAddMode(false);
    }, 500);
  };
  return (
    <Container>
      <Button title="Add new Goal" onPress={isAddModeHandler} />
      <GoalInput
        addGoalHandler={addGoalHandler}
        visible={isAddMode}
        closeAddModelHandler={closeAddModelHandler}
      />
      {courseGoals > 0 ? (
        <Bottom
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={goal => (
            <GoalItem
              value={goal.item.value}
              id={goal.item.id}
              removeGoalHandler={removeGoalHandler}
            />
          )}
        />
      ) : (
        <ViewS>
          <TextS>Add a Goal</TextS>
        </ViewS>
      )}
    </Container>
  );
};

export default App;

const Container = styled.View`
  padding: 60px 30px 60px;
`;

const Bottom = styled.FlatList`
  margin-top: 60px;
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
