export default function Error({ props }: any) {
  console.log(props);
  return (
    <div className="h-[80vh] flex justify-center items-center bg-background">
      <div className="w-[70vw] text-xl text-mainText text-center">
        You don't have access to this route.
      </div>
    </div>
  );
}
