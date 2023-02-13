const close = document.getElementById('pj-close');

const field = document.querySelector('#project-field');


function projectCard(arr) {
  // section
  const section = document.createElement('section');
  section.classList = 'pj_section';
  field.innerHTML = ""
  // text section
  const textSection = document.createElement('section');
  textSection.classList = 'pj_text-container';
  textSection.innerHTML = `
    <div class='pj_h1'>${arr[0]}</div>

    <div class='pj_div'>
      <a class='pj_a' href='https://github.com${arr[9]}'>GitHub</a>
      <a class='pj_a' href='${arr[8]}'>${arr[7]}</a>
    </div>

    <div class='pj_div'>
      <div class='pj_p'>${arr[1]}</div>
    </div>

    <div class='pj_div'>
      <div class='pj_h4'>作業時間: </div>
      <div class='pj_p'>${arr[2]}</div>
    </div>

    <div class='pj_div'>
      <div class='pj_h4'>詳細: </div>
      <div class='pj_p'>${arr[4]}</div>
    </div>


    <div class='pj_div'>
      <div class='pj_h4'>目的: </div>
      <div class='pj_p'>${arr[3]}</div>
    </div>

    <div class='pj_div'>
      <div class='pj_h4'>言語: </div>
      <div class='pj_p'>${arr[5]}</div>
    </div>

    <div class='pj_div'>
      <div class='pj_h4'>ポイント: </div>
      <div class='pj_p'>${arr[6]}</div>
    </div>`;
  section.appendChild(textSection);

  const imgSection = document.createElement('div');
  imgSection.classList = 'pj_img-container';

  imgSection.innerHTML = `
    <div class='pj_h4'>デモ: </div>
    <img src='${arr[10]}' alt='${arr[11]}' class='pj_img'>`
  section.appendChild(imgSection);
  field.appendChild(section);
}