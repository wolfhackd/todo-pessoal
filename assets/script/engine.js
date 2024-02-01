

function updateClock() {
    
    let clock = document.querySelector('#clock');

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    /* formatação e formação de hh/mm/aa */
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let timeString = `${hours}:${minutes}:${seconds}`;

    clock.innerHTML = timeString;

}
setInterval(updateClock, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('#task-create button');
    const taskNameInput = document.querySelector('#task-name');
    const taskBox = document.querySelector('#task-box');

    /* Adiciona uma nova tarefa quando o batão "Adicionar" é clicado */
    addButton.addEventListener('click', () =>{
        /* trim(), é um metodo que tira espaços em brancos
        e quebras de linha */
        const taskName = taskNameInput.value.trim();

        if (taskName !== "") {
            const newTask = document.createElement('div');
            newTask.classList.add("task");

            newTask.innerHTML = `
            <h4>${taskName}</h4>
                <div class="task-btn">
                    <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="complete-btn"><i class="fa-solid fa-check"></i></button>
                    <button class="remove-btn"><i class="fa-solid fa-skull-crossbones"></i></button>
                </div>
            `;
            taskBox.appendChild(newTask);
            taskNameInput.value = '';
        }else{
            alert('Por favor, insira o nome da tarefa.')
        }
    });

    /* evento para remover uma tarefa */
    taskBox.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')){
            const task = e.target.closest('.task');
            task.remove();
        }
    });

    /* evento de edição de tarefa */
    taskBox.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')){
            const task = e.target.closest('.task');
            const taskName = task.querySelector('h4').textContent;
            const taskNameTwoInput = document.querySelector('#task-name-two');
            const editTaskButton = document.querySelector('#edit');

            taskNameTwoInput.value = taskName;

            /* exibe campo de edição */
            document.getElementById('task-edit').style.display = 'flex';
            
            //Quando o botão "Concluir" é clicado
            editTaskButton.addEventListener('click', () =>{
                const editedTaskName = taskNameTwoInput.value.trim();
                if(editedTaskName !== '') {
                    task.querySelector('h4').textContent = editedTaskName;
                    taskNameTwoInput.value = '';
                    document.getElementById('task-edit').style.display = 'none';
                }else{
                    alert('Por favor, insira o nome da tarefa.');
                }
            });

            /*  Quando o botão "cancelar" é clicado */
            const cancelButton = document.getElementById('cancel');
            cancelButton.addEventListener('click', () =>{
                taskNameTwoInput.value = '';
                document.getElementById('task-edit').style.display = 'none';
            });
        }
    });

    //Evento para marcar uma tarefa como concluída
    taskBox.addEventListener('click', (e) => {
        if(e.target.classList.contains('complete-btn')){
            const task = e.target.closest('.task')
            task.classList.toggle('complete');
        }
    });
});



updateClock();

