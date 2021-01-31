import React from "react"

 const UserInfo = (props) => (
    <div>
        <div>{props.email}</div>
    </div>
)

//UserIcon grabs the user's profile image (or default profile if user did not pick an image)
//and displays it on the nav bar

//it might display their name (unsure how it'll look)

export default UserInfo;