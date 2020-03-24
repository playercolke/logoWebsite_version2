// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'
import Navbar from './Navbar.js'
import TextEditSidebar from './TextEditSidebar.js'
import TextEditWorkspace from './TextEditWorkspace.js'

export class EditScreen extends Component {
    constructor(props) {
        super(props);

        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen constructor");

        this.state = {  
            deleteModalVisible: true
        }
    }

    handleKeyPress = (event) => {
        if(event.ctrlKey && event.key === "z") {
            this.props.undoCallback();
        }
        if(event.ctrlKey && event.key === "y") {
            this.props.redoCallback();
        }
    }

    componentDidMount = () => {
        console.log("\tEditScreen component did mount");
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount = () => {
        console.log("\tEditScreen component will unmount");
        document.addEventListener("keydown", this.handleKeyPress);
    }

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen render");
        return (
            <div className="container">
                <Navbar goToHomeCallback={this.props.goToHomeCallback} />
                <div className="row">
                    <TextEditSidebar
                        logo={this.props.logo}
                        changeLogoCallback={this.props.changeLogoCallback}
                        undoCallback={this.props.undoCallback}                                          
                        canUndo={this.props.canUndo}   
                        redoCallback={this.props.redoCallback}
                        canRedo={this.props.canRedo}                      
                    />
                    <TextEditWorkspace
                        logo={this.props.logo} />
                </div>
            </div>
        )
    }
}

export default EditScreen