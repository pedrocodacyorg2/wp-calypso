/**
 * External dependencies
 */
import '@automattic/calypso-polyfills';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import config from '../../config';

/**
 * Internal dependencies
 */
import { Gutenboard } from './gutenboard';
import { setupWpDataDebug } from './devtools';
import accessibleFocus from 'lib/accessible-focus';
/**
 * Style dependencies
 */
import 'assets/stylesheets/gutenboarding.scss';
import 'components/environment-badge/style.scss';

window.AppBoot = () => {
	if ( ! config.isEnabled( 'gutenboarding' ) ) {
		window.location.href = '/';
	} else {
		setupWpDataDebug();

		accessibleFocus();

		ReactDom.render(
			<BrowserRouter basename="gutenboarding">
				<Gutenboard />
			</BrowserRouter>,
			document.getElementById( 'wpcom' )
		);
	}
};
