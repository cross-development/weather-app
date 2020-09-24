//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Styles
import { Form, Div, Button, Span, Input } from './SearchForm.styles';

const SearchForm = ({ onSubmit }) => {
	const [value, setValue] = useState('');

	const handleChange = ({ target: { value } }) => setValue(value);

	const handleSubmit = e => {
		e.preventDefault();

		if (!value || value === ' ') alert('Enter location or zip');

		onSubmit(value);
		setValue('');
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Div>
				<Button type="submit">
					<Span>Search</Span>
				</Button>

				<Input
					type="text"
					value={value}
					autoComplete="off"
					placeholder="Search location, zip..."
					onChange={handleChange}
				/>
			</Div>
		</Form>
	);
};

SearchForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
