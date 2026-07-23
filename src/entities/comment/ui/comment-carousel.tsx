import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import type { PostComment } from "@/entities/comment";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared/shadcn/ui/carousel";
import { CommentItem } from "./comment-item";

type Props = {
  comments: PostComment[];
};

export const CommentCarousel = ({ comments }: Props) => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnLastSnap: true }),
  );

  return (
    <Carousel
      orientation="vertical"
      opts={{
        align: "start",
        loop: false,
      }}
      plugins={[plugin.current]}
    >
      <CarouselContent className="-mt-1 h-20">
        {comments.map((comment) => (
          <CarouselItem
            className="basis-full cursor-grab pt-1"
            key={comment.id}
          >
            <CommentItem comment={comment} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
