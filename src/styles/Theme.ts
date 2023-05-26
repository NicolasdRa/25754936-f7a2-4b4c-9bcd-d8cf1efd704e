import { createTheme, Theme } from '@mui/material/styles';

export const uiTheme: Theme = createTheme({
	palette: {
		primary: {
			main: 'hsl(256, 44%, 5%)',
			// main: '#292c33',
		},
		secondary: {
			main: '#ef5350',
		},

		common: {
			blue: '#0092FF',
			chalk: '#fafafa',
			green: '#4caf50',
			grey: '#555555',
		},
	},

	typography: {
		fontFamily: ['Roboto', '"Roboto Slab"', 'sans-serif'].join(','),
	},

	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},

	components: {
		MuiModal: {
			styleOverrides: {
				backdrop: {
					backgroundColor: 'rgba(0, 0, 0, 0.1)',
				},
			},
		},
	},
});
