import React from "react";
import './css/App.css';
import './css/main.css';
import './css/project.css';
import './css/about.css';
import ExtentionData from './data/data.json'
import head_img from './img/welcome.png'

// const rootPath = window.location.pathname

class Header extends React.Component {
  render() {
    return (
      <section class="header" id="header">
        <img src={head_img} alt="Header image" class="headImg"></img>
        <p>興味を持っていただけて嬉しいです！製作したものの詳細を載せています。是非ご覧ください！</p>
      </section>
    );
  }
}

class WebsiteProject extends React.Component {
  render() {
    return (
      <section style={{alignContent:"center"}} >
        <h4>ポートフォリオサイト</h4>
        <p>見やすいサイトを作ることを意識しました。ReactJS / CSS</p>
        <div style={{width:"100%",height:"10%",border:"1px solid black"}}>
          <img src={require(`./img/website1.png`)} alt="image" style={{width:"100%",}}></img>
        </div>
      </section>
    );
  }
}

class SchoolProject extends React.Component {
  render() {
    return (
      <section style={{alignContent:"center"}} >
        <h4>データベースシステム</h4>

        <div class="ex_urls">
          <a href="https://github.com/skura-00/2221_data_base_.git">GitHub</a>
          <a href="https://main--my-portfolio-db-page.netlify.app/">DBページ</a>
        </div>

        <p>グループプロジェクトで架空の学校のクラブDBを制作しました。</p>

        
        <div style={{width:"100%",height:"10%",border:"1px solid black"}}>
          <img src={require(`./img/dbsite.png`)} alt="image" style={{width:"100%",}}></img>
        </div>
      </section>
    );
  }
}

const ExtentionProject = ExtentionData.map((data) => {
  return (
    <section class="ex_container" id={data.id} key={data.id}>
      <img src={require(`./img/${data.img}`)} alt="image" class="ex_image"></img>
      <div class="ex_text">
        <h2>{data.title}</h2>
        <div class="ex_urls">
          <a href={data.github}>GitHub</a>
          <a href={data.otherUrl}>{data.urlTitle}</a>
        </div>
        <p>{data.detail}</p>
        <p>{data.style}  [ {data.time} ]</p>
        <p>{data.purpose}</p>
        <p>{data.point}</p>
        <p>{data.lang}</p>
      </div>
      

    </section>
  );
});


class About extends React.Component {
  render() {
    return (
      <section> 
        <h4>経歴</h4>
        <p>日本での高校卒業後、カナダ・バンクーバーへ正規留学。</p>

        <section class="history">
          <div class="date">2022年9月-現在</div>
            
          <div> 
            <p class="label">University of British Columbia</p>
            <p>Asian Area Studies専攻。3年次より編入。</p>
          </div>
        </section>

        <section class="history">
          <div class="date">2020年1月-2022年8月</div> 
          <div>
            <p class="label">Langara College</p>
            <p>Computer Science専攻。4年制大学編入を目指して進学。</p>
          </div>

        </section>

        <h4 class="section_title">スキル</h4>
        <section>
          <ul class="about_list">
            <li>HTML/CSS：簡単なWebページが作れる。</li>
            <li>JavaScript：簡単なWebページが作れる。このポートフォリオサイトではReactを使用。</li>
            <li>Java：授業で学習した。OOPで簡単なアプリケーションを作れる。</li>
            <li>C++：授業で学習した。</li>
            <li>Python3：授業で触った。</li>
            <li>MySQL：授業で学習した。簡単なDBの設計から開発まで一貫してのプロジェクトを授業で行った。</li>
            <li>Swift：趣味で学習中。</li>
          </ul>
        </section>

        <h4 class="section_title">好きなこと</h4>
        <ul class="about_list">
          <li>プログラミング</li>
          <li>ソフトボール</li>
          <li>映画・ドラマ・アニメ観る</li>
          <li>散歩</li>
        </ul>
      </section>
    );
  }
}

class Spacer extends React.Component {
  render() {
    return (
      <div style={{width:"100%",height:"20vw"}}></div>
    );
  }
}

class Body extends React.Component {
  render() {
    return (
      <section class="body">
        <h1 id="website">Webページ</h1>
        <WebsiteProject />

        <Spacer />

        <h1 id="school">学校のプロジェクト(Not ready yet)</h1>
        <SchoolProject />
        <Spacer />

        <h1 id="extention">Chrome拡張機能</h1>
        <div>{ExtentionProject}</div>
        
        <Spacer />

        <h1 id="ios">iOSアプリ(Not ready yet)</h1>

        <Spacer />

        <h1 id="about">About</h1>
        <About />

        <Spacer />

        <h1 id="contact">Contact</h1>
        <p>送り先名：S K</p>
        <a href="mailto:sakura39.081201@gmail.com">メール</a>

        <Spacer />
      </section>
    );
  }
}

class Index extends React.Component {
  render() {
    return (
      <section class="index">
        <ul class="index_list">
          <li><a href="#header">Home</a></li>
          <li><a href="#website">Projects</a></li>
          <ol>
            <li><a href="#website">Webページ</a></li>
            <li><a href="#school">学校のプロジェクト</a></li>
            <li><a href="#extention">Chrome拡張機能</a></li>
            <li><a href="#ios">iOSアプリ</a></li>
          </ol>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </section>
    );
  }
}

function App() {
  return (
    <div class="screen">
    <Index />
    <div class="main">
      <Header />
      <Spacer />
      <Body />
    </div>

    </div>
    
  );
}

export default App;
