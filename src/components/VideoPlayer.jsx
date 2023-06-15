// import { Box } from '@mui/material'


// import React, { useEffect,useRef } from 'react'


// const VideoPlayer = () => {
//   const cloudinaryRef = useRef()
//   const videoRef = useRef()
//   useEffect(() => {
//     if (cloudinaryRef.current) return
//     cloudinaryRef.current = window.cloudinary;
//    cloudinaryRef.current.videoPlayer(videoRef.current, {
//       cloud_name: "dqbm9veoe",
//       // controls: false,
//       // preload: "auto",
//       muted: true,
//       fluid: true,
//       bigPlayButton: false,
//       autoplayMode: "on-scroll",
//      autoplay: true,
//     });
//   }, [])


//   return (
//     <video
//       ref={videoRef}
//       data-cld-public-id="beVibrant"
//     />
//   );
// }

// export default VideoPlayer



// <Box sx={{
//           m: "auto",
//           width: "99vw",
//           height: "70vh",
//           overflow: "hidden",
//           position: "relative",
//         }}
//       >
//         <iframe
//           title="jkj"
//           width="640"
//           height="360"
//           style={{
//             height: "auto",
//             width: "100%",
//             aspectRatio: "640/360",
//           }}
//           src="https://player.cloudinary.com/embed/?cloud_name=dqbm9veoe&public_id=beVibrant&player[skin]=light&player[muted]=true&player[autoplay]=true&player[loop]=true&player[controls]=false"
//           allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
//           allowfullscreen
//           frameborder="0"
//         ></iframe>
//         <StyledButton position={positionBtn} />

//         {/* <VideoPlayer /> */}
//       </Box>