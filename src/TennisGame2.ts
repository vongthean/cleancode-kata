import { TennisGame } from './TennisGame';


export class TennisGame2 implements TennisGame {
  P1point: number = 0;
  P2point: number = 0;

  P1res: string = '';
  P2res: string = '';

  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }
  getP1point(P1point : number) {
    let slogan: string = '';
    if (P1point === 0)
      slogan = 'Love';
    if (P1point === 1)
      slogan = 'Fifteen';
    if (P1point === 2)
      slogan = 'Thirty';
    slogan += '-All';
    return slogan;
  }
  getP1res(P1point : number) {
    if (P1point === 1)
      this.P1res = 'Fifteen';
    if (P1point === 2)
      this.P1res = 'Thirty';
    if (P1point === 3)
      this.P1res = 'Forty';

    this.P2res = 'Love';
  }
  getP2res(P2point : number) {
    if (P2point === 1)
      this.P2res = 'Fifteen';
    if (P2point === 2)
      this.P2res = 'Thirty';
    if (P2point === 3)
      this.P2res = 'Forty';

    this.P1res = 'Love';
  }
  getScorePoint1ThanPoint2(P1point : number, P2point: number) {
    if (P1point === 2)
      this.P1res = 'Thirty';
    if (P1point === 3)
      this.P1res = 'Forty';
    if (P2point === 1)
      this.P2res = 'Fifteen';
    if (P2point === 2)
      this.P2res = 'Thirty';
  }
  getScorePoint2ThanPoint1(P1point : number, P2point: number) {
    if (P2point === 2)
      this.P2res = 'Thirty';
    if (P2point === 3)
      this.P2res = 'Forty';
    if (P1point === 1)
      this.P1res = 'Fifteen';
    if (P1point === 2)
      this.P1res = 'Thirty';
  }
  getScore(): string {
    let score: string = '';
    if (this.P1point === this.P2point && this.P1point < 4) {
      score = this.getP1point(this.P1point);
    }
    if (this.P1point === this.P2point && this.P1point >= 3)
      score = 'Deuce';

    if (this.P1point > 0 && this.P2point === 0) {
      this.getP1res(this.P1point);
      score = this.P1res + '-' + this.P2res;
    }
    if (this.P2point > 0 && this.P1point === 0) {
      this.getP2res(this.P2point);
      score = this.P1res + '-' + this.P2res;
    }

    if (this.P1point > this.P2point && this.P1point < 4) {
      this.getScorePoint1ThanPoint2(this.P1point, this.P2point);
      score = this.P1res + '-' + this.P2res;
    }
    if (this.P2point > this.P1point && this.P2point < 4) {
      this.getScorePoint2ThanPoint1(this.P1point, this.P2point);
      score = this.P1res + '-' + this.P2res;
    }

    if (this.P1point > this.P2point && this.P2point >= 3) {
      score = 'Advantage player1';
    }

    if (this.P2point > this.P1point && this.P1point >= 3) {
      score = 'Advantage player2';
    }

    if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
      score = 'Win for player1';
    }
    if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
      score = 'Win for player2';
    }
    return score;
  }

  SetP1Score(score: number): void {

    for (let i = 0; i < score; i++) {
      this.P1Score();
    }

  }

  SetP2Score(score: number): void {
    for (let i = 0; i < score; i++) {
      this.P2Score();
    }
  }

  P1Score(): void {
    this.P1point++;
  }

  P2Score(): void {
    this.P2point++;
  }

  wonPoint(player: string): void {
    if (player === 'player1')
      this.P1Score();
    else
      this.P2Score();
  }
}
