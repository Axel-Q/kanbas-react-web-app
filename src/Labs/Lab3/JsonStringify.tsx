export default function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    const boolean1 = true;
    return (
      <div className="wd-json-stringify">
        <h3>JSON Stringify</h3>
        squares = {JSON.stringify(squares)} <br/>
        boolean1 = {JSON.stringify(boolean1)}
        <hr />
      </div>
    );
  }
  