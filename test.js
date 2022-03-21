const app = document.querySelector('.App');
const inpLanguage = document.querySelector('.SearchInput__input');

inpLanguage.addEventListener('input', (e) => {
    if(!!e.target.value) getLanguage(e.target.value);
});

async function getLanguage(keyword) {
    
    const res = await fetch(`https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=${keyword}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    if(!!data[0]) {
        const suggestion = document.createElement('div');
        suggestion.classList.add('Suggestion');
        const ul = document.createElement('ul');
    
        data.forEach((v, i) => {
            const li = document.createElement('li');
            const span = document.createElement('span');
            if(i === 0) {
                li.classList.add('Suggestion__item--selected');
            }
            span.textContent = v;
            li.appendChild(span);
            span.classList.add('Suggestion__item--matched');
            ul.appendChild(li);
            li.addEventListener('click', () => {
                const selected = document.querySelector('.SelectedLanguage ul');
                console.log(document.querySelector('.SelectedLanguage ul').childNodes.length);
                // alert(li.textContent);
                if(selected.childNodes.length > 5) {
                    selected.removeChild(document.querySelector('.SelectedLanguage ul li'));
                }
                const languageLi = document.createElement('li');
                languageLi.textContent = li.textContent;
                document.querySelector('.SelectedLanguage ul').appendChild(languageLi);
            });
        });
        suggestion.appendChild(ul);
        app.appendChild(suggestion);
    }
}

// data : ['Java', 'JavaFX Script', 'JavaScript', 'Join Java']
