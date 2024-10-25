# Concept Alignment

## Introduction

- Uses high-level concepts or human-understandable features to explain the model’s behavior, assessing how well these concepts align with the model’s internal mechanisms.

Concept alignment has the goal to interpreting a convolutional neural network by aligning features with human understanable concepts.


### Key takeaways
* Learn about Concept Activation Vectors (CAV).
* Learn about how unsupervised clustering can be used to obtain concepts.
* Learn about what role concepts play in explainable AI.
* Learn about how concepts are used in network dissection.

### Keywords:
* Concept-alignment
* TCAV


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
- Measures how well a specific concept is represented within a neural network by comparing activation vectors of examples belonging to that concept.

* Interpretability Beyond Feature Attribution: Quantitative Testing with Concept Activation Vectors (TCAV) {cite}`kim2018interpretability`
https://arxiv.org/pdf/1711.11279


### TCAV + Deep dream
Empirical deepdream using CAVs for each layer in a ConvNet {cite}`kim2018interpretability`
https://arxiv.org/pdf/1711.11279

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



## References
```{bibliography}
:filter: docname in docnames
```