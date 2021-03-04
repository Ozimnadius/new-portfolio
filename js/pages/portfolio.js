//portfolio.js
(function (){
    function renderList(data) {

        let items = data.map(function (i) {
            return `<div class="portfolio__item" data-type="${i.type}">
                <div class="portfolio__img">
                    <img class="potrfolio__img-img" src="${i.thumb}" alt="lorem"/>
                </div>
                <div class="portfolio__links">
                    <a class="portfolio__view portfolio__link" href="${i.img}" target="_blank">
                         View Project
                    </a>
                     <a class="portfolio__link portfolio__go" href="${i.link}" target="_blank">
                        Go to project
                     </a>
                </div>
            </div>`;
        });

        return `<div class="portfolio__grid">
            ${items.join('')}
                </div>`;


    }

    fetch('/data/data.json')
        .then(response => response.json())
        .then(function (data){
            document.querySelector('.portfolio__grid').outerHTML = renderList(data.list);
        });

    let filter = document.querySelector('.filter');

    filter.addEventListener('click', function (e) {
        e.preventDefault();
        let target = e.target;


        if (target.classList.contains('filter__item')) {
            let list = document.querySelectorAll('.portfolio__item'),
                type = target.dataset.type;

            filter.querySelector('.active').classList.remove('active');
            target.classList.add('active');


            list.forEach(function (i) {

                i.classList.remove('hidden');
                if (i.dataset.type != type && type != 'all') {
                    i.classList.add('hidden');
                }

            });

        }
    });
})();