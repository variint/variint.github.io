# Concept Alignment

## Introduction

### Description
Concept learning has the goal to increase the interpretability of a convolutional neural network by aligning features with human understanable concepts.

### Goals
* Learn about Concept Activation Vectors (CAV).
* Learn about how unsupervised clustering can be used to obtain concepts.
* Learn about what role concepts play in explainable AI.
* Learn about how concepts are used in network dissection.


## Methods
<!-- https://arxiv.org/pdf/2312.12936 -->

### Network dissection 
* Original version: Chapter 10 Neural Network Interpretation > Network Dissection {cite}`molnar2022blackboxbook`
Network Dissection quantifies the interpretability of a unit of a CNN. Highly activated areas of CNN channels are linked with human concepts (objects, parts, textures, colors, …).

### Concept Attribution
* Original version: Concept attribution: explaining CNN decisions to physicians {cite}`graziani2020concept`

### Concept-based explanations
* Original version: Towards automatic concept-based explanations {cite}`ghorbani2019concept`

### Testing with concept activation vector (TCAV)
* Interpretability Beyond Feature Attribution: Quantitative Testing with Concept Activation Vectors (TCAV)

### Testing with Concept Activation Regions (TCAR)

### Interpretable Basis Decomposition (IBD)

### Causal Concept Effect (CaCE)

### CPM

### Object detection

### ND

### Net2Vec

### GNN-CI

### ACE

### Compl Aware

### ICE

### MCD

### CRAFT

### DMA, IMA

### STCE

### Visual concepts
* Original version: Visual Concept Learning: Combining Machine Vision and Bayesian Generalization on Concept Hierarchies


## Applications

### Phenotypic Concepts
Using TCAV.
* Original version: Identifying Phenotypic Concepts Discriminating Molecular Breast Cancer Sub-Types {cite}`furbock2022identifying`


## Concepts

### Types:
* Image/object descriptors: position, shape, size, direction, gradients, edges, colour
* IQA: illumination, contrast
* Anatomical: vessels, optic disc, foveal avascular zone (FAZ) / macula
* Pathologies: drusen, scars, neovascularisation, atrophy
* Artefacts: Shades, Motion Artefact, Blur, Noise, Occolusion, Compression, zipper artifact, moire effect


### Artefacts in OCT: 
* Projection artifact, eye movement, Low-OCT-signal, Inner layer misidentification, Outer layer misidentification, Mirror artifact, Degraded image, Out of register scan, Cut edge artifact, Off center artifact, Motion artifact, Blink artifact
https://www.sciencedirect.com/science/article/pii/S1319453414000290

* decentration, segmentation error, movement, blink, refraction shift, defocus, shadow, Z offset, tilt, projection
https://jamanetwork.com/journals/jamaophthalmology/fullarticle/2755965

* loss of focus, broad, blink lines, motion artifact, specular dot, edge duplication.
https://journals.lww.com/retinajournal/Abstract/2017/09000/IMAGE_QUALITY_AND_ARTIFACTS_ON_OPTICAL_COHERENCE.6.aspx


### Artefacts in MRI:
* Content from: https://www.cis.rit.edu/htbooks/mri/chap-11/chap-11.htm

| Artifact                       | Cause                                                             |
|--------------------------------|-------------------------------------------------------------------|
| RF Offset and Quadrature Ghost | Failure of the RF detection circuitry                             |
| RF Noise                       | Failure of the RF shielding                                       |
| Bo Inhomogeneity               | Metal object distorting the Bo field                              |
| Gradient                       | Failure in a magnetic field gradient                              |
| Susceptibility                 | Objects in the FOV with a higher or lower magnetic susceptibility |
| RF Inhomogeneity               | Failure or normal operation of RF coil, and metal in the anatomy  |
| Motion                         | Movement of the imaged object during the sequence                 |
| Flow                           | Movement of body fluids during the sequence                       |
| Chemical Shift                 | Large Bo and chemical shift difference between tissues            |
| Partial Volume                 | Large voxel size                                                  |
| Wrap Around                    | Improperly chosen field of view                                   |
| Gibbs Ringing                  | Small image matrix and sharp signal discontinuities in an image   |
| Magic Angle                    | Angle between Bo and dipole axis in solids.                       |


## References
```{bibliography}
:filter: docname in docnames
```