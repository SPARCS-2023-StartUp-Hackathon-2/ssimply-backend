# [TEAM I] ssimply-backend
 
이 Repository는 "SSimply" 의 웹 백엔드를 담당합니다. 

다음과 같은 기능이 포함되어 있습니다. 

- 회원가입 및 로그인
- 회사/직원/거래처 관리
- 인건비 관련 서류 자동 생성
- 필수 제출 서류 수집을 위한 메일 발송

## 프로젝트에서 사용한 기술 

본 Repository는 `pacakge.json` 에 있는 오픈소스 패키지를 사용하였습니다.

또 다음 Code Snippet 이 포함되어 있습니다.

- [NestJS Malier document](https://nest-modules.github.io/mailer/docs/mailer.html)


## Dev Server 실행 방법

1. 본 Repository를 로컬 환경에 Clone 받습니다.
2. `npm install` 로 필요한 패키지를 설치 합니다.
3. `.env.example` 을 `.env` 로 복사한 다음, 아래 [환경 변수 및 시크릿] 규약에 따라 작성합니다.
4. MySQL 8.0 Docker 컨테이너를 실행합니다.
5. `prisma migrate` 를 이용하여 DB 스키마를 설정해 줍니다.
6. `npm run start:dev`로 HMR 서버를 실행하여 개발환경을 실행합니다.

## Production 배포 방법

1. Ubuntu 20.04 환경의 서버를 준비합니다.
2. 본 Repository를 로컬 환경에 Clone 받습니다.
3. `docker compose -f=.docker/production-compose.yml up -d` 을 이용하여 실행해 줍니다.


## 환경 변수 및 시크릿
1. 필요한 환경 변수는 `.env.example` 에 명시되어 있습니다.
    1. JWT_SECRET 은 18-24자리 이내 a-Z,0-9 로 설정되어야 합니다.


## 기타
무박 3일의 기적 씸플리 화이팅
