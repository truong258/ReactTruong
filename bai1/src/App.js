import "./App.css";

import Card from "./component/card/Card";
import CardList from "./component/card/CardList";

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

function App() {
  return (
    <div>
      <CardList>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList>
    </div>
  );
}

export default App;
