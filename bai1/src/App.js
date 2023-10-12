import "./App.css";
import { GlobalClass } from "./GlobalClass";
import Card2 from "./component/card/Card2";

import CardList from "./component/card/CardList";
import { ThemeProvider } from "styled-components";

//JSX: JavaScrip XML
//ES6

/**
 * element =<div id="root">Hello World </div> :JSX
 * element = React.CreateElement('div',{id:'root'},'Hello World')
 * function CreateElement (ElementType, props , ...children)
 * ElementType: 'div','p','span'
 * props: attribute sử dụng trong HTML, className, id, src..
 * ...children:
 * element2= (<div>
 * <span>Hello</span>
 * <span>World</span>
 * </div>)
 *
 * element2= React.CreateElement('div'
 * {children:[React.CreateElement('span',null,'Hello'), ,
 * React.CreatElement('span',null,'World')
 * ]
 *
 *mai 10/10 hoc tiep
 * })
 */
const theme = {
  color: {
    blue: "#2979ff",
  },
  orange: "#ffa400",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CardList>
        <Card2 secondary={true}></Card2>
      </CardList>
    </ThemeProvider>
  );
}

export default App;
