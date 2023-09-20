# Concept Learning

## Skill

### Description
Concept learning has the goal to increase the interpretability of a convolutional neural network.

### Goals
* I know about Concept Activation Vectors (TCAV).
* I know how unsupervised clustering can be used to obtain concepts.
* I know what role concepts play in explainable AI.
* I know how concepts are used in network dissection.

### Links
* Identifying Phenotypic Concepts Discriminating Molecular Breast Cancer Sub-Types (Fürböck, 2022) - https://link.springer.com/chapter/10.1007/978-3-031-16449-1_27
* Concept attribution: explaining CNN decisions to physicians
* Towards automatic concept-based explanations
* Chapter 10 Neural Network Interpretation > Network Dissection (Molnar) - https://christophm.github.io/interpretable-ml-book/cnn-features.html#network-dissection

## Background

### Network dissection
Network Dissection quantifies the interpretability of a unit of a CNN. Highly activated areas of CNN channels are linked with human concepts (objects, parts, textures, colors, …).


### Concepts (in progress)

Features: Position, shape, size, illumination, contrast


Image descriptors, IQA, 


* Direction

* Gradients


* Edges




* Colour, 


* Anatomical: vessels, optic disc, foveal avascular zone (FAZ) / macula

* Pathologies: drusen, scars, neovascularisation, atrophy

* Artefacts: Shades, Motion Artefact, Blur, Noise, Occolusion, Compression, zipper artifact, moire effect



* Artefacts in OCT: 

Projection artifact, eye movement, Low-OCT-signal, Inner layer misidentification, Outer layer misidentification, Mirror artifact, Degraded image, Out of register scan, Cut edge artifact, Off center artifact, Motion artifact, Blink artifact
- https://www.sciencedirect.com/science/article/pii/S1319453414000290

decentration, segmentation error, movement, blink, refraction shift, defocus, shadow, Z offset, tilt, projection
- https://jamanetwork.com/journals/jamaophthalmology/fullarticle/2755965

loss of focus, broad, blink lines, motion artifact, specular dot, edge duplication.
- https://journals.lww.com/retinajournal/Abstract/2017/09000/IMAGE_QUALITY_AND_ARTIFACTS_ON_OPTICAL_COHERENCE.6.aspx


* Artefacts in MRI:
Artifact 	Cause
RF Offset and Quadrature Ghost	Failure of the RF detection circuitry
RF Noise	Failure of the RF shielding
Bo Inhomogeneity	Metal object distorting the Bo field
Gradient 	Failure in a magnetic field gradient
Susceptibility	Objects in the FOV with a higher or lower magnetic susceptibility
RF Inhomogeneity 	Failure or normal operation of RF coil, and metal in the anatomy
Motion 	Movement of the imaged object during the sequence
Flow 	Movement of body fluids during the sequence
Chemical Shift 	Large Bo and chemical shift difference between tissues
Partial Volume 	Large voxel size
Wrap Around 	Improperly chosen field of view
Gibbs Ringing	Small image matrix and sharp signal discontinuities in an image
Magic Angle	Angle between Bo and dipole axis in solids.
https://www.cis.rit.edu/htbooks/mri/chap-11/chap-11.htm