# [Node.js] Express.ts + prisma boiler-plate

### Service-Oriented MVC 아키텍쳐 패턴 기반 타입스크립트 보일러 플레이트
#### developer : [daechan-jo](https://github.com/daechan-jo)

> __기술 스택__

![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)
![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Prisma](https://img.shields.io/badge/-Prisma-1B222D?style=for-the-badge&logo=prisma&logoColor=white)
![Passport](https://img.shields.io/badge/-Passport-34E27A?style=for-the-badge&logo=passport&logoColor=white)
![JWT](https://img.shields.io/badge/-JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Multer](https://img.shields.io/badge/-Multer-FF6600?style=for-the-badge&logo=multer&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white)
![Jest](https://img.shields.io/badge/-Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

---

> __ERD__

![boilerplate_erd](https://github.com/daechan-jo/express.ts-prisma-boilerplate/assets/103374153/12a3b1a5-5878-4875-b0c9-3d6ca84e1e8f)


---

> __실행하기__

1. 서버 루트 경로에 dotenv 파일 생성 및 설정

```
DATABASE_URL=""
SERVER_URL=""
SERVER_PORT=""
JWT_SECRET_KEY=""
JWT_TOKEN_EXPIRES=""
KAKAO_ID=""
```

2. 패키지 설치

```npm install```

3. 서버 실행

```yarn start```

---

> __사용법__

1. swagger를 통해 API 문서 확인

	 ```serverURL:serverPort/api-docs```

	 ```서버가 실행되면 자동으로 변경된 swagger 문서를 업데이트합니다.```


2. 로그 : 서버 실행시 자동으로 경로 및 파일 생성

	 ```http 통신 전체 로그 = src/logs/debug.log```

	 ```server 에러 로그 = src/logs/except.log```

	 개발 진행 도중에는 [console.log] 를 적극적으로 활용해주세요. <br>
	 현재 요청, 응답(성공, 실패 로깅 및 콘솔 출력), 에러를 각각의 미들웨어에서 캡쳐해 로깅할 뿐 가로채지 않습니다.<br>
	 따라서, 로직 내 상세한 디버깅을 위해선 [console.log]를 원하는 위치에서 사용해주세요.


3. passport 인가 미들웨어

	 ```passportJwt 미들웨어를 인가가 필요한 라우트핸들러에 추가. 해당 미들웨어는 다음 핸들러에 req객체에 로그인한 사용자의 데이터를 user프로퍼티(type: User)에 추가하고 전달합니다.```<br>
	 ex) userId = (req.user as User).id <br>
	 ex) manager = (req.user as User).manager <br>


4. 통합 테스트

	```ex) yarn test tests/테스트파일명.test.ts```

	작성에 소요되는 코스트에 비해 수정 또는 추가 사항이 있을 경우 테스트 시간이 비약적으로 단축됩니다.


---

> __기타 사항__

+ kakao 로그인은 프론트와 연결 후 테스트 필요한 상태
+ 로그인 성공 응답 시 토큰을 쿠키에 저장하고 있습니다. (현재 임시로 "token"이라는 이름으로 저장)
+ passport 의 JWT와 세션을 혼용한 인증, 인가방식을 구현했기에 로그아웃 구현시 세션을 삭제시켜줘야 리소스 누수를 방지할 수 있습니다. (리다이렉트 주소는 협의..)
+ 유틸에 응답 객체 구조를 통일시키기 위한 유틸 함수가 있습니다.
+ 서버사이드 페이네이션 기본값으 page=1, limit=10 입니다.


