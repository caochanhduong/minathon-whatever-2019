import React, { Component } from 'react';

class TextEntry extends Component {
    render() {
        return (
            <div>
                <div className="form-group">
  <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
</div>
            </div>
        );
    }
}

export default TextEntry;