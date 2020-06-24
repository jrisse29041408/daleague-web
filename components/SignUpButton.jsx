import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

export const SignUpButton = () => (
  <div>
    <Button animated='fade'>
      <Button.Content visible>Sign-up for Free</Button.Content>
      <Button.Content hidden>FREE</Button.Content>
    </Button>
  </div>
)