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
      <div class='pj_h4'>Type: </div>
      <div class='pj_p'>${arr[1]}</div>
    </div>
    <div class='pj_div'>
      <div class='pj_h4'>Time Spent: </div>
      <div class='pj_p'>${arr[2]}</div>
    </div>
    <div class='pj_div'>
      <div class='pj_h4'>Purpose: </div>
      <div class='pj_p'>${arr[3]}</div>
    </div>
    <div class='pj_div'>
      <div class='pj_h4'>Details: </div>
      <div class='pj_p'>${arr[4]}</div>
    </div>
    <div class='pj_div'>
      <div class='pj_h4'>Tools: </div>
      <div class='pj_p'>${arr[5]}</div>
    </div>
    <div class='pj_div'>
      <div class='pj_h4'>Points: </div>
      <div class='pj_p'>${arr[6]}</div>
    </div>
    <div class='pj_div'>
      <div class='pj_h4'>Link: </div>
      <a class='pj_a' href='${arr[7]}'>${arr[7]}</a>
    </div>
    <div class='pj_div'>
      <div class='pj_h4'>GitHub: </div>
      <a class='pj_a' href='https://github.com${arr[8]}'>Open GitHub page</a>
    </div>`;
  section.appendChild(textSection);

  const imgSection = document.createElement('div');
  imgSection.classList = 'pj_img-container';

  imgSection.innerHTML = `
    <div class='pj_h4'>Demo: </div>
    <img src='${arr[9]}' alt='${arr[10]}' class='pj_img'>`
  section.appendChild(imgSection);
  field.appendChild(section);
}