import React, { Component } from 'react'
import fetch from 'isomorphic-fetch';
import PropTypes from 'prop-types';

class FallbackImage extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
          src: props.src,
          errored: false,
        };
    }

    onError = () => {
        if (!this.state.errored) {
            this.setState({
                src: this.props.fallbackSrc,
                errored: true,
            });
        }
    }

    render() {
        const { src } = this.state;
        const {
          src: _1,
          fallbackSrc: _2,
          ...props
        } = this.props;
    
        return (
          <img
            src={src}
            onError={this.onError}
            {...props}
          />
        );
    }
}

FallbackImage.propTypes = {
    src: PropTypes.string,
    fallbackSrc: PropTypes.string,
};

const Card = (props) => (
    <div className="column is-one-quarter-desktop is-half-tablet">
        <div className="card">
            <div className="card-image">
                <div className="image">
                    <FallbackImage src={props.url} fallbackSrc="/static/404.png"/>
                </div>
            </div>
        </div>
    </div>
)

class ImageList extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    async componentDidMount() {
        let response = await fetch("http://localhost:5232/images");
        console.log(response);
        if(response.status == 200) {
            let json = await response.json();
            console.log(json);
            this.setState({ 
                data: json
            });
        }
    }

    render() {
        return ( 
            <div className="columns is-multiline">
                {this.state.data.map((image) => <Card url={image.url}/>)}
            </div>
        )
    }
}
  
export default ImageList