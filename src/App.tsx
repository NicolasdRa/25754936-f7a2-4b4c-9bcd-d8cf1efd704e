import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { Dashboard } from './components/ui/Dashboard/Dashboard';

import { store } from './store/store';
import { uiTheme } from './styles/Theme';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={uiTheme}>
				<CssBaseline />
				<Dashboard />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
