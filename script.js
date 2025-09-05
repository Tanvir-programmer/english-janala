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
    .then((data) => {
      const clickBtn = document.getElementById(`lessonBtn-${id}`);
      document.querySelectorAll(".btn").forEach((btn) => {
        btn.classList.remove("active");
      });
      clickBtn.classList.add("active");
      diplaylevelWord(data.data);
    });
};
const diplaylevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  if (words.length == 0) {
    wordContainer.innerHTML = `
    <div class="text-center col-span-full">
    <i class="fa-solid fa-triangle-exclamation text-6xl mb-4"></i>
        <p class="text-xl text-gray-400 font-bangla mb-3">
          এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
        </p>

        <h2 class="text-4xl font-bold font-bangla">নেক্সট Lesson এ যান</h2>
      </div>
    `;
    return;
  }
  words.forEach((word) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white rounded-xl shadow-sm text-center p-10 space-y-4">
        <h2 class="font-bold text-xl">${
          word.word ? word.word : "Word did not found"
        }</h2>
        <p class="font-semibold">Meaning/Pronunciation</p>

        <div class="font-bangla font-semibold">${
          word.meaning ? word.meaning : "Did not found"
        }</div>
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
    <button id="lessonBtn-${lesson.level_no}" onclick="loadlevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
      <i class="fa-solid fa-book-open"></i>Lesson -${lesson.level_no}
    </button>
   `;
    levelContainer.append(btnDiv);
  }
};
loadLessons();
