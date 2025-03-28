import React, {useState} from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function QueryParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");
    return(
        <div id="wd-query-parameters">
            <h3>Query Parameters</h3>
            <input id="wd-query-parameter-a"
                   className="form-control mb-2"
                   value={a} type="number"
                   onChange={(e) => setA(e.target.value)}/>
            <input id="wd-query-parameter-b"
                   className="form-control mb-2"
                   value={b} type="number"
                   onChange={(e) => setB(e.target.value)}/>
            <a id="wd-query-parameter-add"
               className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
                Add {a} + {b}
            </a><br/>
            <a id="wd-query-parameter-subtract"
                className="btn btn-danger"
               href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
                Substract {a} - {b}
            </a><br/>
            <a id="wd-query-parameter-divide"
               className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
                divide {a} / {b}
            </a><br/>
            <a id="wd-query-parameter-multiply"
               className="btn btn-danger"
               href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
                multiply {a} - {b}
            </a><br/>
            <hr/>
        </div>)
}
