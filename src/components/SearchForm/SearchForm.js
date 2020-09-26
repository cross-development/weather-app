//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledForm, StyledDiv, StyledButton, StyledSpan, StyledInput } from './SearchForm.styles';

const SearchForm = ({ onSubmit }) => {
	const [value, setValue] = useState('');

	const handleChange = ({ target: { value } }) => setValue(value);

	const handleSubmit = e => {
		e.preventDefault();

		if (!value || value === ' ') return alert('Enter location or zip');

		onSubmit(value);
		setValue('');
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledDiv>
				<StyledButton type="submit">
					<StyledSpan>Search</StyledSpan>
				</StyledButton>

				<StyledInput
					required
					type="text"
					value={value}
					autoComplete="off"
					placeholder="Search location, zip..."
					onChange={handleChange}
				/>
			</StyledDiv>
		</StyledForm>
	);
};

SearchForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
