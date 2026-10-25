import Welcome from "./s1-fundamentals/Q1-Welcome";
import ComponentsDemo from "./s1-fundamentals/Q2-Components";
import Header from "./s1-fundamentals/Header";
import Content from "./s1-fundamentals/Content";
import Footer from "./s1-fundamentals/Footer";
import ChangeHeading from "./s1-fundamentals/Q3-ChangeHeading";
import Counter from "./s1-fundamentals/Q4-Counter";   
import VarExample from "./s2-variables/Q5-Var";
import LetExample from "./s2-variables/Q6-Let";
import ConstExample from "./s2-variables/Q7-Const";
import ScopeExample from "./s2-variables/Q8-Scope";
import ConstArrayExample from "./s2-variables/Q9-ConstArray";
import FruitsExample from "./s3-arrays/Q10-Fruits";
import PopExample from "./s3-arrays/Q11-Pop";
import ShiftUnshiftExample from "./s3-arrays/Q12-ShiftUnshift";
import MapExample from "./s3-arrays/Q13-Map";




function App() {
  return (
    <div>
      <Header />
      <h1>React Practical Assignment</h1>
      <Content />

      <section>
        <h2>Question 1</h2>
        <Welcome />
      </section>
      <hr />

      <section>
        <h2>Question 2</h2>
        <ComponentsDemo />
      </section>
      <hr />

      <section>
        <h2>Question 3</h2>
        <ChangeHeading />
      </section>
      <hr />

      <section>
        <h2>Question 4</h2>
        <Counter />
      </section>
      <hr />

      <section>
        <h2>Question 5</h2>
        <VarExample />
      </section>
      <hr />
      <section>
        <h2>Question 6</h2>
        <LetExample />
      </section>
      <hr />

      <section>
        <h2>Question 7</h2>
        <ConstExample />
      </section>
      <hr />

      <section>
        <h2>Question 8</h2>
        <ScopeExample />
      </section>
      <hr />

      <section>
        <h2>Question 9</h2>
        <ConstArrayExample />
      </section>
      <hr />

      <section>
        <h2>Question 10</h2>
        <FruitsExample />
      </section>
      <hr />

      <section>
        <h2>Question 11</h2>
        <PopExample />
      </section>
      <hr />

      <section>
        <h2>Question 12</h2>
        <ShiftUnshiftExample />
      </section>
      <hr />

      <section>
        <h2>Question 13</h2>
        <MapExample />
      </section>
      <hr />



      <Footer />
    </div>
  );

}

export default App;


