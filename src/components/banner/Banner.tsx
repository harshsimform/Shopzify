import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Image, Box } from "@chakra-ui/react";
import "swiper/css";
import { BannerData } from "../../constants/BannerData";

const Banner = () => {
  return (
    <Box marginX={4} paddingY={4} userSelect="none" marginTop={"8.3rem"}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {BannerData.map((data) => (
          <SwiperSlide key={data.id}>
            <Image
              src={data.bannerImg}
              alt="banner"
              w="full"
              cursor="pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Banner;
