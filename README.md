# Node.js boiler-plate

MVC 아키텍쳐 패턴 기반 타입스크립트 보일러 플레이트

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

GOOGLE_CLIENT_ID="추가 예정"
GOOGLE_SECRET="추가 예정"

NODE_MAILER_USER="추가 예정"
NODE_MAILER_PASS="추가 예정"

```

2. 패키지 설치

```npm install```

3. 서버 실행

```yarn start```

---

> __사용법__

1. swagger를 통해 API 문서 확인

	 ```serverURL:serverPort/api-docs```

	 ```추가로 swagger 설정이 변경되었다면 다음 실행 ```
	 ```npm run swagger-autogen ```


2. 로그 : 서버 실행시 자동으로 경로 및 파일 생성

	 ```http 통신 전체 로그 = src/logs/debug.log```

	 ```server 에러 로그 = src/logs/except.log```


3. passport 인가 미들웨어

	 ```passportJwt 미들웨어를 인가가 필요한(로그인 상태인지) 라우트핸들러에 추가. 해당 미들웨어는 req.user에 사용자 정보를 담아 넘김```

---

> kakao 로그인은 현재 테스트 필요한 상태


