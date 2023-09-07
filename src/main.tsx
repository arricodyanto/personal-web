import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/assets/styles/generated.css';
import './assets/styles/index.css';
import {
	Button,
	CssBaseline,
	ThemeProvider,
	Typography,
	createTheme,
	responsiveFontSizes,
} from '@mui/material';
import App from './App';

let theme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: '#F3F6FF',
			paper: '#FFFF',
		},
		primary: {
			main: '#F8B501',
			contrastText: '#E2E8F0',
		},
		secondary: {
			main: '#3A3F47',
			contrastText: '#E2E8F0',
		},
		text: {
			primary: '#3A3F47',
			secondary: '#5D646F',
		},
		divider: '#3A3F47',
	},
	breakpoints: {
		values: {
			xs: 310,
			sm: 360,
			md: 760,
			lg: 1200,
			xl: 1440,
		},
	},
	typography: {
		fontFamily: "'Raleway', sans-serif",
	},
});

// Configure the font to automatically resize in responsiveness
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider theme={theme}>
		<React.StrictMode>
			<CssBaseline />
			<App />
		</React.StrictMode>
	</ThemeProvider>,
);
