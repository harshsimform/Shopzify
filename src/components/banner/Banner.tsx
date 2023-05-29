import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Image, Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import { bannerData } from "../../constants/BannerData";

const Banner = () => {
  return (
    <Box marginX={4} paddingY={4} userSelect="none" marginTop={"8.3rem"}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {bannerData.map((data) => (
          <SwiperSlide key={data.id}>
            <Image src={data.bannerImg} alt="banner" w="full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Banner;
