import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class FooterMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.931500,
      lng: 2.342500
    },
    zoom: 16
  };

  render() {
    return (
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys= {{ key: "AIzaSyC8DbBmWTz8p6x7894roLoX16zQi30j21E" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          
          <svg xmlns="http://www.w3.org/2000/svg" lat={this.props.lat} lng={this.props.lng} class="h-20 w-12 text-darkBlueCust" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9zM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" clip-rule="evenodd"/>
					</svg>
        </GoogleMapReact>
      </div>
    );
  }
}

export default FooterMap;