import { useState } from "react";
import { Button } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

export const ReleaseForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMobileNumber("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
	<>
      <div className="phoneview">
	    <div className="row">
		  <div className="col-6 divcenter"><Link className="nav-link" to="/mintform">Mint</Link></div>
		  <div className="col-6 divcenter"><Link className="nav-link activelink" to="/releaseform">Release</Link></div>
		</div>
		<br/>
		<p>Select an asset and destination chain, and input amount to release.</p>
		<div>
		<div className="row selectchaindiv">
		  <div className="col-4"><span>Release</span></div>
		  <div className="col-6">
		  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root jss73" focusable="false" viewBox="-25.400000000000002 -25.400000000000002 304.8 304.8" aria-hidden="true"><path d="M128.513 256c70.695 0 128-57.306 128-128s-57.305-128-128-128c-70.694 0-128 57.306-128 128s57.306 128 128 128z" fill="#8247E5"></path><path d="M174.604 94.869c-3.276-1.994-7.487-1.994-11.23 0l-26.201 16.452-17.78 10.469-25.734 16.451c-3.275 1.994-7.486 1.994-11.229 0l-20.119-12.962c-3.275-1.994-5.614-5.982-5.614-10.469V89.884c0-3.989 1.871-7.977 5.614-10.47l20.12-12.463c3.274-1.994 7.485-1.994 11.228 0l20.12 12.962c3.275 1.994 5.614 5.982 5.614 10.47v16.451l17.78-10.968v-16.95c0-3.988-1.872-7.977-5.615-10.47l-37.43-23.43c-3.276-1.994-7.487-1.994-11.23 0l-38.366 23.93c-3.743 1.993-5.615 5.982-5.615 9.97v46.862c0 3.988 1.871 7.976 5.615 10.469l37.898 23.431c3.275 1.994 7.486 1.994 11.23 0l25.733-15.953 17.78-10.968 25.733-15.953c3.276-1.994 7.487-1.994 11.23 0l20.119 12.464c3.275 1.994 5.614 5.982 5.614 10.469v24.926c0 3.989-1.871 7.977-5.614 10.469l-19.651 12.464c-3.276 1.994-7.487 1.994-11.23 0l-20.119-12.464c-3.275-1.994-5.614-5.982-5.614-10.469V148.71l-17.78 10.968v16.452c0 3.988 1.872 7.976 5.615 10.469l37.898 23.431c3.276 1.994 7.487 1.994 11.23 0l37.898-23.431c3.275-1.994 5.615-5.983 5.615-10.469v-47.361c0-3.988-1.872-7.976-5.615-10.469l-37.898-23.431z" fill="#fff"></path></svg>
		  <span>Polygon</span></div>
		  <div className="col-2">
		  <div className="dropdown">
			  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				
			  </button>
			  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<a className="dropdown-item" href="#">Action</a>
				<a className="dropdown-item" href="#">Another action</a>
			  </div>
			</div>
		  </div>
		</div>
		</div>
		<br/>
		<div>
		<div className="row selectchaindiv">
		  <div className="col-4"><span>To</span></div>
		  <div className="col-6">
		  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root jss73" focusable="false" viewBox="-25.400000000000002 -25.400000000000002 304.8 304.8" aria-hidden="true"><path d="M128 256c70.694 0 128-57.306 128-128S198.694 0 128 0 0 57.306 0 128s57.306 128 128 128z" fill="#627EEA"></path><path d="M128.108 25.6L69.12 129.898l58.988-28.567V25.6z" fill="#fff"></path><path d="M128.108 101.332L69.12 129.898l58.988 37.162v-65.728zM187.108 129.898L128.109 25.6v75.731l58.999 28.567z" fill="#C0CBF6"></path><path d="M128.109 167.06l58.999-37.162-58.999-28.566v65.728z" fill="#8197EE"></path><path d="M69.12 141.823l58.988 88.577v-51.439L69.12 141.823z" fill="#fff"></path><path d="M128.109 178.961V230.4l59.032-88.577-59.032 37.138z" fill="#C0CBF6"></path></svg>
		  <span>Ethereum</span></div>
		  <div className="col-2">
		  <div className="dropdown">
			  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				
			  </button>
			  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<a className="dropdown-item" href="#">Action</a>
				<a className="dropdown-item" href="#">Another action</a>
			  </div>
			</div>
		  </div>
		  
		</div>
		</div>
		<br/>
		<div className="row">
		  <div className="col-4">Amount</div>
		  <div className="col-8">
		  <input className="form-control"
			  type="text"
			  placeholder="0"
			/>
		  </div>
		</div>
		<br/>
		<a href="/releasecheck" className="btn btn-primary" type="submit">Release</a>
		{/*
		<form onSubmit={handleSubmit}>
			<input className="form-control"
			  type="text"
			  value={name}
			  placeholder="Name"
			  onChange={(event) => setName(event.target.value)}
			/>
			<input className="form-control"
			  type="text"
			  value={email}
			  placeholder="Email"
			  onChange={(event) => setEmail(event.target.value)}
			/>
			<input className="form-control"
			  type="text"
			  value={mobileNumber}
			  placeholder="Mobile Number"
			  onChange={(event) => setMobileNumber(event.target.value)}
			/>
			<br/>

			<button className="btn btn-primary" type="submit">Transfer</button>

			<div className="message">{message ? <p>{message}</p> : null}</div>
		</form>*/}
	  </div>
    </>
  );
}

