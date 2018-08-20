import React, { Component } from 'react'

import './Footer.css';

import { Grid, Button, Icon } from 'semantic-ui-react'

class Footer extends Component {
render() {
  return (
    <div className="main-b">
    <footer className="footer-grid">
      <Grid stackable columns={3} divided>
        <Grid.Column>
          <h1>Running out of products?</h1>
          <p>Lorem ipsum dolor sit amet, consect
              turadipiscing elit. Integer aliquet.</p>
          <Button>Buy now<Icon name="chevron right"/></Button>
        </Grid.Column>

        <Grid.Column>
          <h1>Bod&#183;&#275; Trainer in your pocket</h1>
          <p>Lorem ipsum dolor sit amet, consect
              turadipiscing elit. Integer aliquet.</p>
          <Button><Icon name="apple"/>IOS<Icon name="chevron right"/></Button>
          <Button><Icon name="android"/>Android<Icon name="chevron right"/></Button>
        </Grid.Column>

        <Grid.Column>
          <h1>Frequently Asked Questions</h1>
          <p>Lorem ipsum dolor sit amet, consect
              turadipiscing elit. Integer aliquet.</p>
          <Button>Read FAQs<Icon name="chevron right"/></Button>
        </Grid.Column>
      </Grid>
    </footer>
    </div>
  );
}
}

export default Footer;