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
  mostDay: string;
  leastDay: string;
  mostDayCount: number;
  leastDayCount: number;
}

export const getInsightsForRange = async (): Promise<InsightsForRange> => {
  return {
    startDate: "2021-01-01",
    endDate: "2021-12-31",
    userId: "1",
    cummulativeDistance: Math.ceil(Math.random() * 1000),
    cummulativeTime: Math.ceil(Math.random() * 1000),
    numberOfActivities: Math.ceil(Math.random() * 1000),
    mostDay: "MOST DAY TEST",
    leastDay: "Least Day Test",
    mostDayCount: Math.ceil(Math.random() * 1000),
    leastDayCount: Math.ceil(Math.random() * 1000),
  };
};

export interface ActivityResult {
  max_activities_day: string;
  max_activities_count: number;
  min_activities_day: string;
  min_activities_count: number;
}

export const getWeekActivityResult = async (
  startDate: string,
  endDate: string,
): Promise<ActivityResult | null> => {
  const response = await fetch(
    "http://localhost:8000/insights/day-most-activities",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ start_date: startDate, end_date: endDate }),
    },
  );
  if (response.ok) {
    return response.json();
  }
  return null;
};
