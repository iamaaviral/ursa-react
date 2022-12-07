import { useState } from "react"


function SideNav(props) {
    // const [age, setAge] = useState(16)

    const [hairColor, setHairColor] = useState("black")
    // console.log(props)
    return (
        <div>
            <h1>This is some content for {props.name} whose hair color is {hairColor}</h1>
            {props.age > 18 ? <p>This is some mature content</p> : null}
        </div>
    )
}
export default SideNav