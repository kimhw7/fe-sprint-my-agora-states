// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);
console.log(agoraStatesDiscussions[0].avatarUrl)

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
  // 이미지 생성
  const avatarImg = document.createElement('img');
  avatarImg.className = "discussion__avatar--image"
  avatarImg.src = obj.avatarUrl;
  avatarImg.alt = `avatar of ${obj.author}`
  avatarWrapper.appendChild(avatarImg)

  // discussion__content 요소 생성
  const discussionTitle = document.createElement("h2")
  discussionTitle.className = "discussion__title"
  const discussionInfomation = document.createElement("div");
  discussionInfomation.className = "discussion__information";
  const titleUrl = document.createElement("a");
  // 제목에 링크 추가
  titleUrl.textContent = obj.title;
  titleUrl.href = obj.url;
  // 작성자, 작성일 추가
  discussionInfomation.textContent = `${obj.author} / ${new Date(obj.createdAt).toLocaleString()}`;
  discussionTitle.appendChild(titleUrl);
  discussionContent.append(discussionTitle, discussionInfomation);
  // 답변 체크박스 추가
  const checkAnswered = document.createElement("p");
  checkAnswered.textContent = '☑';
  discussionAnswered.appendChild(checkAnswered);
//.

  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// 2.form 입력을 받아 객체에 추가하여 새로운 discussion 생성
// 2-1. form DOM 으로 가져오기
const inputWrapper = document.querySelector('div.form__input--wrapper');
const inputName = document.querySelector('div.form__input--name > input#name');
const inputTitle = document.querySelector('div.form__input--title > input#name');
const formTextbox = document.querySelector('div.form__textbox > textarea#story');

// 2-2. event 연결하기

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);
