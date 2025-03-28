import { Routes, Route, Link } from "react-router-dom";
import AddPathParameters from "./AddPathParameters";
export default function PathParameters() {
  return (
    <div id="wd-path-parameters">
      <h2>Path Parameters</h2>
      <Link to="/Labs/Lab3/aoligei/1/2">1 + 2</Link> <br />
      <Link to="/Labs/Lab3/aoligei/3/6">3 + 6</Link>
      <Routes>
        <Route path="aoligei/:a/:b"
               element={<AddPathParameters />} />
      </Routes>
    </div>
  );
}
