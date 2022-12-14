import React, {useState, useEffect} from 'react';

// class Counter extends React.Component {
//     constructor(props)  {
//         super(props);
//     }

//     // componentDidUpdate(prevProps, prevState) {
//     // //    if(prevProps.id === 1) {
//     // //         //call any api
//     // //     }
//     //         //make api call
//     //     // console.log(this.state.age)
//     //     //dataFetch('x')

//     //     // console.log("This is step 4 (component did update)")
//     // }
//     componentDidMount() {
//         console.log("component was made")
//     }

//     // componentWillUnmount() {
//     //     // console.log("component is going to unmount");
//     //     // clearTimeout(timerId);
//     //     alert("form is not saved")
//     // }

//     //shouldComponentUpdate(nextProps, nextState)
//     // shouldComponentUpdate(nextProps, nextState) {
//     //   return true
//     // }

//     componentDidUpdate(prevProps, prevState) {
//         console.log(prevProps); //
//     }
//     //componentDidUpdate(prevProps, prevState)

//     render() {
//         return (
//             <div>
//                 <h1>{this.props.counter}</h1>
//             </div>
//         )
//     }
// }

// React.memo
//hooks.......
const Counter = ({counter, age}) => {
    useEffect(() => {
        console.log("ake api call")
        // return () => {
        //     console.log("component will unmount")
        // }
    }, [])

    useEffect(() => {
        console.log(counter,age);
    }, [counter, age, "aviral"])

    // useEffect(() => {
    //     console.log("will only run if state changes");
    // }, [name])

    return (
        <div id="header1">
            <h1>{counter}</h1>
            <h2>{age}</h2>
            {/* <input /> */}
            {/* <h3>{name}</h3> */}
            {/* <button onClick={() => setName(name === "aviral" ? "sameer" : "aviral")}>change Name</button> */}
        </div>
    )
}
export default Counter;

//controlled component vs uncontrolled component ==(form elements , checkbox, radio btn, submit btn, inuput)
//stateful comonent vs stateless compnent