import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { TitledInput } from '../TitledInput';
import Styles from '../../../assets/style';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false, };

    onLoginPress = () => {
        this.setState({ error: '', loading: true });
        const { handleAuth } = this.props;
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
              this.setState({ error: 'login success', loading: false });
              firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                  console.log(user);
                  handleAuth(user.email);
                }
              });
            })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                      this.setState({ error: 'Create a new account', loading: false });
                      firebase.auth().onAuthStateChanged((user) => {
                        if (user) {
                          console.log(user);
                          handleAuth(user.email);
                        }
                      });
                    })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
            });
    };

    render() {
        const { onLoginPress } = this;
        const { loading } = this.state;

        return (
            <View style={Styles.w100}>
                    <TitledInput
                        placeholder='email'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TitledInput
                        autoCorrect={false}
                        placeholder='password'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    <Button title={loading ? `loading`:`Login`} onPress={onLoginPress}/>
                    <View style={[Styles.textCenter, Styles.my3]}>
                      <Text style={Styles.small}>Create by <Text style={Styles.link}>tickstudiu@gmail.com</Text></Text>
                    </View>
            </View>
        );
    }
}

const styles = {
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default LoginForm;
