import { Button, Theme, styled } from '@mui/material';

interface StyledButtonProps {
	active: string | undefined;
	theme: Theme;
}

export const StyledButton = styled(Button)<StyledButtonProps>(
	({ active, theme }) => ({
		backgroundColor: theme.palette.common.chalk,
		borderRadius: '0.3rem',
		borderColor:
			active === 'active' ? theme.palette.common.blue : theme.palette.common.grey,
		fontSize: '0.8rem',
		marginTop: '0.8rem',
		textTransform: 'none',
		width: '95%',
	}),
);
