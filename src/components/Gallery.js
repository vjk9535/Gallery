import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Image } from "semantic-ui-react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Gallery = () => {
  const itemData = [
    {
      img: "1.jpg",
      title: "Breakfast",
    },
    {
      img: "2.jpg",
      title: "Burger",
    },
    {
      img: "3.jpg",
      title: "Camera",
    },
    {
      img: "4.jpg",
      title: "Coffee",
    },
    {
      img: "5.jpg",
      title: "Hats",
    },
    {
      img: "6.jpg",
      title: "Honey",
      author: "@arwinneil",
    },
    {
      img: "7.jpg",
      title: "Basketball",
    },
    {
      img: "8.jpg",
      title: "Fern",
    },
    {
      img: "9.jpg",
      title: "Mushrooms",
    },
    {
      img: "10.jpg",
      title: "Mushrooms",
    },
    {
      img: "11.jpg",
      title: "Mushrooms",
    },
    {
      img: "13.jpg",
      title: "Mushrooms",
    },
  ];
  const itemData1 = [
    {
      img: "14.jpg",
      title: "Breakfast",
    },
    {
      img: "15.jpg",
      title: "Burger",
    },
    {
      img: "16.jpg",
      title: "Camera",
    },
    {
      img: "17.jpg",
      title: "Coffee",
    },
    {
      img: "18.jpg",
      title: "Hats",
    },
    {
      img: "19.jpg",
      title: "Honey",
      author: "@arwinneil",
    },
    {
      img: "20.jpg",
      title: "Basketball",
    },
    {
      img: "21.jpg",
      title: "Fern",
    },
    {
      img: "22.jpg",
      title: "Mushrooms",
    },
    {
      img: "23.jpg",
      title: "Mushrooms",
    },
    {
      img: "24.jpg",
      title: "Mushrooms",
    },
    {
      img: "25.jpg",
      title: "Mushrooms",
    },
  ];
  const itemData2 = [
    {
      img: "26.jpg",
      title: "Breakfast",
    },
    {
      img: "27.jpg",
      title: "Burger",
    },
    {
      img: "28.jpg",
      title: "Camera",
    },
    {
      img: "29.jpg",
      title: "Coffee",
    },
    {
      img: "30.jpg",
      title: "Hats",
    },
    {
      img: "31.jpg",
      title: "Honey",
      author: "@arwinneil",
    },
    {
      img: "38.jpg",
      title: "Basketball",
    },
    {
      img: "33.jpg",
      title: "Fern",
    },
    {
      img: "34.jpg",
      title: "Mushrooms",
    },
    {
      img: "35.jpg",
      title: "Mushrooms",
    },
    {
      img: "36.jpg",
      title: "Mushrooms",
    },
    {
      img: "37.jpg",
      title: "Mushrooms",
    },
    {
      img: "39.jpg",
      title: "Mushrooms",
    },
    {
      img: "40.jpg",
      title: "Mushrooms",
    },
    {
      img: "41.jpg",
      title: "Mushrooms",
    },
    {
      img: "42.jpg",
      title: "Mushrooms",
    },
    {
      img: "43.jpg",
      title: "Mushrooms",
    },
    {
      img: "44.jpg",
      title: "Mushrooms",
    },
    {
      img: "45.jpg",
      title: "Mushrooms",
    },
    {
      img: "46.jpg",
      title: "Mushrooms",
    },
    {
      img: "47.jpg",
      title: "Mushrooms",
    },
    {
      img: "48.jpg",
      title: "Mushrooms",
    },
    {
      img: "49.jpg",
      title: "Mushrooms",
    },
    {
      img: "50.jpg",
      title: "Mushrooms",
    },
    {
      img: "51.jpg",
      title: "Mushrooms",
    },
    {
      img: "52.jpg",
      title: "Mushrooms",
    },
    {
      img: "53.jpg",
      title: "Mushrooms",
    },
    {
      img: "54.jpg",
      title: "Mushrooms",
    },
    {
      img: "55.jpg",
      title: "Mushrooms",
    },
    {
      img: "56.jpg",
      title: "Mushrooms",
    },
    {
      img: "57.jpg",
      title: "Mushrooms",
    },
    {
      img: "58.jpg",
      title: "Mushrooms",
    },
    {
      img: "59.jpg",
      title: "Mushrooms",
    },
    {
      img: "60.jpg",
      title: "Mushrooms",
    },
    {
      img: "61.jpg",
      title: "Mushrooms",
    },
    {
      img: "62.jpg",
      title: "Mushrooms",
    },
    {
      img: "63.jpg",
      title: "Mushrooms",
    },
    {
      img: "64.jpg",
      title: "Mushrooms",
    },
    {
      img: "65.jpg",
      title: "Mushrooms",
    },
    {
      img: "66.jpg",
      title: "Mushrooms",
    },
    {
      img: "67.jpg",
      title: "Mushrooms",
    },
    {
      img: "68.jpg",
      title: "Mushrooms",
    },
    {
      img: "69.jpg",
      title: "Mushrooms",
    },
    {
      img: "70.jpg",
      title: "Mushrooms",
    },
    {
      img: "71.jpg",
      title: "Mushrooms",
    },
    {
      img: "72.jpg",
      title: "Mushrooms",
    },
    {
      img: "73.jpg",
      title: "Mushrooms",
    },
    {
      img: "74.jpg",
      title: "Mushrooms",
    },
    {
      img: "75.jpg",
      title: "Mushrooms",
    },
    {
      img: "76.jpg",
      title: "Mushrooms",
    },
    {
      img: "77.jpg",
      title: "Mushrooms",
    },
    {
      img: "78.jpg",
      title: "Mushrooms",
    },
    {
      img: "79.jpg",
      title: "Mushrooms",
    },
    {
      img: "80.jpg",
      title: "Mushrooms",
    },
    {
      img: "81.jpg",
      title: "Mushrooms",
    },
    {
      img: "82.jpg",
      title: "Mushrooms",
    },
    {
      img: "83.jpg",
      title: "Mushrooms",
    },
    {
      img: "84.jpg",
      title: "Mushrooms",
    },
    {
      img: "85.jpg",
      title: "Mushrooms",
    },
    {
      img: "86.jpg",
      title: "Mushrooms",
    },
    {
      img: "87.jpg",
      title: "Mushrooms",
    },
    {
      img: "88.jpg",
      title: "Mushrooms",
    },
    {
      img: "89.jpg",
      title: "Mushrooms",
    },
    {
      img: "90.jpg",
      title: "Mushrooms",
    },
    {
      img: "91.jpg",
      title: "Mushrooms",
    },
    {
      img: "92.jpg",
      title: "Mushrooms",
    },
    {
      img: "93.jpg",
      title: "Mushrooms",
    },
    {
      img: "94.jpg",
      title: "Mushrooms",
    },
    {
      img: "95.jpg",
      title: "Mushrooms",
    },
    {
      img: "96.jpg",
      title: "Mushrooms",
    },
    {
      img: "97.jpg",
      title: "Mushrooms",
    },
    {
      img: "98.jpg",
      title: "Mushrooms",
    },
    {
      img: "99.jpg",
      title: "Mushrooms",
    },
    {
      img: "100.jpg",
      title: "Mushrooms",
    },
    {
      img: "101.jpg",
      title: "Mushrooms",
    },
    {
      img: "102.jpg",
      title: "Mushrooms",
    },
    {
      img: "103.jpg",
      title: "Mushrooms",
    },
    {
      img: "104.jpg",
      title: "Mushrooms",
    },
    {
      img: "105.jpg",
      title: "Mushrooms",
    },
    {
      img: "106.jpg",
      title: "Mushrooms",
    },
    {
      img: "107.jpg",
      title: "Mushrooms",
    },
    {
      img: "108.jpg",
      title: "Mushrooms",
    },
    {
      img: "109.jpg",
      title: "Mushrooms",
    },
    {
      img: "110.jpg",
      title: "Mushrooms",
    },
    {
      img: "111.jpg",
      title: "Mushrooms",
    },
    {
      img: "112.jpg",
      title: "Mushrooms",
    },
    {
      img: "113.jpg",
      title: "Mushrooms",
    },
    {
      img: "114.jpg",
      title: "Mushrooms",
    },
    {
      img: "115.jpg",
      title: "Mushrooms",
    },
    {
      img: "116.jpg",
      title: "Mushrooms",
    },
    {
      img: "117.jpg",
      title: "Mushrooms",
    },
    {
      img: "118.jpg",
      title: "Mushrooms",
    },
    {
      img: "119.jpg",
      title: "Mushrooms",
    },
    {
      img: "120.jpg",
      title: "Mushrooms",
    },
    {
      img: "121.jpg",
      title: "Mushrooms",
    },
    {
      img: "122.jpg",
      title: "Mushrooms",
    },
    {
      img: "123.jpg",
      title: "Mushrooms",
    },
    {
      img: "124.jpg",
      title: "Mushrooms",
    },
    {
      img: "125.jpg",
      title: "Mushrooms",
    },
    {
      img: "126.jpg",
      title: "Mushrooms",
    },
    {
      img: "127.jpg",
      title: "Mushrooms",
    },
    {
      img: "128.jpg",
      title: "Mushrooms",
    },
    {
      img: "129.jpg",
      title: "Mushrooms",
    },
    {
      img: "130.jpg",
      title: "Mushrooms",
    },
    {
      img: "131.jpg",
      title: "Mushrooms",
    },
    {
      img: "132.jpg",
      title: "Mushrooms",
    },
    {
      img: "133.jpg",
      title: "Mushrooms",
    },
    {
      img: "134.jpg",
      title: "Mushrooms",
    },
    {
      img: "135.jpg",
      title: "Mushrooms",
    },
    {
      img: "136.jpg",
      title: "Mushrooms",
    },
    {
      img: "137.jpg",
      title: "Mushrooms",
    },
    {
      img: "138.jpg",
      title: "Mushrooms",
    },
    {
      img: "139.jpg",
      title: "Mushrooms",
    },
    {
      img: "140.jpg",
      title: "Mushrooms",
    },
    {
      img: "141.jpg",
      title: "Mushrooms",
    },
    {
      img: "142.jpg",
      title: "Mushrooms",
    },
    {
      img: "143.jpg",
      title: "Mushrooms",
    },
  ];

  return (
    <>
      <div className="gallery App">
        <div className="gallery-title">
          <h1>Image Gallery</h1>
          <ul className="ulAlign">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        {/* <Box sx={{ flexGrow: 1 }}> */}
        <div
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <span className="alignImageDirect">
            {itemData.map((item) => (
              <Image
                src={`${item.img}`}
                alt={item.title}
                width="275"
                height="275"
                className="imageSet"
              />
            ))}
          </span>
        </div>
        <div
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <span className="alignImageDirect1">
            {itemData1.map((item_set2) => (
              <Image
                src={`${item_set2.img}`}
                alt={item_set2.title}
                width="275"
                height="275"
                className="imageSet1"
              />
            ))}
          </span>
        </div>

        {/* </Box> */}
      </div>

      <div
        className="horizontalGrid"
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <h1 className="belowTitle">My Photo Gallery</h1>
        <span className="alignImageDirect2">
          {itemData2.map((item_set3) => (
            <Image
              src={`${item_set3.img}`}
              alt={item_set3.title}
              width="275"
              height="275"
              className="imageSet2"
            />
          ))}
        </span>
      </div>
    </>
  );
};

export default Gallery;
