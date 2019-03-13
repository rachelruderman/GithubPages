import React, { Component } from 'react';

export default class PageWrapper extends Component {
    render() {
        const {children, title, image} = this.props;

        return (
            <div className='page-wrapper'>
                <div className='content'>{children}</div>
                <div className='sidebar' style={{backgroundImage: `url(img/${image})`}}>
                    <div className="main-heading">
                        <h1>{title}</h1>
                    </div>
                    <div className='close-btn'/>
                </div>
            </div>
        );
    }
}