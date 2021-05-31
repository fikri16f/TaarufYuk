import React, { Component } from 'react'
import { View, Text, TouchableOpacity,StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LoginAction } from '../redux/Action'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }

    componentDidMount(){
        if(!this.props.dataRedux.isLogin){
            this.props.navigation.navigate('Home')
        }
    }

    handleSignOut(){
        alert("Anda berhasil sign out")
        this.props.LoginAction(false,"isLogin")
        this.props.navigation.navigate("Home")
    }

  render() {
    return (
        <View style={styles.viewStyle}>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('dataCalon')}}>
            <Text style={styles.textStyle}>Data Calon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('pilihCalon')}}>
            <Text style={styles.textStyle}>Pilih Calon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.handleSignOut()}}>
            <Text style={styles.textStyle}>Sign Out</Text>
        </TouchableOpacity>
    </View>
    )
  }
}

const mapStateToProps = (state) => ({
  dataRedux:state.LoginReducer
})

const mapDispatchToProps = {
  LoginAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)


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