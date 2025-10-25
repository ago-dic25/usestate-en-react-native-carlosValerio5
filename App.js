import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { estiloTextos } from './misEstilos';
import { useState, useEffect } from 'react';
import { TextInput, Button } from 'react-native';

export default function App() {
	const [text, setText] = useState('');
	const [nombres, setNombres] = useState([]);

	function agregarNombre(){
		setNombres([...nombres, text]);
	}

	  const renderItem = ({ item }) => (
		<View style={styles.container}>
		  <Text style={estiloTextos.counter}>{item}</Text>
		</View>
	  );

  return (
    <View style={styles.container}>
		<FlatList data={nombres} renderItem={renderItem} keyExtractor={(item, index)=> index.toString()}/>
		<TextInput style={styles.inputField} onChangeText={setText} value={text}/>	
		<View style={styles.buttons}>
	  		<Button color='hsl(0, 0%, 10%)' title={'Clear'} onPress={()=>{setText(''); setNombres([])}} />
	  		<Button color='hsl(0, 0%, 10%)' title='Agregar' onPress={agregarNombre} />
		</View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

	buttons: {
		display: 'flex',
		flexDirection: 'row',
		gap: 20,
		padding: 10,
	},

	inputField: {
		backgroundColor: 'hsl(0, 0%, 5%)',
		borderColor: 'hsl(0, 0%, 30%)',
		borderWidth: 1,
		color: 'hsl(0, 0%, 70%)',
	},

	button: {
		color: 'hsl(0, 0%, 10%)',
	}
});
