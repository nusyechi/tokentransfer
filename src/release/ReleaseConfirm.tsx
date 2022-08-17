import React, { FunctionComponent, useCallback, useState } from "react";
import { Button } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";


export const ReleaseConfirm = () => {
  return (
    <>
      <div className="phoneview">
        <div className="row">
		  <div className="col-6 divcenter"><Link className="nav-link" to="/mintform">Mint</Link></div>
		  <div className="col-6 divcenter"><Link className="nav-link activelink" to="/releaseform">Release</Link></div>
		</div>
		<br/>
		<a href="/mintcheck" className="btn btn-primary" type="submit">Release</a>
	  </div>
    </>
  );
};

