import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./Cards";
import "./carousel.css";
import { CircularProgress } from "@mui/material";

  // const [blogData, setBlogData] = useState([])
  //  const [isLoading, setIsLoading] = useState(true);
   
  // useEffect(() => { blogArticlesVm("https://strapi-production-7702.up.railway.app/api/blogs?populate=*")
  //   .then((vm) => setBlogData(vm))
  //   .then((res) => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //   }); }, [])
  // console.log(blogData)
// document.body.style.overflow = "hidden";
const Slider = ({ data,isLoading }) => {
console.log(data)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return isLoading ? (
    <CircularProgress />
  ) : (
    <Carousel
      arrows={true}
      // showDots={true}
      renderDotsOutside={true}
      swipeable={true}
      draggable={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {data.map((a) => (
        <Cards key={a.attributes.dateOfArticle} data={a} />
      ))}
    </Carousel>
  );
  
}

export default Slider

