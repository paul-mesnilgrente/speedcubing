---
sidebar_position: 2
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import CubeInstruction from "@site/src/components/Instructions/CubeInstruction";
import Instructions from "@site/src/components/Instructions/Instructions";

# Intuitive F2L

1. find pair
2. set up "easy insert"
3. solve pair in correct slot

**Notes:**

1. A pair is a white corner with its associated edge
2. All the images are with the white cross under

## Easy inserts

<Instructions>
  <CubeInstruction
    title="Right pair"
    src={useBaseUrl("/img/intuitive-f2l/image.png")}
    hold="Hold right"
  >
    U R U' R'
  </CubeInstruction>
  <CubeInstruction
    title="Left pair"
    src={useBaseUrl("/img/intuitive-f2l/image-1.png")}
    hold="Hold left"
  >
    U' L' U L
  </CubeInstruction>
  <CubeInstruction
    title="Right insert"
    src={useBaseUrl("/img/intuitive-f2l/image-8.png")}
    hold="Hold right"
  >
    R U R'
  </CubeInstruction>
  <CubeInstruction
    title="Left insert"
    src={useBaseUrl("/img/intuitive-f2l/image-3.png")}
    hold="Hold left"
  >
    L' U' L
  </CubeInstruction>
</Instructions>

## Set up "easy insert"

### Get pairs on top

We want to pairs on top but disconnected.

<Instructions>
  <CubeInstruction
    title="Edge middle layer"
    src={useBaseUrl("/img/intuitive-f2l/image-6.png")}
    hold="Hold corner left"
  >
    R U R'
  </CubeInstruction>
  <CubeInstruction
    title="Corner bottom layer"
    src={useBaseUrl("/img/intuitive-f2l/image-5.png")}
    hold="Hold edge left"
  >
    R U R'
  </CubeInstruction>
  <CubeInstruction
    title="Both pieces stuck"
    src={useBaseUrl("/img/intuitive-f2l/image-4.png")}
    hold="Hold right"
  >
    R U' R'
  </CubeInstruction>
</Instructions>

### Disconnect pieces on top

<Instructions>
  <CubeInstruction
    title="Top left"
    src={useBaseUrl("/img/intuitive-f2l/image-7.png")}
    hold="Hold right above a non-connected corner"
  >
    R U2 R'
  </CubeInstruction>
  <CubeInstruction
    title="Top right"
    src={useBaseUrl("/img/intuitive-f2l/image-9.png")}
    hold="Hold top right"
  >
    R U2 R'
  </CubeInstruction>
</Instructions>

### Turn pairs into easy inserts

1. Find the correct place for the pair to go
2. Look at the corner, there are two cases: white on top or side

#### 1. White faces a side

1. put corner on top of its slot
2. U or U' to keep seeing white side

##### 1.1 Same colors on top

Create a pair (next to each other):

1. Put corner to safety
2. Put edge next to it
3. Bring corner back up

##### 1.2 Different colors on top

Put the edge across from corner:

1. Put corner to safety
2. Put the edge in correct spot to do a right or left insert (depends on white face)
3. Bring corner back up

#### 2. White faces up

1. Align edge with center
2. Save edge by turning it (turn away from slot)
3. Bring corner above the edge
4. Re-align the cross

## Tips

Solve easy pairs first. I guess that's to bring edges on top.

## Examples of F2L

Hold yellow above, green front.

- R U F' D2 F2 U2 R2 U2 B' F' R2 B L B L B U2 R2 U'
- R' F2 B' R F B U B2 R' B2 R F2 R2 U2 R U2 R2 U' F'
- F L2 D' F2 D' B2 U4 F2 D' R2 U2 L2 B' L' u2 F L' B' U
