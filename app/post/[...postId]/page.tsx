export const metadata = {
  title: "PostDetail",
};

export default function page({ params }: { params: { postId: string } }) {
  return <div>Post Detail {params.postId[0]}</div>;
}
