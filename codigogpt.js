document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('#task-create button');
    const taskNameInput = document.querySelector('#task-name');
    const taskBox = document.querySelector('#task-box');

    // Adiciona uma nova tarefa quando o botão "Adicionar" é clicado
    addButton.addEventListener('click', function() {
        const taskName = taskNameInput.value.trim();

        if (taskName !== '') {
            const newTask = document.createElement('div');
            newTask.classList.add('task');

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
        } else {
            alert('Por favor, insira o nome da tarefa.');
        }
    });

    // Evento para remover uma tarefa
    taskBox.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-btn')) {
            const task = event.target.closest('.task');
            task.remove();
        }
    });

    // Evento para editar uma tarefa
    taskBox.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit-btn')) {
            const task = event.target.closest('.task');
            const taskName = task.querySelector('h4').textContent;
            const taskNameTwoInput = document.querySelector('#task-name-two');
            const editTaskButton = document.querySelector('#edit');

            taskNameTwoInput.value = taskName;

            // Exibe o campo de edição
            document.getElementById('task-edit').style.display = 'block';

            // Quando o botão "Concluir" é clicado
            editTaskButton.addEventListener('click', function() {
                const editedTaskName = taskNameTwoInput.value.trim();
                if (editedTaskName !== '') {
                    task.querySelector('h4').textContent = editedTaskName;
                    taskNameTwoInput.value = '';
                    document.getElementById('task-edit').style.display = 'none';
                } else {
                    alert('Por favor, insira o nome da tarefa.');
                }
            });

            // Quando o botão "Cancelar" é clicado
            const cancelButton = document.querySelector('#cancel');
            cancelButton.addEventListener('click', function() {
                taskNameTwoInput.value = '';
                document.getElementById('task-edit').style.display = 'none';
            });
        }
    });

    // Evento para marcar uma tarefa como concluída
    taskBox.addEventListener('click', function(event) {
        if (event.target.classList.contains('complete-btn')) {
            const task = event.target.closest('.task');
            task.classList.toggle('completed');
        }
    });
});
