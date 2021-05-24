import React from 'react';

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {search: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.searchAll(this.state.search)
    }

    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <form className="form-inline" action="" onSubmit={this.handleSubmit}>
                    <input className="form-control mr-sm-2" type="text" name="search" onChange={this.handleChange} placeholder="Search"/>
                    <button className="btn btn-success">Search</button>
                </form>
            </nav>
        )
    }
}


export default NavBar