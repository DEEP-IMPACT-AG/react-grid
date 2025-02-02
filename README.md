# @deep-impact-ag/react-grid

Forked from: https://github.com/swiftcarrot/react-grid

React grid component

### Installation

```sh
npm install @deep-impact-ag/react-grid --save
yarn add @deep-impact-ag/react-grid
```

### Basic Usage

```javascript
import React from 'react';
import { Container, Row, Col } from 'react-grid';

function App() {
  return (
    <Container>
      <Row>
        <Col />
        <Col />
      </Row>
    </Container>
  );
}
```

### API

| bootstrap css class   | component                       |
| --------------------- | ------------------------------- |
| .container            | `<Container/>`                  |
| .container-fluid      | `<Container fluid/>`            |
| .row                  | `<Row />`                       |
| .row.no-gutters       | `<Row noGutters />`             |
| .col                  | `<Col/> (<Col xs />)`           |
| .col-sm               | `<Col sm />`                    |
| .col-md-auto          | `<Col md="auto" />`             |
| .col-6                | `<Col xs={6} />`                |
| .col-md-6             | `<Col md={6} />`                |
| .col.order-12         | `<Col order={{xs:12}} />`       |
| .col-md-4.offset-md-4 | `<Col md={4} order={{md:4}} />` |

#### Container

```javascript
<Container />
<Container fluid/>
```

#### Row

```javascript
<Row />
```

#### Col

```javascript
<Col />
<Col xs={1}/>
<Col offset={{ xs: 1 }}/>
<Col order={{ xs: 1 }}/>
<Col order={{ xs: 'first', md: 'last' }}/>
```

### Customize

#### with props

```javascript
// grid.js
import {
  Container as ReactContainer,
  Row as ReactRow,
  Col as ReactCol
} from 'react-grid';

const styles = {
  breakpoints: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
  containerMaxWidths: { sm: 540, md: 720, lg: 960, xl: 1140 },
  columns: 12,
  gutterWidth: 30
};

export const Container = props => <ReactContainer {...props} styles={styles} />;
export const Row = props => <ReactRow {...props} styles={styles} />;
export const Col = props => <ReactCol {...props} styles={styles} />;

// app.js
import { Container, Row, Col } from './grid';

const App = () => (
  <Container>
    <Row>
      <Col />
      <Col />
    </Row>
  </Container>
);
```

### breakpoints

react-grid implments breakpoint functions similar to bootstrap grid:

- mediaBreakpointUp
- mediaBreakpointDown
- mediaBreakpointBetween
- mediaBreakpointOnly

```javascript
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { mediaBreakpointUp } from 'react-grid';

const App = () => (
  <div
    css={css`
      ${mediaBreakpointUp('sm')} {
        font-size: 12px;
      }
    `}
  />
);

// or

const App = () => (
  <div
    css={{
      [mediaBreakpointUp('sm')]: {
        fontSize: 12
      }
    }}
  />
);
```

### License

MIT
