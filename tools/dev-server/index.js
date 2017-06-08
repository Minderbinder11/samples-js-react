//index.js

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

/* eslint import/no-extraneous-dependencies:0, no-console:0, no-param-reassign:0 */

'use strict';
import path 				 	from 'path';
import express 			 	from 'express';
import request 			 	from 'request';
import bodyParser 	 	from 'body-parser';
import session 			 	from 'express-session';
import cookieParser  	from 'cookie-parser';
import handlers				from './route-handlers'

const chalk = require('chalk');
const cons = require('consolidate');
const config = require('../../.samples.config.json').oktaSample;

const app = express();

  // The authorization code flows are stateful - they use a session to
  // store user state (vs. relying solely on an id_token or access_token).
  app.use(express.static('app'));
  app.use(cookieParser());
  app.use(session({
    secret: 'AlwaysOn',
    cookie: { maxAge: 3600000 },
    resave: false,
    saveUninitialized: false,
  }));



  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  // These are the routes that need to be implemented to handle the
  // authorization code scenarios

  // app.get('/authorization-code/login-redirect', handlers.loginRedirect);
  // app.get('/authorization-code/login-custom', handlers.loginCustom);
   app.get('/authorization-code/profile', handlers.profile);
  // app.get('/authorization-code/logout', handlers.logout);
   app.get('/authorization-code/callback', handlers.callback);
 	app.get('/*', (req, res) => { res.redirect('/'); });

	app.listen(config.server.port, () => {
	  console.log('==============================================================');
	  console.log(chalk.bold('= DEV SERVER STARTED '));
	  console.log(chalk.bold(`= Access it at: http://localhost:${config.server.port} `));
	  console.log('==============================================================');
	});
