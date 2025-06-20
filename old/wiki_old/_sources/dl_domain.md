# Domain Adaptation

## Introduction

Domain Adaptation aims to mitigate the domain shift problem when transferring knowledge from one domain into another domain. Domain adaptation can be solved by (but not limited to) generative-based, pseudo labelling-based or reconstruction-based approaches.

A model’s ability to maintain the desired behaviour across domain changes is also referred to as out-of-distribution generalisation.

There are multiple ways of performing the related tasks: image-to-image translation, image synthesis, texture synthesis and texture transfer. The common goal is to transfer a source object/texture/illumination/colour into a destination image.
Poisson image editing - Seamless cloning: The goal of seamless cloning is to avoid discontinuinities at edges between source and destination regions.


### Key takeaways
* I know about what domain shifts are and what causes them.
* I know how image-to-image translation can help reducing domain shifts.
* I know how semi-supervised learning can be applied for domain adaptation.
* Learn about Guided Interpolation and Poisson partial differential equations.
* Learn about the seamless combination of a source image region into a destination region.
* Learn about the seamless cloning types (1) importing gradients and (2) mixing gradients.
* Learn about image transformation techniques that are defined by using a guidance field depending entirely on the original image.



## Methods

### Adversarial noise
* Original version: PhD Thesis: Improving the domain generalization and robustness of neural networks for medical imaging (Chen, 2022) - https://spiral.imperial.ac.uk/handle/10044/1/94593

### Multimodal Unsupervised Image-to-Image Translation (MUNIT)
MUNIT is an architecture that learns the content and style separately. Domain adaptation is introduced by image generation. The content of one modality is combined with the style from another modality.
https://arxiv.org/pdf/1804.04732.pdf

### Poisson Image Editing
* Contribution paper: Poisson Image Editing (Perez et al., 2003) - https://www.cs.jhu.edu/~misha/Fall07/Papers/Perez03.pdf
* Tutorial: Seamless Cloning using OpenCV (Python, C++) - https://learnopencv.com/seamless-cloning-using-opencv-python-cpp/


### Generative-based
* Cycle-GAN: unsupervised
* Cross-Domain Auto-Encoder and Decoder
* Fourier domain adaptation
* Image quilting - "Texture transfer"
* MNISE-GAN 
* U-GAT-IT 
* NICE-GAN
* pix2pix: requires image pairs

### Multi-modal
* MUNIT
* DRIT++
* DSMAP


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