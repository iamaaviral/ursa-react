// class Male extends Person{
//     constructor( name, age, hairColor, occupation, hobby) {
//        super(name,age,hairColor)
//        this.occupation = occupation;
//        this.hobby = hobby;
//           }
//     }

// const names = ["aviral", "nimisha", "sameer", "shivani"]


import React from 'react';
// const arr = [11,43,12,421]

class Header extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            age: 15,
        }
        // console.log("This is the 1st step (constructor)")
    }

    increaseAge() {
       this.setState({
            age: this.state.age + 1,
       })
    }

    componentDidMount() {
        //if my code is coming here 
        //make any api call
        //var name = getting value from api
        //document.getElementById("header").innerText = name
        // console.log("This is step 3 (component did mount)")
    //     this.setState({
    //         age: this.state.age + 1,
    //    })
        // console.log(document.getElementById("header")) // correct output
    }

    // componentDidUpdate(prevProps, prevState) {
    // //    if(prevProps.id === 1) {
    // //         //call any api
    // //     }
    //         //make api call
    //     // console.log(this.state.age)
    //     //dataFetch('x')

    //     // console.log("This is step 4 (component did update)")
    // }

    render() {
        // console.log("this is the 2nd step (render)")
        // console.log(document.getElementById("header")) //null
        return (
            <div>
                <h1 id="header">My name is {this.props.id}</h1>
                <div className={`mainApp ${this.state.age > 18 ? 'redApp' : 'blueApp'}`}>{this.state.age}</div>
                <button onClick={() => this.increaseAge()}>Add age</button>
            </div>
        )
    }
}
export default Header;


// let obj = {
//     name: "aviral"
// }

// function getName() {
//     console.log(this)
// }

// let newGetName = getName.bind(obj);
// newGetName()




//1. we are born
//2. based on surroundings/situations we might change
//3. we die