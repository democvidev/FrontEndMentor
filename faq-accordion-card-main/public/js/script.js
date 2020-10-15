const answersData = [
    {
        0: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    },
    {
        1: 'No more than 2GB. All files in your account must fit your allotted storage space.'
    },
    {
        2: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    },
    {
        3: 'Yes! Send us a message and we’ll process your request no questions asked.'
    },
    {
        4: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
    }
];

const textElements = document.querySelectorAll('.card-list__text--display');
const blocEl = document.getElementById('bloc');

showAnswer();

function showAnswer() {
    textElements.forEach((questEl) => {
        questEl.onclick = function changeContent() {

            const spanEl = questEl.children[0].id;
            questEl.classList.toggle('bold');
            questEl.children[1].classList.toggle('rotate');

            if (questEl.nextElementSibling == null) {
                const answer = document.createElement('p');
                answer.classList.toggle('card-list__text--hidden');
                answer.innerHTML = `${answersData[spanEl][spanEl]}`;
                questEl.parentNode.appendChild(answer);
            } else {
                questEl.nextElementSibling.remove();
            }
        };

        questEl.onmouseover = function moveBloc() {
            blocEl.classList.toggle('move');
        }
    });
}





