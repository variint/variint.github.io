# Domain Adaptation

## Introduction

### Description

Domain Adaptation aims to mitigate the domain shift problem when transferring knowledge from one domain into another domain. Domain adaptation can be solved by (but not limited to) generative-based, pseudo labelling-based or reconstruction-based approaches.

A model’s ability to maintain the desired behaviour across domain changes is also referred to as out-of-distribution generalisation.

### Goals
* I know about what domain shifts are and what causes them.
* I know how image-to-image translation can help reducing domain shifts.
* I know how semi-supervised learning can be applied for domain adaptation.


## Methods

### Adversarial noise
* Original version: PhD Thesis: Improving the domain generalization and robustness of neural networks for medical imaging (Chen, 2022) - https://spiral.imperial.ac.uk/handle/10044/1/94593

### Multimodal Unsupervised Image-to-Image Translation (MUNIT)
MUNIT is an architecture that learns the content and style separately. Domain adaptation is introduced by image generation. The content of one modality is combined with the style from another modality.
https://arxiv.org/pdf/1804.04732.pdf


<!--
## Other
* Github Link Collection: awesome domain adaptation - https://github.com/zhaoxin94/awesome-domain-adaptation
* Review paper: Unsupervised Domain Adaptation in Semantic Segmentation: a Review - https://arxiv.org/pdf/2005.10876.pdf
* A Survey of Unsupervised Domain Adaptation for Visual Recognition - https://arxiv.org/pdf/2112.06745.pdf

* Gradient Regularized Contrastive Learning for Continual Domain Adaptation (Tang et al., 2021) - https://arxiv.org/abs/2103.12294v1
* Domain Invariant Representation Learning with Domain Density Transformations https://arxiv.org/pdf/2102.05082.pdf

-->

## References
```{bibliography}
:filter: docname in docnames
```