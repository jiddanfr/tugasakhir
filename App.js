import React, { Component }from 'react';
import { View, StatusBar, Text, TouchableOpacity, } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hitung: 0,
     };
  }

  masukkanAngka = (value) => {
    if(this.state.hitung == 0)
    {
      this.setState({hitung:  value})
    }
    else{
      this.setState({ hitung: this.state.hitung + '' + value });
    }
  }
  hitungHasil = () => {
    let hasil = eval(this.state.hitung)
    this.setState({hitung: hasil})
  }
  render() { 
    return (
      
      <View style={{flex: 1, backgroundColor: '#212121'}}>
        <StatusBar backgroundColor="orange" barStyle="light-content" />
        <View style={{flex:0.5}}>
        <View style={{flex: 1, justifyContent: 'center', padding: 1, marginHorizontal:10}}>
            <Text style={{color: "#FFFFFF", fontSize: 48, textAlign: 'right'}}>{this.state.hitung}</Text>
          </View>
        </View>
        <View style={{flex: 0.75}}>
        
        <View style={{flexDirection: "row", marginVertical:2.5}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10, }}
          onPress={() => this.masukkanAngka('(')}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center', color: '#EA5C2B'}}>(</Text>
          </TouchableOpacity>
           <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
           onPress={() => this.masukkanAngka(')')}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center', color: '#EA5C2B'}}>)</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka('/')}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center', color: '#EA5C2B'}}>/</Text>
          </TouchableOpacity>
           <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10, margin:10}}
           onPress={() => this.masukkanAngka('*')}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center', color: '#EA5C2B'}}>X</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row",  marginVertical:2.5}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(7)}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center'}}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(8)}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center'}}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(9)}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center'}}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10, margin:10}}
           onPress={() => this.masukkanAngka('+')}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center', color: '#EA5C2B'}}>+</Text>
          </TouchableOpacity>       
        </View>
        <View style={{flexDirection: "row",  marginVertical:2.5}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(4)}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center'}}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(5)}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center'}}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(6)}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center'}}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10, margin:10}}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center', color: '#EA5C2B'}}>-</Text>
          </TouchableOpacity>         
        </View>
        <View style={{flexDirection: "row",  marginVertical:2.5}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(1)}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center'}}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(2)}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center'}}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
          onPress={() => this.masukkanAngka(3)}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center'}}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10, margin:10}}
          onPress={() => this.setState({hitung: 0})}>
            <Text style={{color: "#FFFFFF", fontSize: 20, textAlign: 'right', color: '#EA5C2B'}}>Clear</Text>
          </TouchableOpacity>         
        </View>
        <View style={{flexDirection: "row",  marginVertical:2.5}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center',  padding: 10}}
          onPress={() => this.masukkanAngka(".")}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center',color: '#EA5C2B'}}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center',  padding: 10}}
          onPress={() => this.masukkanAngka(0)}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center'}}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', padding: 10}}
          onPress={() => this.hitungHasil()}>
            <Text style={{color: "#FFFFFF", fontSize: 30, textAlign: 'center', color: '#EA5C2B'}}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10, margin:10}}>
            <Text style={{color: "#FFFFFF", fontSize: 20, textAlign: 'center', color: '#EA5C2B'}}>Delete</Text>
          </TouchableOpacity>         
        </View>
        </View>
       </View>
      );
  }
}

export default App;

