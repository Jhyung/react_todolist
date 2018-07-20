import React from 'react';
import { PropTypes } from 'prop-types';
import FormInput from './FormInput';

const BoardForm = ({onChange, onSave, readContent, isActivate, buttonName}) => {
    return (
        <form>
            <br/><br/><br/>
            <FormInput 
                name="author" 
                label="작성자" 
                onChange={onChange}
                defaultValue={readContent.author}
                disabled={isActivate} 
            />
            <FormInput 
                name="title" 
                label="제목" 
                onChange={onChange}
                defaultValue={readContent.title}
                disabled={isActivate}
            />
            <div className="form-group">
                <label htmlfor="content">내용</label>
                <textarea 
                    name="content" 
                    id="content" 
                    className="form-control"
                    onChange={onChange} 
                    defaultValue={readContent.content}
                    disabled={isActivate}></textarea>
            </div>
            <input 
                type="button"
                value={buttonName}
                onClick={onSave}
            />
        </form>
    );
}

BoardForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSave : PropTypes.func.isRequired,
    readContent: PropTypes.object.isRequired,
    isActivate: PropTypes.bool.isRequired,
    buttonName: PropTypes.string.isRequired
}

export default BoardForm;



