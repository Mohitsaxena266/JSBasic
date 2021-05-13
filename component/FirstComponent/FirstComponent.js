import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const FirstComponent = (props) => {
  const [setTitle, getTitle] = useState(props.title);
  const callFunction = () => {
    return <Text>This is come from button</Text>;
  };
  return (
    <View>
      <Button
        title="Click me"
        onPress={() => getTitle('SET DATA FROM State')}
      />
      <Text>{setTitle}</Text>
      {callFunction()}
    </View>
  );
};
export default FirstComponent;
