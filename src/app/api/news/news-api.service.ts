import { Injectable } from '@angular/core';

@Injectable()
export class NewsApiService {

  NEWS_MOCK = [
    {
      title: '국가기록원 "대통령기록물 이관 착수 ... 황 권한대행이 지정..',
      link: 'http://m.news.naver.com/hotissue/main.nhn?sid1=100&cid=1059834&gid=1059914&dummy=1703131658'
    },
    {
      title: '박前대통령, 헌재불복 무대응…"당분간 사저서 안 나올 듯"',
      link: 'http://m.news.naver.com/hotissue/main.nhn?sid1=100&cid=1059834&gid=1059914&dummy=1703131746#1059863'
    },
    {
      title: '\'대통령없는 청와대 \' 압수수색 될까... 법조계 "글쎄"',
      link: 'http://m.news.naver.com/hotissue/main.nhn?sid1=100&cid=1051768&gid=1051906&dummy=1703131756'
    },
    {
      title: '불공정 거래 단속에 \'화들짝\'... 육계 산지가격 19일만에 하락',
      link: 'http://m.news.naver.com/read.nhn?sid1=101&oid=001&aid=0009104356&mode=LSD'
    },
    {
      title: '퇴근길 찬바람 쌀쌀... 내일 동해안 눈비',
      link: 'http://m.news.naver.com/main.nhn?mode=LSD&sid1=103&dummy=1703131701&componentId=1051033'
    }
  ]
  constructor() { }

}
