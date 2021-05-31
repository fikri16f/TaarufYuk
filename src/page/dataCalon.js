import React, { Component } from 'react'
import { View, Text,FlatList, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios';

class dataCalon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFlatList:{}
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData(){
        axios.get('http://192.168.27.98:8080/user/')
        .then((response)=>{
            let data =response.data
            console.log(data)
            this.setState({dataFlatList:data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }


  render() {
    return (
        <View>
        <FlatList
            data={this.state.dataFlatList}
            keyExtractor={item=>parseInt(item.id)}
            renderItem={({item})=>( 
                
                <View style={{borderWidth:5,borderColor:"red",flexDirection:"row",margin:5}}>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate("DetailCalon"
                            // {
                            //   lat: this.state.latitude,
                            //   lon: this.state.longitude,
                            // }
                            )
                        }
                        >
                   <View>
                    <Image style={{width:100,height:100}}
                        source={{uri:`http://192.168.27.98:8080/user/image/${item.image}`}}
                    />
                    <View style={{flexDirection:"column",alignSelf:"center"}}>
                        <Text>Nama : {item.namaLengkap}</Text>
                        <Text>Umur : {item.umur}</Text>
                    </View>
                    </View>
                    </TouchableOpacity>
                </View>
            )}
        />
        
    </View>
    )
  }
}

const mapStateToProps = (state) => ({
    isLogin: state.LoginReducer.isLogin
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(dataCalon)
