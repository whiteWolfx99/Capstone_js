import './asset/css/style.css';
// base class and api call
import Main from './main.js';
import MakeApicall from './Todo.js';
// Likes api and class
import LikesApi from './Likes/LikesApi.js';
import Likeclass from './Likes/Likeclass.js';

// container
const scorelist = document.querySelector('.scorelist');
// MakeApicall to object
const api = new MakeApicall();
// Like class to object
const apilike = new LikesApi();

const refresher = async () => {
  scorelist.innerHTML = '';
  // main api call
  const res = await api.getmethod();
  const main = new Main(res);
  // api likes
  const reslike = await apilike.getmethod();
  const mainlike = new Likeclass(reslike);

  for (let i = 0; i < mainlike.LikesArray.length; i += 1) {
    main.username.forEach((usernames) => {
      if (usernames.id < 7) {
        if (mainlike.LikesArray[i].item_id === usernames.id) {
          scorelist.innerHTML += `

  <div class=outline>
  <div class="score">
  <p class="paragraph_url"><span>${
  usernames.id === 1
    ? 'First'
    : usernames.id === 2
      ? 'Second'
      : usernames.id === 3
        ? 'Third'
        : usernames.id === 4
          ? 'Fourth'
          : usernames.id === 5
            ? 'Fifth'
            : usernames.id === 6
              ? 'Sixth'
              : ''
}

  </span><span>Blog</span></p>
  </div>
   <div  class="title_url"> 
    <p class="paragraph_url"><span>${usernames.name}</span></p>
    <p class="paragraph_url"><span>Likes: ${
  mainlike.LikesArray[i].likes
}</span></p>
   </div>
   <div class="like_comment">
   <button class="likes">Like</button>
     <button class="comment">Comment</button>
   </div>

   <div class="like_comment">
   <button class="Reservations">Reservations</button>
   </div>
  </div>

  `;
        }
      }
    });
  }

  for (let i = 0; i < document.querySelectorAll('.likes').length; i += 1) {
    document.querySelectorAll('.likes')[i].addEventListener('click', () => {
      apilike.postmethod(i + 1);
      setTimeout(() => {
        refresher();
      }, 400);
    });
  }
};

document.addEventListener('DOMContentLoaded', refresher, false);
