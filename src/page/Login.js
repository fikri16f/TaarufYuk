import axios from 'axios'
import React, { Component } from 'react'
import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { LoginAction } from '../redux/Action'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state={
            username:"",
            password:""
        }
    }

    handleLogin(){
        axios.get('http://192.168.27.98:8080/user/',{
            params:{
                username:this.state.username,
                password:this.state.password,
            }
        })
        .then((response) =>{
            let data=response.data;
            if(data !== ""){
                this.props.LoginAction(true,"isLogin")
                this.props.LoginAction(data,"dataUser")
                alert("Selamat Datang "+this.state.username)
                this.props.navigation.replace('Menu')
            }else{
                alert("login gagal")
                this.props.LoginAction(false,"isLogin")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <Text> Username </Text>
                <TextInput placeholder="masukan Username" onChangeText={(value)=>{this.setState({username:value})}}/>
                <Text> Password </Text>
                <TextInput placeholder="masukan Password" secureTextEntry={true} onChangeText={(value)=>{this.setState({password:value})}}/>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.handleLogin()}}><Text style={styles.textStyle}>Login</Text></TouchableOpacity>

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataMapping:state.LoginReducer
})

const mapDispatchToProps = {
    LoginAction   
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    viewStyle:{
        margin:20,
    },

    buttonStyle:{
        borderWidth:10,
        borderColor:"red",
        margin:20
    },

    textStyle:{
        textAlign:'center',
    }


})