import React,{Component} from 'react'

class Student extends Component{
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
render(){
    console.log(this.props);
    return(
        <div>
            Student Component
        </div>
    )
}
}

export default Student;