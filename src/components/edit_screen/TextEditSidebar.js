import React, { Component } from 'react'

class TextEditSidebar extends Component {
    constructor() {
        super();

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            text: "lol",
            textColor: "#FF0000",
            fontSize : 11,
            backgroundColor: "#FF0000",
            borderColor: "#FF0000",
            borderRadius: 11,
            borderThickness: 11,
            padding: 11,
            margin: 11
        }
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    handleRedo = () => {
        this.props.redoCallback();
    }

    handleTextChange = (event) => {
        this.setState({ text: event.value,
            textColor: event.target.value, 
            fontSize: this.props.logo.fontSize, 
            backgroundColor: this.props.logo.backgroundColor,
            borderColor: this.props.logo.borderColor,
            borderRadius: this.props.logo.borderRadius,
            borderThickness: this.props.logo.borderThickness,
            padding: this.props.logo.padding,
            margin: this.props.logo.margin }, 
            this.completeUserEditing);
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value, 
            fontSize: this.props.logo.fontSize, 
            backgroundColor: this.props.logo.backgroundColor,
            borderColor: this.props.logo.borderColor,
            borderRadius: this.props.logo.borderRadius,
            borderThickness: this.props.logo.borderThickness,
            padding: this.props.logo.padding,
            margin: this.props.logo.margin }, 
            this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleFontSizeChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value, 
            textColor: this.props.logo.textColor, 
            backgroundColor: this.props.logo.backgroundColor,
            borderColor: this.props.logo.borderColor,
            borderRadius: this.props.logo.borderRadius,
            borderThickness: this.props.logo.borderThickness,
            padding: this.props.logo.padding,
            margin: this.props.logo.margin }, 
            this.completeUserEditing);
    }

    handleBackgroundColorChange = (event) => {
        console.log("handleBackgroundColorChangeComplete to " + event.target.value);
        this.setState({ backgroundColor: event.target.value, 
            textColor: this.props.logo.textColor, 
            fontSize: this.props.logo.fontSize,
            borderColor: this.props.logo.borderColor,
            borderRadius: this.props.logo.borderRadius,
            borderThickness: this.props.logo.borderThickness,
            padding: this.props.logo.padding,
            margin: this.props.logo.margin }, 
            this.completeUserEditing);
    }

    handleBorderColorChange = (event) => {
        this.setState({borderColor: event.target.value, 
            textColor: this.props.logo.textColor, 
            fontSize: this.props.logo.fontSize, 
            backgroundColor: this.props.logo.backgroundColor,
            borderRadius: this.props.logo.borderRadius,
            borderThickness: this.props.logo.borderThickness,
            padding: this.props.logo.padding,
            margin: this.props.logo.margin }, 
            this.completeUserEditing);
    }

    handleBorderRadiusChange = (event) => {
        this.setState({borderRadius: event.target.value, 
            textColor: this.props.logo.textColor, 
            fontSize: this.props.logo.fontSize, 
            backgroundColor: this.props.logo.backgroundColor,
            borderColor: this.props.logo.borderColor,
            borderThickness: this.props.logo.borderThickness,
            padding: this.props.logo.padding,
            margin: this.props.logo.margin }, 
            this.completeUserEditing);
    }

    handleBorderThicknessChange = (event) => {
        this.setState({borderThickness: event.target.value,
            borderRadius: this.props.logo.borderRadius, 
            textColor: this.props.logo.textColor, 
            fontSize: this.props.logo.fontSize, 
            backgroundColor: this.props.logo.backgroundColor,
            borderColor: this.props.logo.borderColor,
            padding: this.props.logo.padding,
            margin: this.props.logo.margin }, 
            this.completeUserEditing);
    }

    handlePaddingChange = (event) => {
        this.setState({padding: event.target.value,
            borderThickness: this.props.logo.borderThickness,
            borderRadius: this.props.logo.borderRadius, 
            textColor: this.props.logo.textColor, 
            fontSize: this.props.logo.fontSize, 
            backgroundColor: this.props.logo.backgroundColor,
            borderColor: this.props.logo.borderColor,
            margin: this.props.logo.margin }, 
            this.completeUserEditing);
    }

    handleMarginChange = (event) => {
        this.setState({margin: event.target.value,
            padding: this.props.logo.padding,
            borderThickness: this.props.logo.borderThickness,
            borderRadius: this.props.logo.borderRadius, 
            textColor: this.props.logo.textColor, 
            fontSize: this.props.logo.fontSize, 
            backgroundColor: this.props.logo.backgroundColor,
            borderColor: this.props.logo.borderColor }, 
            this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text, this.state.textColor, this.state.fontSize,
        this.state.backgroundColor, this.state.borderColor, this.state.borderRadius, this.state.borderThickness,
        this.state.padding, this.state.margin);
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        if (undoDisabled)
            undoClass += " disabled";
        let redoDisabled = !this.props.canRedo();
        let redoClass = "waves-effect waves-light btn-small";
        if (redoDisabled)
            redoClass += " disabled";
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <button className="waves-effect waves-light btn-small">&#9998;</button>
                        <div id="changeNameModal" className="modal">

                        </div>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} onClick={this.handleRedo}>Redo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Background Color:</div>
                        </div>
                        <div className="row">
                            <div className="col s8">
                                <input type="color"
                                    onChange={this.handleBackgroundColorChange}
                                    value={this.props.logo.backgroundColor} 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                    onChange={this.handleBorderColorChange}
                                    value={this.props.logo.borderColor} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <input type="range" min="0" max="50"
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                                <input type="range" min="0" max="35"
                                    onChange={this.handleBorderThicknessChange}
                                    value={this.props.logo.borderThickness} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <input type="range" min="0" max="25"
                                    onChange={this.handlePaddingChange}
                                    value={this.props.logo.padding} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <input type="range" min="0" max="20"
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar