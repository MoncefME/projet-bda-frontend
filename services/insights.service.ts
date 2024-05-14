export interface LongestStreak {
  start_date: string;
  end_date: string;
  days: number;
}

export const getLongestStreak = async (): Promise<LongestStreak | null> => {
  const response = await fetch(
    "http://localhost:8000/insights/find-longest-streak",
  );
  if (response.ok) {
    return response.json();
  }
  return null;
};

export interface LongestBreak {
  start_date: string;
  end_date: string;
  days: number;
}

export const getLongestBreak = async (): Promise<LongestBreak | null> => {
  const response = await fetch(
    "http://localhost:8000/insights/find-longest-break",
  );
  if (response.ok) {
    return response.json();
  }
  return null;
};

export interface InsightsForRange {
  startDate: string;
  endDate: string;
  userId: string;
  cummulativeDistance: number;
  cummulativeTime: number;
  numberOfActivities: number;
}

export const getInsightsForRange = async (): Promise<InsightsForRange> => {
  return {
    startDate: "2021-01-01",
    endDate: "2021-12-31",
    userId: "1",
    cummulativeDistance: Math.ceil(Math.random() * 1000),
    cummulativeTime: Math.ceil(Math.random() * 1000),
    numberOfActivities: Math.ceil(Math.random() * 1000),
  };
};


export const getTotalActivities = async (startMonth: number, endMonth: number, year: number): Promise<number | null> => {
  const url = `http://localhost:8000/insights/find-total-activities?startMonth=${startMonth}&endMonth=${endMonth}&year=${year}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data.totalActivities; 
  }
  return null;
};

export const getTotalDistance = async (startMonth: number, endMonth: number, year: number): Promise<number | null> => {
  const url = `http://localhost:8000/insights/find-total-distance?startMonth=${startMonth}&endMonth=${endMonth}&year=${year}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data.totalDistance; 
  }
  return null;
};

export const getTotalDuration = async (startMonth: number, endMonth: number, year: number): Promise<number | null> => {
  const url = `http://localhost:8000/insights/find-total-duration?startMonth=${startMonth}&endMonth=${endMonth}&year=${year}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data.totalDuration; 
  }
  return null;
};

export const getBestEffort1Km = async (athleteId: number, startMonth: number, endMonth: number, year: number): Promise<string> => {
  const url = `http://localhost:8000/insights/best-effort-1km?athleteId=${athleteId}&startMonth=${startMonth}&endMonth=${endMonth}&year=${year}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data.bestEffort1km; 
  }
  return "0";
};
export const getBestEffort5Km = async (athleteId: number, startMonth: number, endMonth: number, year: number): Promise<string> => {
  const url = `http://localhost:8000/insights/best-effort-5km?athleteId=${athleteId}&startMonth=${startMonth}&endMonth=${endMonth}&year=${year}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data.bestEffort5km; 
  }
  return "0";
};
export const getBestEffort10Km = async (athleteId: number, startMonth: number, endMonth: number, year: number): Promise<string> => {
  const url = `http://localhost:8000/insights/best-effort-10km?athleteId=${athleteId}&startMonth=${startMonth}&endMonth=${endMonth}&year=${year}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data.bestEffort10km; 
  }
  return "0";
};
export const getBestEffortHM = async (athleteId: number, startMonth: number, endMonth: number, year: number): Promise<string> => {
  const url = `http://localhost:8000/insights/best-effort-hm?athleteId=${athleteId}&startMonth=${startMonth}&endMonth=${endMonth}&year=${year}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data.bestEffortHM; 
  }
  return "0";
};
