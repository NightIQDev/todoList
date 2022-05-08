const form = document.querySelector('form')

const contDad = document.querySelector('.deb-cont')





form.addEventListener('submit', (e)=>{
	e.preventDefault()
	const div = document.createElement('div')
	div.className = 'div-go'
	const value = document.querySelector('.text-int').value
	const debLis = document.createElement('p')
	debLis.className = 'deblis'
	const btnOk = document.createElement('button')
	btnOk.className = 'btnOk'
	const btnNoOk = document.createElement('button')
	btnNoOk.className = 'btnNoOk'
	debLis.innerHTML = `
		<p class = "deb">${value}</p>
	`
	btnOk.innerHTML = '<i class="fas fa-check"></i>'
	btnNoOk.innerHTML = '<i class="fas fa-times"></i>'
	contDad.appendChild(div)
	div.appendChild(debLis)
	div.appendChild(btnOk)
	div.appendChild(btnNoOk)

	btnOk.addEventListener('click', function () {
		debLis.className = ' good'
		setTimeout(() =>{
			div.remove()
		}, 2000)
	})


	btnNoOk.addEventListener('click', function () {
		debLis.className = ' good2'
		setTimeout(() =>{
				div.remove()
			}, 1000)
	})

})



