const viewProjectBtns = document.getElementsByClassName('project-button')


const projectBtnClicked = () => {
    window.location.href =  'project-view.html'
}

Array.prototype.forEach.call(viewProjectBtns ,btn => {
    btn.addEventListener('click', projectBtnClicked);
})