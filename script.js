(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_t.jpg"
  }
 ],
 "label": "20220916_215733_072",
 "id": "panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D",
 "thumbnailUrl": "media/panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -84.49,
  "pitch": -1.84
 },
 "class": "PanoramaCamera",
 "id": "camera_7E3269E4_6F47_BAD3_41D4_049650C8C6AC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_t.jpg"
  }
 ],
 "label": "20220916_220651_296",
 "id": "panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B",
 "thumbnailUrl": "media/panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3"
  }
 ],
 "vfov": 180,
 "id": "panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A",
 "thumbnailUrl": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220423_173",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_4E9C1D27_6AF0_1D01_41B7_2726B78B1CC2",
  "this.overlay_4E048CC2_6AEF_E300_4197_C3D51842D8DD"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_t.jpg"
  }
 ],
 "label": "20220916_220041_067",
 "id": "panorama_52CBFF36_5841_768E_41A1_C38527870382",
 "thumbnailUrl": "media/panorama_52CBFF36_5841_768E_41A1_C38527870382_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_t.jpg"
  }
 ],
 "label": "20220916_215802_993",
 "id": "panorama_523D3EC7_5840_978D_41B0_8C8F29913171",
 "thumbnailUrl": "media/panorama_523D3EC7_5840_978D_41B0_8C8F29913171_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_t.jpg"
  }
 ],
 "label": "20220916_220836_266(1)",
 "id": "panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43",
 "thumbnailUrl": "media/panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF",
   "camera": "this.panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61",
   "camera": "this.panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E",
   "camera": "this.panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6",
   "camera": "this.panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71",
   "camera": "this.panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B",
   "camera": "this.panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52CF6B97_5843_9D8D_41C3_257249F566D3",
   "camera": "this.panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52379977_5843_FA8E_41BC_73102C1429D5",
   "camera": "this.panorama_52379977_5843_FA8E_41BC_73102C1429D5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52350696_5843_978F_41CD_83F58AB9C140",
   "camera": "this.panorama_52350696_5843_978F_41CD_83F58AB9C140_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52349372_5843_AE86_41C3_EC78CA32893F",
   "camera": "this.panorama_52349372_5843_AE86_41C3_EC78CA32893F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D",
   "camera": "this.panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_523110C0_5843_6B82_41C9_8CA37E126E12",
   "camera": "this.panorama_523110C0_5843_6B82_41C9_8CA37E126E12_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5236BDAE_5843_759E_41D2_78F301BCF522",
   "camera": "this.panorama_5236BDAE_5843_759E_41D2_78F301BCF522_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A",
   "camera": "this.panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_523D07D6_5840_B58E_41C3_0F39042277F3",
   "camera": "this.panorama_523D07D6_5840_B58E_41C3_0F39042277F3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945",
   "camera": "this.panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5231D5F3_5840_F585_41D3_5861E8E456D9",
   "camera": "this.panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_523C84ED_5840_EB82_41BE_3C23F9828021",
   "camera": "this.panorama_523C84ED_5840_EB82_41BE_3C23F9828021_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D",
   "camera": "this.panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1",
   "camera": "this.panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_523D3EC7_5840_978D_41B0_8C8F29913171",
   "camera": "this.panorama_523D3EC7_5840_978D_41B0_8C8F29913171_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D",
   "camera": "this.panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550",
   "camera": "this.panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0",
   "camera": "this.panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52328627_5841_968D_41AD_1C866D863255",
   "camera": "this.panorama_52328627_5841_968D_41AD_1C866D863255_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_523D1551_5841_EA82_4186_B51A0FAF8F62",
   "camera": "this.panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5",
   "camera": "this.panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A",
   "camera": "this.panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4",
   "camera": "this.panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4",
   "camera": "this.panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52CBFF36_5841_768E_41A1_C38527870382",
   "camera": "this.panorama_52CBFF36_5841_768E_41A1_C38527870382_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743",
   "camera": "this.panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C",
   "camera": "this.panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681",
   "camera": "this.panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF",
   "camera": "this.panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52CEF810_5840_9A83_41C6_A4180B5A7135",
   "camera": "this.panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3",
   "camera": "this.panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62",
   "camera": "this.panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B",
   "camera": "this.panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A",
   "camera": "this.panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2",
   "camera": "this.panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3",
   "camera": "this.panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5231C786_5847_958E_41B3_26BDAD1C96E1",
   "camera": "this.panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B",
   "camera": "this.panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5233D45D_5847_6ABD_419F_EB00814C914E",
   "camera": "this.panorama_5233D45D_5847_6ABD_419F_EB00814C914E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185",
   "camera": "this.panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5237CF42_5840_B686_4182_E46A18276486",
   "camera": "this.panorama_5237CF42_5840_B686_4182_E46A18276486_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C",
   "camera": "this.panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651",
   "camera": "this.panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B",
   "camera": "this.panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F",
   "camera": "this.panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97",
   "camera": "this.panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0",
   "camera": "this.panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5233353C_5841_AA83_417B_5E062BE0EF54",
   "camera": "this.panorama_5233353C_5841_AA83_417B_5E062BE0EF54_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E",
   "camera": "this.panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52334227_5841_EE8E_41D2_92888328E01A",
   "camera": "this.panorama_52334227_5841_EE8E_41D2_92888328E01A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 56)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C",
   "camera": "this.panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 56, 57)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43",
   "camera": "this.panorama_52304D8A_5841_9586_41B8_9BF7B10BDB43_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 57, 58)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52324C82_5841_BB87_41B7_58A2BD50D58E",
   "camera": "this.panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 58, 59)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52326944_5841_9A82_41C7_6E2809C58873",
   "camera": "this.panorama_52326944_5841_9A82_41C7_6E2809C58873_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 59, 60)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD",
   "camera": "this.panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 60, 61)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A",
   "camera": "this.panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 61, 62)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C",
   "camera": "this.panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 62, 63)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A",
   "camera": "this.panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 63, 64)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 64, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52CEF810_5840_9A83_41C6_A4180B5A7135"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 176.97,
   "backwardYaw": -101.35,
   "distance": 1,
   "panorama": "this.panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF"
  }
 ],
 "vfov": 180,
 "id": "panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3",
 "thumbnailUrl": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220248_243",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_7137E75B_6BF0_2D00_41C9_2237E640E2A3",
  "this.overlay_7032273B_6BF0_2D01_41D1_490153631D5C"
 ],
 "hfovMax": 130
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_t.jpg"
  }
 ],
 "label": "20220916_215627_337",
 "id": "panorama_5236BDAE_5843_759E_41D2_78F301BCF522",
 "thumbnailUrl": "media/panorama_5236BDAE_5843_759E_41D2_78F301BCF522_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_t.jpg"
  }
 ],
 "label": "20220916_220634_060",
 "id": "panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651",
 "thumbnailUrl": "media/panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.7,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7E06EA60_6F47_B9D2_41D4_D662E03FC981",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF"
  }
 ],
 "vfov": 180,
 "id": "panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681",
 "thumbnailUrl": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220202_487",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_7640F162_6AD3_E500_41C3_1C4A79298E95"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52350696_5843_978F_41CD_83F58AB9C140_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.92,
  "pitch": -1.84
 },
 "class": "PanoramaCamera",
 "id": "camera_7D18C7DD_6F47_B6ED_418E_5899B9DCCFC8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -60.75,
   "backwardYaw": 100.56,
   "distance": 1,
   "panorama": "this.panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A"
  }
 ],
 "vfov": 180,
 "id": "panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4",
 "thumbnailUrl": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220012_146",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_7B074E9D_6838_CB13_41CC_50ED8B9698E7",
  "this.overlay_7CA9C22A_683B_BB31_41CC_01E52871170D"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52CF6B97_5843_9D8D_41C3_257249F566D3"
  }
 ],
 "vfov": 180,
 "id": "panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C",
 "thumbnailUrl": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_t.jpg",
 "hfovMin": "135%",
 "label": "20220914_160320_713",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_79600194_6A50_2507_41D3_44C6D65ECEAF",
  "this.overlay_4E811615_6AD0_2F01_41D9_3635EA13CB3D"
 ],
 "hfovMax": 130
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_t.jpg"
  }
 ],
 "label": "20220916_220104_257",
 "id": "panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743",
 "thumbnailUrl": "media/panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_t.jpg"
  }
 ],
 "label": "20220916_220146_574",
 "id": "panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C",
 "thumbnailUrl": "media/panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 71.63,
  "pitch": 11.02
 },
 "class": "PanoramaCamera",
 "id": "camera_7DDC2875_6F47_B9B2_41D3_2CF9187AF370",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7EB6F6CB_6F47_B6D6_41CB_8742BA185171",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -69.75,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7E1CFA28_6F47_B953_41D5_0911D8149E54",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A"
  }
 ],
 "vfov": 180,
 "id": "panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62",
 "thumbnailUrl": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220354_189",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_75E88C4A_6AF0_E300_41DA_B6121667C2F8"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52350696_5843_978F_41CD_83F58AB9C140"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 165.89,
   "backwardYaw": -6.92,
   "distance": 1,
   "panorama": "this.panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52CF6B97_5843_9D8D_41C3_257249F566D3"
  }
 ],
 "vfov": 180,
 "id": "panorama_52379977_5843_FA8E_41BC_73102C1429D5",
 "thumbnailUrl": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_215528_073",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_5691FB72_59D8_8F24_41B0_7C53E6D85D70",
  "this.overlay_568355BB_59C8_9B24_4113_9198C86CBF88",
  "this.overlay_7793E6DB_65B4_7B48_41A7_E7C6AADEE1D3",
  "this.overlay_7CAD8A4A_6AD0_6703_41BA_91DEDCF5D2EB"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_523110C0_5843_6B82_41C9_8CA37E126E12_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -148.09,
   "backwardYaw": 78.69,
   "distance": 1,
   "panorama": "this.panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 1.02,
   "backwardYaw": 169.98,
   "distance": 1,
   "panorama": "this.panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E"
  }
 ],
 "vfov": 180,
 "id": "panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61",
 "thumbnailUrl": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220314_564",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_480F84A6_5843_6B8F_41C4_89380188F6D9",
  "this.overlay_484BAF69_58C0_9685_41B2_805299AC674F"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 31.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7EACD6DD_6F47_B6ED_41C7_DEEEA5C83A2F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 137.76,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7D08D805_6F47_B95D_416F_602ED17A815E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_t.jpg"
  }
 ],
 "label": "20220916_215459_930",
 "id": "panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B",
 "thumbnailUrl": "media/panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 100.56,
   "backwardYaw": -60.75,
   "distance": 1,
   "panorama": "this.panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5"
  }
 ],
 "vfov": 180,
 "id": "panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A",
 "thumbnailUrl": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_215953_561",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_7DE9F858_6BB0_230F_41D3_2F4534A94250",
  "this.overlay_73D227E3_6BB0_2D00_41D5_6E52DFAFEDEF"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.84,
  "pitch": -7.35
 },
 "class": "PanoramaCamera",
 "id": "camera_7D9038FD_6F47_BAAD_41CA_C63C47546373",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "id": "panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B",
 "thumbnailUrl": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220409_851",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_755F75F0_6AF0_6D1F_41D8_49F2C0E6C668",
  "this.overlay_74DE5024_6AF7_E307_41B1_0E33E9812EF6",
  "this.overlay_4BA3AB90_6AF0_651F_41D7_8A4A280C5D26",
  "this.overlay_4B4832AC_6AF0_E707_41D9_E5CDB64991BA"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -101.35,
   "backwardYaw": 176.97,
   "distance": 1,
   "panorama": "this.panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 78.69,
   "backwardYaw": -148.09,
   "distance": 1,
   "panorama": "this.panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61"
  }
 ],
 "vfov": 180,
 "id": "panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF",
 "thumbnailUrl": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220304_377",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_49DE822A_58C0_AE87_41C3_C58F95C560E6",
  "this.overlay_72520527_6BF0_6D01_41C9_C5E904625344"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5233DCD7_5840_9B8E_41D2_6F1F91EAD651_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_t.jpg"
  }
 ],
 "label": "20220916_215606_222",
 "id": "panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D",
 "thumbnailUrl": "media/panorama_52352220_5843_AE82_41BB_D94F7E3D2E5D_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5231C786_5847_958E_41B3_26BDAD1C96E1"
  }
 ],
 "vfov": 180,
 "id": "panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3",
 "thumbnailUrl": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220451_912",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_4FF68D83_6AD0_1D01_41D0_502401B20CC3",
  "this.overlay_49CC24DF_6AD0_2301_41D4_5417BC78F333",
  "this.overlay_4FFB1768_6AD1_ED0F_41B0_BD723CA2E9D2"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -82.3,
   "backwardYaw": 50.33,
   "distance": 1,
   "panorama": "this.panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A"
  }
 ],
 "vfov": 180,
 "id": "panorama_52349372_5843_AE86_41C3_EC78CA32893F",
 "thumbnailUrl": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_215552_029",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_797CA3AB_6A70_2501_41D6_638B0562AD28",
  "this.overlay_783D63A2_6A77_E503_41D0_7AE3CCB52276",
  "this.overlay_7B9B9AFC_6A70_2707_41D4_3B8ABB715F6D"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -83.53,
   "backwardYaw": 9,
   "distance": 1,
   "panorama": "this.panorama_5233D45D_5847_6ABD_419F_EB00814C914E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5237CF42_5840_B686_4182_E46A18276486"
  }
 ],
 "vfov": 180,
 "id": "panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185",
 "thumbnailUrl": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220540_476",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_47C74A1C_6AB0_2707_41DA_6ED9B63EB83D",
  "this.overlay_467C7B60_6AB0_2500_41D8_684DC521BE70"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550"
  }
 ],
 "vfov": 180,
 "id": "panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0",
 "thumbnailUrl": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_215850_561",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_4E407E61_6AD1_FF01_41DA_5D27BC5E1518"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 7.77,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7D737726_6F47_B75C_41CA_06D9AE0E9AC8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -15.75,
   "backwardYaw": 110.25,
   "distance": 1,
   "panorama": "this.panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 169.98,
   "backwardYaw": 1.02,
   "distance": 1,
   "panorama": "this.panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61"
  }
 ],
 "vfov": 180,
 "id": "panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E",
 "thumbnailUrl": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220326_265",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_48168626_58C1_968F_41A0_9E1E6CB8A2B2",
  "this.overlay_49E3ED86_58C0_B58E_41C9_2573EA2C9CFE"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_523D07D6_5840_B58E_41C3_0F39042277F3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52326944_5841_9A82_41C7_6E2809C58873_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_523DB36C_5840_AE82_41D4_F6CFF79C925D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 119.25,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7C450958_6F47_BBF3_41DB_5AF39C690CDB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62"
  }
 ],
 "vfov": 180,
 "id": "panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2",
 "thumbnailUrl": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220436_050",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_4D7C3FCA_6AD3_FD03_41D2_C0B131FBBC53",
  "this.overlay_4B4D753B_6AD0_2D00_41C6_2B591B7A8920"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -95.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7C55D945_6F47_BBD2_41B6_FADF8AD7EF3E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_t.jpg"
  }
 ],
 "label": "20220916_220026_521",
 "id": "panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4",
 "thumbnailUrl": "media/panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C"
  }
 ],
 "vfov": 180,
 "id": "panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A",
 "thumbnailUrl": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_t.jpg",
 "hfovMin": "135%",
 "label": "20220914_160329_798",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_415700E9_6AD0_6301_41AD_EC64269EB13B",
  "this.overlay_4D19E00B_6AB0_6301_41D7_67E5C8F97FCA"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52CACD4C_5840_9A82_41C6_4A92BF4C6743_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_t.jpg"
  }
 ],
 "label": "20220916_215638_603",
 "id": "panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A",
 "thumbnailUrl": "media/panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.47,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7C72E924_6F47_BB52_41D3_0E7B7682074E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -102.86,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7E833712_6F47_B777_41D9_CE4FEC8530F5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7DBEE8BF_6F47_BAAE_41B0_69290867AE55",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_t.jpg"
  }
 ],
 "label": "20220916_220813_411",
 "id": "panorama_52334227_5841_EE8E_41D2_92888328E01A",
 "thumbnailUrl": "media/panorama_52334227_5841_EE8E_41D2_92888328E01A_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164.25,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7DAED8D9_6F47_BAF5_41CC_50067F80C443",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A"
  }
 ],
 "vfov": 180,
 "id": "panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D",
 "thumbnailUrl": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_t.jpg",
 "hfovMin": "135%",
 "label": "20220914_160336_800",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_42A76925_6AB0_E500_41CF_62FA185C81F4"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5354FE56_5843_B68F_41D2_3FCE36411C5B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 10.23,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7DEA1850_6F47_B9F2_41C7_B77BF326F864",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.82,
  "pitch": -4.59
 },
 "class": "PanoramaCamera",
 "id": "camera_7D65673B_6F47_B7B5_41D2_ABD814694B66",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_t.jpg"
  }
 ],
 "label": "20220916_215659_471",
 "id": "panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945",
 "thumbnailUrl": "media/panorama_523D761F_5840_96BE_41CC_C5C3E0EC9945_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3"
  }
 ],
 "vfov": 180,
 "id": "panorama_52CEF810_5840_9A83_41C6_A4180B5A7135",
 "thumbnailUrl": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220237_102",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_71BC7851_6BF0_E301_41CA_8A91C6900059",
  "this.overlay_705884F9_6BF0_6301_41D1_B6383D8E4656",
  "this.overlay_61D9B0AE_6F7F_8AAF_41C3_EAE0AEC56327"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF"
  }
 ],
 "vfov": 180,
 "id": "panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71",
 "thumbnailUrl": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220041_067",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_777A97B6_6AB1_ED03_41D5_1C5A059CB717"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -96.43,
  "pitch": -10.1
 },
 "class": "PanoramaCamera",
 "id": "camera_7E29CA06_6F47_B95F_41D3_8C6CC8FD2C87",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.65,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7E93B701_6F47_B755_41CF_E9C5BAF2C399",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -101.31,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7D36E794_6F47_B773_41D0_0C9B74FD74DA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_t.jpg"
  }
 ],
 "label": "20220916_220730_638",
 "id": "panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0",
 "thumbnailUrl": "media/panorama_5230881E_5841_9ABF_41A7_C0BE2790F0E0_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.84,
  "pitch": -1.84
 },
 "class": "PanoramaCamera",
 "id": "camera_7E23BA16_6F47_B97F_41A4_ECBC6C8A9471",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52379977_5843_FA8E_41BC_73102C1429D5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52349372_5843_AE86_41C3_EC78CA32893F"
  }
 ],
 "vfov": 180,
 "id": "panorama_52350696_5843_978F_41CD_83F58AB9C140",
 "thumbnailUrl": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_215541_717",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_7460A9AC_65BB_89C8_41B9_6B72B1DBAE9F",
  "this.overlay_66690193_6818_D917_4176_892B662FCA22"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5237CF42_5840_B686_4182_E46A18276486_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 153.37,
  "pitch": -14.69
 },
 "class": "PanoramaCamera",
 "id": "camera_7D80E912_6F47_BB76_41BE_24D4848DF91A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52334227_5841_EE8E_41D2_92888328E01A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52309ACD_5840_BF82_41D3_1A7F3D7B929C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52CEF810_5840_9A83_41C6_A4180B5A7135"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71"
  }
 ],
 "vfov": 180,
 "id": "panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF",
 "thumbnailUrl": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220222_831",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_709FE2DB_6BF0_2701_41C2_FEB140719A63",
  "this.overlay_77A0C116_6BF0_2503_41D4_7B5F7899CE1A",
  "this.overlay_763C687A_6AD0_E303_41D6_597DC3E8487C"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 84.89,
   "backwardYaw": -169.77,
   "distance": 1,
   "panorama": "this.panorama_523D1551_5841_EA82_4186_B51A0FAF8F62"
  }
 ],
 "vfov": 180,
 "id": "panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5",
 "thumbnailUrl": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_215938_537",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_722FFC69_6BB0_6301_41D1_B13FD6048B0D"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.52,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7D474774_6F47_B7B3_41C2_EC6932C83C38",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_523C84ED_5840_EB82_41BE_3C23F9828021_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.08,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7EC386B6_6F47_B6BF_41DA_E1D00A0C37F5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -105.61,
  "pitch": -0.92
 },
 "class": "PanoramaCamera",
 "id": "camera_7C27897F_6F47_BBAE_41CE_4777F8D10214",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_t.jpg"
  }
 ],
 "label": "20220916_220705_576",
 "id": "panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F",
 "thumbnailUrl": "media/panorama_52CD797C_5840_9A83_41C1_7EBE90FFDC1F_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52CBFF36_5841_768E_41A1_C38527870382_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_523E3B25_5840_9E8D_41C2_C5CE81B6F83A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 155.2,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7DCC6897_6F47_B97E_41C8_1DE2234A06B0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52328627_5841_968D_41AD_1C866D863255_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52328627_5841_968D_41AD_1C866D863255_t.jpg"
  }
 ],
 "label": "20220916_215905_095",
 "id": "panorama_52328627_5841_968D_41AD_1C866D863255",
 "thumbnailUrl": "media/panorama_52328627_5841_968D_41AD_1C866D863255_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.05,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7C628934_6F47_BBB2_41D0_079BFDFC1785",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -6.92,
   "backwardYaw": 165.89,
   "distance": 1,
   "panorama": "this.panorama_52379977_5843_FA8E_41BC_73102C1429D5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 110.25,
   "backwardYaw": -15.75,
   "distance": 1,
   "panorama": "this.panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -84.48,
   "backwardYaw": 68.93,
   "distance": 1,
   "panorama": "this.panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD"
  }
 ],
 "vfov": 180,
 "id": "panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6",
 "thumbnailUrl": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220342_581",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_5479E09D_59C8_791C_41C4_B0AAB4DC49C0",
  "this.overlay_5698ADE2_59D8_8B24_41BD_CA7EA9EA30CA",
  "this.overlay_48E04D13_59D8_88E4_41D3_B6AB8D6F9EA9",
  "this.overlay_49ADAB19_59FF_88E4_41C3_277ADB91601E"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 68.93,
   "backwardYaw": -84.48,
   "distance": 1,
   "panorama": "this.panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62"
  }
 ],
 "vfov": 180,
 "id": "panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD",
 "thumbnailUrl": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_t.jpg",
 "hfovMin": "135%",
 "label": "20220914_155125_156",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_64F0C51E_6A50_6D03_41BA_5EB99F8FC003",
  "this.overlay_654707F1_6A50_2D01_41C7_7469EF5D4427"
 ],
 "hfovMax": 130
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_t.jpg"
  }
 ],
 "label": "20220916_215820_020",
 "id": "panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D",
 "thumbnailUrl": "media/panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_t.jpg"
  }
 ],
 "label": "20220916_220557_453",
 "id": "panorama_5237CF42_5840_B686_4182_E46A18276486",
 "thumbnailUrl": "media/panorama_5237CF42_5840_B686_4182_E46A18276486_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52328627_5841_968D_41AD_1C866D863255_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 177.95,
   "backwardYaw": -172.23,
   "distance": 1,
   "panorama": "this.panorama_5233D45D_5847_6ABD_419F_EB00814C914E"
  }
 ],
 "vfov": 180,
 "id": "panorama_5231C786_5847_958E_41B3_26BDAD1C96E1",
 "thumbnailUrl": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220504_797",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_4C270564_6AB0_2D07_41B1_87B79CFFFD20",
  "this.overlay_42FFFD88_6AB0_3D00_41A2_F7828AF2AB22"
 ],
 "hfovMax": 130
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_t.jpg"
  }
 ],
 "label": "20220916_220621_002",
 "id": "panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C",
 "thumbnailUrl": "media/panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52CC2C51_5840_BA82_41A2_514AFC581F0B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.98,
  "pitch": -11.02
 },
 "class": "PanoramaCamera",
 "id": "camera_7E2F19F5_6F47_BABD_41CF_8714E07D7071",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_523110C0_5843_6B82_41C9_8CA37E126E12"
  }
 ],
 "vfov": 180,
 "id": "panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550",
 "thumbnailUrl": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_215835_257",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_4FA376F6_6AD0_6F03_41C9_91320C63536B"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52349372_5843_AE86_41C3_EC78CA32893F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C"
  }
 ],
 "vfov": 180,
 "id": "panorama_52CF6B97_5843_9D8D_41C3_257249F566D3",
 "thumbnailUrl": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_215516_608",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_6BC3DD56_6574_8958_41D3_ACC8D32A3DED",
  "this.overlay_6A5CF15E_65AD_9948_41C1_BAD62C72F463",
  "this.overlay_74E0F682_65AF_9BBB_41B6_18E70917616A"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 9,
   "backwardYaw": -83.53,
   "distance": 1,
   "panorama": "this.panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -172.23,
   "backwardYaw": 177.95,
   "distance": 1,
   "panorama": "this.panorama_5231C786_5847_958E_41B3_26BDAD1C96E1"
  }
 ],
 "vfov": 180,
 "id": "panorama_5233D45D_5847_6ABD_419F_EB00814C914E",
 "thumbnailUrl": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220529_123",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_40ED4A55_6AB1_E701_41D7_4FA76A303E9D",
  "this.overlay_470B1D15_6AB0_3D01_41D5_3B9B89D05ECE"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5233353C_5841_AA83_417B_5E062BE0EF54_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -129.67,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7EA1B6F1_6F47_B6B5_41D0_0BE4AADE5247",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52379977_5843_FA8E_41BC_73102C1429D5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_523E7D92_5841_7586_419D_C1D47EB6ED2D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_t.jpg"
  }
 ],
 "label": "20220916_220823_905",
 "id": "panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C",
 "thumbnailUrl": "media/panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 50.33,
   "backwardYaw": -82.3,
   "distance": 1,
   "panorama": "this.panorama_52349372_5843_AE86_41C3_EC78CA32893F"
  }
 ],
 "vfov": 180,
 "id": "panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A",
 "thumbnailUrl": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_t.jpg",
 "hfovMin": "135%",
 "label": "20220914_155135_156",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_7E4D725A_6A57_E703_41CE_3BEECABD42CE",
  "this.overlay_78A127E6_6A50_6D03_41A4_F7860547761F",
  "this.overlay_797E2689_6AB0_2F01_41C8_25E8373FB6A4"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52328627_5841_968D_41AD_1C866D863255"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -169.77,
   "backwardYaw": 84.89,
   "distance": 1,
   "panorama": "this.panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5"
  }
 ],
 "vfov": 180,
 "id": "panorama_523D1551_5841_EA82_4186_B51A0FAF8F62",
 "thumbnailUrl": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_215918_772",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_4F89623D_6AD0_E701_41B9_344757B2E172",
  "this.overlay_4F631290_6AD0_2700_41D5_DA37F7736CDE"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5233D45D_5847_6ABD_419F_EB00814C914E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_t.jpg"
  }
 ],
 "label": "20220916_215650_432",
 "id": "panorama_523D07D6_5840_B58E_41C3_0F39042277F3",
 "thumbnailUrl": "media/panorama_523D07D6_5840_B58E_41C3_0F39042277F3_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.02,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7D28C7B9_6F47_B6B5_41D4_F93DC9828D53",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52CABD36_5841_9A8F_41D3_1963FD642BE4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52349372_5843_AE86_41C3_EC78CA32893F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_t.jpg"
  }
 ],
 "label": "20220916_220749_639",
 "id": "panorama_5233353C_5841_AA83_417B_5E062BE0EF54",
 "thumbnailUrl": "media/panorama_5233353C_5841_AA83_417B_5E062BE0EF54_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_t.jpg"
  }
 ],
 "label": "20220916_220836_266(2)",
 "id": "panorama_52324C82_5841_BB87_41B7_58A2BD50D58E",
 "thumbnailUrl": "media/panorama_52324C82_5841_BB87_41B7_58A2BD50D58E_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_t.jpg"
  }
 ],
 "label": "20220916_215744_753",
 "id": "panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1",
 "thumbnailUrl": "media/panorama_523C112E_5840_AA9E_41CF_F73AAA4F3BD1_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "buttonCardboardView": "this.IconButton_7FEF87AA_6F44_9757_419E_744E324FF3D9",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5231C786_5847_958E_41B3_26BDAD1C96E1"
  }
 ],
 "vfov": 180,
 "id": "panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B",
 "thumbnailUrl": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_t.jpg",
 "hfovMin": "135%",
 "label": "20220916_220516_595",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_424F684E_6AB0_2300_41D2_D25A81561568"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.33,
  "pitch": -1.84
 },
 "class": "PanoramaCamera",
 "id": "camera_7D54874D_6F47_B7EC_41D5_4DDB2E43891E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_t.jpg"
  }
 ],
 "label": "20220916_220802_203",
 "id": "panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E",
 "thumbnailUrl": "media/panorama_5230F4B2_5841_AB87_41CC_34F8EF9BF17E_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5236BDAE_5843_759E_41D2_78F301BCF522_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52CC8E49_5840_F685_41C7_5E8EBB22583C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5231FF3E_5841_F6FE_41B1_075ABA11D88C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -79.44,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7E100A4F_6F47_B9EE_41D4_1991C9939B6B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_t.jpg"
  }
 ],
 "label": "20220916_215709_813",
 "id": "panorama_5231D5F3_5840_F585_41D3_5861E8E456D9",
 "thumbnailUrl": "media/panorama_5231D5F3_5840_F585_41D3_5861E8E456D9_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -111.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7DA1A8EB_6F47_BAD5_418A_9786622B99F0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_523D3EC7_5840_978D_41B0_8C8F29913171_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_t.jpg"
  }
 ],
 "label": "20220916_220836_266",
 "id": "panorama_52326944_5841_9A82_41C7_6E2809C58873",
 "thumbnailUrl": "media/panorama_52326944_5841_9A82_41C7_6E2809C58873_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_t.jpg"
  }
 ],
 "label": "20220916_220718_569",
 "id": "panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97",
 "thumbnailUrl": "media/panorama_5233F95E_5841_7ABE_41A1_4BEF7FF94D97_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -86.33,
  "pitch": 1.84
 },
 "class": "PanoramaCamera",
 "id": "camera_7DFA082D_6F47_B952_41BB_3CF97C801303",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.98,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7E176A3A_6F47_B9B6_41BF_427B13A5E895",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_t.jpg"
  }
 ],
 "label": "20220916_215616_571",
 "id": "panorama_523110C0_5843_6B82_41C9_8CA37E126E12",
 "thumbnailUrl": "media/panorama_523110C0_5843_6B82_41C9_8CA37E126E12_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_t.jpg"
  }
 ],
 "label": "20220916_215720_877",
 "id": "panorama_523C84ED_5840_EB82_41BE_3C23F9828021",
 "thumbnailUrl": "media/panorama_523C84ED_5840_EB82_41BE_3C23F9828021_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_7C35796B_6F47_BBD5_41D2_B9272E87E5C1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "ViewerArea",
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "borderSize": 0,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingLeft": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "cursor": "hand",
 "maxHeight": 56,
 "maxWidth": 56,
 "id": "IconButton_7FEF87AA_6F44_9757_419E_744E324FF3D9",
 "horizontalAlign": "center",
 "width": 56,
 "transparencyActive": false,
 "right": "6.16%",
 "iconURL": "skin/IconButton_7FEF87AA_6F44_9757_419E_744E324FF3D9.png",
 "class": "IconButton",
 "minHeight": 1,
 "top": "9.62%",
 "borderSize": 0,
 "minWidth": 1,
 "paddingRight": 0,
 "mode": "push",
 "height": 56,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton14318"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_4E9C1D27_6AF0_1D01_41B7_2726B78B1CC2",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_636AABAA_6F44_BF57_41D8_5021E60F3BAC",
   "pitch": -28.02,
   "yaw": -3.07,
   "hfov": 12.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62, this.camera_7D54874D_6F47_B7EC_41D5_4DDB2E43891E); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.07,
   "hfov": 12.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_4E048CC2_6AEF_E300_4197_C3D51842D8DD",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6369DBAA_6F44_BF57_41D7_7C3546EA39B4",
   "pitch": -10.02,
   "yaw": -88.98,
   "hfov": 14.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.98,
   "hfov": 14.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_7137E75B_6BF0_2D00_41C9_2237E640E2A3",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F6AA693_6AD0_2F01_41CF_CEF07C8A5985",
   "pitch": -13.85,
   "yaw": 176.97,
   "hfov": 7.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF, this.camera_7E93B701_6F47_B755_41CF_E9C5BAF2C399); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.97,
   "hfov": 7.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_7032273B_6BF0_2D01_41D1_490153631D5C",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F6A7693_6AD0_2F01_4187_0475F7DDF093",
   "pitch": -8.83,
   "yaw": 78.4,
   "hfov": 8.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.4,
   "hfov": 8.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_7640F162_6AD3_E500_41C3_1C4A79298E95",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F6D7693_6AD0_2F01_41BE_F1CB5A14D688",
   "pitch": -21.48,
   "yaw": 100.43,
   "hfov": 15.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF, this.camera_7D65673B_6F47_B7B5_41D2_ABD814694B66); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.43,
   "hfov": 15.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_7B074E9D_6838_CB13_41CC_50ED8B9698E7",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7E1F72C3_6838_5B77_41B4_2DAECCACA064",
   "pitch": -12.68,
   "yaw": 71.18,
   "hfov": 16.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 71.18,
   "hfov": 16.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_7CA9C22A_683B_BB31_41CC_01E52871170D",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7F3BB421_6818_5F33_41D5_A03512709B1E",
   "pitch": -9.41,
   "yaw": -60.75,
   "hfov": 14.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A, this.camera_7E100A4F_6F47_B9EE_41D4_1991C9939B6B); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.75,
   "hfov": 14.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_79600194_6A50_2507_41D3_44C6D65ECEAF",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7FEBE44A_6AB0_6303_41D0_D4FF7F107251",
   "pitch": -9.2,
   "yaw": 87.95,
   "hfov": 13.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_52CF6B97_5843_9D8D_41C3_257249F566D3, this.camera_7D80E912_6F47_BB76_41BE_24D4848DF91A); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.95,
   "hfov": 13.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_4E811615_6AD0_2F01_41D9_3635EA13CB3D",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_63632BBA_6F44_BEB7_41DB_545ACA7D3947",
   "pitch": -8.8,
   "yaw": -94.09,
   "hfov": 13.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 63)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.09,
   "hfov": 13.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_75E88C4A_6AF0_E300_41DA_B6121667C2F8",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_636C2BAA_6F44_BF57_41D9_0A78C92667D8",
   "pitch": -10.23,
   "yaw": 1.02,
   "hfov": 11.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A, this.camera_7E2F19F5_6F47_BABD_41CF_8714E07D7071); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.02,
   "hfov": 11.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_5691FB72_59D8_8F24_41B0_7C53E6D85D70",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4AD9430A_59C8_F8E4_41CA_5F4B4BBF47B6",
   "pitch": -11.45,
   "yaw": 3.89,
   "hfov": 17.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "kabel"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.89,
   "hfov": 17.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_568355BB_59C8_9B24_4113_9198C86CBF88",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4AD9030A_59C8_F8E4_41D2_8475D253E52E",
   "pitch": -14.32,
   "yaw": 165.89,
   "hfov": 17.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BR"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6, this.camera_7EC386B6_6F47_B6BF_41DA_E1D00A0C37F5); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.89,
   "hfov": 17.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_7793E6DB_65B4_7B48_41A7_E7C6AADEE1D3",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71AD3207_65BC_9AB8_41D1_394A8E467B65",
   "pitch": -15.14,
   "yaw": -137.25,
   "hfov": 16.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "parkiran Dekanat"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.25,
   "hfov": 16.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_7CAD8A4A_6AD0_6703_41BA_91DEDCF5D2EB",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F61A693_6AD0_2F01_41C4_D36E974CEB14",
   "pitch": -4.59,
   "yaw": 56.52,
   "hfov": 8.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 56.52,
   "hfov": 8.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0_HS_3_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_480F84A6_5843_6B8F_41C4_89380188F6D9",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4B24430A_59C8_F8E4_41B0_6A85306552EE",
   "pitch": -11.86,
   "yaw": -148.09,
   "hfov": 20.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "depan FT"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF, this.camera_7D36E794_6F47_B773_41D0_0C9B74FD74DA); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.09,
   "hfov": 20.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_484BAF69_58C0_9685_41B2_805299AC674F",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4B24330A_59C8_F8E4_41D3_C6E476A3C0AD",
   "pitch": -7.77,
   "yaw": 1.02,
   "hfov": 15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "belakang lab"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E, this.camera_7D28C7B9_6F47_B6B5_41D4_F93DC9828D53); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.02,
   "hfov": 15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_7DE9F858_6BB0_230F_41D3_2F4534A94250",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F6ED693_6AD0_2F01_41D8_DDD0F83E5BB1",
   "pitch": -20.86,
   "yaw": 20.38,
   "hfov": 13.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.38,
   "hfov": 13.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_73D227E3_6BB0_2D00_41D5_6E52DFAFEDEF",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F6E6693_6AD0_2F01_41AF_AC5FECFB9AAE",
   "pitch": -27,
   "yaw": 100.56,
   "hfov": 12.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4, this.camera_7C450958_6F47_BBF3_41DB_5AF39C690CDB); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.56,
   "hfov": 12.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_755F75F0_6AF0_6D1F_41D8_49F2C0E6C668",
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_636BABAA_6F44_BF57_41DB_8F14680157CA",
   "pitch": -31.91,
   "yaw": 154.23,
   "hfov": 17.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.23,
   "hfov": 17.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_74DE5024_6AF7_E307_41B1_0E33E9812EF6",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_636B6BAA_6F44_BF57_41D8_BDA72DD2C06E",
   "pitch": -12.68,
   "yaw": -7.98,
   "hfov": 15.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.98,
   "hfov": 15.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_4BA3AB90_6AF0_651F_41D7_8A4A280C5D26",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_636B2BAA_6F44_BF57_41A3_EB8DBBA8FDA6",
   "pitch": -21.89,
   "yaw": 85.5,
   "hfov": 10.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.5,
   "hfov": 10.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_4B4832AC_6AF0_E707_41D9_E5CDB64991BA",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_636A9BAA_6F44_BF57_41BB_E48EE891ABF8",
   "pitch": -11.66,
   "yaw": -84.27,
   "hfov": 11.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.27,
   "hfov": 11.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_49DE822A_58C0_AE87_41C3_C58F95C560E6",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F67B693_6AD0_2F01_41D3_577134D420A5",
   "pitch": -7.34,
   "yaw": 78.69,
   "hfov": 11.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "samping aula"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61, this.camera_7EACD6DD_6F47_B6ED_41C7_DEEEA5C83A2F); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.69,
   "hfov": 11.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_72520527_6BF0_6D01_41C9_C5E904625344",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F66D693_6AD0_2F01_41CE_EBCCC5B782EA",
   "pitch": -11.06,
   "yaw": -101.35,
   "hfov": 5.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3, this.camera_7EB6F6CB_6F47_B6D6_41CB_8742BA185171); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.35,
   "hfov": 5.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_4FF68D83_6AD0_1D01_41D0_502401B20CC3",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_63689BAA_6F44_BF57_41D2_920E31C97514",
   "pitch": -32.73,
   "yaw": -135.41,
   "hfov": 17.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A, this.camera_7D9038FD_6F47_BAAD_41CA_C63C47546373); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.41,
   "hfov": 17.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_49CC24DF_6AD0_2301_41D4_5417BC78F333",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_63680BAA_6F44_BF57_41D0_3F8B57A60FBE",
   "pitch": -10.64,
   "yaw": 19.64,
   "hfov": 20.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.64,
   "hfov": 20.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_4FFB1768_6AD1_ED0F_41B0_BD723CA2E9D2",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_63690BAA_6F44_BF57_41CB_DB1D9FDEEFA9",
   "pitch": -28.02,
   "yaw": 89.59,
   "hfov": 15.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.59,
   "hfov": 15.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_797CA3AB_6A70_2501_41D6_638B0562AD28",
 "data": {
  "label": "Arrow 02b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_7FEF443E_6AB0_6303_41CB_46F565F98189",
   "pitch": -9,
   "yaw": 42.55,
   "hfov": 16.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.55,
   "hfov": 16.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_783D63A2_6A77_E503_41D0_7AE3CCB52276",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7FEF143E_6AB0_6303_41B5_BB13749CD585",
   "pitch": -10.64,
   "yaw": -159.55,
   "hfov": 16.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.55,
   "hfov": 16.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_7B9B9AFC_6A70_2707_41D4_3B8ABB715F6D",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7FEEC448_6AB0_630F_41D7_353CEC08F2B2",
   "pitch": -9,
   "yaw": -82.3,
   "hfov": 15.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A, this.camera_7EA1B6F1_6F47_B6B5_41D0_0BE4AADE5247); this.mainPlayList.set('selectedIndex', 61)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.3,
   "hfov": 15.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0_HS_2_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_47C74A1C_6AB0_2707_41DA_6ED9B63EB83D",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6365FBAA_6F44_BF57_41D5_37F8E92A2D81",
   "pitch": -14.32,
   "yaw": 6.75,
   "hfov": 14.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.75,
   "hfov": 14.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_467C7B60_6AB0_2500_41D8_684DC521BE70",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_63654BAA_6F44_BF57_41C6_3AE3BD7053DB",
   "pitch": -6.95,
   "yaw": -83.53,
   "hfov": 14.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5233D45D_5847_6ABD_419F_EB00814C914E, this.camera_7C35796B_6F47_BBD5_41D2_B9272E87E5C1); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.53,
   "hfov": 14.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_4E407E61_6AD1_FF01_41DA_5D27BC5E1518",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6371BB9A_6F44_BF77_41DB_1A82DDC5BD1F",
   "pitch": -20.45,
   "yaw": 158.73,
   "hfov": 14.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.73,
   "hfov": 14.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_48168626_58C1_968F_41A0_9E1E6CB8A2B2",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4B24F30A_59C8_F8E4_41D0_AF021CE4D6F2",
   "pitch": -6.34,
   "yaw": -15.75,
   "hfov": 15.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "pertigaan masjid"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6, this.camera_7E1CFA28_6F47_B953_41D5_0911D8149E54); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.75,
   "hfov": 15.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_49E3ED86_58C0_B58E_41C9_2573EA2C9CFE",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4B27430A_59C8_F8E4_419E_2AB60F7C0310",
   "pitch": -13.3,
   "yaw": 169.98,
   "hfov": 14.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "samping aula"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61, this.camera_7E176A3A_6F47_B9B6_41BF_427B13A5E895); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.98,
   "hfov": 14.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_4D7C3FCA_6AD3_FD03_41D2_C0B131FBBC53",
 "data": {
  "label": "Arrow 02b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_63695BAA_6F44_BF57_41BB_9993BE371946",
   "pitch": -13.3,
   "yaw": 2.05,
   "hfov": 11.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.05,
   "hfov": 11.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_4B4D753B_6AD0_2D00_41C6_2B591B7A8920",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_63690BAA_6F44_BF57_41CC_91E5492F6574",
   "pitch": -25.16,
   "yaw": -102.68,
   "hfov": 14.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62, this.camera_7E833712_6F47_B777_41D9_CE4FEC8530F5); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.68,
   "hfov": 14.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_415700E9_6AD0_6301_41AD_EC64269EB13B",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_63624BBA_6F44_BEB7_41C3_46721BC7B242",
   "pitch": -11.45,
   "yaw": -134.59,
   "hfov": 15.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C, this.camera_7E23BA16_6F47_B97F_41A4_ECBC6C8A9471); this.mainPlayList.set('selectedIndex', 62)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.59,
   "hfov": 15.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_4D19E00B_6AB0_6301_41D7_67E5C8F97FCA",
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_1_HS_1_0.png",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.07,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 30.13,
   "hfov": 4.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 64)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.13,
   "hfov": 4.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_42A76925_6AB0_E500_41CF_62FA185C81F4",
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_1_HS_0_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -24.69,
   "hfov": 7.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A, this.camera_7DCC6897_6F47_B97E_41C8_1DE2234A06B0); this.mainPlayList.set('selectedIndex', 63)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.69,
   "hfov": 7.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4CC5128B_6AB0_2701_41C0_5C1BB3AF532D_1_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_71BC7851_6BF0_E301_41CA_8A91C6900059",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F6B9693_6AD0_2F01_41C6_31B03BD59BB6",
   "pitch": -10.43,
   "yaw": -149.32,
   "hfov": 12.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF, this.camera_7D08D805_6F47_B95D_416F_602ED17A815E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.32,
   "hfov": 12.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_705884F9_6BF0_6301_41D1_B6383D8E4656",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F6B0693_6AD0_2F01_41C0_1ED6FDD110FB",
   "pitch": -14.11,
   "yaw": -94.09,
   "hfov": 11.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3, this.camera_7DFA082D_6F47_B952_41BB_3CF97C801303); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.09,
   "hfov": 11.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_61D9B0AE_6F7F_8AAF_41C3_EAE0AEC56327",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_60BF4E90_6F7D_F972_41D8_5A40554C4E22",
   "pitch": -14.94,
   "yaw": 35.82,
   "hfov": 11.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF, this.camera_7D18C7DD_6F47_B6ED_418E_5899B9DCCFC8); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.82,
   "hfov": 11.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_777A97B6_6AB1_ED03_41D5_1C5A059CB717",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F63D693_6AD0_2F01_41D7_537C3E7347CD",
   "pitch": -8.18,
   "yaw": 103.09,
   "hfov": 9.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.09,
   "hfov": 9.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_7460A9AC_65BB_89C8_41B9_6B72B1DBAE9F",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71ADE207_65BC_9AB8_41CB_D71979592E3C",
   "pitch": -11.05,
   "yaw": 21.48,
   "hfov": 20.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_52379977_5843_FA8E_41BC_73102C1429D5, this.camera_7DDC2875_6F47_B9B2_41D3_2CF9187AF370); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.48,
   "hfov": 20.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_66690193_6818_D917_4176_892B662FCA22",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A2F840C_6828_5EF1_41D0_ED06439FC535",
   "pitch": -13.09,
   "yaw": 159.95,
   "hfov": 19.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.95,
   "hfov": 19.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_709FE2DB_6BF0_2701_41C2_FEB140719A63",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F6CC693_6AD0_2F01_41D3_89CA905DF63D",
   "pitch": -20,
   "yaw": 173.81,
   "hfov": 11.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_52CEF810_5840_9A83_41C6_A4180B5A7135, this.camera_7C27897F_6F47_BBAE_41CE_4777F8D10214); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.81,
   "hfov": 11.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_77A0C116_6BF0_2503_41D4_7B5F7899CE1A",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F6C4693_6AD0_2F01_41B6_A24CC22490B8",
   "pitch": -11.15,
   "yaw": 15.76,
   "hfov": 16.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71, this.camera_7E3269E4_6F47_BAD3_41D4_049650C8C6AC); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.76,
   "hfov": 16.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_763C687A_6AD0_E303_41D6_597DC3E8487C",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F6C1693_6AD0_2F01_41BE_965D256E8B4E",
   "pitch": -17.18,
   "yaw": -6.55,
   "hfov": 19.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02c Left"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.55,
   "hfov": 19.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_722FFC69_6BB0_6301_41D1_B13FD6048B0D",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4F6F5693_6AD0_2F01_41D9_BF59AF0E5E48",
   "pitch": -24.14,
   "yaw": 84.89,
   "hfov": 12.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_523D1551_5841_EA82_4186_B51A0FAF8F62, this.camera_7DEA1850_6F47_B9F2_41C7_B77BF326F864); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.89,
   "hfov": 12.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_5479E09D_59C8_791C_41C4_B0AAB4DC49C0",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A20840C_6828_5EF1_41C0_A7392780933E",
   "pitch": -11.03,
   "yaw": -84.48,
   "hfov": 16.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "letter U"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD, this.camera_7DA1A8EB_6F47_BAD5_418A_9786622B99F0); this.mainPlayList.set('selectedIndex', 60)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.48,
   "hfov": 16.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_5698ADE2_59D8_8B24_41BD_CA7EA9EA30CA",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71A0A207_65BC_9AB8_41D5_CBE4F331C97D",
   "pitch": -2.99,
   "yaw": -6.92,
   "hfov": 6.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BR"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_52379977_5843_FA8E_41BC_73102C1429D5, this.camera_7DBEE8BF_6F47_BAAE_41B0_69290867AE55); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.92,
   "hfov": 6.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_48E04D13_59D8_88E4_41D3_B6AB8D6F9EA9",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A20440C_6828_5EF1_41C1_B7FF8392E472",
   "pitch": -10.62,
   "yaw": 110.25,
   "hfov": 18.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "depan parkiran BR"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E, this.camera_7DAED8D9_6F47_BAF5_41CC_50067F80C443); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.25,
   "hfov": 18.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_49ADAB19_59FF_88E4_41C3_277ADB91601E",
 "data": {
  "label": "letter U"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_71A31207_65BC_9AB8_41D0_7C232745691C",
   "pitch": -2.62,
   "yaw": 1.17,
   "hfov": 7.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.17,
   "hfov": 7.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_64F0C51E_6A50_6D03_41BA_5EB99F8FC003",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B5F9E5D_6A50_3F01_41B5_A26D185195B7",
   "pitch": -7.57,
   "yaw": -100.02,
   "hfov": 13.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.02,
   "hfov": 13.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_654707F1_6A50_2D01_41C7_7469EF5D4427",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B5FCE5D_6A50_3F01_41AF_3A892E9B290C",
   "pitch": -9.2,
   "yaw": 68.93,
   "hfov": 14.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6, this.camera_7D474774_6F47_B7B3_41C2_EC6932C83C38); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.93,
   "hfov": 14.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_4C270564_6AB0_2D07_41B1_87B79CFFFD20",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6368ABAA_6F44_BF57_41C5_21E6CA2577F1",
   "pitch": -11.86,
   "yaw": 81.82,
   "hfov": 13.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02a"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.82,
   "hfov": 13.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_42FFFD88_6AB0_3D00_41A2_F7828AF2AB22",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_63682BAA_6F44_BF57_41CD_83B4859653AF",
   "pitch": -17.18,
   "yaw": 177.95,
   "hfov": 13.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5233D45D_5847_6ABD_419F_EB00814C914E, this.camera_7D737726_6F47_B75C_41CA_06D9AE0E9AC8); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.95,
   "hfov": 13.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_4FA376F6_6AD0_6F03_41C9_91320C63536B",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_63723B9A_6F44_BF77_41C7_B665E9A98EAE",
   "pitch": -10.23,
   "yaw": -0.49,
   "hfov": 14.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.49,
   "hfov": 14.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_6BC3DD56_6574_8958_41D3_ACC8D32A3DED",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71A3D207_65BC_9AB8_41C0_42AA1AF14262",
   "pitch": -8.91,
   "yaw": 117.59,
   "hfov": 11.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.59,
   "hfov": 11.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_6A5CF15E_65AD_9948_41C1_BAD62C72F463",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71A27207_65BC_9AB8_41D1_088B0F33A6A2",
   "pitch": -6.85,
   "yaw": -10.06,
   "hfov": 11.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 62)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.06,
   "hfov": 11.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_74E0F682_65AF_9BBB_41B6_18E70917616A",
 "data": {
  "label": "Arrow 02b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_71A2E207_65BC_9AB8_41AF_2BFC318F0CEC",
   "pitch": -11.56,
   "yaw": -107.43,
   "hfov": 11.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.43,
   "hfov": 11.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_40ED4A55_6AB1_E701_41D7_4FA76A303E9D",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6366CBAA_6F44_BF57_41CA_C59D58D7F7A8",
   "pitch": -11.86,
   "yaw": 9,
   "hfov": 14.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185, this.camera_7C72E924_6F47_BB52_41D3_0E7B7682074E); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9,
   "hfov": 14.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_470B1D15_6AB0_3D01_41D5_3B9B89D05ECE",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_63667BAA_6F44_BF57_41D6_935EA7CFD61C",
   "pitch": -13.91,
   "yaw": -172.23,
   "hfov": 14.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5231C786_5847_958E_41B3_26BDAD1C96E1, this.camera_7C628934_6F47_BBB2_41D0_079BFDFC1785); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.23,
   "hfov": 14.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_7E4D725A_6A57_E703_41CE_3BEECABD42CE",
 "data": {
  "label": "Arrow 02b Right"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_7FE8744A_6AB0_6303_417C_0E968B180252",
   "pitch": -7.67,
   "yaw": 162.78,
   "hfov": 11.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.78,
   "hfov": 11.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_78A127E6_6A50_6D03_41A4_F7860547761F",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7FE8044A_6AB0_6303_4130_9E90B2AA9780",
   "pitch": -7.96,
   "yaw": 50.33,
   "hfov": 6.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_52349372_5843_AE86_41C3_EC78CA32893F, this.camera_7E06EA60_6F47_B9D2_41D4_D662E03FC981); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.33,
   "hfov": 6.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0_HS_1_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_797E2689_6AB0_2F01_41C8_25E8373FB6A4",
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0_HS_2_0.png",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 126
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -17.86,
   "hfov": 6.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.86,
   "hfov": 6.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_4F89623D_6AD0_E701_41B9_344757B2E172",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_63716B9A_6F44_BF77_41C5_65A3BCD82FB5",
   "pitch": -7.98,
   "yaw": 4.09,
   "hfov": 12.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.09,
   "hfov": 12.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_4F631290_6AD0_2700_41D5_DA37F7736CDE",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6370FBAA_6F44_BF57_41C0_7B16CF3F9080",
   "pitch": -15.34,
   "yaw": -169.77,
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5, this.camera_7C55D945_6F47_BBD2_41B6_FADF8AD7EF3E); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.77,
   "hfov": 11.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_424F684E_6AB0_2300_41D2_D25A81561568",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_63674BAA_6F44_BF57_41D5_88A89FA11F34",
   "pitch": -14.32,
   "yaw": 149.93,
   "hfov": 15.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5231C786_5847_958E_41B3_26BDAD1C96E1, this.camera_7E29CA06_6F47_B95F_41D3_8C6CC8FD2C87); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.93,
   "hfov": 15.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.32
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_636AABAA_6F44_BF57_41D8_5021E60F3BAC",
 "levels": [
  {
   "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6369DBAA_6F44_BF57_41D7_7C3546EA39B4",
 "levels": [
  {
   "url": "media/panorama_52CC5B1C_5847_FE82_41C9_E2EE5EDDD95A_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F6AA693_6AD0_2F01_41CF_CEF07C8A5985",
 "levels": [
  {
   "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F6A7693_6AD0_2F01_4187_0475F7DDF093",
 "levels": [
  {
   "url": "media/panorama_52CBF88E_5840_BB9E_41B1_C78871A2C3D3_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F6D7693_6AD0_2F01_41BE_F1CB5A14D688",
 "levels": [
  {
   "url": "media/panorama_52302A87_5840_9F8E_41C0_BE10E6C1B681_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E1F72C3_6838_5B77_41B4_2DAECCACA064",
 "levels": [
  {
   "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7F3BB421_6818_5F33_41D5_A03512709B1E",
 "levels": [
  {
   "url": "media/panorama_5237EF9B_5841_B585_41AE_ADC6EA5CBFC4_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7FEBE44A_6AB0_6303_41D0_D4FF7F107251",
 "levels": [
  {
   "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63632BBA_6F44_BEB7_41DB_545ACA7D3947",
 "levels": [
  {
   "url": "media/panorama_755D1EB3_65AC_8BD9_41BF_0783C5486B2C_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_636C2BAA_6F44_BF57_41D9_0A78C92667D8",
 "levels": [
  {
   "url": "media/panorama_52C42026_5847_AA8E_41D4_F357DCF4AF62_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4AD9430A_59C8_F8E4_41CA_5F4B4BBF47B6",
 "levels": [
  {
   "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4AD9030A_59C8_F8E4_41D2_8475D253E52E",
 "levels": [
  {
   "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71AD3207_65BC_9AB8_41D1_394A8E467B65",
 "levels": [
  {
   "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F61A693_6AD0_2F01_41C4_D36E974CEB14",
 "levels": [
  {
   "url": "media/panorama_52379977_5843_FA8E_41BC_73102C1429D5_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4B24430A_59C8_F8E4_41B0_6A85306552EE",
 "levels": [
  {
   "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4B24330A_59C8_F8E4_41D3_C6E476A3C0AD",
 "levels": [
  {
   "url": "media/panorama_5C07C1D5_51CF_285C_41C2_D98CBFFCDE61_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F6ED693_6AD0_2F01_41D8_DDD0F83E5BB1",
 "levels": [
  {
   "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F6E6693_6AD0_2F01_41AF_AC5FECFB9AAE",
 "levels": [
  {
   "url": "media/panorama_523C60DE_5841_ABBE_41C5_FE9EC6FFD08A_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_636BABAA_6F44_BF57_41DB_8F14680157CA",
 "levels": [
  {
   "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_636B6BAA_6F44_BF57_41D8_BDA72DD2C06E",
 "levels": [
  {
   "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_636B2BAA_6F44_BF57_41A3_EB8DBBA8FDA6",
 "levels": [
  {
   "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_636A9BAA_6F44_BF57_41BB_E48EE891ABF8",
 "levels": [
  {
   "url": "media/panorama_52CECCC6_5847_9B8E_41CF_871B60DF446B_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F67B693_6AD0_2F01_41D3_577134D420A5",
 "levels": [
  {
   "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F66D693_6AD0_2F01_41CE_EBCCC5B782EA",
 "levels": [
  {
   "url": "media/panorama_5ADAE744_51C9_69B3_41D0_79C7CC4FA6EF_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63689BAA_6F44_BF57_41D2_920E31C97514",
 "levels": [
  {
   "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63680BAA_6F44_BF57_41D0_3F8B57A60FBE",
 "levels": [
  {
   "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63690BAA_6F44_BF57_41CB_DB1D9FDEEFA9",
 "levels": [
  {
   "url": "media/panorama_52CCB952_5847_BA87_41D4_ADA3E86A4DF3_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7FEF443E_6AB0_6303_41CB_46F565F98189",
 "levels": [
  {
   "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7FEF143E_6AB0_6303_41B5_BB13749CD585",
 "levels": [
  {
   "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7FEEC448_6AB0_630F_41D7_353CEC08F2B2",
 "levels": [
  {
   "url": "media/panorama_52349372_5843_AE86_41C3_EC78CA32893F_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6365FBAA_6F44_BF57_41D5_37F8E92A2D81",
 "levels": [
  {
   "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63654BAA_6F44_BF57_41C6_3AE3BD7053DB",
 "levels": [
  {
   "url": "media/panorama_523132DD_5840_AFBD_41A2_0B0A6F5B3185_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6371BB9A_6F44_BF77_41DB_1A82DDC5BD1F",
 "levels": [
  {
   "url": "media/panorama_52312932_5841_BA86_41D1_DA47E4A6D6B0_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4B24F30A_59C8_F8E4_41D0_AF021CE4D6F2",
 "levels": [
  {
   "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4B27430A_59C8_F8E4_419E_2AB60F7C0310",
 "levels": [
  {
   "url": "media/panorama_5D2C7972_51C8_D857_41CD_A5D911AA4F5E_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63695BAA_6F44_BF57_41BB_9993BE371946",
 "levels": [
  {
   "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63690BAA_6F44_BF57_41CC_91E5492F6574",
 "levels": [
  {
   "url": "media/panorama_52CC6A91_5847_9F82_41B5_AA57527A6DA2_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63624BBA_6F44_BEB7_41C3_46721BC7B242",
 "levels": [
  {
   "url": "media/panorama_43F4660F_6AD0_2F01_41D6_07DB8E6D165A_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F6B9693_6AD0_2F01_41C6_31B03BD59BB6",
 "levels": [
  {
   "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F6B0693_6AD0_2F01_41C0_1ED6FDD110FB",
 "levels": [
  {
   "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_60BF4E90_6F7D_F972_41D8_5A40554C4E22",
 "levels": [
  {
   "url": "media/panorama_52CEF810_5840_9A83_41C6_A4180B5A7135_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F63D693_6AD0_2F01_41D7_537C3E7347CD",
 "levels": [
  {
   "url": "media/panorama_52CF5B0F_5840_9E9E_41CE_D4FE5082EC71_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71ADE207_65BC_9AB8_41CB_D71979592E3C",
 "levels": [
  {
   "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A2F840C_6828_5EF1_41D0_ED06439FC535",
 "levels": [
  {
   "url": "media/panorama_52350696_5843_978F_41CD_83F58AB9C140_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F6CC693_6AD0_2F01_41D3_89CA905DF63D",
 "levels": [
  {
   "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F6C4693_6AD0_2F01_41B6_A24CC22490B8",
 "levels": [
  {
   "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F6C1693_6AD0_2F01_41BE_965D256E8B4E",
 "levels": [
  {
   "url": "media/panorama_5230B994_5840_FD82_41C6_6FE3A6A9ECCF_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F6F5693_6AD0_2F01_41D9_BF59AF0E5E48",
 "levels": [
  {
   "url": "media/panorama_523C93BA_5841_ED87_41C8_59A9DD9A4CD5_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A20840C_6828_5EF1_41C0_A7392780933E",
 "levels": [
  {
   "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71A0A207_65BC_9AB8_41D5_CBE4F331C97D",
 "levels": [
  {
   "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A20440C_6828_5EF1_41C1_B7FF8392E472",
 "levels": [
  {
   "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71A31207_65BC_9AB8_41D0_7C232745691C",
 "levels": [
  {
   "url": "media/panorama_5FF7C8FF_51C9_384D_41AD_C2BDF56530E6_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7B5F9E5D_6A50_3F01_41B5_A26D185195B7",
 "levels": [
  {
   "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7B5FCE5D_6A50_3F01_41AF_3A892E9B290C",
 "levels": [
  {
   "url": "media/panorama_52871A2C_5840_9E82_41D1_CFF7887F30BD_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6368ABAA_6F44_BF57_41C5_21E6CA2577F1",
 "levels": [
  {
   "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63682BAA_6F44_BF57_41CD_83B4859653AF",
 "levels": [
  {
   "url": "media/panorama_5231C786_5847_958E_41B3_26BDAD1C96E1_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63723B9A_6F44_BF77_41C7_B665E9A98EAE",
 "levels": [
  {
   "url": "media/panorama_523D2A7B_5841_9E86_41B6_B3D2075BB550_0_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71A3D207_65BC_9AB8_41C0_42AA1AF14262",
 "levels": [
  {
   "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71A27207_65BC_9AB8_41D1_088B0F33A6A2",
 "levels": [
  {
   "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71A2E207_65BC_9AB8_41AF_2BFC318F0CEC",
 "levels": [
  {
   "url": "media/panorama_52CF6B97_5843_9D8D_41C3_257249F566D3_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6366CBAA_6F44_BF57_41CA_C59D58D7F7A8",
 "levels": [
  {
   "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63667BAA_6F44_BF57_41D6_935EA7CFD61C",
 "levels": [
  {
   "url": "media/panorama_5233D45D_5847_6ABD_419F_EB00814C914E_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7FE8744A_6AB0_6303_417C_0E968B180252",
 "levels": [
  {
   "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7FE8044A_6AB0_6303_4130_9E90B2AA9780",
 "levels": [
  {
   "url": "media/panorama_528367E3_5840_B585_41B2_E7DAED2DCD2A_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63716B9A_6F44_BF77_41C5_65A3BCD82FB5",
 "levels": [
  {
   "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6370FBAA_6F44_BF57_41C0_7B16CF3F9080",
 "levels": [
  {
   "url": "media/panorama_523D1551_5841_EA82_4186_B51A0FAF8F62_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63674BAA_6F44_BF57_41D5_88A89FA11F34",
 "levels": [
  {
   "url": "media/panorama_5231D5FE_5847_757E_41C6_BDF31471FF8B_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_7FEF87AA_6F44_9757_419E_744E324FF3D9], 'cardboardAvailable')",
 "data": {
  "name": "Player451"
 },
 "children": [
  "this.MainViewer",
  "this.IconButton_7FEF87AA_6F44_9757_419E_744E324FF3D9"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "horizontalAlign": "left",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "class": "Player",
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "scripts": {
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "existsKey": function(key){  return key in window; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getKey": function(key){  return window[key]; }
 },
 "defaultVRPointer": "laser",
 "borderSize": 0,
 "minWidth": 20,
 "downloadEnabled": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingBottom": 0,
 "height": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "paddingLeft": 0,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "layout": "absolute"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
