import Unsplash from 'unsplash-js';
import {config} from '../constants/unsplashConfig'

export const unsplash = new Unsplash({ accessKey: config.accessKey });



