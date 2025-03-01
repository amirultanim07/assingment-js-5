const main = document.getElementById('Discover-main');
main.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'main.html';
});

const buttons = document.querySelectorAll('.btn-task');
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Board Updated Successfully');
        const taskCount = document.getElementById('task-count');
        let countTask = parseInt(taskCount.innerText);
        const taskPlus = document.getElementById('task-plus');
        if (!isNaN(countTask)) {
            const sum = countTask - 1;
            document.getElementById('task-count').innerText = sum;
        }
    })
}

