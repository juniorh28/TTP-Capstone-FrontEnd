/* import React from 'react' */
import {GoogleLogout} from 'react-google-login'

const clientId = "647809847586-rjo56ci6kmknr42hugo8nujuitggtgta.apps.googleusercontent.com"

function GoogleSignOut (){
    const onSuccess = () => {
        alert('Logout made successfully')
    }
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onSuccess={onSuccess}
            />
        </div>
    )
}

export default GoogleSignOut


