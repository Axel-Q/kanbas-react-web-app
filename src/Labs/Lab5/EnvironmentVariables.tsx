import React from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function EnvironmentVariables() {
    console.log("Remote Server:", REMOTE_SERVER); // Log to verify
  return (
    <div id="wd-environment-variables">
      <h3>Environment Variables</h3>
      <p>Remote Server: {REMOTE_SERVER}</p><hr/>
    </div>
  );
}
