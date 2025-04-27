//your JS code here. If required.
const firstName = document.getElementById('name_f')
const lastName = document.getElementById('name_l')
const phoneNum = document.getElementById('phone')
const email = document.getElementById('email')
const submitBtn = document.getElementById('submit')

function handleClick(){
	alert(`${firstName.name} ${firstName.value}`)
	alert(`${lastName.name} ${lastName.value}`)
	alert(`${phoneNum.name} ${phoneNum.value}`)
	alert(`${email.name} ${email.value}`)
	
}
submitBtn.addEventListener('click', handleClick)