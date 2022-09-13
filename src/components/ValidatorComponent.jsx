function PreviewValidate(contact, summary, eduArray, certArray, skillsArray) {
	console.log(contact, summary);
	let eduValid = false;
	let certValid = false;
	let skillValid = false;

	if (true) {
		let valid;

		for (let i = 0; i < eduArray.length; i++) {
			if (eduArray[i].editing) {
				valid = true;
			}
		}

		if (valid) {
			eduValid = true;
		}
	}
	if (true) {
		let valid;

		for (let i = 0; i < certArray.length; i++) {
			if (certArray[i].editing) {
				valid = true;
			}
		}

		if (valid) {
			certValid = true;
		}
	}
	if (true) {
		let valid;

		for (let i = 0; i < skillsArray.length; i++) {
			if (skillsArray[i].editing) {
				valid = true;
			}
		}

		if (valid) {
			skillValid = true;
		}
	}

	if (contact.editing) {
		return true;
	} else if (summary.editing) {
		return true;
	} else if (eduValid) {
		return true;
	} else if (certValid) {
		return true;
	} else if (skillValid) {
		return true;
	} else {
		console.log('inside if editing true');
		return false;
	}
}

export default PreviewValidate;
