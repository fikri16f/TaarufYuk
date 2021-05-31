import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet, Platform, Button, Image, TouchableOpacity  } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
            namaLengkap:"",
            jenisKelamin:"",
            hp:"",
            umur:"",
            longitude:"",
            latitude:"",
            foto:null,
        }
    }

    componentDidMount(){
        this.getPermission()
        this.getLocation()
    }

    async getPermission(){
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    async pickImage(){
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          console.log(result);
          
          if (!result.cancelled) {
              console.log(result.uri)
              this.setState({image:result.uri})
          }
    }
    
    async getLocation(){
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          return;
        }
    
        let location = await Location.getCurrentPositionAsync({});
        console.log("Lokasi anda adalah :" + JSON.stringify(location));

        this.setState({
            latitude: location.coords.latitude,
            longitude:location.coords.longitude
        })
    };

    simpanData(){

        let formData = new FormData();
        let filename = this.state.image;
        console.log("nama gambar "+ filename.split('/').pop())
        formData.append('data',JSON.stringify(this.state))
        formData.append('file',{
            uri: this.state.image, //Your Image File Path
            type: 'image/jpeg', 
            name: filename.split('/').pop(),
         })


        axios.post('http://192.168.27.98:8080/user/register/',formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response)=>{
            alert(response.data)
            this.props.navigation.navigate('Home')
        })
        .catch((error)=>{
            console.log("Gagal Register : "+error)
        })
    }

  render() {
    return (
        <View style={styles.viewStyle}>
        <Text> Username </Text>
        <TextInput placeholder="masukan Username" onChangeText={(value)=>{this.setState({username:value})}}/>
        <Text> Password </Text>
        <TextInput placeholder="masukan Password" onChangeText={(value)=>{this.setState({password:value})}}/>
        <Text> Nama Lengkap </Text>
        <TextInput placeholder="masukan Nama Lengkap" onChangeText={(value)=>{this.setState({namaLengkap:value})}}/>
        <Text> Jenis Kelamin </Text>
        <Picker
                    selectedValue={this.state.jenisKelamin}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue) => this.setState({ jenisKelamin: itemValue })}>
                    <Picker.Item label="Masukan Pilihan"/>
                    <Picker.Item label="Laki-laki" value="Laki-laki" />
                    <Picker.Item label="Perempuan" value="Perempuan" />
                </Picker>
        <Text> No Hp </Text>
        <TextInput placeholder="masukan No Hp Aktif" onChangeText={(value)=>{this.setState({hp:value})}}/>
        <Text> Umur </Text>
        <TextInput placeholder="masukan Umur" onChangeText={(value)=>{this.setState({umur:value})}}/>
        <Text> Foto </Text>
        <Button title="Pick an image from camera roll" onPress={()=>{this.pickImage()}} />
        <Image source={{ uri: this.state.foto }} style={{ width: 200, height: 200,alignSelf:'center' }} />
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.simpanData()}}><Text style={styles.textStyle}>Simpan</Text></TouchableOpacity>
    </View>
    )
  }
}

export default Register


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