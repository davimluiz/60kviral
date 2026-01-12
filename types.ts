
export interface SocialProof {
  name: string;
  time: string;
  type: 'purchase' | 'view';
}

export interface ChartData {
  month: string;
  revenue: number;
}
