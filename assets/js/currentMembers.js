const currentMembers = [
  { name: 'Marco Qin', image: 'assets/img/team/MarcoQ.jpg', linkedin: 'https://www.linkedin.com/in/marco-qin-2024/', role: 'Team Leader, App Developer' },
  { name: 'Archer Heffern', image: 'assets/img/team/ArcherH.jpg', linkedin: 'https://www.linkedin.com/in/archerheffern/', role: 'Team Leader, App Developer' },
  { name: 'Chelsea Choi', image: 'assets/img/team/ChelseaC.png', linkedin: 'https://www.linkedin.com/in/chelsea-choi-2024/', role: 'Team Leader, App Developer' },
  { name: 'Keer Xu', image: 'assets/img/team/KeerX.jpg', linkedin: 'https://www.linkedin.com/in/keer-xu-128352250/', role: 'App Developer' },
  { name: 'Lecheng Zeng', image: 'assets/img/team/LechengZ.jpg', linkedin: 'https://www.linkedin.com/in/lecheng-zeng-b41398219/', role: 'App Developer' },
  { name: 'Ximeng Li', image: 'assets/img/team/XimengL.jpg', linkedin: 'https://www.linkedin.com/in/ximeng-li-4572b71b4/', role: 'App Developer' },
  { name: 'Jingqian Cheng', image: 'assets/img/team/JingqianC.jpeg', linkedin: 'https://www.linkedin.com/in/jingqian-cheng/', role: 'App Developer' },
  { name: 'Weidong Wang', image: 'assets/img/team/WeidongW.JPG', linkedin: 'https://www.linkedin.com/in/weidong-wang-2048/', role: 'App Developer' },
  { name: 'Wenxiao Wang', image: 'assets/img/team/WenxiaoW.jpg', linkedin: 'https://www.linkedin.com/in/wenxiao-wang-76a140249/', role: 'App Developer' },
]


const pastMembers = [
  // Graduated Spring 2023
  { name: 'Sam Brenner', image: 'assets/img/team/SamB.jpg', linkedin: 'https://www.linkedin.com/in/samuel-brenner-9a74a61b2/', role: 'Team Leader, App Developer' },
  { name: 'Long Yi', image: 'assets/img/team/LongYi.jpg', linkedin: 'https://www.linkedin.com/in/long-yi-b221b2183/', role: 'Team Leader, App Developer' },
  { name: 'James Kong', image: 'assets/img/team/JamesK.jpg', linkedin: 'https://www.linkedin.com/in/jamesdemingkong/', role: 'Team Leader, App Developer' },
  { name: 'Zach Mecenas', image: 'assets/img/team/Zach.jpg', linkedin: 'https://www.linkedin.com/in/zachary-mecenas-4797a9203/', role: 'App Developer' },
  // Graduated <=2022
  { name: 'Ian Smith', image: 'assets/img/team/IanS.png', linkedin: 'https://www.linkedin.com/in/ian-smithh/', role: 'Team Leader, App Developer' },
  { name: 'Shuran Li', image: 'assets/img/team/Shuran.jpg', linkedin: 'https://www.linkedin.com/in/shuran-li-662789179/', role: 'App Developer' },
  { name: 'Belle Scott', image: 'assets/img/team/Belle.jpg', linkedin: 'https://www.linkedin.com/in/belle-scott-1072b8133/', role: 'App Developer' },
  { name: 'Sosai Sho', image: 'assets/img/team/sosai.png', linkedin: 'https://www.linkedin.com/in/sosai-sho-082b661b4/', role: 'Business Leader, App Developer' },
  { name: 'Eli Miller', image: 'assets/img/team/EliM.jpg', linkedin: 'https://www.linkedin.com/in/elijahluismiller/', role: 'Team Leader, App Developer' },
  { name: 'Ilan Hascal', image: 'assets/img/team/IlanH.png', linkedin: 'https://www.linkedin.com/in/ilan-hascal-391812181/', role: 'Team Leader, App Developer' },
  { name: 'Aarti Jain', image: 'assets/img/team/Aarti.jpg', linkedin: 'https://www.linkedin.com/in/aarti-jain-2023/', role: 'Business Team' },
  { name: 'Angel Xu', image: 'assets/img/team/angel.jpg', linkedin: 'https://www.linkedin.com/in/haishan-angel-xu/', role: 'Business Coordinator' },
  { name: 'Ben Bar Zvi', image: 'assets/img/team/BenB.jpg', linkedin: 'https://www.linkedin.com/in/ben-bar-zvi/', role: 'App Developer' },
  { name: 'Kyra Rivest', image: 'assets/img/team/Kyra.png', linkedin: 'https://www.linkedin.com/in/kyrarivest/', role: 'App Developer' },
  { name: 'Rotem Arie', image: 'assets/img/team/Rotem.png', linkedin: 'https://www.linkedin.com/in/rotem-arie-5262601b3/', role: 'App Developer' },
  { name: 'Matt Merovitz', image: 'assets/img/team/Matt.png', linkedin: 'https://www.linkedin.com/in/matthew-merovitz-519019197/', role: 'App Developer' },
  { name: 'Sophia Wang', image: 'assets/img/team/Sophia.jpg', linkedin: 'https://www.linkedin.com/in/sophia-wang-nyc/', role: 'App Developer' },
  { name: 'Zuhaeer Islam', image: 'assets/img/team/Zuhaeer.jpg', linkedin: 'https://www.linkedin.com/in/zuhaeerislam', role: 'App Developer' },
]

const foundingMembers = [
  { name: 'Benjamin Segal', image: 'assets/img/team/BenS.png', linkedin: 'https://www.linkedin.com/in/benjamin-segal/', role: 'Senior Team Leader & App Developer' },
  { name: 'Sam Stern', image: 'assets/img/team/SamS.png', linkedin: 'https://www.linkedin.com/in/sam-stern-053b1a139/', role: 'Senior Team Leader & App Developer' },
  { name: 'Reese Farquhar', image: 'assets/img/team/ReeseF.jpg', linkedin: 'https://www.linkedin.com/in/reese-farquhar-a35981195/', role: 'Team Leader, App Developer' }
]

function Members({ memberArray }) {
  return (
    <div>
      {memberArray.map((member) => (
        <div className="col-md-3 col-sm-6 col-xs-12 col-6" key={member.name}>
          <div className="single-team">
            <div className="team-thumb">
              <img src={member.image} alt={member.name + 'image'} />
            </div>
            <h4>{member.name}</h4>
            <span>{member.role}</span>
            <ul className="tst-social">
              <li ><a href={member.linkedin}><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('current-member-root')).render(
  <Members memberArray={currentMembers} />
)

ReactDOM.createRoot(document.getElementById('founding-member-root')).render(
  <Members memberArray={foundingMembers} />
)

ReactDOM.createRoot(document.getElementById('past-member-root')).render(
  <Members memberArray={pastMembers} />
)
