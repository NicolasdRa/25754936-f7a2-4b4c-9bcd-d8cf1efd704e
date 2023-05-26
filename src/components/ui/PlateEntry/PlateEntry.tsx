import { useEffect, useState } from 'react';

import { Reservation } from '../../../store/reservationsSlice';

import { StyledButton } from './styles';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	borderRadius: '3px',
	p: 4,
};

interface PlateEntryProps {
	data: Reservation;
}

export const PlateEntry: React.FC<PlateEntryProps> = ({ data }) => {
	const [active, setActive] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const { spotId, plateNumber, startTime, endTime } = data;

	useEffect(() => {
		endTime !== null ? setActive(false) : setActive(true);
	}, [endTime]);

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Modal
				open={isOpen}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<Box position='absolute' top={0} right={0}>
						<IconButton onClick={handleClose}>
							<Close />
						</IconButton>
					</Box>
					<Typography
						variant='h6'
						sx={{
							display: 'flex',
							justifyContent: 'center',
							marginBottom: '1rem',
						}}>
						Reservation Details
					</Typography>
					<Typography id='modal-modal-title' variant='body1'>
						Spot ID: {spotId}
					</Typography>
					<Typography id='modal-modal-title' variant='body1'>
						Plate number: {plateNumber}
					</Typography>
					<Typography id='modal-modal-title' variant='body1'>
						Start Time: {startTime}
					</Typography>
					<Typography id='modal-modal-title' variant='body1'>
						End Time: {endTime}
					</Typography>
				</Box>
			</Modal>
			<StyledButton
				active={active ? 'active' : undefined}
				variant='outlined'
				onClick={handleOpenModal}>
				Plate Nr: {plateNumber}
			</StyledButton>
		</>
	);
};
