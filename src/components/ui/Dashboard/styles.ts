import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledWrapper = styled(Paper)`
	border-radius: 0;
	border: 1px solid ${({ theme }) => theme.palette.primary.main};
	display: flex;
	height: 100%;
	min-height: 88vh;
	margin: 3vw;
	padding-bottom: 3rem;
	width: 88vw;
`;

export const StyledSideNav = styled('div')`
	align-items: center;
	background-color: ${({ theme }) => theme.palette.common.chalk};
	display: flex;
	flex-direction: column;
	justify-content: start;
	padding-top: 3rem;
	width: 10vw;
`;

export const StyledSlotsWrapper = styled('div')`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: start;
	width: 100%;
`;
