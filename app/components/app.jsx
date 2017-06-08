/*!
 * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Overview from './Overview.jsx';
import LoginRedirect from './LoginRedirect.jsx';
import LoginCustom from './LoginCustom.jsx';
import Profile from './Profile.jsx';
var config = require("json!../../.samples.config.json");
//import config from '../../.samples.config.json'

export function bootstrap(config) {
  ReactDOM.render(
    <BrowserRouter>
	    <div>
	      <Route exact path="/" component={LoginRedirect} config={config} />
	      <Route path="/authorization-code/profile" component={Profile} config={config} />
	    </div>
    </BrowserRouter>
  , document.getElementById('root'));
}

bootstrap(config);

export default bootstrap;


	      // <Route path="/authorization-code/login-custom" component={LoginCustom} config={config} />
