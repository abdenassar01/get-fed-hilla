import star from "Frontend/assets/images/icons/star.svg";

type Props = {
  rating: number;
};

export function StartRating({ rating }: Props) {
  return (
    <div className="flex gap-[0.278vw] items-center">
      {[...Array(rating)].map((item, index) => (
        <img
          key={"rating-" + rating + "-" + index}
          className="w-[1.042vw]"
          src={star}
          alt="rating star"
        />
      ))}
      <div className="font-semibold">{rating}</div>
    </div>
  );
}
