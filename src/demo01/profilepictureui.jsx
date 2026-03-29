import { Fragment } from "react"

import "./profilepictureui.css"


export default function ProfilePictureUI(props) {
    return (
        <>
            <div className="pfp-sec" >
                <div className="pfp-img-wraper" >
                    <img src={props.image} alt={props.name} />
                </div>
                <strong> {props.name} </strong>
            </div>
        </>
    )
}

// export default function ProfilePictureUI() {
//     return (
//         // <Fragment>
//         <>
//             <h2>Heading-2</h2>
//             <div> Contents of Heading-2 </div>
//         </>
//         //</Fragment>
//     )
// }