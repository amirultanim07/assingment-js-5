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
        button.disabled = true;
        const taskCount = document.getElementById('task-count');
        let countTask = parseInt(taskCount.innerText);
        const taskPlus = document.getElementById('task-plus');
        let plusTask = parseInt(taskPlus.innerText);
        if (!isNaN(countTask)) {
            const sum = countTask - 1;
            document.getElementById('task-count').innerText = sum;
        }
        if (!isNaN(plusTask)) {
            const sum = plusTask + 1;
            document.getElementById('task-plus').innerText = sum;
        }
        const container = document.createElement('p');
        container.textContent = 'You have completed the task Fix Mobile Button Issue at 12:10:20 AM'
        const newText = document.getElementById('clear-container');
        container.classList.add('bg-indigo-50', 'p-3', 'rounded-lg', 'mt-8');
        if (container) {
            newText.appendChild(container)
        }
        else {
            alert('Do not excess');
        }
        document.getElementById('btn-clear').addEventListener('click', function () {
            container.remove();
        })
    })
}
document.getElementById('btnTask-6').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Congrats!! You Have Completed all The Current Task');
})

const currentDate = new Date();

const formattedDate = currentDate.toDateString();

document.getElementById("date-current").innerText = formattedDate;

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color on button click
function changeBackgroundColor() {
    document.documentElement.style.backgroundColor = getRandomColor();
}

