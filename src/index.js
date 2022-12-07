import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Map from "ol/Map";
import View from "ol/View";


const root = ReactDOM.createRoot(document.getElementById('root'));

class MyMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            map: new Map({
                target: null,
                layers: [
                    // Ajoutez vos couches ici
                ],
                view: new View({
                    center: [0, 0],
                    zoom: 0
                })
            })
        }
    }

    componentDidMount() {
        this.state.map.setTarget('map');
    }

    render() {
        return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
    }
}

root.render(

  <React.StrictMode>
    <MyMap />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
