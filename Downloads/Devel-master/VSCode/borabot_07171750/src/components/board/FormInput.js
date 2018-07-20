import React from 'react';
import { PropTypes } from 'prop-types';

const FormInput = ({name, label, onChange, defaultValue, disabled}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                type="text"
                name={name}
                className="form-control"
                onChange={onChange}
                defaultValue={defaultValue}
                disabled={disabled} 
            />
        </div>
    );
}

FormInput.propTypes = {
    name : PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool.isRequired
};

export default FormInput;