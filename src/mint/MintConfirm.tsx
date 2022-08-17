import React, { FunctionComponent, useCallback, useState } from "react";
import { Button } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";


export const MintConfirm = () => {
  return (
    <>
      <div className="phoneview">
        <div className="row">
		  <div className="col-6 divcenter"><Link className="nav-link activelink" to="/mintform">Mint</Link></div>
		  <div className="col-6 divcenter"><Link className="nav-link" to="/releaseform">Release</Link></div>
		</div>
		<br/>
		<p>
		You have transfered 0.5 ETH, please click below button to mint wETH.
		</p>
		<a href="/mintcheck" className="btn btn-primary" type="submit">Mint wETH</a>
	  </div>
    </>
  );
};

