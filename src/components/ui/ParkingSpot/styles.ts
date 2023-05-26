import { Button, Theme } from '@mui/material';
import { styled } from '@mui/system';

export const StyledWrapper = styled('div')`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
`;

interface StlyedIndicatorProps {
	state: 'available' | 'in-use';
	theme: Theme;
}

export const StlyedIndicator = styled('div')<StlyedIndicatorProps>(
	({ state, theme }) => ({
		backgroundColor:
			state === 'in-use' ? theme.palette.error.main : theme.palette.success.main,
		borderRadius: '2rem',
		boxShadow: 'rgba(0, 0, 0, 0.15) 1px 1px 2px 0px',
		height: '20px',
		marginTop: '2rem',
		width: '20px',
	}),
);

export const StyledButton = styled(Button)`
	background-color: ${({ theme }) => theme.palette.common.chalk};
	margin-top: 2rem;
	text-transform: none;
`;
