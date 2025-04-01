---
sidebar_position: 4
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import CubeInstruction from "@site/src/components/Instructions/CubeInstruction";
import Instructions from "@site/src/components/Instructions/Instructions";

# 2-Look PLL

PLL (Permutation of the Last Layer) solves the cube after finishing OLL (Orientation of the Last Layer). There are 21 cases.

Here we'll see 6 algorithms in 2 steps, called a 2 look PLL.

## Step 1: Solving corners

<Instructions>
  <CubeInstruction
    title="Headlights (T-Perm)"
    src={useBaseUrl("/img/2-look-pll/image-1.png")}
    hold="Hold headlights left"
  >
    (R U R' U') R' F
    <br />
    (R2 U' R') U' (R U R' F')
  </CubeInstruction>
  <CubeInstruction
    title="No-Headlights"
    src={useBaseUrl("/img/2-look-pll/image.png")}
    hold="From any side"
  >
    F (R U' R' U') R U R' F'
    <br />
    (R U R' U') R' F R F'
  </CubeInstruction>
</Instructions>

## Step 2: Solve the cube

No need to align the corners before starting.

<Instructions>
  <CubeInstruction
    title="Ua Perm"
    src={useBaseUrl("/img/2-look-pll/image-2.png")}
    hold="Hold solved edge in front"
  >
    (R2 U' R') U' R (U R) (U R) U' R
  </CubeInstruction>
  <CubeInstruction
    title="Ub Perm"
    src={useBaseUrl("/img/2-look-pll/image-3.png")}
    hold="Hold solved edge in front"
  >
    R' U (R' U') (R' U') R' U (R U R2)
  </CubeInstruction>
  <CubeInstruction
    title="H Perm"
    src={useBaseUrl("/img/2-look-pll/image-4.png")}
    hold="From any side"
  >
    M2 U' (M2 U2 M2) U' M2
  </CubeInstruction>
  <CubeInstruction
    title="Z Perm"
    src={useBaseUrl("/img/2-look-pll/image-5.png")}
    hold="Swapping edges front-right"
  >
    M' U' (M2 U') (M2 U') M' U2 M2
  </CubeInstruction>
</Instructions>
