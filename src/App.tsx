import { Dashboard } from './components/ui/Dashboard/Dashboard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { uiTheme } from './styles/Theme';

function App() {
	return (
		<ThemeProvider theme={uiTheme}>
			<CssBaseline />
			<Dashboard />
		</ThemeProvider>
	);
}

export default App;
