import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [handleInputValue, setHandleInputValue] = useState(false);

  const onClickeHandleInputValue = () => {
    setHandleInputValue(true);
  };

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.formContent}>
          <Text style={styles.label}>What is your name?</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={setInput}
            value={input}
          />
          <Button
            style={styles.button}
            onPress={onClickeHandleInputValue}
            title="Say hello"
            color="purple"
          />
        </View>
        <View style={styles.valueContentInput}>
          { handleInputValue && (<Text>{`${input}`}</Text>)}
        </View>
          <StatusBar style="auto" backgroundColor="purple"/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 60,
    margin: 30
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    height: 30,
    padding: 5,
    marginBottom: 15,
  },
  label: {
    marginBottom: 10
  },
  valueContentInput: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 15,
  },
});
