//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Data
import countriesCode from 'data/countriesCode.json';
//Styles
import { StyledForm, StyledDiv, StyledButton, StyledSpan, StyledInput } from './SearchForm.styles';

const SearchForm = ({ onSubmit }) => {
	const [value, setValue] = useState('');
	const [countryCode, setCountryCode] = useState('');

	const handleChangeText = ({ target: { value } }) => setValue(value);

	const handleChangeSelect = ({ target: { value } }) => setCountryCode(value);

	const handleSubmit = e => {
		e.preventDefault();

		if (!value || value === ' ') return alert('Enter location or zip');

		onSubmit(value, countryCode);
		setCountryCode('');
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
					onChange={handleChangeText}
				/>

				<select value={countryCode} onChange={handleChangeSelect}>
					<option value="" disabled>
						None
					</option>
					{countriesCode.map(({ code, name }) => (
						<option key={code} value={code}>
							{name}
						</option>
					))}
				</select>
			</StyledDiv>
		</StyledForm>
	);
};

SearchForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
