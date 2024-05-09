const YearStatsPage = ({ params }: { params: { year: string } }) => {
  return (
    <div>
      <h1>{params.year}</h1>
    </div>
  );
};

export default YearStatsPage;
