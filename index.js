/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import useState from './src/usestatehook/useState';
import usestateHook from './src/usestatehook/useState';
import useHook from './src/usestatehook/useEffect Hook/Usseeffect';
import Useref from './src/useRef/Useref';
import UseContextHook from './src/usecontexthook/UseContextHook';
import useCallback from './src/useCallback/useCallback';
import Hookreducer from "./src/useereducer/Hookreducer"

AppRegistry.registerComponent(appName, () => Hookreducer);
