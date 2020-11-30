import { TennisGame } from './TennisGame';


export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;
  private score: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.m_score1 += 1;
    else
      this.m_score2 += 1;
  }
  getSloganOfScore(m_score: number) {
    if(m_score === 0){
      this.score = 'Love-All';
    }
    if(this.m_score1 === 1){
      this.score = 'Fifteen-All';
    }
    if(this.m_score1 === 2){
      this.score = 'Thirty-All';
    }
    if(this.m_score1 > 2){
      this.score = 'Deuce';
    }
  }
  getSloganOfScoreWinPart(){
    const minusResult: number = this.m_score1 - this.m_score2;
      if (minusResult === 1) this.score = 'Advantage player1';
      else if (minusResult === -1) this.score = 'Advantage player2';
      else if (minusResult >= 2) this.score = 'Win for player1';
      else this.score = 'Win for player2';
  }
  getSlogan(){
    let tempScore: number = 0;
    for (let i = 1; i < 3; i++) {
      if (i === 1) tempScore = this.m_score1;
      else { this.score += '-'; tempScore = this.m_score2; }
      if(tempScore == 0){
        this.score += 'Love';
      }
      if(tempScore == 1){
        this.score += 'Fifteen';
      }
      if(tempScore == 2){
        this.score += 'Thirty';
      }
      if(tempScore == 3){
        this.score += 'Forty';
      }
    }
  }
  getScore(): string {
    
    if (this.m_score1 === this.m_score2) {
      this.getSloganOfScore(this.m_score1);
    }
    else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      this.getSloganOfScoreWinPart();
    }
    else {
      this.getSlogan();
    }
    return this.score;
  }
}
