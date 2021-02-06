import React, { useContext } from 'react'
import FacebookLogin from 'react-facebook-login';
import LoginContext from './LoginContext';
export const LoginFacebbok = () => {

    const { facebook_singin } = useContext(LoginContext)

    const responseFacebook = (response) => {

        const { email, name } = response;
        console.log({ response });
        // setData(response);
        // setPicture(response.picture.data.url);
        if (response.accessToken) {
            console.log(response)
            // setLogin(true);}
            const facebookUser = {
                email,
                name
            }
            facebook_singin(facebookUser);
        } else {
            // setLogin(false);
        }
    }
    return (

        <div>
            <FacebookLogin
                appId="333685894449036"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile,user_friends"
                callback={responseFacebook}
                icon="fa-facebook" />
        </div>
    )
}

