import React from 'react';

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit(event){
        debugger
        event.preventDefault();
        this.props.searchAll(this.state.value)
    }

    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <form className="form-inline" action="/action_page.php">
                    <input className="form-control mr-sm-2" type="text" name="search" placeholder="Search"/>
                    <button className="btn btn-success" type="submit">Search</button>
                </form>
            </nav>
        )
    }
}


export default NavBar