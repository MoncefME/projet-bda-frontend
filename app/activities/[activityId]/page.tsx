const ActivityPage = ({ params }: { params: { activityId: number } }) => {
  return (
    <div>
      <h1>ActivityPage : {params.activityId}</h1>
    </div>
  );
};

export default ActivityPage;
