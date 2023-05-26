import styled from 'styled-components';

export const StyledWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
`;

export const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.palette.common.chalk};
	margin-top: 2rem;
`;

export const StyledLogListWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: start;
	width: 100%;
	min-height: 50vh;
`;
