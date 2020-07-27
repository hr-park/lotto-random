import React, {Component} from 'react';
import "./NumberPlateboxComponent.css";

class NumberPlateBoxComponent extends Component {
    handleChange = (e) => {
        const { checked } = e.target;
        this.props.handleChange(checked, this.props.number);
    };

    render() {
        return(
            <div className="number-plate-box-contents">
                <div className="number-plate-box">
                    <input 
                        type="checkbox"
                        id={this.props.number}
                        checked={this.props.selected}
                        onChange={this.handleChange}
                    />
                    <label htmlFor={this.props.number}>{this.props.number}</label>
                </div>
            </div>
        );
    }
}
export  default NumberPlateBoxComponent;