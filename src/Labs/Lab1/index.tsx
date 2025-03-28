export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML H3</h3>
            <div id="wd-h-tag">
                <h4>Heading H4</h4>
            </div>
            <div id="wd-p-tag">
                <p id="wd-p-1"> test first para</p>
                <p id="wd-p-2"> test second para</p>
                <p id="wd-p-3"> test third para</p>
            </div>
            <div id="wd-lists">
                <h4>lists H4</h4>
                <h5>ordered list</h5>
                <ol id='wd-test ordered lists'>
                    <li>1. list test 1</li>
                    <li>2. list test 2</li>
                    <li>3. list test 3</li>
                    <li>4. list test 4</li>
                </ol>
                my favorite things
                <ol id="wd-my-favarite-things">
                    <li>play games</li>
                    <li>watch movies</li>
                    <li>listen to music</li>
                </ol>

            </div>
            <div id="wd-table">
                <h4>Table H4</h4>
                <table border={10} width={500}>
                    <thead>
                        <tr>
                            <th align='center'>name </th>
                            <th align='center'>age </th>
                            <th align='center'>date</th>
                            <th align='right'>grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>john</td>
                            <td>25</td>
                            <td>2021-01-01</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>mary</td>
                            <td>22</td>
                            <td>2021-01-01</td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>tom</td>
                            <td>28</td>
                            <td>2021-01-01</td>
                            <td>70</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>
                                Average age
                            </td>
                            <td>25</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div id="wd-images">
                <h4>imageg tage</h4>
                Loading an image from internet<br />
                <img id='wd-starship' width={400}
                    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-ga
                p2.jpg" alt=""/>
            </div>
            <div id='wd-textfield'>
                <h4>Form test</h4>
                <label htmlFor="wd-test-username">username:</label>
                <input id="wd-test-username" /> <br />
                <label htmlFor="wd-test-password">passwprd</label>
                <input type="password" id='wd-test-password' value='123' />
                <br />
                <label htmlFor="wd-firstname">First name</label>
                <input type="text" id='wd-firstname' title="axel" /> <br />
                <label htmlFor="lastname">Last name</label>
                <input type="text" id='lastname' title="axel" placeholder="aoligei" /> <br />
            </div>
            <div id='wdt-textarea'>
                <h4>textarea</h4>
                <textarea id='wd-test-textarea' cols={50} rows={10} placeholder="null" title='input sth'></textarea>
            </div>
            <div id="wd-buttons">
                <h4>file upload</h4>
                <input id="wd-upload" type="file" />
                <br />
                <input type='radio' name='name1' value='option1' /> option1
                <input type='radio' name='name1' value='option2' /> option2
                <div id='wd-checkbox'>
                    <input type='checkbox' name='name2' value='optiona' /> optiona
                    <input type='checkbox' name='name2' value='optionb' /> optionb
                </div>
                <div id='wd-dropdown'>
                    <select id='wd-test-select'>
                        <option value='1'>option1</option>
                        <option value='2'>option2</option>
                        <option value='3'>option3</option>
                    </select>
                </div>
                <div id='wd-rating'>
                    <label htmlFor="wd-rating">rating</label>
                    <input type='range' id='wd-rating' placeholder='doe' min={0} max={10} step={1} />
                </div>
                <div id='wd-date'>
                    <label htmlFor="wd-date">date</label>
                    <input type='date' id='wd-date' placeholder='2022-02-22' />
                </div>

            </div>
            <h4>Anchor tag</h4>
            Please
            <a href="https://www.lipsum.com">click here</a>
            to get dummy text<br/>
        </div>
    );
}