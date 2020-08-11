import React from 'react';

export default function Form() {
	return (
		<form>
			<div class="box form-field">
				<label> INPUT </label>
				<textarea rows="8" value="This is where the user enters the message" />
			</div>
			<div class="box">
				<strong> OUTPUT </strong>
				<pre>This is where the reversed string should be displayed</pre>
			</div>
		</form>
	);
}
