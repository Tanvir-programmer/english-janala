const loadLessons = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayLessons(json.data));
};
const loadlevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => diplaylevelWord(data.data));
};
// id
// :
// 89
// level
// :
// 1
// meaning
// :
// "গাছ"
// pronunciation
// :
// "ট্রি"
// word
// :
// "Tree"
const diplaylevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  words.forEach((word) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white rounded-xl shadow-sm text-center p-10 space-y-4">
        <h2 class="font-bold text-xl">${word.word}</h2>
        <p class="font-semibold">Meaning/Pronunciation</p>

        <div class="font-bangla font-semibold">${word.meaning}</div>
        <div class="flex justify-between items-center">
          <button class="bg-[#1A91FF10] p-2 rounded-sm hover:bg-[#1A91FF80]">
            <i class="fa-solid fa-circle-info"></i>
          </button>

          <button class="bg-[#1A91FF10] p-2 rounded-sm hover:bg-[#1A91FF80]">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </div>
    `;
    wordContainer.append(card);
  });
};

const displayLessons = (lessons) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  for (let lesson of lessons) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button onclick="loadlevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
      <i class="fa-solid fa-book-open"></i>Lesson -${lesson.level_no}
    </button>
   `;
    levelContainer.append(btnDiv);
  }
};
loadLessons();
