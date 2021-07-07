
const issModal =  document.querySelector('.iss-modal');
const modalCon =  document.querySelector('.modal-con');
const description =  document.querySelector('#description');
const form = document.querySelector('#form');
const confModal = document.querySelector('.conf-modal');
const conf = document.querySelector('.conf');

function closeModal () { 
    issModal.style.display = 'none';
    clearForm();
}

function openModal () { 
    issModal.style.display = 'flex';
}

function clearDesc (){
    description.value = "";
}

function clearForm () {
    form[0].value = "";
    form[1].value = "";
    form[2].checked = false;
    form[3].checked = false;
    form[4].checked = false;
    form[5].value = "";
}

function openConf () {
    confModal.style.display = 'block';
    confModal.style.transform = "translateX(0)";
}

function closeConf () {
    confModal.style.transform = "translateX(110%)";
}

function handleSubmit () {
     const name = form[0].value;
     const email = form[1].value;
     const connectionIssue = form[2].checked;
     const apiIssue = form[3].checked;
     const otherIsuue = form[4].checked;
     const descriptionVal = form[5].value;

     const data = {
        name,
        email,
        connectionIssue,
        apiIssue,
        otherIsuue,
        descriptionVal
     };

     console.log(data);
     closeModal();
     openConf();
     clearForm();
}


window.addEventListener('click', function(e) {
    const allModals = document.querySelectorAll('.iss-modal');
    if (!e.path.some(x => x.className && x.className.includes('modal-con'))) {
      allModals.forEach(x => x.style.display = 'none');
    }
  }, true);














document.getElementById('open-form').addEventListener('click', 
function() {
    document.querySelector('.iss-modal').style.display = 'flex';
});







