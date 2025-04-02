---
sidebar_position: 3
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import CubeInstruction from "@site/src/components/Instructions/CubeInstruction";
import Instructions from "@site/src/components/Instructions/Instructions";

# 2-Look OLL

OLL (Orientation of the Last Layer) creates a yellow face after finishing F2L (First 2 Layers). There are 57 cases.

Here we'll see 9 algorithms in 2 steps, called a 2 look OLL.

## First step: yellow cross

Just like in the beginner method, the first step is to create the cross. Note that just like in the beginner method you can rotate the upper layer to get your case instead of rotating the cube.

Reminder:

- yellow line parralel to you: F (sexy) F'
- yellow angle top left: same but sexy move twice
- yellow center: F (sexy) F', then f (sexy) f'

## 2nd step: yellow face

### Sunes

<Instructions>
  <CubeInstruction
    title="Sune"
    link="https://www.speedcubedb.com/a/3x3/OLL/OLL_27"
    src={useBaseUrl("/img/2-look-oll/image.png")}
    hold="Hold yellow on top, blue front"
  >
    (R U R') (U R U2 R')
  </CubeInstruction>
  <CubeInstruction
    title="Anti-Sune"
    link="https://www.speedcubedb.com/a/3x3/OLL/OLL_26"
    src={useBaseUrl("/img/2-look-oll/image-1.png")}
    hold="Hold yellow on top, blue front"
  >
    (R U2 R') U' R U' R'
  </CubeInstruction>
</Instructions>

### Crosses

<Instructions>
  <CubeInstruction
    title="Cross 1"
    link="https://www.speedcubedb.com/a/3x3/OLL/OLL_21"
    src={useBaseUrl("/img/2-look-oll/image-2.png")}
    hold="Yellow on the sides"
  >
    (R U R' U) (R U R' U) (R U2 R')
  </CubeInstruction>
  <CubeInstruction
    title="Cross 2"
    link="https://www.speedcubedb.com/a/3x3/OLL/OLL_22"
    src={useBaseUrl("/img/2-look-oll/image-3.png")}
    hold="Just like the image"
  >
    R U2 (R2 U') (R2 U') R2 U2 R
  </CubeInstruction>
</Instructions>

### Others

<Instructions>
  <CubeInstruction
    title="Chameleon"
    link="https://www.speedcubedb.com/a/3x3/OLL/OLL_24"
    src={useBaseUrl("/img/2-look-oll/image-4.png")}
    hold=""
  >
    (r U R' U') (r' F R F')
  </CubeInstruction>
  <CubeInstruction
    title="Kite"
    link="https://www.speedcubedb.com/a/3x3/OLL/OLL_25"
    src={useBaseUrl("/img/2-look-oll/image-5.png")}
    hold=""
  >
    F' (r U R' U') (r' F R)
  </CubeInstruction>
  <CubeInstruction
    title="Headlights"
    link="https://www.speedcubedb.com/a/3x3/OLL/OLL_23"
    src={useBaseUrl("/img/2-look-oll/image-6.png")}
    hold=""
  >
    R2 D (R' U2 R) D' (R' U2 R')
  </CubeInstruction>
</Instructions>
