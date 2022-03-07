var fileUpload = document.querySelector(".upload");

fileUpload.addEventListener("dragover", function() {
  this.classList.add("drag");
  this.classList.remove("drop", "done");
});

fileUpload.addEventListener("dragleave", function() {
  this.classList.remove("drag");
});

fileUpload.addEventListener("drop", start, false);
fileUpload.addEventListener("change", start, false);

function start() { 
	console.log($(".drop-here").val())
	console.log("upload")
	var input = document.querySelector('input[type="file"]')
	var data = new FormData()
	data.append('file', input.files[0])
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "text/csv");

	var requestOptions = {
		method: 'PUT',
		headers: myHeaders,
		body: data,
		redirect: 'follow'
	};
	
		fetch("https://api.amazon-sales-estimator.com/amazon-sales-estimator/myobject.csv", requestOptions)
		.then(response => response.text())
		.then(result => {console.log(result); this.classList.add("done")})
		.catch(error => console.log('error', error));
	
  this.classList.remove("drag");
  this.classList.add("drop");
}