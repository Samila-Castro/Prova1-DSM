import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  const onPressButtton = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text>Você clicou no botão: {counter} vezes</Text>
      </View>
      <Button
        onPress={onPressButtton}
        title="Press me"
        color="purple"
      />
      <StatusBar style="auto" backgroundColor="purple"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    marginBottom: 15
  },
});
