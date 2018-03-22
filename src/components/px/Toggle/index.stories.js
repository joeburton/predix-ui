import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import Toggle from './';

const sizeOptions = {
  small: 'Small',
  regular: 'Regular',
  large: 'Large',
  huge: 'Huge'
};

const stories = storiesOf('Toggle', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
	<form>
		<Toggle id='toggle2' 
    	name='used1' 
    	value='true' 
    	size={select('size', sizeOptions, 'regular')} 
    	disabled={boolean('disabled', false)}
    	checked={boolean('checked', false)}
			/>	
	</form>
));