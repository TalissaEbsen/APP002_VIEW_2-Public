import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ backgroundColor: '#A6E22E', height: '100%', width: '100%', paddingTop: 30 }}>

      <View style={{ backgroundColor: 'red', height: 80, width: '80%',  marginLeft: '10%',  borderWidth: 3,  borderColor: 'black', padding: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20
      }}>
        <Text>COMPONENTE VIEW</Text>
      </View>

      <View style={{ backgroundColor: 'yellow',height: 350, width: '80%', marginLeft: '10%', marginTop: 15, borderWidth: 3, borderColor: 'black', padding: 10
      }}>
        <Text>CONTEÚDO</Text>
      </View>

      <View style={{ backgroundColor: 'gray',height: 80, width: '80%', marginLeft: '10%',marginTop: 15, borderWidth: 3, borderColor: 'black', padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20
      }}>
        <Text>Talissa Ebsen Teixeira</Text>
        <Text>01/03/2005</Text>
      </View>

    </View>
  );
}