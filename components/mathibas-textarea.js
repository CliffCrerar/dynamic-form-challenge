import React, { Component } from 'react'
import PostData from '../data/posts.json'

class TextArea extends Component {

    render() {

        const { address, onChangeValue } = this.props;

        return (

            <div>

                <br></br>

                {PostData.map((FormField, index) => {

                    return <textarea
                        rows="8"
                        cols="22"
                        name='address'
                        placeholder={FormField.controltype}></textarea>
                })}

            </div>

        )

    }

}



export default TextArea;