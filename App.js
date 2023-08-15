import React from "react";
import './css/App.css';
import './css/main.css';
import './css/project.css';
import './css/about.css';
import './css/School.css'
import ExtentionData from './data/data.json'
import WebpageData from './data/WebpageData.json'
import SchoolData from './data/school.json'
import head_img from './img/welcome.png'


class Header extends React.Component {
  render() {
    return (
      <section className="header" id="header">
        <img src={head_img} alt="Header image" className="headImg"></img>
        <p>興味を持っていただけて嬉しいです！製作したものの詳細を載せています。是非ご覧ください！</p>
      </section>
    );
  }
}

const WebsiteProject = WebpageData.map((data) => {
  return (
      <section key={data.id} className="scl_container" >
      <h4>{data.title}</h4>
        

        <div className="scl_urls">
          <a href={data.github}>GitHub</a>
          <a href={data.otherUrl}>{data.urlTitle}</a>
        </div>


        <div className="scl_text">
          <p>{data.style}</p>
          <p>{data.detail}</p>
          <p>{data.lang}</p>
          <p>{data.point}</p>
        </div>
        
        <div style={{width:"100%",height:"10%",border:"1px solid black"}}>
          <img src={require(`./img/${data.img}.png`)} alt="image" style={{width:"100%",}}></img>
        </div>
      </section>
    )
});

const SchoolProject = SchoolData.map((data) =>  {
    return (
      <section key={data.id}  className="scl_container" >
      <h4>{data.title}</h4>
        

        <div className="scl_urls">
          <a href={data.github}>GitHub</a>
          <a href={data.otherUrl}>{data.urlTitle}</a>
        </div>


        <div className="scl_text">
          <p>{data.style}</p>
          <p>{data.detail}</p>
          <p>{data.lang}</p>
          <p>{data.point}</p>
        </div>
        
        <div style={{width:"100%",height:"10%",border:"1px solid black"}}>
          <img src={require(`./img/${data.img}.png`)} alt="image" style={{width:"100%",}}></img>
        </div>
      </section>
    )
});

const ExtentionProject = ExtentionData.map((data) => {
  return (
    <section className="ex_container" id={data.id} key={data.id}>
      <img src={require(`./img/${data.img}`)} alt="image" className="ex_image"></img>
      <div className="ex_text">
        <h2>{data.title}</h2>
        <div className="ex_urls">
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
        <p>日本での高校卒業後、カナダ・バンクーバーへ語学・正規留学。</p>

        <section className="history">
          <div className="date">2022年9月-</div>
          <div> 
            <p className="label">University of British Columbia</p>
            <p className="school_detail" >Asian Area Studies専攻。3年次より編入。カナダに住んでいて日本について知らないことが多いと感じたため、日本について関わりの深い韓国の歴史や日韓関係などの視点から勉強しています。</p>
          </div>
        </section>

        <section className="history">
          <div className="date">2020年1月-2022年8月</div> 
          <div>
            <p className="label">Langara College</p>
            <p className="school_detail">Computer Science専攻。4年制大学編入を目指して進学。最初のセメスターの途中でオンライン授業に切り替わってしまったため、大学のシステムに慣れることにとても苦労しました。英語がまだできなかった頃は良い成績を取ることも難しく、友達と協力しながら勉強を頑張りました。</p>
          </div>

        </section>

        <h4 className="section_title">スキル</h4>
        <section>
          <ul className="about_list">
            <li>HTML/CSS：簡単なWebページが作れる。</li>
            <li>JavaScript：簡単なWebページが作れる。このポートフォリオサイトではReactを使用。</li>
            <li>Java：授業で学習した。OOPで簡単なアプリケーションを作れる。</li>
            <li>C++：授業で学習した。</li>
            <li>Python3：授業で触った。</li>
            <li>MySQL：授業で学習した。簡単なDBの設計から開発まで一貫してのプロジェクトを授業で行った。</li>
            <li>Swift：趣味で学習中。</li>
          </ul>
        </section>

        <h4 className="section_title">好きなこと</h4>
        <ul className="about_list">
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
      <section className="body">
        <h1 id="website">Webページ</h1>
        <div>{WebsiteProject}</div>

        <Spacer />

        <h1 id="school">学校のプロジェクト</h1>
        <div>{SchoolProject}</div>
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
        <a href="mailto:#">メール</a>

        <Spacer />
      </section>
    );
  }
}

class Index extends React.Component {
  render() {
    return (
      <section className="index">
        <ul className="index_list">
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
    <div className="screen">
    <Index />
    <div className="main">
      <Header />
      <Spacer />
      <Body />
    </div>

    </div>
    
  );
}

export default App;
