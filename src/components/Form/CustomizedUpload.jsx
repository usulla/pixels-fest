import React, { Fragment } from 'react'
import Chip from '@material-ui/core/Chip'
import FormLabel from '@material-ui/core/FormLabel'
import PropTypes from 'prop-types'
import FormHelperText from '@material-ui/core/FormHelperText'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AttachFile from '@material-ui/icons/AttachFile'

import {
	silverChalice,
	s, l } from '../assets/styles/conf/_configs.scss'

const styles = {
	FormLabel: {
		display: 'block',
		textTransform: 'uppercase',
		textAlign: 'left',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
		width: '100%',
		color: silverChalice,
		fontSize: '14px',
		marginTop: '32px',
		marginBottom: '16px',
		[`@media (min-width: ${s})`]: {
			fontSize: `calc(14px + (16 - 14) * ((100vw - ${s}) / ${l.replace(/[^\d]/mig, '') - s.replace(/[^\d]/mig, '')}))`
		},
		[`@media (min-width: ${l})`]: {
			fontSize: '16px'
		}
	},
	helpTextWrapper: {
		width: '100%'
	},
	fab: {
		width: '32px',
		height: '32px',
		minHeight: '32px',
		backgroundColor: 'transparent',
		boxShadow: 'none',
		border: '1px solid rgba(0, 0, 0, 0.23)'
	}
}

const CustomizedUpload = props => {
	const {
		classes = {},
		id = '',
		name = '',
		helperText = '',
		files = [],
		uploadRefs = {},
		error = false,
		maxFilesLength = 1,
		onFileDelete = f => f,
		onFilesChoose = f => f,
		...other
	} = props
	return (
		<div className='cwff-form__group cwff-form__group--upload'>
			<FormLabel className={classes.FormLabel}>
				фото ребенка (не более 2-х: портрет и в полный рост)
			</FormLabel>
			{
				files.map((file, index) => {
					const fileName = file.name
					return (
						<Chip
							key={index}
							label={fileName}
							onDelete={() => onFileDelete(file.id)}
							variant='outlined'
						/>
					)
				})
			}
			{
				Array(maxFilesLength)
					.fill(0)
					.map((empty, index) =>
						<input
							{ ...other }
							key={index}
							id={`${id}--${index}`}
							name={`${name}--${index}`}
							onChange={onFilesChoose}
							ref={uploadRefs[`${name}--${index}`]}/>
					)
			}
			{
				(() => {
					if (!files.length) {
						return (
							<Fragment>
								<label
									key={`${id}--0`}
									htmlFor={`${id}--0`}
									className={classes.label}>
									<Fab
										size='small'
										component='span'
										className={classes.fab}>
										<AttachFile fontSize='small' />
									</Fab>
								</label>
								<label
									key={`${id}--1`}
									htmlFor={`${id}--1`}
									className={classes.label}>
									<Fab
										size='small'
										component='span'
										className={classes.fab}>
										<AttachFile fontSize='small' />
									</Fab>
								</label>
							</Fragment>
						)
					}
					else {
						return (
							<Fragment>
								{
									files.some(file => file.id === `${id}--0`) ?
										null :
										<label
											key={`${id}--0`}
											htmlFor={`${id}--0`}
											className={classes.label}>
											<Fab
												size='small'
												component='span'
												className={classes.fab}>
												<AttachFile fontSize='small' />
											</Fab>
										</label>
								}
								{

									files.some(file => file.id === `${id}--1`) ?
										null :
										<label
											key={`${id}--1`}
											htmlFor={`${id}--1`}
											className={classes.label}>
											<Fab
												size='small'
												component='span'
												className={classes.fab}>
												<AttachFile fontSize='small' />
											</Fab>
										</label>
								}
							</Fragment>
						)
					}
				})()
			}
			<div className={classes.helpTextWrapper}>
				{
					helperText && error && <FormHelperText>{ helperText }</FormHelperText>
				}
			</div>
		</div>
	)
}

CustomizedUpload.propTypes = {
	classes: PropTypes.object.isRequired,
	files: PropTypes.array,
	maxFilesLength: PropTypes.number,
	onFileDelete: PropTypes.func,
	onFilesChoose: PropTypes.func,
	id: PropTypes.string,
	name: PropTypes.string,
	helperText: PropTypes.string,
	error: PropTypes.bool,
	uploadRefs: PropTypes.object
}

export default withStyles(styles)(CustomizedUpload)