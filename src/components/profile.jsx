import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';

class Profile extends Component {
    state = {}
    componentDidMount(){
        try{
        const jwt = localStorage.getItem("token");
        const user = jwtDecode(jwt);
        this.setState({ user });
        }
        catch(ex){}
    } 
    render() { 
        return <h1>User Profile</h1>
    }
}
 
export default Profile;