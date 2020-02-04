import '@lwc/synthetic-shadow';//Kepp this css import on top of index.js file in order to support css for whole application.
import { buildCustomElementConstructor } from 'lwc';
import MyApp from 'my/app';

customElements.define('my-app', buildCustomElementConstructor(MyApp));
