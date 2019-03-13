import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class PageWrapper extends Component {
    render() {
        const {children, title, image} = this.props;
        const backgroundImage = `url(img/${image})`;

        return (
            <div className={`page-wrapper ${window.location.pathname.replace('/', '')}`}>
                <div className='content'>{children}</div>
                <div className='sidebar' style={{backgroundImage}}>
                    <div className="main-heading">
                        <h1>{title}</h1>
                    </div>
                    <div className='close-btn' onClick={() => this.props.history.push('/')}/>
                </div>
            </div>
        );
    }
}

export default withRouter(PageWrapper);