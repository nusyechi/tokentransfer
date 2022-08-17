import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WalletConnect } from "./wallet/WalletConnect";
import { MintForm } from "./mint/MintForm";
import { MintCheck } from "./mint/MintCheck";
import { MintConfirm } from "./mint/MintConfirm";
import { MintProcess } from "./mint/MintProcess";
import { ReleaseProcess } from "./release/ReleaseProcess";
import { ReleaseForm } from "./release/ReleaseForm";
import { ReleaseCheck } from "./release/ReleaseCheck";
import { ReleaseConfirm } from "./release/ReleaseConfirm";

  
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <div>
	<h2>ChainBridge</h2>
	<WalletConnect />
  </div>
  <Router>
  <Routes>
      <Route path="/" element={<MintProcess />} />
	  <Route path="/mintform" element={<MintForm />} />
	  <Route path="/mintcheck" element={<MintCheck />} />
	  <Route path="/mintconfirm" element={<MintConfirm />} />
	  <Route path="/releaseform" element={<ReleaseForm />} />
	  <Route path="/releasecheck" element={<ReleaseCheck />} />
	  <Route path="/releaseconfirm" element={<ReleaseConfirm />} />
  </Routes>
  </Router>
  </>
);

