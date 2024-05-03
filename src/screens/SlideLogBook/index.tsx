import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';

export function LogBook() {
  return (
    <View style={styles.container}>
      <Text>Seu histórico</Text>
      <StatusBar style="auto" />
    </View>
  );
}
