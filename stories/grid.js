import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button, Welcome } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';
import {Grid} from '../packages/'

storiesOf('grid', module).add('to Storybook', () => < Button onClick={
    action('clicked')
} > < span role="img" > 😀😎💯 < /span > </Button > );
    
storiesOf('grid', module).add('to1 Storybook', () => < Grid>  </Grid > )
