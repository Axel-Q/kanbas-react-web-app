export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" />
            <br />
            <br />
            <textarea id="wd-description" rows={20} >
                The assignment is available online
                Submit a link to the landing page of
                your web application running on Netlify. The landing
                page should include the follwing: your full
                name and section links to the Kanbas application
                Links to all relevant source code repositories
                The Kanbas application should include a link
                to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                            <option value="Decimal">Decimal</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <td />
                        <td>
                            <tr>
                                Online entry options:
                            </tr>
                            <input type="checkbox" name="Submission Type" id="wd-submission-type" />
                            <label htmlFor="wd-submission-type">Text Entry</label><br />
                            <input type="checkbox" name="Submission Type" id="wd-submission-type" />
                            <label htmlFor="wd-submission-type">Website URL</label><br />
                            <input type="checkbox" name="Submission Type" id="wd-submission-type" />
                            <label htmlFor="wd-submission-type">Media Recordings</label><br />
                            <input type="checkbox" name="Submission Type" id="wd-submission-type" />
                            <label htmlFor="wd-submission-type">Student Annotation</label><br />
                            <input type="checkbox" name="Submission Type" id="wd-submission-type" />
                            <label htmlFor="wd-submission-type">File Uploads</label><br />
                        </td>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assigned-to">Assigned To</label>
                    </td>
                    <td>
                        <input id="wd-assigned-to" value="everyone" />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due Date</label>
                    </td>
                    <td>
                        <input id="wd-due-date" value="2021-09-05" />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from">Available From</label><br />
                        <input type="date" id="wd-available-from" value="2024-05-06" /><br />
                    </td>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-to">Available To</label><br />
                        <input type='date' id="wd-available-to" value="2024-05-20" />
                    </td>
                </tr>
            </table>
            <hr />
            <table>
            </table>
            <tr>
            <td></td>
            <td align="center" valign="top" >
              <button type="button">Cancel</button>
              <button type="button">Save</button>
            </td>
          </tr>
        </div>
    );
}