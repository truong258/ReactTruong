import logo from "./logo.svg";
import "./App.css";
import Toggle from "./components/state/Toggle";
import Counter from "./components/counter/Counter";

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
      <Toggle></Toggle>
      <Counter></Counter>
    </div>
  );
}

export default App;
