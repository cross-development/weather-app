//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-styled-select';
//Data
import countriesCode from 'data/countriesCode.json';
//Styles
import {
	StyledForm,
	StyledDiv,
	StyledButton,
	StyledSpan,
	StyledInput,
	StyledSelectWrapper,
} from './SearchForm.styles';
import './Select.css';

const SearchForm = ({ onSubmit }) => {
	const [value, setValue] = useState('');
	const [countryCode, setCountryCode] = useState('');

	const handleChangeText = ({ target: { value } }) => setValue(value);

	// const handleChangeSelect = ({ target: { value } }) => setCountryCode(value);
	const handleChangeSelect = value => console.log(value);

	const handleSubmit = e => {
		e.preventDefault();

		if (!value || value === ' ') return alert('Enter location or zip');

		onSubmit(value, countryCode);
		setCountryCode('');
		setValue('');
	};

	return (
		<>
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
						onChange={value => handleChangeText(value)}
					/>

					{/* <select value={countryCode} onChange={handleChangeSelect}>
					<option value="" disabled>
						None
					</option>
					{countriesCode.map(({ code, name }) => (
						<option key={code} value={code}>
							{name}
						</option>
					))}
				</select> */}
				</StyledDiv>
			</StyledForm>

			<StyledSelectWrapper>
				<Select options={countriesCode} onChange={handleChangeSelect} className="dark-theme" />
			</StyledSelectWrapper>
		</>
	);
};

SearchForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
