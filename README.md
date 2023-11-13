# Music-Space 
<br/>
<h2>1. 프로젝트 정보</h2>

- 개발 기간 : 23.8.13 ~ 23.11.13 (3달)
- 배포 주소 : https://phs-developer.github.io/music-space
#### 소개
    스포티파이 API를 통해 제작된 음악 사이트입니다.
    기본적으로 노래 검색 기능, 개인 재생 목록을 관리하는 플레이리스트 영역이 있습니다.
    스포티파이와 연동 로그인을 하게 되면 사용자의 스포티파이 재생목록의 조회, 추가, 삭제, 변경(CRUD)을 할 수 있습니다.

<br/>

<h2>2. 시작 가이드</h2>
<b>- npm 8.15.0</b> <br/>
<b>- node.js 16.17.0</b>

#### installation
    $ git clone https://github.com/phs-developer/music-space.git
#### Backend
    $ npm i express
    $ node server.js
#### Frontend
    $ npm install
    $ npm start

<br/>

<h2>3. 주요 기능</h2>

#### 스포티파이 로그인
      스포티파이 아이디로 로그인이 가능합니다.
      사용자의 accessToken을 받으려면 서버 통신이 필요하여 express를 통해 간단히 서버를 구현했습니다.
      
      로그인 -> 스포티파이로 로그인 -> 서비스 동의 후 연동
      
#### CRUD기능
      로그인 시 유저의 스포티파이 재생목록 정보를 조회하여 추가, 삭제, 변경을 할 수 있습니다.
      해당 기능은 스포티파이에서도 반영됩니다.
      
      추가 : 노래 앨범 클릭 시 플레이리스트에 추가
      삭제 : 플레이리스트 -> x 버튼 클릭 시 삭제
      변경 : 로그인 시 플레이리스트 -> 상단에 유저의 스포티파이 재생 목록 리스트에서 목록 이름 변경
      
#### Redux
      비회원 시 관리되는 재생 목록과 토큰 정보는 Redux를 통해 전역 상태로 관리했습니다. 
      
<br/>

<h2>4. 화면</h2>

| PC 버전 | Mobile 버전 |
|:-:|:-:|
|![](https://github.com/phs-developer/music-space/assets/82524095/81b87a5a-6818-4b5f-a491-5e07d9b7c293)|![](https://github.com/phs-developer/music-space/assets/82524095/4b54a18b-cae2-4ea7-af4e-62b965e7283e) |

| 노래 검색 | 재생 목록 추가 및 삭제 | 재생 목록명 변경 |
|:-:|:-:|:-:|
|![](https://github.com/phs-developer/music-space/assets/82524095/71b3c73f-49a1-4525-b5c2-bb03213cf2cb)|![](https://github.com/phs-developer/music-space/assets/82524095/839f4384-5300-42fd-ba9d-31bf093bca28) |![](https://github.com/phs-developer/music-space/assets/82524095/4eb9ce81-ebaa-4ef6-92b2-9a7c310fdad1) |

<br/>

<h2>5. 스킬</h2>

| React | Styled Component | TS | Redux-toolkit | express |
|:-:|:-:|:-:|:-:|:-:|
|<img alt="react" src="https://github.com/phs-developer/portfolio2/assets/82524095/e6bcce56-c827-4216-8417-4ef015e59cfc" width="80" height="80" />|<img alt="SC" src="https://github.com/phs-developer/SuperHero/assets/82524095/dd5b15ba-4cdd-4bbf-9d1d-e38267b877a4" width="80" height="80" />|<img alt="ts" src="https://github.com/phs-developer/SuperHero/assets/82524095/c04c26fc-060b-4095-8505-35d8f751cc2a" width="80" height="80" />|<img alt="RTK" src="https://github.com/phs-developer/music-space/assets/82524095/9fe719f5-95ac-42a4-bd49-40b5f5db2196" width="auto" height="80" />|<img alt="express" src="https://github.com/phs-developer/music-space/assets/82524095/6dba79c3-0001-4dc3-9021-c6652d41eb62" width="auto" height="80" />|
