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

interface GetInsightsForRangeParams {
  startDate: string;
  endDate: string;
  userId: string;
}

export const getInsightsForRange = async ({
  startDate,
  endDate,
  userId,
}: GetInsightsForRangeParams): Promise<InsightsForRange> => {
  return {
    startDate,
    endDate,
    userId,
    cummulativeDistance: 400,
    cummulativeTime: 100,
    numberOfActivities: 100,
  };
};
