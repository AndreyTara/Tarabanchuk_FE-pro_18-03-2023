const voting = document.querySelector('#wrapper');
const applicants = ['😍', '😎', '😂', '😏', '👽'];
const result = new Array(applicants.length).fill(0);
for (let i = 0; i < applicants.length; i++) {
	const applicant = document.createElement('div');
	applicant.textContent = applicants[i];
	applicant.setAttribute('class', 'applicant');
	const voices = document.createElement('div');
	voices.textContent = result[i];
	voices.setAttribute('class', 'voices');
	applicant.appendChild(voices);
	voting.appendChild(applicant);

	applicant.addEventListener('click', (event) => {
		// console.log(event.target.classList)
		if (event.target.classList.value === 'applicant') {
			result[i]++;
			voices.innerHTML = result[i];
		}
	})
}
