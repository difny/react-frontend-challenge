import React from 'react';

export default function Form() {
	return (
		<form>
			<div className="box form-field">
				<label> INPUT </label>
				<textarea rows="8" value="This is where the user enters the message" />
			</div>
			<div className="box">
				<strong> OUTPUT </strong>
				<pre>This is where the reversed string should be displayed</pre>
			</div>
		</form>
	);
}
