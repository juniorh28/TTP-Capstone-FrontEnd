import React from 'react'
import {GoogleLogin} from 'react-google-login'

const clientId = "647809847586-rjo56ci6kmknr42hugo8nujuitggtgta.apps.googleusercontent.com"

function GoogleSignIn (){
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser', res.profileObj)
    }
    const onFailure = (res) => {
        console.log('[Login Failure] res', res)
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop:'100px'}}
                isSignedIn={true}
            />
        </div>
    )
}

export default GoogleSignIn