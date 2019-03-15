# react-grid

[![npm](https://img.shields.io/npm/v/react-grid.svg)](https://www.npmjs.com/package/react-grid)
[![npm](https://img.shields.io/npm/dm/react-grid.svg)](https://www.npmjs.com/package/react-grid)
[![Build Status](https://travis-ci.org/wangzuo/react-grid.svg?branch=master)](https://travis-ci.org/wangzuo/react-grid)
[![codecov](https://codecov.io/gh/wangzuo/react-grid/branch/master/graph/badge.svg)](https://codecov.io/gh/wangzuo/react-grid)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

React grid component

Thanks to [svenanders](https://github.com/svenanders) for the npm handle, the original react-grid project can be found [here](https://github.com/svenanders/react-grid).

### Installation

```sh
npm install react-grid --save
yarn add react-grid
```

### Demo

[https://code.swiftcarrot.com/react-grid](https://code.swiftcarrot.com/react-grid)

### Basic Usage

```javascript
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

#### with emotion-theming

```javascript
// grid.js
import { withTheme } from 'emotion-theming';
import {
  Container as ReactContainer,
  Row as ReactRow,
  Col as ReactCol
} from 'react-grid';

export const Container = withTheme(ReactContainer);
export const Row = withTheme(ReactRow);
export const Col = withTheme(ReactCol);

// app.js
import { ThemeProvider } from 'emotion-theming';
import { Container, Row, Col } from './grid';

const theme = {
  gridBreakpoints: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
  containerMaxWidths: { sm: 540, md: 720, lg: 960, xl: 1140 },
  gridColumns: 12,
  gridGutterWidth: 30
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Row>
        <Col />
        <Col />
      </Row>
    </Container>
  </ThemeProvider>
);
```

#### with props

```javascript
// grid.js
import {
  Container as ReactContainer,
  Row as ReactRow,
  Col as ReactCol
} from 'react-grid';

const theme = {
  gridBreakpoints: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
  containerMaxWidths: { sm: 540, md: 720, lg: 960, xl: 1140 },
  gridColumns: 12,
  gridGutterWidth: 30
};

export const Container = props => <ReactContainer {...props} theme={theme} />;
export const Row = props => <ReactRow {...props} theme={theme} />;
export const Col = props => <ReactCol {...props} theme={theme} />;

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

## License

MIT
